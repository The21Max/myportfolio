function sent(){
    var inp = document.getElementById('inp')
    var inp1 = document.getElementById('inp1')
    var inp2 = document.getElementById('inp2')
    var inp3 = document.getElementById('inp3')
    var inp4 = document.getElementById('inp4')

    window.localStorage.setItem('id', inp.value)
    window.localStorage.setItem('name', inp1.value)
    window.localStorage.setItem('email', inp2.value)
    window.localStorage.setItem('number', inp3.value)
    window.localStorage.setItem('address', inp4.value)

}

var tbody = document.getElementById('tbody');

var tr = document.createElement('tr');
var td = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
var td5 = document.createElement('td');

var neme = localStorage.getItem('id');
var neme1 = localStorage.getItem('neme');
var neme2 = localStorage.getItem('email');
var neme3 = localStorage.getItem('number');
var neme4 = localStorage.getItem('address');


td.innerText = neme;
td2.innerText = neme1;
td3.innerText = neme2;
td4.innerText = neme3;
td5.innerText = neme4;

tr.appendChild(td);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);

tbody.appendChild(tr)