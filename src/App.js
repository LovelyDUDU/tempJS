// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import FunCom from './components/FunCom.js';
// import ClassCom from './components/ClassCom';
// import ClaaCom2 from './components/ClaaCom2';
// import AlbumCom from './components/AlbumCom';
import React, { Component } from 'react';
import ImageCom from './components/ImageCom';
// function App() {
//     const src_arr = ["https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EB%B1%85%EA%B0%88%EA%B3%A0%EC%96%91%E3%85%87#","https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EB%B1%85%EA%B0%88%EA%B3%A0%EC%96%91%E3%85%87#","https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EB%B1%85%EA%B0%88%EA%B3%A0%EC%96%91%E3%85%87#"];
//   return (
//     <div className="App">
//         <FunCom name="자식 컴포넌트" />
//         <ClassCom name="클래스형 컴포넌트" />
//         <ClaaCom2 />
//         <AlbumCom name="포테토칩" code1="https://kin-phinf.pstatic.net/20170605_213/1496642705316fQDfT_JPEG/1496642705105.jpeg?type=w750" />
//     </div>
//   );
// }

// class App extends Component{
//     _Click=()=>{
//         alert("클릭");
//     }
//     render(){
//         return(
//         <center>
//             <button onClick={this._Click}></button>
//         </center>
//         );
//     }
// }

class App extends Component {
    arr = ["나혜원", "기은비"];
    render() {
        return (
            <center>
                {
                    this.arr.map(
                        (v) => (
                            <ImageCom name={v} />
                        )
                    )
                }
            </center>
        );
    }
}
export default App;