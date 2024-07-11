

import './App.css'
import Input from './Input'
import LikerBoy from './LikerBoy'
import Name from './Name'
import Players from './Players'
import Checked from "./Checked"
import Form from './Form'
import Users from './Users'
import Posts from './Posts'

// import Students from './Students'

function App() {

  // const students = ["ratna", "sakiba", "nafi", "nazma"]

  // const students = [
  //   {name: "Nazma", roll: 54, id: 1},
  //   {name: "Sakiba", roll: 53, id: 2},
  //   {name: "Ratna", roll: 52, id: 3},
  //   {name: "Nafi", roll: 51, id: 4},
  // ]

 function handleClick(){
  alert("button clicked")
 }

 const handleClick2 = () =>{
  alert("button clicked")
 }
 const handleClick4 = (num) =>{
  alert(num + 5)
 }




  return (
    <>
      <h1 idName='ratna'>Vite + React</h1>
      <Posts></Posts>
      {/* <Users></Users> */}
      {/* <Form></Form> */}
     {/* <Checked></Checked> */}
      {/* <Form></Form> */}
      {/* <Checked></Checked> */}
      {/* <Input></Input> */}
      {/* <Name></Name> */}
      {/* <Players></Players> */}
      {/* <LikerBoy></LikerBoy> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{alert("button clicked")}}>Click Me3</button>
      <button onClick={()=>{handleClick4(2)}}>Click Me4</button> */}
      {/* {
        students.map(student=> <Students name={student}></Students> )
      } */}
   
   {/* {
    students.map(abir=> <Students students={abir}></Students>)
   } */}
   
     
      {/* <List task="learn jsx" isDone={true}></List>
      <List task="learn component" isDone={true}></List>
      <List task="learn map" isDone={false}></List> */}
      {/* <Product name="laptop" price="55000"></Product>
      <Product name="mobile" price="17000"></Product>
      <Product name="watch" price="7000"></Product>
      <Person/>
      <Person/> */}
      {/* <Product name="laptop" price="55000"></Product>
      <Product name="mobile" price="17000"></Product>
      <Product name="watch" price="7000"></Product> */}
    </>
  )
}


// function Person(){
// const age = 20;
// const money = 200
// const personDetails ={
//   name: "Abul",
//   brother: "kabul"
// }
//   return (
//     <div style={{
//       border: "2px solid tomato",
//       padding: "20px",
//       margin: "20px"
//     }}>
//       <h3>I am {personDetails.brother}</h3>
//       <p>His age: {age}</p>
//       <p>his money: {money}</p>
//     </div>
//   )
// }


function Product({name, price}){

  return(
    <div style={{
      border: "2px solid tomato",
      padding: "20px",
      margin: "20px"
    }}>
    <h3>Name: {name} </h3>
    <p>Price: {price}</p>

    </div>
  )
}


export default App
