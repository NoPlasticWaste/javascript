function nestedObject(){
    var mahasiswa = {
        nama: 'Ilham',
        ipk: {
            semester1: 3.5,
            semester2: 3.75,
            semester3: 4.0,
            semester4: 4.0,
        }
    }
    console.log(mahasiswa.ipk.semester3)
}

nestedObject()