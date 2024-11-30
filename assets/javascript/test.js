document.addEventListener("DOMContentLoaded", () => {
    const isAdmin = true; // Đặt thành `false` nếu là user
    const adminSection = document.getElementById("adminSection");
    const postForm = document.getElementById("postForm");
    const postList = document.getElementById("postList");
    const selectableImages = document.querySelectorAll(".selectable-image");
  
    let selectedImage = null;
  
    // Hiển thị giao diện admin nếu là admin
    if (isAdmin) adminSection.style.display = "block";
  
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
        ${isAdmin ? `<button class="deleteButton" data-index="${index}">Xóa</button>` : ""}
        `;

  
        postList.appendChild(postDiv);
      });
  
      // Xóa bài đăng (admin)
      if (isAdmin) {
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
  
      const title = document.getElementById("postTitle").value;
      const description = document.getElementById("postDescription").value;
  
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
      } else {
        alert("Vui lòng chọn ảnh và điền đầy đủ thông tin!");
      }
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
  
  