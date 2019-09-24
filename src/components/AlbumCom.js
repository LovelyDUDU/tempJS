import React, { Component } from 'react';

class AlbumCom extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                <img src={this.props.code1} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img>
            </div>
        );
    }
}

export default AlbumCom;