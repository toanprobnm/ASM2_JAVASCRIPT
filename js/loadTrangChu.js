loadNodeSanPham();

function loadNodeSanPham() {

    let arraySP = loaddulieu("danhSachSanPham");

    // nếu chưa có giữ liệu thì thêm dữ liệu mẫu
    if (arraySP.length == 0) {
        for (let i = 0; i < length; i++) {
            let sanpham = taoSanPham("https://phoneaqua.com/products/Iphone-11-Pro-Max-price-.webp", "Iphone", 15000, 10, "Buôn Ma Thuột", taoId());
            arraySP.push(sanpham);
        }
        ghidulieu(arraySP, "danhSachSanPham");
    }
    else {
        // thêm function vào sản phẩm
        for (let i = 0; i < arraySP.length; i++){
            arraySP[i] = taoSanPham(arraySP[i].hinhAnh, arraySP[i].ten, arraySP[i].giaGoc, arraySP[i].phanTram, arraySP[i].khuVuc, arraySP[i].id);
        }
    }

    var html = chuyenDanhSachSanPhamSangHTML(arraySP);
    var nodehienThiSanPham = document.getElementById('hien-thi-san-pham');
    nodehienThiSanPham.innerHTML = html;
}
