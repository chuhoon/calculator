# 계산기 v1

[배포링크:elephant:](https://chuhoon.github.io/calculator/index.html)

![calculator](https://user-images.githubusercontent.com/68219145/168583615-34b8a1fe-e29c-4deb-a642-02e4eacade23.gif)

### 개발스택

- <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>

- <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>

- <img src="https://img.shields.io/badge/Javascript-ffb13b?style=flat-square&logo=javascript&logoColor=white"/>

<br>

### 수정사항

1. 연산자 버튼 예외처리

2. eval() 제외 Function() 구현

<br>

### 느낀점

1. DOM과 forEach 반복문을 생성해서 배열 속에 있는 것들을 버튼으로 생성하고 wrap 속에 추가하는 방법을 활용해 HTML을 간결하게 사용했습니다. `문법을 배우는 것이 지루했었는데 DOM을 접하기 JavaScript가 재밌어지는 계기가 되었습니다.`

2. 함수와 반복문 조건문을 활용해 계산하는 식을 만들어봤습니다. `보고 해석하는 것은 익숙하지만 직접 생각해서 0에서 100까지 짜는 것은 쉽지 않다는 것을 느꼈습니다. 코테 문풀과 코드를 많이 짜봐야겠다 라는 생각을 했습니다.`

3. `eval() 함수의 단점을 알았습니다.` function을 통해 변경할 것입니다.

<br>

### eval() is devil 사용하지 않는 이유

> eval 함수를 사용해서 계산기를 만들어봤습니다. v2는 eval 함수 대신에 다른 방법을 사용해 계산기를 만들 것입니다.

- eval 함수는 문자열로 표현된 JavaScript 코드를 계산하는 함수입니다. eval 함수 사용을 하는 것은 엄청나게 위험합니다. 왜냐? `eval()을 사용하면 해커가 위험한 코드를 사용 가능`하기 때문입니다.

- `eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수`입니다. 악의적인 영향을 받았을 수 있는 문자열을 eval()로 실행한다면, 당신의 웹페이지나 확장 프로그램의 권한으로 사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래할 수 있습니다. 또한, 제3자 코드가 eval()이 호출된 위치의 스코프를 볼 수 있으며, 이를 이용해 비슷한 함수인 Function으로는 실현할 수 없는 공격이 가능합니다.

- 또한 최신 JS 엔진에서 여러 코드 구조를 최적화하는 것과 달리 eval()은 JS 인터프리터를 사용해야 하기 때문에 다른 대안들보다 느립니다.

- 추가로, 최신 JavaScript 인터프리터는 자바스크립트를 기계 코드로 변환합니다. 즉, 변수명의 개념이 완전히 없어집니다. 그러나 eval을 사용하면 브라우저는 기계 코드에 해당 변수가 있는지 확인하고 값을 대입하기 위해 길고 무거운 변수명 검색을 수행해야 합니다. 또한 eval()을 통해 자료형 변경 등 변수에 변화가 일어날 수 있으며, 브라우저는 이에 대응하기 위해 기계 코드를 재작성해야 합니다.
