let scrollTimeout;

window.addEventListener('wheel', function(event) {
    event.preventDefault();
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

