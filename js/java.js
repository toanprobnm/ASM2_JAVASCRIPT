function chuyenDoiTuongThanhHTML(sanPham) {
    var html  = '';
    
    html += `<div class='san-pham'>`;
    html += `<div class='hinh-anh-san-pham'>`;
    html += `     <div class='giam-gia'> -${sanPham.phanTram}%</div>`;
    html += `      <img src="${sanPham.hinhAnh}">`;
    html += `</div>`;
    html += `<h1 class='ten-san-pham'>${sanPham.ten}</h1>`;
    html += `<p class='gia-goc-san-pham'>${themChamVaoSo(sanPham.giaGoc)} đ</p>`;
    html += `<p class='gia-ban'>${themChamVaoSo(sanPham.tinhGiaban())} đ</p>`;
    html += `<button id="them-gio" onclick="clickGioHang('${sanPham.id}')">Thêm vào giỏ hàng</button>`;
    html += `</div >`;

    return html;
}

function clickGioHang(id){

    let hang = new Object();
    hang.id = id;
    hang.soluong = 1;

    let dacohang = false;
    let danhsachgiohang = loaddulieu("danhSachGioHang");

    for(let i = 0; i< danhsachgiohang.length ; i++){
        if(danhsachgiohang[i].id == id){
            danhsachgiohang[i].soluong++;
            dacohang = true;
        }
    }

    if(dacohang == false)
        danhsachgiohang.push(hang);

    ghidulieu(danhsachgiohang,"danhSachGioHang");  
}


function chuyenDanhSachSanPhamSangHTML(danhSachSanPham){
    var htmlTong = '';

    for(var i = 0; i< danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        
        var html = chuyenDoiTuongThanhHTML(sanPham);
        htmlTong = htmlTong + html;
    }

    return htmlTong;
}

function taoSanPham(hinhAnh, ten, giaGoc, phanTram, khuVuc, id){
    
    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTram = phanTram;
    sanPham.khuVuc = khuVuc;

    //tạo định danh cho đối tượng
    if (id == null) {
        sanPham.id = taoId();
    }
    else {
        sanPham.id = id;
    }

    sanPham.tinhGiaban = function(){
        return this.giaGoc- this.giaGoc*(this.phanTram/100);
    }
    return sanPham;
}

function themChamVaoSo(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}



function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    var danhSachSanPham = layDanhSachTuLocall();
    for(var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai =   danhSachSanPham[i];
        if (sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }
    }

    sanPham = taoSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTram, sanPham.khuVuc, sanPham.id);

    return sanPham;
}

function layDanhSachTuLocall() {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');

    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

    return danhSachSanPham;
}

