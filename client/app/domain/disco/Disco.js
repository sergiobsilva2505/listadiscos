
class Disco {

    constructor(_artista, _titulo, _dataLancamento, _gravadora) {
        Object.assign(this, { _artista, _titulo, _gravadora });
        this._dataLancamento = new Date(_dataLancamento.getTime());
        Object.freeze(this);
    }

    get artista() {
        return this._artista;
    }

    get titulo() {
        return this._titulo;
    }

    get dataLancamento() {
        return this._dataLancamento;
    }

    get gravadora() {
        return this._gravadora;
    }


}