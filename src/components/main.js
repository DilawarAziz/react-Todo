import { React, Component } from "react";
import '../App.css';
import img from "../logo.jpg"



class Main extends Component {


    
    render() {
        // console.log(this.props.getdata)
        return (
 <div id="main">
     <h1 >main</h1>
     <img src={img} alt="dg" width="100px" height="100px" id="img" />
     <h1>name : {this.props.name1}</h1>
     <h1>name : {this.props.email}</h1>





                <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
            <input name="name1" onChange={(a)=>this.props.setdata(a)} type="text" readonly className="form-control-plaintext" id="staticEmail" />
            <button >getname</button>
        </div>
    </div>
    <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
            <input onChange={(a)=>this.props.setdata(a)} name="email"   type="password" className="form-control" id="inputPassword" />
            <button>getemail</button>
        </div>
    </div>


                {/* the props we get from parent component are called like this  */}
                {/* (this.props.name) if we write only this.props this get all the 
            props from the parent element */}
                {/* the data is send to the child elements in the function argument we get from props */}
                {/* {this.props} */}
                {/* <h1 >{this.props.name1}</h1>
                <h1 >{this.props.price}</h1>
                {this.props.foo("propsasdf")} */}
            </div>
        )
    }

}
export default Main