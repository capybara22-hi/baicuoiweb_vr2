document.addEventListener("DOMContentLoaded", function() {
    // Đợi đến khi nội dung của trang được tải xong thì mới thực thi mã bên trong.
    // Điều này giúp đảm bảo rằng các phần tử HTML đã có sẵn để xử lý.
    
    const imgElements = document.querySelectorAll(".ican");
    // Lấy tất cả các phần tử có lớp 'ican' và lưu chúng vào biến 'imgElements' dưới dạng một NodeList.
    // Mỗi phần tử trong 'imgElements' là một phần tử <div> chứa ảnh cần hiệu ứng hiển thị dần.

    function checkVisibility() {
        // Định nghĩa hàm 'checkVisibility' để kiểm tra xem từng ảnh có trong vùng hiển thị không.
        
        imgElements.forEach((imgElement) => {
            // Lặp qua từng phần tử trong 'imgElements' để xử lý từng ảnh riêng biệt.
            
            const rect = imgElement.getBoundingClientRect();
            // Sử dụng phương thức 'getBoundingClientRect()' để lấy tọa độ và kích thước của 'imgElement' 
            // so với viewport (vùng hiển thị của trình duyệt).
            
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            // Lấy chiều cao của cửa sổ trình duyệt (viewport) để so sánh với vị trí của ảnh.
            // Nếu 'window.innerHeight' không xác định, dùng 'document.documentElement.clientHeight' làm dự phòng.

            if (rect.top <= windowHeight) {
                // Kiểm tra nếu phần tử 'imgElement' có cạnh trên (top) nằm trong vùng hiển thị.
                // Nếu điều kiện đúng, nghĩa là ảnh đã xuất hiện trong vùng hiển thị của màn hình.
                
                imgElement.classList.add("show");
                // Thêm lớp 'show' vào 'imgElement' để kích hoạt hiệu ứng hiển thị dần từ CSS.
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    // Thêm sự kiện 'scroll' cho cửa sổ trình duyệt. Mỗi khi cuộn trang, hàm 'checkVisibility' sẽ được gọi
    // để kiểm tra các ảnh xem chúng có vào vùng hiển thị hay không.

    checkVisibility(); // Kiểm tra ngay khi tải trang
    // Gọi hàm 'checkVisibility' một lần ngay khi trang được tải để kiểm tra xem có ảnh nào 
    // đã sẵn sàng để hiển thị mà không cần đợi sự kiện cuộn.
});
