import React, { Component } from "react";

class Thumb extends Component {

    render() {

        const {
            id,
            active,
            clickThumb,
            image
        } = this.props;
        
        const name = active ? 'zooga-thumb active': 'zooga-thumb';
        return (
           <div className={name}
                onClick={() => clickThumb(id)}
           > 
                <img src={image.thumb} alt="" width="50" height="50"/>
           </div> 
        )
    }
}

export default Thumb;
