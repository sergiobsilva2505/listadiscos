
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

    let tdVolume = document.createElement('td');
    tdVolume.innerHTML = '<a id="editLink" class="text-center" type="button">Editar</a>';

    let tdVolume2 = document.createElement('td');
    tdVolume2.innerHTML = '<a id="deleteLink" class="text-center" type="button">Deletar</a>';

    fields.forEach(function (field) {
        let td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
        tr.appendChild(tdVolume);
        tr.appendChild(tdVolume2);
    });

    tbody.appendChild(tr);

    fields[0].value = '';
    fields[1].value = '';
    fields[2].value = '';
    fields[3].value = '';

    fields[0].focus();

});