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
		]),

		dependencies: ["mavo-ionic.css"]
	});

	Mavo.Elements.register({
		"ion-input": {
			extend: "formControl",
			selector: "ion-input, ion-searchbar",
			changeEvents: "ionChange ionInput",
			init: () => {}
		},

		"ion-textarea": {
			extend: "formControl",
			selector: "ion-textarea",
			changeEvents: "ionChange ionInput"
		},

		"ion-checkbox": {
			extend: "checkbox",
			selector: "ion-checkbox",
			changeEvents: "ionChange",
			init: () => {}
		},

		"ion-radio-group": {
			extend: "formControl",
			selector: "ion-radio-group",
			changeEvents: "ionChange"
		},

		"ion-segment": {
			extend: "formControl",
			selector: "ion-segment",
			changeEvents: "ionChange"
		},

		"ion-img": {
			extend: "media",
			selector: "ion-img"
		}
	});
})(Bliss, Bliss.$$);
