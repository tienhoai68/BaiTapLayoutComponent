import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="card bg-light border-0 h-100">
          <div className=" d-inline-block" style={{ height: 160, backgroundColor: 'rgba(200,201,200,1)' }}></div>
          <div className="card-body text-center ">
            <h4 className=" fw-bold">Cart title</h4>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem repellendus at quam cumque fugiat animi, odit nisi.</p>
          </div>
          
          <div style={{backgroundColor: 'rgba(230,227,227,1)' }} className=' border border-secondary'>
            <p className='mt-3' style={{marginLeft: 50, marginRight: 50,}}>
            <button className='btn btn-primary'>Fine Out More!</button>
            </p>
          </div>
        </div>
      </div>

    )
  }
}
