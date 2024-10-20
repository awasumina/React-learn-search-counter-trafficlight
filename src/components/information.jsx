// function Information(){
//     return <h1>Information</h1>

// }

// function Profile(){
//     return <h2>Profile</h2>
// }

// // export{Information,Profile}      esbata chahi multiple or single both paiyo, import garda {} required
// export {Profile};
// export default Information;      //aauta file ma auta matrai huna pauxa

function Information(props) {
  console.log(props);
  const { title, description } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

const Profile = (props) => {
  const { name, age, email = "no mail given" } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>{email}</p>
      {age && <p>{age}</p>}
    </div>
  );
};

export { Profile };
export default Information;
