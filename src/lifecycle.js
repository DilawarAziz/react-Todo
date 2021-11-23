

// import React from "react";





// class Lifecycle extends React.Component {


  // constructor() {
  //   super()
  //   this.state=({
  //   //  data:"that's me",
  //    count:0,
  //   //  first:"constructer lifecylce method run the first in all the lifecycle events"
  //   })
  //   console.log(this.state.first)

  // }

  // static getDerivedStateFromProps(){
    //   console.log("getDerivedStateFromProps==>")
      // return {
      //   count:5
      // }
    
  // this life cycle is static mean we can not get (this) key word in these function
  // this life cylce run before render and after the constructor lifecylces
  // this function also run the state or props updates
  // the return key is important in this funtion 
  // }
// 
  // componentDidMount(){
    // this function run after the render lifecycle 
    // this is mostly used when we get data from firebase because 
    // we want to render our code completly and then gat data from firebase
  //   console.log("componentdidmount")
  // }



// shouldComponentUpdate(){
//   console.log("shouldComponentUpdate")
// // this function stop updating of the component or the rendering Lifecycle agian 

//  return true
// }
// getSnapshotBeforeUpdate(preprops,prestate){
//   console.log("getSnapshotBeforeUpdate==>",prestate)
//   return "snapshot==>"
  // as from the name we know that this function get the snapshot before update of the props 
  // and the state
  // anything we return here is send to the  componont did mount 
  // for props we use this in the component where we gets props
// }
// componentDidUpdate(preprops,prestate,snapshot){
//   console.log("componentDidUpdate==>",snapshot,prestate)
// this get the snapshot after update of the props and the state
// in the third parameter we get the return value from the before update function
// }
// componentWillUnmount(){
//   console.log("this.componentWillUnmount")
  // this works in or under the component the one we want to unmount
  // this function work in the rendering lifecylce with the if condition
  // we use condion and return true or false
// }
//   render(){
// console.log("render")
//     return(
//       <div style={{textAlign:"center"}}>
//         <h1>
//           life cycle in react.js
//         </h1>
//         {this.state.count<5 &&  <Footer count={this.state.count}/>}
//       <h1>{this.state.count}</h1>
//         <button onClick={()=>this.setState({count: this.state.count + 1})}>increament</button>
//         <button onClick={()=>this.setState({count: this.state.count - 1})}>Decreament</button>
//       </div>
//     ) 
//   }
// }
// export default Lifecycle