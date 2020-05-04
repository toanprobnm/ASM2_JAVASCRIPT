function taoId() {
    var thoiGianHienTai  = new Date().getTime();
    var id = Math.random().toString().substr(2, 10) + "-" + String(thoiGianHienTai).toString();
    return id;
}

function loaddulieu(tendata){
    let data = JSON.parse(localStorage.getItem(tendata));

    if(data == null){
        data = new Array();
    }
    
    return data;
}

function ghidulieu(arrayDulieu,tendata){
    localStorage.setItem(tendata,JSON.stringify(arrayDulieu));
}