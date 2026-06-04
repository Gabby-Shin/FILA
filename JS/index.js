// const container = document.querySelector('.slide_container');
//
// // 👉 무한 슬라이드 위해 복제
// container.innerHTML += container.innerHTML;
//
// let scrollAmount = 0;
// let isDown = false;
// let startX;
// let scrollLeft;
//
// // 👉 자동 슬라이드
// function autoSlide() {
//     scrollAmount += 0.5; // 속도 (조절 가능)
//     container.scrollLeft = scrollAmount;
//
//     if (scrollAmount >= container.scrollWidth / 2) {
//         scrollAmount = 0;
//     }
// }
//
// let interval = setInterval(autoSlide, 16);
//
// // 👉 마우스 올리면 멈춤
// container.addEventListener('mouseenter', () => {
//     clearInterval(interval);
// });
//
// container.addEventListener('mouseleave', () => {
//     interval = setInterval(autoSlide, 16);
// });
//
// // 👉 드래그 시작
// container.addEventListener('mousedown', (e) => {
//     isDown = true;
//     startX = e.pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
//     container.style.cursor = 'grabbing';
// });
//
// // 👉 드래그 중
// container.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - container.offsetLeft;
//     const walk = (x - startX) * 2; // 드래그 속도
//     container.scrollLeft = scrollLeft - walk;
// });
//
// // 👉 드래그 끝
// container.addEventListener('mouseup', () => {
//     isDown = false;
//     container.style.cursor = 'grab';
// });
//
// container.addEventListener('mouseleave', () => {
//     isDown = false;
//     container.style.cursor = 'grab';
// });
