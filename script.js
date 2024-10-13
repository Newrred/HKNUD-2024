let scrollTimeout;

window.addEventListener('scroll', function() {
    if (window.innerWidth <= 800) {
        let scrollTop = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight; // 전체 웹 높이에서 현재 화면 높이를 뺀 값

        // 스크롤에 따른 투명도 변화 (최대 1에서 0까지 서서히 사라지게)
        let opacity = 1 - (scrollTop / maxScroll);

        // 스크롤에 따른 이미지의 위로 올라가는 이동 (최대 100px 위로 이동)
        let translateY = Math.min(scrollTop / maxScroll * 100, 100);

        // 이미지에 적용할 스타일
        const scrollImage = document.getElementById('scrollImage');
        scrollImage.style.opacity = opacity;
        scrollImage.style.transform = `translateY(-${translateY}px)`;
    }
});

window.addEventListener('wheel', function(event) {
    // 화면 너비가 800px 이하일 때 기본 스크롤 동작 허용
    if (window.innerWidth <= 800) {
        return;
    }

    event.preventDefault(); // 기본 동작 방지 (화면 너비가 800px 이상일 때만)
    if (scrollTimeout) return;  // 스크롤 중복 방지

    let direction = event.deltaY > 0 ? 1 : -1;
    let scrollPosition = window.pageYOffset;
    let sectionHeight = window.innerHeight;

    // 현재 섹션의 번호 계산
    let currentSection = Math.round(scrollPosition / sectionHeight);
    let newPosition = (currentSection + direction) * sectionHeight;

    window.scrollTo({
        top: newPosition,
        behavior: 'smooth' /* 부드러운 스크롤 */
    });

    scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
    }, 1000); // 스크롤 후 딜레이
}, { passive: false });


const backToTopButton = document.getElementById('backToTop');

// 스크롤이 일정량 내려갔을 때 버튼 표시
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
        console.log(this.pageYOffset);
    } else {
        backToTopButton.style.display = 'none';
    }
});

// 버튼 클릭 시 상단으로 스크롤
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드럽게 스크롤
    });
});

// 메인그래픽 GIF hover 애니메이션
const ib_btn = document.querySelector('#interactionBusinessIcon');
const dp_btn = document.querySelector('#DigitalProjectIcon');
const bm_btn = document.querySelector('#brandManagementIcon');
const vp_btn = document.querySelector('#visualProjectIcon');

const ib_image = document.querySelector('#interactionBusiness_Graphic');
const dp_image = document.querySelector('#digitalProject_Graphic');
const bm_image = document.querySelector('#brandManagement_Graphic');
const vp_image = document.querySelector('#visualProject_Graphic');


// hover
ib_btn.addEventListener("mouseenter", function() {
    ib_btn.style.filter = "grayscale(1) brightness(100)";
    ib_image.style.backgroundImage = "url('./imgs/mainGraphics/web_green.gif')";
});
ib_btn.addEventListener("mouseleave", function() {
    ib_btn.style.filter = "grayscale(0)";
    ib_image.style.backgroundImage = "url('./imgs/ss/Artboard_green.png')";
});

dp_btn.addEventListener("mouseenter", function() {
    dp_btn.style.filter = "grayscale(1) brightness(100)";
    dp_image.style.backgroundImage = "url('./imgs/mainGraphics/web_blue.gif')";
});
dp_btn.addEventListener("mouseleave", function() {
    dp_btn.style.filter = "grayscale(0)";
    dp_image.style.backgroundImage = "url('./imgs/ss/Artboard_blue.png')";
});

bm_btn.addEventListener("mouseenter", function() {
    bm_btn.style.filter = "grayscale(1) brightness(100)";
    bm_image.style.backgroundImage = "url('./imgs/mainGraphics/web_yellow.gif')";
});
bm_btn.addEventListener("mouseleave", function() {
    bm_btn.style.filter = "grayscale(0)";
    bm_image.style.backgroundImage = "url('./imgs/ss/Artboard_yellow.png')";
});

vp_btn.addEventListener("mouseenter", function() {
    vp_btn.style.filter = "grayscale(1) brightness(100)";
    vp_image.style.backgroundImage = "url('./imgs/mainGraphics/web_pink.gif')";
});
vp_btn.addEventListener("mouseleave", function() {
    vp_btn.style.filter = "grayscale(0)";
    vp_image.style.backgroundImage = "url('./imgs/ss/Artboard_pink.png')";
});



