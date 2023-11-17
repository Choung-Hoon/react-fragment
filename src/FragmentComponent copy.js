import React from "react";

const FragmentComponent = () => {
  return (
    <React.Fragment>
      <span>div대신 프래그먼트를 사용했기 때문에 flex, space-between이 동작한다.</span>
      <h1>안녕. 리액트</h1>
      <p>방가</p>
    </React.Fragment>
  );
};

export default FragmentComponent;
