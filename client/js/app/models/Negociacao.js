class Negociacao {
    constructor(data, quantidade, valor) {
        //atributos
        this._data = new Date(data.getTime()); //Date é um objeto e por isso o FREEZE não funciona como nos outros atributos, por isso tem que escrever o
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
