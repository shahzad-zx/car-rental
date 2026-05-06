import React, { useState } from "react";

const UseFive = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const { file, ...rest } = formData;

    localStorage.setItem("formData", JSON.stringify(rest));

    // console.log("Stored in localStorage:", rest);
    console.log(" name is : ", formData.name);
    console.log("File name is : ", formData.file);
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
      localStorage.setItem("img", reader.result);
      console.log(reader.result);
    })

    reader.readAsDataURL(file)
  }
  let startImg = true
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload File</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full"
            multiple
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>


    // <div>
    //   <input type="file" id="fileInput" onInput={handleFileInput} />
    //   {/* <img src={} alt="" /> */}
    //   {startImg && <img  src={localStorage.getItem("img")} className="w-[40px] has-[40px]" />}
    // </div>
  );
};

export default UseFive;

// // HW - Create a form which takes - a drop down, a radio button , name, email , password, phone, city etc and store the data locally in the localstorage

// import React, { useState } from "react";

// const UseFive = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setImage(file);

//       // 🔥 create preview URL
//       const previewURL = URL.createObjectURL(file);
//       setPreview(previewURL);
//     }
//   };

// 🧹 cleanup
// useEffect(() => {
//   return () => {
//     if (preview) {
//       URL.revokeObjectURL(preview);
//     }
//   };
// }, [preview]);

//   return (
//     <div className="p-5">
//       <input type="file" accept="image/*" onChange={handleChange} />

//       {preview && (
//         <div className="mt-4">
//           <img
//             src={preview}
//             alt="Preview"
//             className="w-40 h-40 object-cover rounded-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UseFive;
