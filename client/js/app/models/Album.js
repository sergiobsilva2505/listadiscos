
class Album {

    constructor(_artist, _albumTitle, _releaseDateOf, _recordCompany) {
        Object.assign(this, { _artist, _albumTitle, _recordCompany });
        this._releaseDateOf = new Date(_releaseDateOf.getTime());
        Object.freeze(this);
    }

    get artist() {
        return this._artist;
    }

    get albumTitle() {
        return this._albumTitle;
    }

    get releaseDateOf() {
        return this._releaseDateOf;
    }

    get recordCompany() {
        return this._recordCompany;
    }
}