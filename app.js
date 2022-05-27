//nút quay về đầu trang
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// array thông tin 
let thongTinArray = [
  {
    img: "",
    name:"Hội thao Tháng Công nhân Quận 4 năm 2022",
  }
]

// chèn thông tin vô trang thông tin
let contentThongTin = document.getElementById("content-thongtin")
function renderThongTin() {
  for (let i of thongTinArray){
    contentThongTin.innerHTML += `
      <div class="content-container" >
          <a class="content" >
              <img src="${i.img}" alt="">
              <p>${i.name}</p>
          </a>
      </div>
    `
  }
}
renderThongTin();