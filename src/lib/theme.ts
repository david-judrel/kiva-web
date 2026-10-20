export const THEME_STORAGE_KEY = "kiva-theme";
export const THEME_COLORS = { light: "#F7F8F4", dark: "#101C17" } as const;

/**
 * Inline script run before first paint: applies the stored theme, or the
 * system preference, so the page never flashes the wrong theme.
 * Also marks <html class="js"> (available for JS-dependent styles).
 */
export const themeBootstrapScript = `(function(){var d=document.documentElement,t;try{t=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.setAttribute("data-theme",t);d.classList.add("js")})()`;
