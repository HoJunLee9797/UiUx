 // 1 객체를 찾는다. Student stu = new Student(); => 객체배열에 저장 => Colletion Framework
    //document(화면에 있는 모든 UI객체를 다 가지고 있다. ) = > 어떻게?(CSS의 선택자 기능으로 탐색한다.)
    //한 개만 찾고 싶으면 id 줘야된다. class 이름으로 찾으면 => 객체 참조배열 [첨자] 반복문을 이용하면 된다.
    //하기 되어 있는 타입에는 8가지 타입이 들어 갈 수 있다
    // 
  let h1obj = document.querySelector("#heading"); 

  //2. 객체를 내마음대로 설정(속성(witdh height 등등), style속성, 제일많이씀[이벤트속성:on] , content: 이벤트설정)
  h1obj.onclick = ()=> {
    h1obj.style.color = "#ff0000";
    window.alert("h1을 클릭하였습니다");
  };