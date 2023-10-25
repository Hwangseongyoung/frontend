let userid = document.querySelector(".userid");
    let passwd = document.querySelector(".passwd");
    let button = document.querySelector("button");

    // 내부함수 방법
    // button.onclick = function(){
    //   alert("ok");
    // }

    // button.onclick = () => {
    //   alert("ok");
    // }

    // button.addEventListener(이벤트, 함수);

    // 페이지 로딩 후 실행되는 자바스크립트
    window.onload = () => {
      userid.focus();
    }

    button.addEventListener('click', function(e) {
      // 이벤트 발생 시 동작 처리
      e.preventDefault();

      if(userid.value == "") {
        alert("아이디를 입력하세요.");
        userid.focus();
        return false;
      }
    });

    // input 버튼 누르면 다음 페이지로 이동하는 특징
    // button.addEventListener('click', (e) => {
    //   e.preventDefault(); // 이동하는걸 막는다
    //   alert("ok");
    // });