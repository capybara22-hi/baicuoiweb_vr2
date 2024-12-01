
// Phần Javascript hiển thị header fixed khi cuộn đến vị trí 200px
// JavaScript để hiển thị menu khi cuộn đến 200px
const header = document.getElementById('header_fixed');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        header.classList.add('show');
    } else {
        header.classList.remove('show');
    }
});


// Phần Javascript để khi nhấn vào danh mục, sẽ scroll đến vị trí mục tin tức cần xem
// Lấy tất cả các liên kết có class 'scroll-link'
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>

        // Lấy ID mục tiêu từ thuộc tính href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Tính toán vị trí cuộn (offsetTop - 50px)
            const offsetTop = targetElement.offsetTop - 50;

            // Cuộn mượt đến vị trí tính toán
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});




// Phần đóng mở block nhập đăng tin
let open_modal_nhap_tin = document.getElementById('button');
let modal_nhap_tin = document.getElementById('modal');
let close_modal_nhap_tin = document.getElementById('closeModalBtn');
let confirmCancel = document.getElementById('confirmCancel');
let confirmYes = document.getElementById('confirmYes');
let confirmNo = document.getElementById('confirmNo');

let dang_bai = document.getElementById('submit_btn');

// Khi nhấn nút đăng bài thì hiển thị thông báo đăng bài thành công
dang_bai.addEventListener('click', () => {
    modal_nhap_tin.style.display = 'none';
    alert("Đăng tin thành công !");
});

// Hiển thị modal khi nhấn "Đăng tin"
open_modal_nhap_tin.addEventListener('click', () => {
    modal_nhap_tin.style.display = 'flex';
});

// Khi nhấn nút đóng, hiển thị phần xác nhận
close_modal_nhap_tin.addEventListener('click', () => {
    confirmCancel.style.display = 'flex'; // Hiển thị phần xác nhận
});

// Khi xác nhận "Có" (hủy tác vụ)
confirmYes.addEventListener('click', () => {
    modal.style.display = 'none'; // Ẩn phần đăng tin
    confirmCancel.style.display = 'none'; // Ẩn phần xác nhận
});

// Khi xác nhận "Không" (quay lại)
confirmNo.addEventListener('click', () => {
    confirmCancel.style.display = 'none'; // Ẩn phần xác nhận
    modal.style.display = 'flex'; // Hiển thị lại phần đăng tin
});