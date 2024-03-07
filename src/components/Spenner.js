import React, { Component } from 'react'
// import spiner from './spiner.gif';
import spineer from './spinner.webp';

export class Spenner extends Component {
  render() {
    return (
      <div>
        <div className=" container text-center my-3" >
            <img src={spineer} alt='loading' style={{width:"80px"}}/>
        </div>
      </div>
    )
  } 
}

export default Spenner
