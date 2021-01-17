// Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
// Setelah itu teman teman tampilkan nilai kelipatan 3 pada perulangan tersebut
// Tampilkan hasilnya dengan console.log()

for(var i=1; i<=20; i++){
    if(i%3==0){
        console.log(i)
    }else{
        continue;
    }
}