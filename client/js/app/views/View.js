class View {
    constructor(elementoDom) {
        this._elementoDom = elementoDom;
    }

    template() {
        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        this._elementoDom.innerHTML = this.template(model);
    }

}