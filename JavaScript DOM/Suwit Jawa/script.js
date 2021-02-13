// Mengacak pilihan komputer
function getPilihanComputer(){
    const comp = Math.random();

    if ( comp < 0.34 ) return 'gajah';
    if ( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if ( player == comp ) return 'SERI!';
    if ( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 
        'KALAH!';
    if ( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' :
        'MENANG!';
    if ( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' :
        'MENANG';
}

function putar() {
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;

    // mengatur waktu pengacakan gambar selama 100ms atau 0,1 detik
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        // jika waktunya sudah berlalu selama 1 detik maka pengacakan gambar dihentikan
        if ( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }

        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if ( i == gambar.length ) i = 0;
    }, 100);

}

let scoreP = 0
let scoreC = 0
const pilihan = document.querySelectorAll('li img');
// untuk setiap gambar yang ada di variabel pilihan
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        // jika pengacakan gambar selesai, jalankan fungsi 
        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            const scoreComputer = document.querySelector('.score-computer');
            const scorePlayer = document.querySelector('.score-player');
            
            if ( hasil == 'MENANG!' ) {
                scoreP = scoreP + 1;
                scorePlayer.innerHTML = scoreP;
            } else if ( hasil == 'KALAH!' ){
                scoreC = scoreC + 1;
                scoreComputer.innerHTML = scoreC;
            }
        }, 1000)
        
    });
});
