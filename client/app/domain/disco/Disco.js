
class Disco {

    constructor(artista, titulo, dataLancamento, gravadora) {
        this._artista = artista;
        this._titulo = titulo;
        this._dataLancamento = dataLancamento;
        this._gravadora = gravadora;
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