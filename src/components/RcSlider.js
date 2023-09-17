import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
// import sliderImage from './slider-background.jpg'; 

const style = { width: 800, margin: 100 };
const marks = {
  "": "",
  0: <strong>0</strong>,
  26: "26",
  40: "40",
  75: "75",
  100: {
    style: {
      color: "red",
    },
    label: <strong>100</strong>,
  },
};
function log(value) {
  console.log(value); //eslint-disable-line
}
function RcSlider() {
  return (
    <><><><><div>
      <div style={style}>
        <h1>Get an Instant Quote</h1>
        <p>Number of custom characters </p>
        <Slider
          range
          min={0}
          marks={marks}
          step={null}
          onChange={log}
          defaultValue={[0]}
          allowCross={false}
          pushable />
           {/* <div className="slider-background">
        <img src={sliderImage} alt="Slider Background" />
      </div> */}
      </div>
    </div><div style={style}>

        <p> Number of characters from our library</p>
        <Slider
          range
          min={0}
          marks={marks}
          step={null}
          onChange={log}
          defaultValue={[0]}
          allowCross={false}
          pushable />
      </div></><div style={style}>

        <p>Length of animation (Seconds)</p>
        <Slider
          range
          min={0}
          marks={marks}
          step={null}
          onChange={log}
          defaultValue={[0]}
          allowCross={false}
          pushable />


      </div></><div className="checker">
        <p>Do you need a professional voice over ?</p>
        <input type="checkbox"></input>
        <p>Product placement</p>
        <input type="checkbox"></input>
       
      </div></><div className="checker">
       <label for="Email"><b>Email Your Quotation</b></label>
     <input type="email" placeholder="Email"></input>
     <button type="submit">Send Results</button>
      </div></>
      
  
      
  // </div>
// </div>
  );
}
export default RcSlider;
