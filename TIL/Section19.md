# 리덕스 고급

- 비동기 작업 처리 방법
- 리덕스 devTools

## side Effects, 비동기처리

대전제: 리듀서 함수는 반드시 순수 함수여야 하며 부수효과가 없고 동기식이어야 한다.
즉, 리듀서 함수는 비동기 코드는 없고 부수효과도 없어야한다.

그럼 비동기 작업(http 통신 등)은 어디에서 어떻게 처리 시켜야할까?

1. Syncronous, side-effct free code

- reducers 선호
- action creators or components 피하기

2. ayncronous code or code whith side-effect

- action creators or components 선호
- reducers 사용금지

## redux와 같이 useEffect 사용하기

새 사태를 서버와 동기화하려는 경우
프론트엔드에서 파생된 새로운 상태로 서버를 업데이트하려면
프론트엔드에서 작업을 수행하고 리덕스가 스토어를 업데이트하도록 하면된다.

## redux devTools
