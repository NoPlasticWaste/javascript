// Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
// Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
// Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

var a = 110;
var b = 70;
var c = 90;

function sort (a, b, c) {
    if(a > b && b > c) {
      console.log(a, b , c);
    } else if (a < b && a > c) {
        console.log(b, a, c);
    } else if (b > a && a < c) {
        console.log(b, c, a);
    } else if(b < a && c > b) {
        console.log(a, c, b); 
    } else if(c > a && a > b) {
        console.log(c, a, b);
    } else {
        console.log(c, b , a);
    }
  }

  sort(a,b,c)