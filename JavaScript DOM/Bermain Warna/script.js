// mengubah warna dengan tombol ubah warna, menggunakan toggle class

// const tombolWarna = document.getElementById('tombolWarna');

// tombolWarna.addEventListener('click', function(){
//     // document.body.style.backgroundColor = 'red';
//     // document.body.setAttribute('class', 'biru-muda');
//     document.body.classList.toggle('biru-muda');
// });


// mengubah warna secara acak dengan tombol Acak Warna

const tAcakWarna = document.createElement('button');
const teksTombolAcak = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombolAcak);
tAcakWarna.setAttribute('type', 'button');
tombolWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);


    document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ',' + blue + ')';
    document.body.style.color = 'rgb(' + blue + ', ' + red + ',' + green + ')';
});


// mengubah warna dengan slider, menggunakan nilai min dan max dari slider

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
    document.body.style.color = 'rgb('+ blue +','+ red +','+ green +')';
});

sHijau.addEventListener('input', function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
    document.body.style.color = 'rgb('+ blue +','+ red +','+ green +')';
});

sBiru.addEventListener('input', function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
    document.body.style.color = 'rgb('+ blue +','+ red +','+ green +')';
});


// mengubah warna sesuai koordinat mouse di document

document.body.addEventListener('mousemove', function(event){
    /* Mencari posisi mouse
     console.log(event.clientX atau clientY);
    */
   
    /* mencari tau ukuran browser
    console.log(window.innerWidth);
    */

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 128)';
    document.body.style.color = 'rgb('+ yPos +','+ xPos +', 100)';
    
});