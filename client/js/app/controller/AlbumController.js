
class AlbumController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputArtist = $('#artist');
        this._inputAlbumTitle = $('#albumTitle');
        this._inputReleaseDateOf = $('#releaseDateOf');
        this._inputRecordCompany = $('#recordCompany');
        this._listAlbuns = new ListAlbuns();
        this._listAlbunsView = new ListAlbunsView($('#listAlbuns'));
        this._listAlbunsView.update(this._listAlbuns);

    }

    add(event) {
        event.preventDefault();

        this._listAlbuns.add(this._createAlbum());
        this._listAlbunsView.update(this._listAlbuns);

        this._clearForm();
    }

    _createAlbum() {
        return new Album(
            this._inputArtist.value,
            this._inputAlbumTitle.value,
            DateHelper.textForDate(this._inputReleaseDateOf.value),
            this._inputRecordCompany.value);
    }

    _clearForm() {
        this._inputArtist.value = '';
        this._inputAlbumTitle.value = '';
        this._inputReleaseDateOf.value = '';
        this._inputRecordCompany.value = '';
    }
}