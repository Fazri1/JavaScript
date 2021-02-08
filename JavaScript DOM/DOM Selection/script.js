// DOM Selection
// By Id --> Element

// Element hanya bisa satu element, jika lebih dari satu 
// akan mengembalikan element yang pertama ditemukan

// Node List dan HTML Collection akan mengembalikan sebuah array

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Halo JaviraScript';

// By Tag Name --> HTML Collection
const p = document.getElementsByTagName('p');

for( let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0]; // Jika element-nya hanya ada 1
h1.style.fontSize = '50px'

// By Class Name --> HTML Collection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari JavaScript';

// By Query Selector --> Element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// By Query Selector All --> Node List
const para = document.querySelectorAll('p');

for( let i = 0; i < p.length; i++){
    para[i].style.backgroundColor = 'lightblue';
}

// Mengubah Node Root, Default = Document
const sectionB = document.querySelector('section#b');

const para4 = sectionB.getElementsByTagName('p')[0];
para4.style.backgroundColor = 'blue';