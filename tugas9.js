// Buatlah sebuah variabel object versi teman teman.
// Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
// Setelah itu tampilkan objectnya dengan perulangan for in.

function panggilObject(){
    var bunga = {
        nama: 'Melati',
        warna: 'putih',
        bau: 'harum',
    }
    for(var x in bunga){
        console.log(bunga[x])
    }
}

panggilObject()