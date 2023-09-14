import React from 'react'

function Jumbotron() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="row1">
                        <div className="col-lg-5 offset-4 w-25 w-md-50 text-center">
                            <h2 className='text-primary' >No More Operational Headaches. <span className='text-success'>Nice.</span></h2>
                        </div>
                    </div>

                    <div className="row2">
                        <div className="col-md-3 offset-md-4 text-center">
                            <p >Use NiceCommerce to offer quicker Shopping, boost your bottom lines and get back to focusing on stuff that really matters</p>
                        </div>
                    </div>

                    <div className="row3">
                        <div className="col-3 offset-4 text-center">
                            <button className='btn btn-primary btn-lg mb-2'>Let's Chat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
