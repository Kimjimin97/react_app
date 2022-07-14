## anync_await

then 대신 사용

```javascript
const getMovies = async () => {
  await fetch(``);
  const json = await reponse.json();
  setMovies(json.data.movies);
  setLoading(false);
};
```

```javascript
const getMovies = async () => {
  await( await fetch(``);).json()
  setMovies(json.data.movies);
  setLoading(false);
};
```

## movie component 만들기

movie component는 뭘까?
아 영화 페이지에 대한 코드가 길기 때문에 component를 만들어서 연결해준다.
이대 props를 사용해서 데이터를 받아온다.

이때 keys는 React.js에서만, map 안에서 component들을 render할 때 사용된다.

## router 만들어주기

공식문서 튜터리얼
react-route-dom 을 사용하기 위해서 라이버리 추가하기
Switch 라우터 찾기

- 홈 라우터
-

html link가 아닌 router를 사용하는 이유
영화 제목을 클릭하면, 화면 전체가 재실행 된다.

하지만 React를 사용한다면 전체 재실행을 피할 수 있다.
이걸 위해 존재하는 컴포넌트가 있다 Link라고 하고
Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트다.

페이지는 넘어가지만 브라우저가 새로고침되지 않는다.
-> 빠르게 실행되는 것 처럼 보인다.

이전에는 App 컴포넌트가 모든 것을 다하고 있었다.
그 다음에는 App 컴포넌트에 만들었던 모든 로직을 별개의 장소로 옮겼다.
home이라는 별개의 컴포넌트로
