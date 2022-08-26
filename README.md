## 김태완

## 실행

`npm run start` or `yarn start`

## 사용기술

- react
- typescript
- redux-toolkit
- styled-components
- axios

## 프로젝트 설명

- src/api : 문제리스트, 유사문제리스트 데이터를 받기위한 api, .env파일에서 base URL을 가져온다.
- src/assets : 폰트, 아이콘을 저장
- src/components
  - Board : 각 문제를 보여주기위한 컴포넌트
  - Layout : 페이지의 전체 레이아웃에 해당하는 컴포넌트 (현재는 Wrap만 있음)
  - Problems : 문제 리스트
  - SimilarProblems : 유사 문제리스트
- src/hooks
  - useMediaSize : 디바이스의 사이즈를 알려주는 훅 (사용하진 않았음)
  - useProblems : 데이터에 관련된 비즈니스 로직을 처리
- src/pages : 라우팅이 필요한경우 각 route에 사용하게 될 페이지 컴포넌트
- src/store : redux-toolkit을 활용하여 전역변수를 다루는 store
- src/styles : 글로벌 스타일, 폰트를 처리
- src/types : 타입
- src/util
  - replaceLevel : 레벨 number를 난이도 string으로 변환해주는 헬퍼

## 구현사항

✔ 문제리스트 불러오기
✔ 유사문제 리스트 불러오기
✔ 학습지 재구성하기
✔ 난이도, 문제 수 총합 구성하기
✔ 추가작업
