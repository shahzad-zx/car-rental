import React, { useEffect, useState } from "react";

const UseOne = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setUsers(data)),
    );
  }, []);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default UseOne;
// UseEffect - API Calls, asynchronous tasks ke liye we use useEffect.
// When your component depends on third party things like urls or something and you want to sync the data ,you can do  with the help of useEffect hook.
// sYNTAX : useEffect(callback function , dependency array)
// eariler when there were no functional components, in class based components, this thing was done with the help of "React Lifecycle methods" , now class baseed components are gone, and react life cycle methods are being used under useEffect Hook
// There were three methods
// 1. componentDidMount() >> iska mtlb component ka DOM mei enter hona ya create hona
// 2 . componentDidUpdate() >> iska mtlb any changes smaller or larger in the UI or anything makes the rendering / updating of the component
// 3. componentWillUnmount() >> the component will be removed from the DOM Tree.
// UseEffect Hook contains the dependency array jo ki inn teeno lifecycle methods ko justify krti hai
// dependency array  -  Case 1- no dependecy array - uss case mei on every page load, ui change, component will render or api will call
// Case -2- [] >> empty dependency array . isme on reload the api call will take place just once .
//  Case -3- [passing state] >> only state change ke upar apki api call hogi other wise nhi , state bhi whi jo aap iss array mei pass kroge
