// @ts-check

/**
 * Ionic Framework plugin for Mavo
 * @author Dmitry Sharabin and contributors
 * @version %%VERSION%%
 */

(function($, $$) {
	"use strict";

	const ionCoreModuleURL =
		"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js";
	const ionCoreNoModuleURL =
		"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js";
	const ionCssURL =
		"https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css";

	Mavo.Plugins.register("ionic", {
		ready: Promise.all([
			$.create("script", {
				src: ionCoreModuleURL,
				type: "module",
				inside: document.head
			}),

			$.create("script", {
				src: ionCoreNoModuleURL,
				nomodule: "",
				inside: document.head
			}),

			$.load(ionCssURL)
		])
	});

	Mavo.Elements.register({});
})(Bliss, Bliss.$$);
