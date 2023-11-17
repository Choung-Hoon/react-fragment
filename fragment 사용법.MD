1. 컴포넌트가 2개 이상의 요소로 구성된 경우

```js
const DivComponent = () => {
  return (
    <div>
      <span>div 때문에 flex, space-between이 동작하지 않는다.</span>
      <h1>안녕. 리액트</h1>
      <p>방가</p>
    </div>
    <React.Fragment>
      <span>div대신 프래그먼트를 사용했기 때문에 flex, space-between이 동작한다.</span>
      <h1>안녕. 리액트</h1>
      <p>방가</p>
    </React.Fragment>
    <>
      <span>div대신 프래그먼트를 사용했기 때문에 flex, space-between이 동작한다.</span>
      <h1>안녕. 리액트</h1>
      <p>방가</p>
    </>
  );
};

```

2. table 태그 아래에 들어가는 요소를 컴포넌트로 만들때 해당 컴포넌트가 2개 이상일 경우, div가 허용되지 않기 때문에 div 대신 사용
3. 배열의 결과를 반환할 때, key라는 prop 값이 필요한 경우 <React.Framgment key={idx}>를 사용한다.

```js
import React from "react";

// table 태그 내에서는 div 태그 사용 불가
const Column = () => {
  const todoList = ["밥먹기", "코딩하기", "커피 마시기"];

  return (
    <>
      {todoList.map((todo, idx) => (
        <React.Fragment key={idx}>
          <td>{todo}</td>
          <td>{todo}</td>
        </React.Fragment>
      ))}
    </>
  );
};

export default Column;
```
