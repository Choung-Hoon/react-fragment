import Column from "./Column";
import DivComponent from "./DivComponent";
import FragmentTagComponent from "./FragmentTagComponent";
import FragmentComponent from "./FragmentTagComponent";

import "./style.css";

function App() {
  return (
    // <div className="App">
    //   <h1>안녕하세요. 리액트</h1>
    //   <p>반가워요</p>
    //   <DivComponent></DivComponent>
    //   <FragmentComponent></FragmentComponent>
    //   <FragmentTagComponent></FragmentTagComponent>
    // </div>
    <div className="App">
      <>
        <div className="b1">
          table 안에서 사용하는 컴포넌트는 DIV 사용 불가 컴포넌트에서 태그 반환 시<br />
          fragment로 감싸서 반환하면 된다.
          <table>
            <tbody>
              <tr>
                <Column></Column>
              </tr>
              <tr>
                <Column></Column>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="sb b1">
            <DivComponent />
          </div>
          <div className="sb b1">
            <FragmentComponent />
          </div>
          <div className="sb b1">
            <FragmentTagComponent />
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
