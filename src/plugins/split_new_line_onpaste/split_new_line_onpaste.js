/**
 *
 * Plugin: "split_new_line_onpaste" (selectize.js)
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author [ddofborg](https://github.com/ddofborg)
 *
 */

Selectize.define("split_new_line_onpaste", function (options) {
	/*
		This plugin will split the pasted text on new line
		and on the RegEx as defined in `self.settings.splitOn`.
		After both splits new items will be created.
	 */
	var self = this;
	var splitOn = '\n';

	self.onPaste = (function() {
		var originalPaste = self.onPaste;

		return function(e) {
			e.preventDefault();
			// Check if there is a clipboard event with data
			if(!e.originalEvent || !e.originalEvent.clipboardData) { return; }
			var pastedText = e.originalEvent.clipboardData.getData("text/plain");
			if(!pastedText) { return; }
			// split on new line
			var splitInput = pastedText.trim().split(splitOn);
			// if there is a global split parts on that and make one list of items
			if(self.settings.splitOn) {
				splitInput = splitInput.map(part => part.split(self.settings.splitOn));
				splitInput = splitInput.flat();
			}
			// create new elements
			for (var i = 0, n = splitInput.length; i < n; i++) {
				self.createItem(splitInput[i]);
			}

			return originalPaste.apply(this, arguments);
		}
	}());

});
