let blogs = []; // length nya adalah 0

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById("input-project-title").value;
  let content = document.getElementById("input-project-content").value;
  let imageInput = document.getElementById("input-project-image");

  if (title == "" || content == "" || imageInput.files.length === 0) {
    return alert("All input fields cannot be empty");
  }

  let skills = document.querySelectorAll('input[type="checkbox"]').value;

  let dateControl = document.querySelector('input[type="date"]').value;
  let image = URL.createObjectURL(imageInput.files[0]);

  let blog = {
    author: dateControl,
    teknologi: skills,
    title: title,
    content: content,
    image: image,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    let formattedDate = formatDateToWIB(blogs[i].postedAt);
    // menampilkan blogs yang sudah kita buat dengan mengisi form
    console.log(blogs[i]);

    blogListElement.innerHTML += `

  <div id="${i}" class="blog-list">
          <div class="blog-list-item">
            <div class="blog-image">
              <img src="${blogs[i].image}" alt="blog-image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                ${blogs[i].title}
                </a>
              </h1>
              <div class="detail-blog-content">
              ${formattedDate} | ${blogs[i].author} | ${blogs[i].teknologi}
              </div>
              <p class="blog-text">
              ${blogs[i].content}
              </p>
              <p class="relative-time">${getRelativeTime(blogs[i].postedAt)}</p>
            </div>
          </div>
    `;
  }
}

function firstBlogContent() {
  return `
          <div id="blogList" class="blog-list">
          <div class="blog-list-item">
            <div class="blog-image">
              <img src="assets/blog-img.png" alt="blog-image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                  Pasar Coding di Indonesia Masih Menjanjikan
                </a>
              </h1>
              <div class="detail-blog-content">
                12 Jul 2024 22:30 WIB | Karunia Leo G
              </div>
              <p class="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                explicabo totam labore sit tempore, voluptate vitae nesciunt in
                maiores rerum, vero veritatis numquam iure aut sunt nemo.
              </p>
              <p class="relative-time>Time</p>
            </div>
          </div>
    `;
}
function formatDateToWIB(date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okr",
    "Nov",
    "Des",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0");

  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(targetDate) {
  let now = new Date();
  let diffInSeconds = Math.floor((now - targetDate) / 1000); // satuan dari ms ke detik

  console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }
}
