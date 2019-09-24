import React, { Component } from 'react';

class ClaaCom2 extends Component {
    render() {
        return (
            <div>
                {this.props.one}
                {this.props.two}
                {this.props.three}
            </div>
        );
    }
}

ClaaCom2.defaultProps={
    one:"원",
    two:"투",
    three:"쓰리",
}

export default ClaaCom2;