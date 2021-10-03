
var fields = [
    document.querySelector('#artist'),
    document.querySelector('#albumTitle'),
    document.querySelector('#releaseDateOf'),
    document.querySelector('#recordCompany')
];

console.log(fields);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit',function (event) {

    event.preventDefault();

    var tr = document.createElement('tr');

    var tdEditLink = document.createElement('a');
    tdEditLink.textContent = 'Editar'
    tdEditLink.href = 'https://www.google.com.br/';

    var btnDeleteLink = document.createElement('button');
    btnDeleteLink.textContent = 'Deletar'
    btnDeleteLink.href = 'https://br.yahoo.com/';

    fields.forEach(function (field) {
        var td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

});