// import React from 'react'
// import { useState ,useEffect} from "react";
// function Hooks() {
//     const [name1, setname] = useState("Dilawer Aziz")
//     const [email, setemail] = useState(null)
//     const [style,setstyle] =useState([{
//         bg:"grey",
//         textAlign:"center",
//         color:"white"

//     }])
// const [num, setnum] = useState([2345,35643643,24,564,234,6242])
    // 1)hooks =>
    // if we use the use effect Hooks with single parameter then these function will
    // run every render
//     useEffect(()=>{
//         console.log("i will run on every render")
//     })


// 2)
// use effect with another parameter of empty array will run 
// only first render
// we actualyy use these for getting data from api
//     useEffect(()=>{
//         console.log("i will run on first render")
//     },[])




// 3)
// use effects with speccific state or props in the array 
// will run if the same satate or props get updated 
//     useEffect(()=>{
//         console.log("i will run on first render as well when name update")
//     },[name1])


// 4)
// these will run when the component get unmount
//     useEffect(()=>{
//         return ()=>{
//             console.log("unmout")

//         }
//     })


//    const set = ()=>{
//         setname("ahmed")
//         setemail("dilaweraziz@555gmail.com")
//     }
// console.log(style[0])
//     return (

//         <div style={{textAlign: style[0].textAlign,backgroundColor:style[0].bg,color:style[0].color}}>
//             <h1>{name1}</h1>
//             {console.log("render")}
//             <h1>{email}</h1>
//            <ul>{num.map((a,i)=>{
//             //    console.log(a)
//               return  <li key={i}>{a}</li>
//             })}</ul> 
//             <button onClick={()=>set()}>setname</button>
//         </div>
//     )
// }
// export default Hooks


