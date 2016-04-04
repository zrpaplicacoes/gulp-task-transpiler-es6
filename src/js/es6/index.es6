export default class Index {
	build() {
		this._createAlert();
	}

	_createAlert() {
		(() => {
			alert(`The class ${this.constructor.name} is working!`);
		})();
	}
}
