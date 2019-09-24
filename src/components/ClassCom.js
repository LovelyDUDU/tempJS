import React, { Component } from 'react';

class ClassCom extends Component {
    render() {
        return (
            <div>
                <h3>안녕!!!클레오파트라!!! 세상에서 제일가는 포테이토칩!!!</h3>
                I'm {this.props.name}
            </div>
        );
    }
}

export default ClassCom;