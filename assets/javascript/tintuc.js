
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
