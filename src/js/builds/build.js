require.register("components/index", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
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
			var _this = this;

			(function () {
				alert("The class " + _this.constructor.name + " is working!");
			})();
		}
	}]);

	return Index;
}();

exports.default = Index;
  
});

