// Buatlah sebuah variabel object versi teman teman.
// Tampilkan nilai awal dari masing masing object yang teman teman buat.
// Setelah itu teman teman lakukan perubahan nilai pada salah satu object yang teman teman buat dan tampilkan kembali.

function cat(){
    var body = {
        head: "black",
        tail: "curly",
        claw: "sharp"
    }

    console.log(body)
    body.head = "white"
    console.log(body)
}

cat()