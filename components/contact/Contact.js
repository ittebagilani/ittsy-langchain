import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const publicKey = "z7q-ERnEDm896OmmY";
  const serviceID = "service_iflc8ps";
  const templateID = "template_ujrm7v5";

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          to_name: "Itteba",
          from_email: form.email,
          to_email: "itteba1@gmail.com",
          message: form.message,
        },
        "z7q-ERnEDm896OmmY"
      )
      .then(() => {
        alert("Thank You! We'll get back to you as soon as possible");
        setForm(
          {
            name: "",
            email: "",
            company: "",
            message: "",
          },
          (error) => {
            console.log(error);
            alert("Something went wrong");
          }
        );
      });
  };

  return (
    <>
      <div className="flex flex-col w-full bg-[#0c1f1e] pb-20">
        <div className="justify-center pt-[200px] h-full pb-10 -mt-20 flex flex-row">
          <h1 className="font-semibold text-center text-[#b0a58b] md:text-7xl text-2xl">
            Get in touch with an Ittsy expert.
          </h1>
        </div>
        <div className="bg-[#f5f4ef] rounded-[50px] h-[600px] w-5/6 m-auto md:w-1/3 md:pb-20">
          <p className="m-auto text-left mt-10 pl-10">CONTACT US</p>
          <form
            className="pl-10 flex flex-col mt-10"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="mb-10 mr-10 pl-2 placeholder:text-[14px] rounded-2xl placeholder:bg-white bg-white"
              pattern="[A-Za-z]{1,40}"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="mb-10 mr-10 placeholder:text-[14px] pl-2 rounded-2xl placeholder:bg-white bg-white"
              required
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company"
              className="mb-10 mr-10 pl-2 placeholder:text-[14px] rounded-2xl placeholder:bg-white bg-white"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message.."
              className="mb-10 mr-10 pl-2 pt-2 placeholder:text-[14px] resize-none leading-5 rounded-2xl placeholder:bg-white bg-white"
              required
            />

            <input
              type="submit"
              value="Submit"
              className="bg-[#b0a58b] cursor-pointer mt-[50px] mr-10 rounded-2xl pt-3 pb-3 text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
}
