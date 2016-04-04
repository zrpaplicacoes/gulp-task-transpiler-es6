export default class Index {
	build() {
		this._createAlert();
	}

	_createAlert() {
		(() => {
			alert("Arrow functions and classes both working!");
		})();
	}
}
