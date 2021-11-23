// import React from "react";
// import './App.css'
// import Footer from "./components/Footer";

// class Todo extends React.Component {
//   constructor() {
//     super()
//     this.state = ({
//       arr: [{ title: "ahmed", bool: false }, { title: "Dilawer", bool: false }],
//       // arr:[],
//       // name1:'fgjh'
//       value: ''
//     })
//   }


//   add_todo = () => {

//     // this.state.arr.push(this.state.value)
//     let obj = {
//       title: this.state.value
//     }
//     console.log(this.state.value)
//     this.state.value = ''
//     this.setState({
//       arr: [...this.state.arr, obj]
//       // arr: this.state.arr
//       // value: ''
//     })
//   }


//   delete_todo = (index) => {
//     // console.log(index)
//     this.state.arr.splice(index, 1)
//     this.setState({
//       arr: this.state.arr

//     })
//   }
//   edit_value = (i) => {
//     // let update = prompt("enter new value")
//     this.state.arr[i].bool = true
//     this.setState({
//       arr: this.state.arr

//     })
//     // console.log(this.state.arr.map((a)=>a.title) )
//     console.log(i)

//   }
//   handleChange = (a, i) => {
//     this.state.arr[i].title = a.target.value

//     // console.log()
//   }

//   update_value = (i) => {
//     this.state.arr[i].bool = false
//     console.log(this.state.arr[1].bool)
//     console.log(i)
//     this.setState({
//       arr: this.state.arr

//     })
//   }

//     delete_all = () => {
//       // this.state.arr=[]
//     this.setState({
//       arr : []
//     })

//   }
//   render() {


//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>Todo application</h1>
//         <input type="text" value={this.state.value} onChange={(a) => this.setState({ value: a.target.value })} />
//         <button onClick={this.add_todo} className="btn1 bg-primary">Add Todo</button>
//         <button onClick={this.delete_all} className="btn1 bg-primary">Delete Todo </button>
//         <ul>
//           {this.state.arr.map((v, i) =>
//             <li key={i}>
//               {v.bool ? <input onChange={(a) => this.handleChange(a, i)} type="text" /> : v.title}

//               {v.bool ?
//                 <button onClick={() => this.update_value(i)}>Update</button> :
//                 <button onClick={() => this.edit_value(i)}>Edit</button>
//               }


//               <button onClick={() => this.delete_todo(i)}>Delete</button>
//             </li>)}

//         </ul>
//       </div>
//     )
//   }
// }

// export default Todo



