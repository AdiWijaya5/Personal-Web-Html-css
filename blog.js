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
    datestart: dateControl,
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
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                ${blogs[i].title} - ${blogs[i].datestart}
                </a>
                <p class="relative-time">${getRelativeTime(
                  blogs[i].postedAt
                )}</p>
              </h1>
              <p class="blog-text">
              ${blogs[i].content}
              </p>
              <div class="icone-f">
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-angular"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-vuejs"></i>
            </div>
              <div class="btn-group">
                <button class="btn-edit">Edit</button>
                <button class="btn-delet">Delete</button>
              </div>
            </div>
          </div>
    `;
  }
}

function firstBlogContent() {
  return `
      <section class="blog-container">
        <div id="blogList" class="blog-list">
          <div class="blog-list-item">
            <div class="blog-image">
              <img src="assets/blog-img.png" alt="blog-image" />
            </div>
            <h1>
              <a href="blog-detail.html" class="blog-item-title">
                Baswey App -2021-02-19
              </a>
              <p class="relative-time">Durasi : 3 Day</p>
            </h1>
            <div>
              <p class="blog-text">
            </div>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
            </p>
            <div class="icone-f">
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-angular"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-vuejs"></i>
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit</button>
                <button class="btn-delet">Delete</button>
              </div>
              </div>
            </div>
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
  let diffInSeconds = Math.floor((now - targetDate) / 1000); 
  console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return `Durasi : ${diffInSeconds} second${
      diffInSeconds > 1 ? "s" : ""
    } ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `Durasi : ${diffInMinutes} minute${
      diffInMinutes > 1 ? "s" : ""
    } ago`;
  }
}
