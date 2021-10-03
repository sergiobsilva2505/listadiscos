
let fields = [
    document.querySelector('#artist'),
    document.querySelector('#albumTitle'),
    document.querySelector('#releaseDateOf'),
    document.querySelector('#recordCompany')
];

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit',function (event) {

    event.preventDefault();

    let tr = document.createElement('tr');

    fields.forEach(function (field) {
        let td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

});