import React from 'react'
import { Button, Alert, Badge, Navbar, Nav, NavDropdown, Row, Card, Style, font } from 'react-bootstrap';

function End() {
    return (
        <div>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-4 mb-lg-0 mb-sm-3 offset-md-1">
                        <h2>Much, much more than just picking and packing</h2>
                        <button className='btn btn-primary btn-lg mt-3' >See Everything we do</button>
                    </div>

                    <div className="col-md-5 offset-md-1">
                        <div className="row">
                            <div className="col-md-4 mb-lg-0 mb-sm-3">
                                <div className="card text-left border-0 bg-light shadow ">
                                    <div className="border-top border-primary border-5 p-2">
                                        <h4 className='mt-3 fw-bold'>SAME DAY</h4>
                                    </div>
                                    <div className="card-body p-2 mt-2">
                                        <span>All Standards Orders placed by 2PM EST ship the same day</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-lg-0 mb-sm-3">
                                <div className="card text-left border-0 bg-light shadow ">
                                    <div className="border-top border-warning border-5 p-2">
                                        <h4 className='mt-3'>UNIQUE</h4>
                                    </div>
                                    <div className="card-body p-2 mt-2">
                                        <span>Unique unboxing experiences for different customers</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-lg-0 mb-sm-3">
                                <div className="card text-left border-0 bg-light shadow ">
                                    <div className="border-top border-success border-5 p-2">
                                        <h4 className='mt-3'>MANAGE</h4>
                                    </div>
                                    <div className="card-body p-2 mt-2">
                                        <span>Returns and inventory management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div >
    )
}

export default End
