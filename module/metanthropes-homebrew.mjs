/**
 * Metanthropes Early Access Homebrew Module for Foundry VTT
 * Author: qp aka The Orchestrator
 *
 * Throughtout this project, I use the following syntax for comments:
 ** //! Marks a special comment that stands out (in Red) for critical notes.
 ** //* Marks a comment that is used as a section header (in Green) for better visibility.
 ** //? Marks a comment that is used for elaborating my intent (in Blue) for better readability.
 ** //todo Marks a comment that is used for marking (in Orange) potential optimization notes.
 *
 * To get automatic colloring for these comments in VSCode, you can use this extension:
 * aaron-bond.better-comments
 *
 */
Hooks.once("init", async function () {
	//? Homebrew Module Settings
	game.settings.register("metanthropes", "metaHomebrew", {
		name: "Enable Homebrew Features",
		hint: `
			Enable this setting to gain access to the Homebrew Module features.
			`,
		scope: "world", //? This specifies if it's a client-side setting
		config: true, //? This makes the setting appear in the module configuration
		requiresReload: true, //? If true, a client reload (F5) is required to activate the setting
		type: Boolean,
		default: true,
		onChange: (value) => {
			//? Do something when the setting is changed, if necessary
		},
	});
	//? Beta Features Testing
	game.settings.register("metanthropes", "metaBetaTesting", {
		name: "Enable Beta Testing of New Features",
		hint: `
		Enable this setting to test New Features that are still in development.
		These features may not be fully functional and are subject to change during development.
		Make sure you backup your world before enabling this setting - just to be safe.
		`,
		scope: "world", //? This specifies if it's a client-side setting
		config: true, //? This makes the setting appear in the module configuration
		requiresReload: true, //? If true, a client reload (F5) is required to activate the setting
		type: Boolean,
		default: false,
		onChange: (value) => {
			//? Do something when the setting is changed, if necessary
		},
	});
});
