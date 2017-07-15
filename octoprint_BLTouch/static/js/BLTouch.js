/*
 * View model for OctoPrint-Bltouch
 *
 * Author: jneilliii
 * License: AGPLv3
 */
$(function() {
    function BLTouchViewModel(parameters) {
        var self = this;
		self.settingsViewModel = parameters[1];
		
		self.cmdProbeUp = ko.observable();
		self.cmdProbeDown = ko.observable();
		self.cmdSelfTest = ko.observable();
		self.cmdReleaseAlarm = ko.observable();

        // assign the injected parameters, e.g.:
		self.controlViewModel = parameters[0];
		
		self.getAdditionalControls = function() {
            return [
                { name: "BLTouch", type: "section", layout: "horizontal", children: [
                    {type: "command", command: self.cmdProbeUp, name: "Probe Up"},
                    {type: "command", command: self.cmdProbeDown, name: "Probe Down"},
                    {type: "command", command: self.cmdSelfTest, name: "Self Test", confirm: "Are you sure you want to run a self test?"},
                    {type: "command", command: self.cmdReleaseAlarm, name: "Release Alarm", confirm: "Are you sure you want to release the alarm?"},
                ]}
            ];
        };
		
		self.onBeforeBinding = function() {
            self.cmdProbeUp(self.settingsViewModel.settings.plugins.BLTouch.cmdProbeUp());
            self.cmdProbeDown(self.settingsViewModel.settings.plugins.BLTouch.cmdProbeDown());
            self.cmdSelfTest(self.settingsViewModel.settings.plugins.BLTouch.cmdSelfTest());
            self.cmdReleaseAlarm(self.settingsViewModel.settings.plugins.BLTouch.cmdReleaseAlarm());
        }
		
		self.onEventSettingsUpdated = function (payload) {            
            self.cmdProbeUp = self.settingsViewModel.settings.plugins.BLTouch.cmdProbeUp();
            self.cmdProbeDown = self.settingsViewModel.settings.plugins.BLTouch.cmdProbeDown();
            self.cmdSelfTest = self.settingsViewModel.settings.plugins.BLTouch.cmdSelfTest();
            self.cmdReleaseAlarm = self.settingsViewModel.settings.plugins.BLTouch.cmdReleaseAlarm();
        }
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        BLTouchViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        ["controlViewModel,settingsViewModel"],

        // e.g. #settings_plugin_BLTouch, #tab_plugin_BLTouch, ...
        ["settings_plugin_BLTouch_form"]
    ]);
});
