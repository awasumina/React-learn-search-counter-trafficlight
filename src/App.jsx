// import Information from "./components/information"
// import { Profile} from "./components/information";
import Blog from "./app/blog";
// function App(){
//   return (
//     <div>
//       <Information title="New information" description="hello world"/>
//       <Information title="Old information" description="hello world"/>
//       <Profile name="sumina" age="22"/>

//       <Profile name="awa girl" />

//     </div>
//   )
// }



// const profileList=[
//   {
//     name:"hello",
//     age:20,
//     email:'hello@gmail.com'
//   },

//   {
//     name:"hello1",
//     age:20,
//     email:'hello1@gmail.com'
//   },

//   {
//     name:"hello2",
//     age:20,
//     email:'hello2@gmail.com'
//   }
// ];

// function App(){
//   return(
//     <div>
//       {profileList.map((user,index)=>{
//         return <Profile name={user.name} email={user.email} age={user.age}/>
//       })}
//     </div>
//   )
// }



function App(){
  return(
    <div>
      <Blog/>
    </div>
  )
}

export default App;