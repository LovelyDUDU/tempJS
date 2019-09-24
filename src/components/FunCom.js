import React from 'react';
function FunCom(props) {
    return (
        <div>
            <h5>1{props.name}2</h5>
            <h1>안녕 클레오파트라 세상에서 제일 가는 포테이토칩</h1>
        </div>
    );
}

function FunCom2() {
    return (
        <div>
            <h2>안!녕! 클레오파트라! 세상에서 제일가는 포테이토칩!</h2>
        </div>

    )
}
function App() {
    return (
        <div className="App">
            <FunCom />
            <FunCom2 />
        </div>
    );
}
export default FunCom;
