// inline event --> ditulis di file html
// inline event tidak disarankan

// perbedaan onclick dengan eventlistener
// onclick
// jika ada dua atau lebih event onclick, 
// yang akan dijalankan onclick yang terakhir ditambahkan

// addEventListener
// jika ada dua atau lebih event listener,
// semua eventnya akan dijalankan

const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

// method event --> ditulis di file javascript
const p2 = document.querySelector('.p2');

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightgreen';
}

p2.onclick = ubahWarnaP2


// add Event Listener
const p4 = document.querySelector('section#b p');

// menggunakan anonym functions
p4.addEventListener('click', function(){ 
    // tangkap element parent
    const ul = document.getElementsByTagName('ul')[0];
    // buat element yang mau ditambahkan
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item baru');

    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})