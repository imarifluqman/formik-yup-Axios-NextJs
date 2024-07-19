"use client";
import { useFormik } from "formik";
import { schema } from "./schemas";
import { Axios } from "./axios/Axios";
function Formik() {
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        fatherName: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: schema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        Axios(values);
      },
    });

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center mt-5">Formik</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center  items-center flex-col w-[100%] p-5"
      >
        <div className="border rounded p-2 mt-2">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-[320px] focus:outline-none"
            type="text"
            placeholder="name"
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name ? (
            <small className="text-red-500 block">{errors.name}</small>
          ) : null}
        </div>
        <div className="border rounded p-2 mt-2">
          <label className="block" htmlFor="fatherName">
            Father Name
          </label>
          <input
            className="w-[320px]  focus:outline-none"
            type="text"
            placeholder="Father Name"
            id="fatherName"
            name="fatherName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fatherName}
          />
          {errors.fatherName && touched.fatherName ? (
            <small className="text-red-500 block">{errors.fatherName}</small>
          ) : null}
        </div>
        <div className="border rounded p-2 mt-2">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="w-[320px] focus:outline-none"
            type="email"
            placeholder="email"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <small className="text-red-500 block">{errors.email}</small>
          ) : null}
        </div>
        <div className="border rounded p-2 mt-2">
          <label className="block" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-[320px]   focus:outline-none"
            type="text"
            placeholder="phone"
            id="phone"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone ? (
            <small className="text-red-500 block">{errors.phone}</small>
          ) : null}
        </div>

        <div className="border rounded p-2 mt-2">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="w-[320px] focus:outline-none"
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <small className="text-red-500 block">{errors.password}</small>
          ) : null}
        </div>
        <div className="border rounded p-2 mt-2">
          <label className="block" htmlFor="conform_password">
            Conform Passpord
          </label>
          <input
            className="w-[320px]  focus:outline-none"
            type="password"
            placeholder="confirm_password"
            id="confirm_password"
            name="confirm_password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirm_password}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <small className="text-red-500 block">
              {errors.confirm_password}
            </small>
          ) : null}
        </div>
        <button
          className="bg-blue-500 w-[320px] text-white p-2 text-center block mx-auto mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formik;
