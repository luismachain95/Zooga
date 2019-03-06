import React, { Component } from "react";
import Thumb from './Thumb';

class Thumbs extends Component {

    render() {

        const {
            images, //Toda las Imagenes
            index,
            clickThumb
        } = this.props;

        return (
           <div className="zooga-thumbs">
           {
                images.map((image, j) => {
                    let active = (j === index)? true: false;
                    return (
                       <Thumb 
                            key={j}
                            id={j}
                            active={active}
                            clickThumb={clickThumb}
                            image={image}
                       /> 
                    )
                })
            }
           </div> 
        )
    }
}

export default Thumbs;