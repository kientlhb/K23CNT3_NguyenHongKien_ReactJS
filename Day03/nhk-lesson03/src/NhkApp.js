import NhkClassComp from "./Components/NhkClassComp";
import NhkFuncComp from "./Components/NhkFuncComp";
import NhkJsxExpression from "./Components/NhkJsxExpression";

function NhkApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> React JS Lession03 - Nguyen Hong kien</h1>
      <NhkJsxExpression/>

      <hr/>
      {/*Su dung function Components */}
      <NhkFuncComp/>
      {/*Su dung class Components*/}
      <NhkClassComp></NhkClassComp>
      
    </div>
  );
}

export default NhkApp;
