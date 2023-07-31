import React, { Component } from 'react'
import Banner from './Banner'
import Product from './Product'

export default class  extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <Product/>
      </div>
    )
  }
}
