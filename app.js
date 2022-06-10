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
    num:"HTTCNQ4"
  },
  {
    img: "",
    name:"Phan thiết 2022",
    num:"PT22"
  },
  {
    img: "",
    name:"Học bổng Nguyễn Đức Cảnh 2021-2022",
    num:"HBNDC2122"
  },  
]

// chèn thông tin vô trang thông tin
let contentThongTin = document.getElementById("content-thongtin")
function renderThongTin() {
  for (let i of thongTinArray){
    contentThongTin.innerHTML += `
      <button class="heading-container" class="tablinks" onclick="openContent(event, '${i.num}' )" >
          <a class="content" >
              <img src="${i.img}" alt="">
              <p>${i.name}</p>
          </a>
      </button>
    `
  }
}
renderThongTin();

// hiện thông tin của mục lên trong trang 
function openContent(evt, num) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// chèn thông tin vô trong từng mục trong trang thông tin 
let content = document.getElementById("content-conatainer")
function renderThongTinContent() {
  for(let i of thongTinArray){
    content.innerHTML += `
    <div id="">

    </div>
    `
  }
}