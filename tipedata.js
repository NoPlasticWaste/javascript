function tipedata(){
    var data = 'jakarta';

    if(data === 'jakarta'){
        return data
    }else{
        return 'gagal'
    }
}

console.log(tipedata())

function tipedata2(){
    var data = 2;
    console.log(typeof(data))

    if(data === '2'){
        return data
    }else{
        return 'gagal'
    }
}

console.log(tipedata2())

function tipedata3(){
    var data = 2;
    console.log(typeof(data))

    if(data == '2'){
        return 'sukses'
    }else{
        return 'gagal'
    }
}

console.log(tipedata3())