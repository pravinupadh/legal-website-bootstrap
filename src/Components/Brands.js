import React from 'react'
import icon1 from '../Images/facebook.png'
import icon2 from '../Images/walmart.png'
import icon3 from '../Images/starbucks.png'

function Brands() {
    return (
        <div>
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="brand-icon col-md-5 offset-md-1">
                        <img src={icon1} alt="" width={"20%"} height='auto' className='mx-sm-4 mx-2' />
                        <img src={icon2} alt="" width={"20%"} height='auto' className='mx-sm-4 mx-2' />
                        <img src={icon3} alt="" width={"20%"} height='auto' className='mx-sm-4 mx-2' />
                    </div>

                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-4 mb-lg-0 mb-sm-3 text-center">
                                <div className="card bg-info">
                                    <div className="card-body">
                                        <h3 className='font-weight-bolder' >93%</h3>
                                        <h6 className='font-weight-bolder'>Order Shipped in less than 24 hours</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-lg-0 mb-sm-3 text-center">
                                <div className="card bg-success">
                                    <div className="card-body">
                                        <h3 className='font-weight-bolder' >93%</h3>
                                        <h6 className='font-weight-bolder'>Order Shipped in less than 24 hours</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-lg-0 mb-sm-3 text-center">
                                <div className="card bg-danger">
                                    <div className="card-body">
                                        <h3 className='font-weight-bolder' >93%</h3>
                                        <h6 className='font-weight-bolder'>Order Shipped in less than 24 hours</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands
