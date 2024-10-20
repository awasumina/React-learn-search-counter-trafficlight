// import User from "./app/user";
// import Trafficlight from "./app/trafficlight";
import Counter from "./app/counter";
import Search from "./app/search";
import Trafficlight from "./app/trafficLight";
import Information from "./components/information";
import { Profile } from "./components/information";
// import Information,{Profile} from "./components/information";
// const App = () => {

//   const car ={
//     model : "bmw",
//     make : 2018,
//     name : 'fff'
//   }

//   const person ={
//     name : 'Sam',
//     bod : '2018',
//     address : {
//       zip :555,
//       city : 'banepa'
//     },
//     age : 100,
//     phoneNumber : 989898989889,
//     education :{
//       degree:'master',
//       level : 'A',
//     },
//     hasCitizenship : false,

//   }

//   const apple={
//     model:'iphone 5',
//     releaseDate :2020,
//     price : 200000
//   }

// //to access the object properties
// // console.log(apple.model);
// // console.log(apple['releaseDate']);
// // console.log(person.education.degree);
// // console.log(person.education.level);


// //to change the const value using object
// car.model='ferrari';
// // console.log(car.model);

// //person will
// const carPerson ={...car, ...person, name :'rajan'};
// console.log(carPerson);

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>
//       {/* <User /> */}
//     </div>
//   );
// };

// values - curly , element - small bracket
function App(){
  const person ={
    name: 'joe john',
    email: 'awa@gmail.com',
    address: {
      city: 'banepa',
      tole:'kanthu'
    }
  };
  function handleClick(){
    alert('Hello');
  }

  const handlePress=()=>{
    prompt('bye');
  }
  return(
    <div>
      <h1>Personal Information</h1>
      <Search/>
      <h2>{person.name}</h2>
      <h3>{person.email}</h3>
      <span>{person.address.city}</span>
      <span>{person.address.tole}</span>
      {/* <span>{person.address}</span>     not allowed to show object */}

      {/* calling profile function that was imported */}
      <Profile/> 
      <Information/> 
      <Counter/>
      <Trafficlight/>
      <br /><button onClick={handleClick}>Click</button>
      <button onClick={handlePress}>Press</button>

    </div>
  )
}

export default App;
