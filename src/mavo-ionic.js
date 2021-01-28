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
			init: element => {
				if (element.hasAttribute("checked")) {
					$.properties(element, {
						checked: element.getAttribute("checked") || true
					});
				}
			}
		},

		"ion-toggle": {
			extend: "ion-checkbox",
			selector: "ion-toggle"
		},

		"ion-radio-group": {
			extend: "formControl",
			selector: "ion-radio-group",
			changeEvents: "ionChange"
		},

		"ion-select": {
			extend: "select",
			selector: "ion-select",
			changeEvents: "ionChange",
			init: () => {}
		},

		"ion-range": {
			extend: "formNumber",
			selector: "ion-range:not([dual-knobs])",
			changeEvents: "ionChange",
			init: element => {
				const min = +element.getAttribute("min") || 0;
				const max = +element.getAttribute("max") || 100;

				if (!element.hasAttribute("value")) {
					$.properties(element, {
						value: Mavo.Functions.min(min, max, 0)
					});
				}

				element.setAttribute("min", Mavo.Functions.min(min, element.value));
				element.setAttribute("max", Mavo.Functions.max(max, element.value));
			}
		},

		"ion-segment": {
			extend: "formControl",
			selector: "ion-segment",
			changeEvents: "ionChange"
		},

		"ion-img": {
			extend: "media",
			selector: "ion-img"
		},

		"ion-counter": {
			extend: "counter",
			selector: "ion-button, ion-fab-button"
		}
	});
})(Bliss, Bliss.$$);
