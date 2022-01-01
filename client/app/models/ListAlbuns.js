
class ListAlbuns {

    constructor() {

        this._listAlbuns = [];
    }

    add(album) {
        this._listAlbuns.push(album);
    }

    get listAlbuns(){
        return [].concat(this._listAlbuns);
    }
}