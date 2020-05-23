import React from 'react';
import logo from './logo.svg';
import './App.css';
// props
// <App name={"홍길동"} sex={"남자"} age={"30"}/>
function App(props) {
    const msg=props.msg;
    const data=msg.split("\n"); //[React,Redux...] [{},{}]
    const print=data.map((subject)=>
       <li>{subject}</li>
    )
  return (
    <div>
      {/*<h1>이름:{props.name}</h1>
      <h1>성별:{props.sex}</h1>
      <h1>나이:{props.age}</h1>*/}
      <ul>
          {print}
      </ul>
    </div>
  );
}

export default App;
