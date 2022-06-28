//nút quay về đầu trang
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

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
    name: "Hội thao Tháng Công nhân Quận 4 năm 2022",
    num: "HTTCNQ4",
    "content": ["1.mp4", "2.mp4", "3.mp4"],
    "paragraph": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum."]
  },
  {
    imgThumbnail: "img/PT22/thumbnail.jpg",
    name: "Phan thiết 2022",
    num: "PT22",
    "content": ["4248873964284052894.mp4"],
    "paragraph": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum."]
  },
  {
    imgThumbnail: "img/HBNDC2122/thumbnail.jpg",
    name: "Học bổng Nguyễn Đức Cảnh 2021-2022",
    num: "HBNDC2122",
    "content": ["6.mp4", "1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    "paragraph": [
      "Chương trình học bổng Nguyễn Hữu Cảnh được Công đoàn CCTQ4 quan tâm và chú trọng. Hàng năm, mỗi CBCC CCTQ4 đóng góp chút tấm lòng để tạo nguồn quỹ học bổng Nguyễn Đức Cảnh cho con em học sinh giỏi, giúp sức cho con công nhân, viên chức – lao động có điều kiện học tập tốt hơn. Số lượng các cháu nhận học bổng ngày càng tăng.",
      "Chương trình học bổng Nguyễn Hữu Cảnh được Đảng ủy, Ban lãnh đạo Chi Cục rất quan tâm. Đây là hoạt động ý nghĩa, xuyên suốt của Công đoàn CCTQ4 nhằm tạo điều kiện tốt hơn cho các em học tập, rèn luyện, phấn đấu vươn lên trong cuộc sống và lập nghiệp trong tương lai.",
      "Học bổng Nguyễn Đức Cảnh hoạt động hiệu quả là việc làm thiết thực tạo sự gắn bó của đoàn viên công đoàn, người lao động với tổ chức công đoàn; đồng thời nâng cao vị trí vai trò của tổ chức công đoàn trong các hoạt động xã hội.",
      "Đối tượng xét trao học bổng Nguyễn Đức Cảnh tại công đoàn cơ sở : là các cháu có thành tích học tập xuất sắc trong năm học.",
      "Hàng năm, chương trình học bổng Nguyễn Đức Cảnh sẽ được tổ chức lồng ghép chung với ngày Quốc tế Thiếu nhi 01/6. Ban chấp hành Công đoàn cơ sở CCTQ4 rất quan tâm và tổ chức rất chu đáo ngày hội của các con.",
    ]
  },
  {
    imgThumbnail: "img/DHCD19-24/thumbnail.jpg",
    name: "Đại hội công đoàn nhiệm kì 2019-2024",
    num: "DHCD19-24",
    "content": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg"],
    "paragraph": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum."]
  },
  {
    imgThumbnail: "img/HX20-21/thumbnail.jpg",
    name: "Hội xuân 2020-2021",
    num: "HX20-21",
    "content": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"],
    "paragraph": [
      "Ngày 17/01/2020 Cục Thuế TPHCM tổ chức Lễ Hội Mừng Đảng – Mừng Xuân Canh Tý năm 2020,",
      "Tham dự Lễ hội có các đồng chí: Lê Duy Minh : Bí Thư Đảng Bộ - Cục Trưởng Cục Thuế TPHCM, các đồng chí Cục Phó Cục Thuế TPHCM, các đồng chí nguyên là lãnh đạo Cục Thuế TPHCM; đại diện lãnh đạo các Phòng, các Chi Cục Thuế Quận – Khu vực cùng các Công chức ngành Thuế của 22 Quận – Khu vực.",
      "Cục Thuế TPHCM, tổ chức chương trình thi văn nghệ giao lưu giữa Cục Thuế và các Chi Cục Thuế để tạo tình đoàn kết, gắn kết giữa các Chi Cục với nhau.",
      "Lễ hội diễn ra trong không khí tươi vui, sôi động. Chương trình biểu diễn các bài hát ca ngợi Đảng, ca ngợi đất nước đổi mới và chào xuân Canh Tý 2020: Đảng là cuộc sống của tôi; Ngôi sao niềm tin ngôi sao Hồ Chí Minh; Ca ngợi Hồ Chủ tịch; Tự hào Thanh niên Thành phố Bác; Mùa xuân trên quê hương; Ước nguyện đầu xuân, Đất Việt…",
      "Chi Cục Thuế Quận 4 vinh dự, tự hào đạt giải 2 của Hội thi."
    ]

  },
  {
    imgThumbnail: "img/TKCTĐ19/thumbnail.jpg",
    name: "Tổng kết công tác đảng năm 2019",
    num: "TKCTĐ19",
    "content": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"],
    "paragraph": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum."]
  },
  {
    imgThumbnail: "img/HNTDNNT2018/thumbnail.jpg",
    name: "Hội nghị tuyên dương người nộp thuế năm 2018",
    num: "HNTDNNT2018",
    "content": ["phatbieu1.jpg", "phatbieu2.jpg", "phatbieu3.jpg", "tuyenduong1.jpg", "tuyenduong2.jpg", "tuyenduong3.jpg", "moinguoi1.jpg", "moinguoi2.jpg"],
    "paragraph": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum."]
  },
  {
    imgThumbnail: "img/NOEL2010/thumbnail.jpg",
    name: "Noel 2010",
    num: "NOEL2010",
    "content": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    "paragraph": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eget est lorem ipsum dolor. Augue eget arcu dictum varius duis at consectetur lorem donec. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Elit at imperdiet dui accumsan sit amet nulla facilisi. Leo vel fringilla est ullamcorper eget nulla facilisi. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Id venenatis a condimentum vitae sapien pellentesque habitant. Vitae tortor condimentum lacinia quis. Ornare lectus sit amet est placerat in egestas erat imperdiet. At augue eget arcu dictum varius duis at. Pulvinar etiam non quam lacus suspendisse faucibus interdum."]
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
  let date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
  document.getElementById("date").innerHTML = date;

  let time = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// hiện thị từng mục trong trang chủ
let post = document.getElementById("post-container");
if (post != null) {
  function renderPost() {
    for (let i of thongTinArray) {
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

// hiện thị từng mục trong trang tin tức
let postTinTuc = document.getElementById("post-container-tintuc");
if (postTinTuc != null) {
  function renderPostTintuc() {
    for (let i of thongTinArray) {
      postTinTuc.innerHTML += `
        <a class="post" onclick='directBack("${i.num}")'>
          <img class="img" src="../${i.imgThumbnail}" alt="">
          <p class="post-title">${i.name}</p>
        </a>
        `
    };
  }
  renderPostTintuc();
};

// đẫn vào trong thông tin của từng mục đã định sẵn
function direct(page) {
  localStorage.setItem("currentPage", page);
  window.location.replace("./thongtin/thongtin.html");
}

function directBack(page) {
  localStorage.setItem("currentPage", page);
  window.location.replace("../thongtin/thongtin.html");
}

// hiện thị trong trang thông tin 
let title = document.getElementById("title")
let imgContainer = document.getElementById("img-container")
let pageName = localStorage.getItem("currentPage");
let videoFormat = "mp4"

if (imgContainer != null) {
  function renderPage(name) {
    for (let i = 0; i < thongTinArray.length; i++) {
      if (name == thongTinArray[i].num) {
        title.innerHTML += thongTinArray[i].name
        console.log(thongTinArray[i].name)
        let contentArray = thongTinArray[i].content
        for (let a = 0; a < contentArray.length; a++) {
          if (contentArray[a].includes("mp4") == true) {
            imgContainer.innerHTML += `
              <div class="mySlides fade">
                <video controls controlsList="nodownload">
                  <source src="../img/${thongTinArray[i].num}/${contentArray[a]}" type="video/mp4">
                </video>
              </div>
            `
          } else {
            imgContainer.innerHTML += `
              <div class="mySlides fade">
                <img src="../img/${thongTinArray[i].num}/${contentArray[a]}"></img>
              </div>
            `
          }
        }
      }
    }
  };
  renderPage(pageName);
}

// slide show hình trong trang thông tin 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// chữ trong trang thông tin
let contentContainer = document.getElementById("content-container")
if (contentContainer != null) {
  function renderContent(name) {
    for (let i = 0; i < thongTinArray.length; i++) {
      if (name == thongTinArray[i].num) {
        let contentsArray = thongTinArray[i].paragraph
        for (let a = 0; a < contentsArray.length; a++) {
          contentContainer.innerHTML += `
            <p class="paragraph"> ${contentsArray[a]}</p>
          `
        }
      }
    }
  };
  renderContent(pageName);
}