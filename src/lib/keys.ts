/**
 * Browser storage keys and custom DOM event names, derived from the registry's
 * prefix so no client script has a site-specific string typed in by hand.
 */
import { SITE } from '../data/site';

const P = SITE.storagePrefix;

/** localStorage: the chosen colour scheme ('light' | 'dark'). */
export const THEME_KEY = `${P}-theme`;
/** localStorage: whether the docked rail is folded ('collapsed' | 'expanded'). */
export const SIDEBAR_KEY = `${P}-sidebar`;

/** Fired on window after the theme flips, so diagrams can repaint. */
export const EVT_THEME = `${P}:themechange`;
/** Fired on window after Mermaid has replaced its sources with SVGs. */
export const EVT_DIAGRAMS = `${P}:diagramsrendered`;
