
function onclickThemSanPhamMoi() {

    var nodeHinhAnh = document.getElementById('hinhAnh');
    var hinhAnh = nodeHinhAnh.value;

    var nodeTen = document.getElementById('ten');
    var ten = nodeTen.value;

    var nodeGiagoc = document.getElementById('giagoc');
    var giagoc = nodeGiagoc.value;

    var nodePhanTramGiamGia = document.getElementById('phanTramGiamGia');
    var phanTramGiamGia = nodePhanTramGiamGia.value;

    var nodeKhuVuc = document.getElementById('khuVuc');
    var khuVuc = nodeKhuVuc.value;

    var sanPham = taoSanPham(hinhAnh, ten, giagoc, phanTramGiamGia, khuVuc);

    var danhSachSanPham = loaddulieu("danhSachSanPham"); 
    
    if(danhSachSanPham == null){
        danhSachSanPham = new Array();
    }

    danhSachSanPham.push(sanPham);

    ghidulieu(danhSachSanPham,"danhSachSanPham");
}