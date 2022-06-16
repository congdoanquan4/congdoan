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
  
  let months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 1', 'Tháng 1', 'Tháng 1', 'Tháng 1', 'Tháng 1', 'Tháng 1', 'Tháng 1'];
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