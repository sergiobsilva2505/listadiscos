
class Disco {

    construtor(artista, titulo, dataLancamento, gravadora) {
        this._artista = artista;
        this._titulo = titulo;
        this._dataLancamento = dataLancamento;
        this._gravadora = gravadora;
    }

    get artista() {
        return this.artista;
    }

    get titulo() {
        return this.titulo;
    }

    get dataLancamento() {
        return this.dataLancamento;
    }

    get gravadora() {
        return this.gravadora;
    }


}