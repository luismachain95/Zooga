import React, { Component } from 'react';
import './Zoo.css';

class Zoo extends Component {

    constructor(props){
        super(props)

        this.state = {
            image: this.props.image,
            imageWidth: Number(this.props.width),
            imageHeight: Number(this.props.height),
            lensWidth: 260,
            lensHeight: 260,
            lensTop: 0,
            lensLeft: 0,
            resultX: 0,
            resultY: 0,
            cx: 520/260, // = 2
            cy: 520/260,  // = 2  osea, la imagen va a ser agrandada el doble
            hoverVisor: false
        }
    }

    componentDidUpdate = (prevProps) => {  
        if (prevProps.image !== this.props.image) {
            this.setState({
                image: this.props.image
            })
        }
    }

    onMouseMove = (e) => {
        e.preventDefault();

        let position = this.getCursorPosition(e);

        this.setState({
            posx: position.x,
            posy: position.y
        })
        const {
            imageWidth,
            imageHeight,
            lensWidth,
            lensHeight,
            cx,
            cy
        } = this.state;

        let x = position.x - (lensWidth / 2);
        let y = position.y - (lensHeight / 2);

        if (x > imageWidth - lensWidth) {
            x = imageWidth - lensWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > imageHeight - lensHeight) {
            y = imageHeight - lensHeight;
        }
        if (y < 0) {
            y = 0;
        }

        this.setState({
            lensLeft: x,
            lensTop: y,
            resultX: x*cx,
            resultY: y*cy
        })
        
    }

    getCursorPosition = (e) => {
        let x = 0;
        let y = 0;
        
        const { left, top } = e.target.getBoundingClientRect()
        x = e.pageX - left;
        y = e.pageY - top;

        /* Corrige si hay scrolling */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        
        return {x : x, y : y};
    }

    hoverOn = (e) => {
        this.setState({ hoverVisor: true });
    }
    hoverOff = (e) => {
        this.setState({ hoverVisor: false });
    }

    render() {

        const {
            image,
            imageWidth,
            imageHeight,
            lensTop,
            lensLeft,
            resultX,
            resultY,
            cx,
            cy,
            hoverVisor
        } = this.state;

        const hover = hoverVisor ? 'block' : 'none';

        const styleLens = {
            top: `${lensTop}px`,
            left: `${lensLeft}px`,
            display: hover
        }

        const styleResult = {
            backgroundImage: `url(${image})`,
            backgroundSize: `${imageWidth * cx}px ${imageHeight * cy}px`,
            backgroundPosition : `-${resultX}px -${resultY}px`,
            display: hover
        }

        
        return (
            <div className="zoo">
                <div className="zoo-content">
                    <div className="zoo-visor" 
                        onMouseMove={this.onMouseMove} 
                        onMouseEnter={this.hoverOn}
                        onMouseLeave={this.hoverOff}
                        >
                    </div>
                    <div className="zoo-lens" style={styleLens}></div>
                    <img src={image} width={imageWidth} height={imageHeight} alt="" />
                </div>
                <div className="zoo-result " style={styleResult} ></div>
            </div>
        );
    }
}

export default Zoo;