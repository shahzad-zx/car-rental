import React, { useState } from "react";

const LocalStrg = () => {
  const [name, setName] = useState("");
  console.log("Name : ", name);
  let userData = [{name: "Shahzad"}, {name : "Alam"}]
    localStorage.setItem("userData", JSON.stringify(userData))
    let newData = JSON.parse(localStorage.getItem("userData"))
    console.log(newData)

  function formHandler() {}
  return (
    <div className="flex">
         <div className="w-1/2">

      </div>
     <div> <form
        onSubmit={formHandler}
        className="flex flex-col gap-4 p-6 bg-white shadow-xl rounded-2xl w-80 mx-auto mt-20"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white py-3 rounded-xl hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form></div>
     
    </div>
  );
};

export default LocalStrg;
