let progress = document.querySelector('.progress');

// progress.animate([keyframe],{option})
progress.animate([
    {width:'0vw'},
    {width:'100vw'}
    // {transform:'scale(0)'},
    // {transform:'scale(1)'}
],{
    // scroll-timeline github의 Usage 내용 복사
    timeline: new ScrollTimeline({
        scrollOffsets: [
            // progress가 움직일 때 무엇을 기준으로 애니메이트가 실행되었좋겠냐 -> 문서전체를 target으로 설정
            {target:document.body,edge:'start',threshold:1}, 
            {target:document.body,edge:'end',threshold:1}, 

        ]
    })
});

let allText=document.querySelectorAll('.text')
let delay=0;
/* allText.forEach(function(el,idx){}); */ //el 각각의 아이템, idx는 아이템의 index번호

allText.forEach((el,idx)=>{
    el.style.animationDelay=`${delay}s`;
    el.style.zIndex=allText.length - idx;
    el.classList.add('base-anim');

    delay += 0.12;
})







/////onload////////

window.onload = function () {
    const introSpan = document.querySelector('.intro span')
    const introP = document.querySelector('.intro p')
    const scrollDown = document.querySelector('.scrolldown')

    introSpan.style.opacity = '1'
    introP.style.opacity = '1'
    scrollDown.style.opacity = '1'
    scrollDown.style.bottom = '10vh'

}

// menu.addEventListener('mouseenter', () => {
//     longBar.style.width = '28px'

// })

// menu.addEventListener('mouseleave', () => {
//     longBar.style.width = '83px'

// })



///////cursor//////////////
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', e => {
    gsap.to(".cursor", {
        x: e.clientX - cursor.offsetWidth / 2.2,
        y: e.clientY - cursor.offsetHeight / 2.2,
        duration: 0.2,
    });
});



////////////////////////////////////////////////////////
/////////////////video//////////////////////////////////
////////////////////////////////////////////////////////

// // 영상 URL 배열
// const videos = ["img/07272023_193515.mov", "img/07292023_213955.mov", "img/12312022_011134.mov"];

// // 현재 영상 인덱스
// let currentVideoIndex = 0;

// // video 태그 선택
// const videoElement = document.querySelector(".video video");

// // 이전 버튼에 클릭 이벤트 추가
// document.querySelector(".video_btn .prev").addEventListener("click", () => {
//     // 현재 영상 인덱스 감소
//     currentVideoIndex--;
//     // 인덱스 범위 유지
//     if (currentVideoIndex < 0) {
//         currentVideoIndex = videos.length - 1;
//     }
//     // 영상 변경
//     videoElement.src = videos[currentVideoIndex];
// });

// // 다음 버튼에 클릭 이벤트 추가
// document.querySelector(".video_btn .next").addEventListener("click", () => {
//     // 현재 영상 인덱스 증가
//     currentVideoIndex++;
//     // 인덱스 범위 유지
//     if (currentVideoIndex >= videos.length) {
//         currentVideoIndex = 0;
//     }
//     // 영상 변경
//     videoElement.src = videos[currentVideoIndex];
// });













///////////active/////////////////
// const hbimg = document.querySelector('.hobby .hobbybox .hobby_img');

/////////////sticky///////////


// let preScollY=0;
// const page2 = document.querySelector(".page2 .container");
// const page3 = document.querySelector(".page3 .container");
// const page5 = document.querySelector(".page5 .container");

// window.addEventListener('scroll',function(){
//     if(pageYOffset >=preScollY){
//         page2.style.position = 'sticky'
//         page3.style.position = 'sticky'
//         page5.style.position = 'sticky'
//     }else{
//         page2.style.position = 'relative'
//         page2.style.height = '100vh'
//         page3.style.position = 'relative'
//         page3.style.height = '100vh'
//         page5.style.position = 'relative'
//         page5.style.height = '100vh'
//     }
//     preScollY=pageYOffset;
// });


/////////////NAME///////////

// const nameP = document.querySelector('.header .name p');

// hbimg.addEventListener('mouseenter',()=>{
//     nameP.style.color = "#F8C305";
//     nameP.style.textShadow = "-2px 2px 2px black";
    
// });

// hbimg.addEventListener('mouseleave',()=>{
//     nameP.style.color = "white";
//     nameP.style.textShadow = "none";
    
// });



/////////////swiper Btn////////////////////
/////////////swiper Btn////////////////////

const webswiperPrev = document.querySelector('.page6 .swiper .swiper-button-prev');
const proswiperPrev = document.querySelector('.page7 .swiper .swiper-button-prev');
const webswiperNext = document.querySelector('.page6 .swiper .swiper-button-next');
const proswiperNext = document.querySelector('.page7 .swiper .swiper-button-next');
const webworkPrev = document.querySelector('.page6 .work_btn .workbtn_prev');
const proworkPrev = document.querySelector('.page7 .work_btn .workbtn_prev');
const webworkNext = document.querySelector('.page6 .work_btn .workbtn_next');
const proworkNext = document.querySelector('.page7 .work_btn .workbtn_next');

webworkPrev.addEventListener('click', function() {
    webswiperPrev.click();
});

webworkNext.addEventListener('click', function() {
    webswiperNext.click();
});

proworkPrev.addEventListener('click', function() {
    proswiperPrev.click();
});

proworkNext.addEventListener('click', function() {
    proswiperNext.click();
});


///////////////web, project nav/////////////////////////////
///////////////web, project nav/////////////////////////////
const hobbybox2 = document.querySelector('.hobbybox.hb2');
const hobbybox3 = document.querySelector('.hobbybox.hb3');
const webswiper = document.querySelector('.page6 .swiper');
const pjswiper = document.querySelector('.page7 .swiper');
const webswiperNav = document.querySelector('.header .webnav .webnav_web');
const pjswiperNav = document.querySelector('.header .webnav .webnav_project');
const hobbyTxt = document.querySelector('.hobby_txt span');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page5 = document.querySelector('.page5');
const favoriteList = document.querySelector('.favoritelist');
const favoriteTxt1 = document.querySelector('.favorite_txt .ft1');
const favoriteTxt2 = document.querySelector('.favorite_txt .ft2');
const page5Txt = document.querySelectorAll('.page5 span');





// Create the Intersection Observer for webswiper
const observerWebswiper = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                webswiperNav.classList.add('active');
            } else {
                webswiperNav.classList.remove('active');
            }
        });
    },
    {
        threshold: 0.65
    }
);

// Create the Intersection Observer for pjswiper
const observerPjswiper = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                pjswiperNav.classList.add('active');
            } else {
                pjswiperNav.classList.remove('active');
            }
        });
    },
    {
        threshold: 0.65
    }
);

const observerpage2 = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                hobbyTxt.style.opacity= '1';
                hobbyTxt.style.transform= 'none';
                hobbybox2.style.opacity= '1';
                hobbybox3.style.opacity= '1';
                hobbybox2.style.transform= 'none';
                hobbybox3.style.transform= 'none';
        //     } else {
        //         hobbyTxt.style.opacity= '0';
        //         hobbyTxt.style.transform= 'translateY(50%)';
        //         hobbybox2.style.opacity= '0';
        //         hobbybox3.style.opacity= '0';
        //         hobbybox2.style.transform= 'translateY(50%)';
        //         hobbybox3.style.transform= 'translateY(50%)';
            }
        });
    },
    {
        threshold: 0.5
    }
);


const observerpage3 = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                favoriteList.style.top='32%'
                favoriteTxt1.style.opacity='1'
                favoriteTxt2.style.opacity='1'
            // } else {
            //     favoriteList.style.top='100%'
            //     favoriteTxt1.style.opacity='0'
            //     favoriteTxt2.style.opacity='0'
            }
        });
    },
    {
        threshold: 0.5
    }
);

const observerpage5 = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                page5Txt.forEach(function(txt) {
                    txt.style.opacity = '1';
                });
            // } else {
            //     page5Txt.forEach(function(txt) {
            //         txt.style.opacity = '0';
            //     });
            }
        });
    },
    {
        threshold: 0.875
    }
);



// Observe sections
observerWebswiper.observe(webswiper);
observerPjswiper.observe(pjswiper);
observerpage2.observe(page2);
observerpage3.observe(page3);
observerpage5.observe(page5);
//////////////thumbnail-click/////////////////////////////////////

const workthumbNails = document.querySelectorAll('.workthumbnail');
const webViews = document.querySelectorAll('.web_view a');

workthumbNails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function(e) {
       /*  e.preventDefault(); */ // Prevent default link behavior
        webViews[index].click();
    });
});



////////////////////summenu///////////////////////////////////////////////

const menuBtn = document.querySelector('.menu .menu_text');
const subMenu = document.querySelectorAll('.submenu ul li a');

let isMenuOpen = false; // 상태 변수

menuBtn.addEventListener('click', () => {
    for (let i = 0; i < subMenu.length; i++) {
        if (isMenuOpen) {
            subMenu[i].style.top = '30px'; // 원래 상태로 돌리기
        } else {
            subMenu[i].style.top = '0'; // top 값을 0으로 설정
        }
    }
    isMenuOpen = !isMenuOpen; // 상태 토글
});


////////////////////time////////////////////////

setInterval(function () {
    let today = new Date()

    let dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    let dayListEn = ['sunday', 'monday', 'tuesday', 'wedneday', 'thursday', 'friday', 'saturday']

    let hh = addZero(today.getHours())
    let mm = addZero(today.getMinutes())
    let ss = addZero(today.getSeconds())
    let yy = today.getFullYear();
    let MM = today.getMonth() + 1;
    let DD = today.getDate();
    let dd = dayListEn[today.getDay()]

    document.querySelector("#hours").innerHTML = hh
    document.querySelector("#min").innerHTML = mm
    document.querySelector("#sec").innerHTML = ss
    document.querySelector("#year").innerHTML = yy
    document.querySelector("#month").innerHTML = MM
    document.querySelector("#date").innerHTML = DD
    document.querySelector("#day").innerHTML = dd

    function addZero(num) {

        return (num < 10 ? "0" + num : '' + num)
    }
}, 1000)
