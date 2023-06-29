document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelectorAll('.category #menu li');
  const section1 = document.querySelector('#main');
  const section2 = document.querySelector('#about');
  const section3 = document.querySelector('#project');
  const section4 = document.querySelector('#contact');
  const top1 = section1.offsetTop;
  const top2 = section2.offsetTop;
  const top3 = section3.offsetTop;
  const top4 = section4.offsetTop;

  const menuArr = [
    top1, top2, top3, top4
  ]

  // 카테고리 메뉴 클릭시 해당 offsetTop값으로 스크롤 이동
  menuArr.forEach((arr, i) => {
    menu[i].onclick = () => {
      window.scroll({ top: arr, behavior: "smooth" })
    };
  });
});