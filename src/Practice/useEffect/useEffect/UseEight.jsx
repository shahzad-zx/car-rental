import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./validationSchema";

const UseEight = () => {
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  //   image  preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <form action={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>
        <input {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input {...register("phone")} placeholder="Phone" />
        <p>{errors.phone?.message}</p>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        <input {...register("city")} placeholder="City" />
        <p>{errors.city?.message}</p>
        <input
          type="file"
          {...register("image")}
          onChange={handleImageChange}
        />
        <p>{errors.image?.message}</p>
        {preview && (
          <img
            src={preview}
            alt="preview"
            width="100"
            style={{ marginTop: "10px" }}
          />
        )}
      </form>
    </div>
  );
};

export default UseEight;
