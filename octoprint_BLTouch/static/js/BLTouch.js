/*
 * View model for OctoPrint-Bltouch
 *
 * Author: jneilliii
 * License: AGPLv3
 */
$(function() {
    function BLTouchViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
		self.controlViewModel = parameters[0];
		
		self.getAdditionalControls = function() {
            return [
                { name: "BLTouch", type: "section", children: [
                    {type: "command", command: "M280 P0 S90", name: "Probe Up"},
                    {type: "command", command: "M280 P0 S10", name: "Probe Down"},
                    {type: "command", command: "M280 P0 S120", name: "Self Test", confirm: "Are you sure you want to run a self test?"},
                    {type: "command", command: "M280 P0 S160", name: "Release Alarm", confirm: "Are you sure you want to release the alarm?"},
                ]}
            ];
        };
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        BLTouchViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        ["controlViewModel"],

        // e.g. #settings_plugin_BLTouch, #tab_plugin_BLTouch, ...
        [ /* ... */ ]
    ]);
});
