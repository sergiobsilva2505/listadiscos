
class AlbumController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._artist = $('#artist');
        this._albumTitle = $('#albumTitle');
        this._releaseDateOf = $('#releaseDateOf');
        this._recordCompany = $('#recordCompany');
    }

    add(event) {
        event.preventDefault();

        let album = new Album(
            this._artist.value,
            this._albumTitle.value,
            DateHelper.textForDate(this._releaseDateOf.value),
            this._recordCompany.value
        );

        console.log(album);
        console.log(DateHelper.dateForText(album.releaseDateOf))
    }
}