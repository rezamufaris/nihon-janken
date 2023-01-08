function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'batu';
  if (comp >= 0.34 && comp < 0.67) return 'gunting';
  return 'kertas';
}

function getHasil(comp, p) {
  if (p == comp) return 'SERI EUYY!';
  if (p == 'batu') return comp == 'gunting' ? 'Kamu Menang!' : 'Kamu Kalah!';
  if (p == 'gunting') return comp == 'batu' ? 'Kamu Kalah!' : 'Kamu Menang!';
  if (p == 'kertas') return comp == 'gunting' ? 'Kamu Kalah!' : 'Kamu Menang!';
}

let komputerSkor = 0;
let playerSkor = 0;
function infoSkor(hasil) {
  if (hasil == 'Kamu Menang!') return (playerSkor += 1);
  if (hasil == 'Kamu Kalah!') return (komputerSkor += 1);
  if (hasil == 'SERI EUYY!') return playerSkor, komputerSkor;
}

function putar() {
  const imgComp = document.querySelector('.img-komputer');
  const gambar = ['batu', 'kertas', 'gunting'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const areaPlayer = document.querySelectorAll('li img');
areaPlayer.forEach(function (pOptions) {
  pOptions.addEventListener('click', function () {
    const pilComp = getPilihanComputer();
    const pilPlayer = pOptions.className;
    const hasil = getHasil(pilComp, pilPlayer);

    putar();
    infoSkor(hasil);

    setTimeout(function () {
      const imgComp = document.querySelector('.img-komputer');
      imgComp.setAttribute('src', `img/${pilComp}.png`);

      const infoHasil = document.querySelector('.info');
      infoHasil.innerHTML = hasil;

      const skorKomputer = document.querySelector('.skor-komputer');
      skorKomputer.innerHTML = 'SKOR : ' + komputerSkor;

      const skorPlayer = document.querySelector('.skor-player');
      skorPlayer.innerHTML = 'SKOR : ' + playerSkor;
    }, 1000);
  });
});

// Kode terbaru

// function getPilihanComputer() {
//   const comp = Math.random();

//   if (comp < 0.34) return 'batu';
//   if (comp >= 0.34 && comp < 0.67) return 'gunting';
//   return 'kertas';
// }

// function getHasil(comp, player) {
//   if (player == comp) return 'SERI!';
//   if (player == 'batu') return comp == 'gunting' ? 'KAMU MENANG!' : 'KAMU KALAH!';
//   if (player == 'gunting') return comp == 'batu' ? 'KAMU KALAH!' : 'KAMU MENANG!';
//   if (player == 'kertas') return comp == 'gunting' ? 'KAMU KALAH!' : 'KAMU MENANG!';
// }

// function loading() {
//   const imgComputer = document.querySelector('.img-komputer');
//   const gambar = ['batu', 'gunting', 'kertas'];
//   let i = 0;
//   const waktuMulai = new Date().getTime();
//   setInterval(function () {
//     if (new Date().getTime() - waktuMulai > 1000) {
//       clearInterval;
//       return;
//     }
//     imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
//     if (i == gambar.length) i = 0;
//   }, 100);
// }

// const pilihan = document.querySelectorAll('li img');
// pilihan.forEach(function (pil) {
//   pil.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pil.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     loading();

//     setTimeout(function () {
//       const imgComputer = document.querySelector('.img-komputer');
//       imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//       const info = document.querySelector('.info');
//       info.innerHTML = hasil;
//     }, 1000);
//   });
// });

// KODE LAMAAAA

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGunting.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pKertas.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// Ketika Player milih batu dan komputer kertas
// Gajah = batu, Orang = gunting, Semut = Kertas
