document.addEventListener("DOMContentLoaded", () => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedInUser')); 
    console.log(loggedIn); // In ra để kiểm tra dữ liệu    
    // const isAdmin = true; // Đặt thành `false` nếu là user
    const adminSection = document.getElementById("adminSection");
    const postForm = document.getElementById("postForm");
    const postList = document.getElementById("postList");
    const selectableImages = document.querySelectorAll(".selectable-image");
  
    let selectedImage = null;
  
    // Hiển thị giao diện admin nếu là admin
    // if (isAdmin) adminSection.style.display = "block";

    let temp;
    if (loggedIn && (loggedIn.email === "cao@gmail.com" || loggedIn.email === "tuan@gmail.com")) {
        temp = true;
        document.getElementById("button").style.display = 'flex';  
        adminSection.style.display = "block"; 
    } else {
        temp = false;
        document.getElementById("button").style.display = 'none';
        adminSection.style.display = "none";
    }
  
    // Lấy danh sách bài đăng từ localStorage
    const getPosts = () => JSON.parse(localStorage.getItem("posts") || "[]");
  
    // Lưu danh sách bài đăng vào localStorage
    const savePosts = (posts) => localStorage.setItem("posts", JSON.stringify(posts));
  
    // Render danh sách bài đăng
    const renderPosts = () => {
      const posts = getPosts();
      postList.innerHTML = "";
  
      posts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
  
        postDiv.innerHTML = `
        <img src="${post.image}" alt="Bài đăng">
        <div class="content">
            <h3>${post.title}</h3>
            <div class="date">
            <i class="fa-regular fa-calendar-days"></i> ${post.date} 
            <i class="fa-regular fa-clock"></i> ${post.time}
            </div>
            <p>${post.description}</p>
        </div>
        ${temp ? `<button class="deleteButton" id="xoa_btn" data-index="${index}">Xóa</button>` : ""}
        `;
  
        postList.appendChild(postDiv);
      });
  
      // Xóa bài đăng (admin)
      if (temp) {
        document.querySelectorAll(".deleteButton").forEach((button) => {
          button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            const posts = getPosts();
            posts.splice(index, 1); // Xóa bài đăng
            savePosts(posts);
            renderPosts();
          });
        });
      }
    };
  
    // Xử lý chọn ảnh
    selectableImages.forEach((img) => {
      img.addEventListener("click", () => {
        // Xóa trạng thái chọn trước đó
        selectableImages.forEach((img) => img.classList.remove("selected"));
        img.classList.add("selected");
        selectedImage = img.src; // Lưu URL ảnh được chọn
      });
    });
  
    // Xử lý sự kiện đăng bài
    postForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("postTitle").value.trim();
      const description = document.getElementById("postDescription").value.trim();
      
      let dang_bai = document.getElementById('submit_btn');

      if (selectedImage && title && description) {
        const now = new Date();
        const date = now.toLocaleDateString(); // Lấy phần ngày
        const time = now.toLocaleTimeString(); // Lấy phần giờ

  
        const newPost = { image: selectedImage, title, date, time, description };
        const posts = getPosts();
        posts.unshift(newPost);
        savePosts(posts);
        renderPosts();
  
        postForm.reset(); // Reset form sau khi đăng bài
        selectableImages.forEach((img) => img.classList.remove("selected")); // Bỏ chọn ảnh
        selectedImage = null;
        modal_nhap_tin.style.display = 'none';
        alert("Đăng tin thành công !");
      } else {
        alert("Vui lòng chọn ảnh và điền đầy đủ thông tin!");
      }
      // Khi nhấn nút đăng bài thì hiển thị thông báo đăng bài thành công
      // dang_bai.addEventListener('click', () => {
      //   modal_nhap_tin.style.display = 'none';
      //   alert("Đăng tin thành công !");
          
      // });
  
    });
  
    // Render lần đầu
    renderPosts();
  });


// Xử lí phần chọn ảnh đăng tin
document.addEventListener("DOMContentLoaded", () => {
const toggleImageSelection = document.getElementById("toggleImageSelection");
const imageSelection = document.getElementById("imageSelection");
const selectableImages = document.querySelectorAll(".selectable-image");
let selectedImage = null;

// Hiển thị/ẩn phần chọn ảnh
toggleImageSelection.addEventListener("click", () => {
    if (imageSelection.style.display === "none") {
    imageSelection.style.display = "block";
    toggleImageSelection.textContent = "Đóng Chọn Ảnh";
    } else {
    imageSelection.style.display = "none";
    toggleImageSelection.textContent = "Chọn Ảnh";
    }
});

// Xử lý chọn ảnh
selectableImages.forEach((img) => {
    img.addEventListener("click", () => {
    selectableImages.forEach((img) => img.classList.remove("selected"));
    img.classList.add("selected");
    selectedImage = img.src; // Lưu URL ảnh được chọn
    });
});

// Sử dụng selectedImage trong logic đăng bài
// (giữ nguyên logic đăng bài từ trước, như đã hướng dẫn)
});














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
// dang_bai.addEventListener('click', () => {
//     modal_nhap_tin.style.display = 'none';
//     alert("Đăng tin thành công !");
// });

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
    postForm.reset();

    const selectableImages = document.querySelectorAll(".selectable-image");
    selectableImages.forEach((img) => img.classList.remove("selected")); // Bỏ chọn ảnh
    selectedImage = null; // Đặt lại trạng thái
});

// Khi xác nhận "Không" (quay lại)
confirmNo.addEventListener('click', () => {
    confirmCancel.style.display = 'none'; // Ẩn phần xác nhận
    modal.style.display = 'flex'; // Hiển thị lại phần đăng tin
});
  
  