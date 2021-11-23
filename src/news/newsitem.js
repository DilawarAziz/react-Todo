import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {imageurl,heading,highlight}=this.props
        // console.log(highlight)
        return (
            <div>
                <div >
                    <div className="col">
                        <div className="card">
                            <img src={imageurl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{heading}</h5>
                                <p className="card-text">{highlight}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Newsitem
