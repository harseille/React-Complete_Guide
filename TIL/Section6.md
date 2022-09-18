# React Components Styling

inline스타일
css에 최우선 순위 -> 모든 스타일을 오버라이드

class 선택자
스타일의 범위가 단일 컴포넌트에만 국한 되지 않는다.
다른 컴포넌트가 같은 class 선택자를 가지고 있으면 영향을 미치게 된다.

## Styled Component

특정 스타일이 첨부된 컴포넌트를 구출할 수 있도록 도와주는 패키지
스타일이 첨부되는 컴포넌트에만 영향을 미치고 다른 컴포넌트에는 영향을 미치지 않는다.

```bash
npm install --save styled-components
```

taged templete literal

## CSS Module

css 클래스나 css 파일을 가지고 그 클래스 이름을 고유하게 바꾸는 것이 핵심작업

css파일에서 설정한 css 스타일의 범위가 파일을 임포트하는 컴포넌트에 한정된다
