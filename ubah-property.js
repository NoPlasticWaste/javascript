function panggilObject(){
    var mobil = {
        type: 'Sedan',
        harga: 20000000,
        warna: 'Putih',
        tahun: [2001, 2002, 2003, 2004]
    }

    console.log(mobil)
    console.log(mobil.harga)
    console.log(mobil.tahun)
    console.log(mobil.tahun[2])

    mobil.harga = 100000000;
    console.log(mobil.harga)

    mobil.terbit = 2018;
    console.log(mobil)

    mobil.type = 'Kijang';
    console.log(mobil.type)

    mobil.type = 9560;
    console.log(mobil.type)
}

panggilObject()