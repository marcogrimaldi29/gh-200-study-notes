import type { ShikiTransformer, ThemedToken } from 'shiki';

/**
 * Build-time Shiki transformer that makes `${{ … }}` expressions stand out in
 * workflow YAML, the way GitHub's own workflow editor does. The exam keeps
 * asking what is evaluated when, so an expression should read as one unit
 * rather than disappear into a quoted string.
 *
 * The YAML grammar tokenises an expression as part of whatever scalar holds it
 * — `"${{ github.ref }}-build"` is a single string token — so the transformer
 * first splits tokens at each expression's boundaries, then tags the tokens
 * inside it with a class. The stylesheet tints them (see "Code" in global.css).
 * Nothing ships to the browser: this runs inside Astro's <Code> at build time.
 */

const EXPR = /\$\{\{[\s\S]*?\}\}/g;

function slice(token: ThemedToken, from: number, to: number): ThemedToken {
  return { ...token, content: token.content.slice(from, to), offset: token.offset + from };
}

export function transformerWorkflowExpressions(): ShikiTransformer {
  return {
    name: 'gh200:workflow-expressions',
    tokens(lines) {
      return lines.map((line) => {
        const text = line.map((t) => t.content).join('');
        const ranges: [number, number][] = [];
        for (const m of text.matchAll(EXPR)) ranges.push([m.index!, m.index! + m[0].length]);
        if (!ranges.length) return line;

        // Every boundary at which a token must be cut.
        const cuts = new Set(ranges.flat());
        const out: ThemedToken[] = [];
        let col = 0;

        for (const token of line) {
          const start = col;
          const end = col + token.content.length;
          col = end;

          let from = 0;
          for (let i = start + 1; i < end; i++) {
            if (cuts.has(i)) {
              out.push(slice(token, from, i - start));
              from = i - start;
            }
          }
          out.push(from === 0 ? token : slice(token, from, token.content.length));
        }

        // Tag the pieces that now sit wholly inside an expression.
        col = 0;
        return out.map((token) => {
          const start = col;
          const end = col + token.content.length;
          col = end;
          const range = ranges.find(([a, b]) => start >= a && end <= b);
          if (!range) return token;
          const cls = ['gh-expr'];
          if (start === range[0]) cls.push('gh-expr-s');
          if (end === range[1]) cls.push('gh-expr-e');
          return { ...token, htmlAttrs: { ...(token.htmlAttrs ?? {}), class: cls.join(' ') } };
        });
      });
    },
  };
}
