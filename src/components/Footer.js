import {React,Component} from "react"
import '../App.css';

class Footer extends Component {
  getSnapshotBeforeUpdate(preprops,prestate){
    console.log("getSnapshotBeforeUpdate==>",preprops)
    return null
    // as from the name we know that this function get the snapshot before update of the props 
    // and the state
    // anything we return here is send to the  componont did mount 
  }
  componentDidUpdate(preprops,prestate,snapshot){
    console.log("componentDidUpdate==>",preprops)
  // this get the snapshot after update of the props and the state
  // in the third parameter we get the return value from the before update function
  }
  componentWillUnmount(){
    console.log("khalassss")
  }
    render() {
  
  
      return (
        <div>
          <h1>{this.props.count}</h1>
          <h1 style={{backgroundColor:'royalblue',textAlign:'center'}}>Footer</h1>
        </div>
      )
    }
  
  }
  export default  Footer
    
  