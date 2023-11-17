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
