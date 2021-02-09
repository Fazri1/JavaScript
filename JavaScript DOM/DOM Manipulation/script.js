// Manipulasi Element
// innerHTML bisa mengandung semua tag yang ada di html

const judul = document.getElementById('judul');
judul.innerHTML = "Halo JavaScript";

const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p>Hello World</p></div>";

// element.style.propertiCSS
// element.setAttribute()
// element.classList


// Manipulasi Node
// buat tag elementnya
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan kedalam paragraf
// appendChild --> simpan diakhir element yang dimaksud
pBaru.appendChild(textPBaru)

// simpan pBaru ke akhir section a
sectionA.appendChild(pBaru)


// menggunakan insertBefore
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

// tangkap element parent
// tangkap element setelah element baru (antar element)
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// "javascript masukin element liBaru sebelum element li2 di parent ul"
ul.insertBefore(liBaru, li2);


// remove element
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link)


// replace element lama dengan element baru
// tangkap parentnya dulu
const sectionB = document.getElementById('b');
// tangkap element yang ingin direplace
const p4 = sectionB.querySelector('p');

// buat element baru yang ingin menggantikan element lama
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
// masukkan teks kedalam tagnya
h2Baru.appendChild(teksH2Baru);

// "Javascript gantikan element p4 dengan element h2Baru yang ada di sectionB"
sectionB.replaceChild(h2Baru, p4);


// element baru yang ditambahkan
liBaru.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';