require.register("components/index", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = (function () {
	function Index() {
		_classCallCheck(this, Index);
	}

	_createClass(Index, [{
		key: "build",
		value: function build() {
			this._createAlert();
		}
	}, {
		key: "_createAlert",
		value: function _createAlert() {
			(function () {
				alert("Arrow functions and classes both working!");
			})();
		}
	}]);

	return Index;
})();

exports["default"] = Index;
module.exports = exports["default"];
  
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2V4cC9jb21wb25lbnRzL2luZGV4LmNvbW1vbmpzLXdyYXAiLCJlczYvaW5kZXguanMiLCJlczYvaW5kZXguZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsRUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmRTtBRGlCRjtBQUNBO0FBQ0E7QUFDQTtBQ2hCRTtBQUNDO0FEa0JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0RoQ0U7QUFDRjtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlLnJlZ2lzdGVyKFwiY29tcG9uZW50cy9pbmRleFwiLCBmdW5jdGlvbihleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUpe1xuICAkMFxuICBcbn0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSW5kZXggPSAoZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBJbmRleCgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5kZXgpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEluZGV4LCBbe1xuXHRcdGtleTogXCJidWlsZFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBidWlsZCgpIHtcblx0XHRcdHRoaXMuX2NyZWF0ZUFsZXJ0KCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiBcIl9jcmVhdGVBbGVydFwiLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlQWxlcnQoKSB7XG5cdFx0XHQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbGVydChcIkFycm93IGZ1bmN0aW9ucyBhbmQgY2xhc3NlcyBib3RoIHdvcmtpbmchXCIpO1xuXHRcdFx0fSkoKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gSW5kZXg7XG59KSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEluZGV4O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCB7XG5cdGJ1aWxkKCkge1xuXHRcdHRoaXMuX2NyZWF0ZUFsZXJ0KCk7XG5cdH1cblxuXHRfY3JlYXRlQWxlcnQoKSB7XG5cdFx0KCgpID0+IHtcblx0XHRcdGFsZXJ0KFwiQXJyb3cgZnVuY3Rpb25zIGFuZCBjbGFzc2VzIGJvdGggd29ya2luZyFcIik7XG5cdFx0fSkoKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
