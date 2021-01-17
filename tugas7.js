// Buatlah sebuah variabel array dengan maksimal data 10 nilai yang berisikan tinggi badan;
// Tampilkan array tersebut dengan menggunakan perulangan biasa dan perulangan for off.
// Teman-teman analisis perbedaan hasilnya,

var tinggiBadan = [89, 87, 65, 77, 34, 89, 34, 76];

for(var i=0; i<tinggiBadan.length; i++){
    console.log("Perulangan biasa ", tinggiBadan[i])
}

for(let i of tinggiBadan){
    console.log("Perulangan for-of ", i);
}