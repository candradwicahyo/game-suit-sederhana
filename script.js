window.onload = () => {
  
  function gameSederhana() {
    let pemain = prompt('silakan pilih salah satu dari gunting, batu dan kertas!');
    let lawan = setPilihanLawan(Math.random());
    
    // aturan permainan
    let aturan = aturanPermainan(pemain, lawan);
    
    // tampilkan hasil permainan
    let hasil = alert(`pemain memilih : ${pemain} dan lawan memilih : ${lawan}. maka, hasil akhir dari permainan tadi adalah, pemain ${aturan}`);
    
    // tanyakan kepada pemain, apakah ingin main lagi
    let tanya = confirm('apakah masih ingin bermain?');
    let terimaKasih = 'terima kasih';
    
    return tanya ? gameSederhana() : alert(terimaKasih);
  }
  
  gameSederhana();
  
  function setPilihanLawan(param) {
    if (param < 0.34) return 'gunting';
    if (param > 0.34 && param < 0.67) return 'batu';
    return 'kertas';
  }
  
  function aturanPermainan(pemain, lawan) {
    if (pemain == '') return 'sedang stress berat!';
    if (pemain == lawan) return 'imbang';
    if (pemain == 'gunting') return (lawan == 'kertas') ? 'menang' : 'kalah';
    if (pemain == 'batu') return (lawan == 'gunting') ? 'menang' : 'kalah';
    if (pemain == 'kertas') return (lawan == 'batu') ? 'menang' : 'kalah';
    return 'program error!';
  }
  
}