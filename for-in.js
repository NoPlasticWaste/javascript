function panggilObject(){
    var mahasiswa = {
        nama: 'Ami',
        umur: 23,
        jurusan: 'kimia',
        semester: 5,
    }
    for(var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}

panggilObject()