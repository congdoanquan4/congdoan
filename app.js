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
    imgThumbnail: "img/HTTCNQ4/thumbnail.jpg",
    name:"Hội thao Tháng Công nhân Quận 4 năm 2022",
    num:"HTTCNQ4",
    content: ["1.mp4", "2.mp4", "3.mp4"],
  },
  {
    imgThumbnail: "img/PT22/thumbnail.jpg",
    name:"Phan thiết 2022",
    num:"PT22",
  },
  {
    imgThumbnail: "img/HBNDC2122/thumbnail.jpg",
    name:"Học bổng Nguyễn Đức Cảnh 2021-2022",
    num:"HBNDC2122",
  },
  {
    imgThumbnail: "img/SHCD/thumbnail.jpg",
    name:"Sinh hoạt công đoàn",
    num:"SHCD",
  },  
]

// chèn thông tin vô trang thông tin
// let contentThongTin = document.getElementById("content-thongtin")
// function renderThongTin() {
//   for (let i of thongTinArray){
//     contentThongTin.innerHTML += `
//       <button class="heading-container" class="tablinks" onclick="openContent(event, '${i.num}' )" >
//           <a class="content" >
//               <img src="${i.img}" alt="">
//               <p>${i.name}</p>
//           </a>
//       </button>
//     `
//   }
// }
// renderThongTin();

// clock 
function startTime() {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  
  let months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
  let days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = date;
  
  let time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

// hiện thị từng mục trong trang chủ
let post = document.getElementById("post-container");
if(post != null) {
    function renderPost(){
      for(let i of thongTinArray) {
        post.innerHTML += `
        <a class="post" onclick='direct("${i.num}")'>
          <img class="img" src="${i.imgThumbnail}" alt="">
          <p class="post-title">${i.name}</p>
        </a>
        `
      };
    }
    renderPost();
};

// đẫn vào trong thông tin của từng mục đã định sẵn
function direct(page) {
  localStorage.setItem("currentPage", page);
  window.location.replace("./thongtin/thongtin.html");
}

// hiện thị trong trang thông tin 
let title = document.getElementById("title")
let imgContainer = document.getElementById("img-container")
let pageName = localStorage.getItem("currentPage");
let videoFormat = "mp4"
renderPage(pageName);
function renderPage(name) {
  for (let i = 0; i < thongTinArray.length; i++) {
    if (name == thongTinArray[i].num){
      title.innerHTML = thongTinArray[i].name
      for(let a of thongTinArray[i].content){
        if (thongTinArray[i].content[a].includes(videoFormat)){
          imgContainer.innerHTML += `
            <video src="img/"></video>
          `
        }else{
          
        }
      }
    }
  }
}