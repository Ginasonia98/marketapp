import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [isValid, setIsValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isValid) {
      emailjs
        .sendForm(
          "service_lqrzbjh",
          "template_ekbweka",
          form.current,
          "NEWyaFSwozlZwDspo"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Your message has been sent successfully!");
            window.location.reload();
          },
          (error) => {
            console.log(error.text);
            alert("An error occurred, please try again later.");
          }
        );
    } else {
      alert("Please fill in all required fields with valid information.");
    }
  };

  const handleInputChange = (event) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;

    if (name === "user_name") {
      setIsValid(value.trim() !== "");
    } else if (name === "user_email") {
      setIsValid(/^\S+@\S+\.\S+$/.test(value));
    } else {
      setIsValid(value.trim() !== "");
    }
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-sm mx-auto text-center">
        <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-purple-900">
          Contact Us
        </h2>
      </div>
      <form
        ref={form}
        className="w-full md:w-1/2 mx-auto mt-6"
        onSubmit={sendEmail}
      >
        <label className="block font-bold mb-2">Name *</label>
        <input
          type="text"
          name="user_name"
          className="w-full mb-6 px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={handleInputChange}
          required
        />
        <label className="block font-bold mb-2">Email *</label>
        <input
          type="email"
          name="user_email"
          className="w-full mb-6 px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={handleInputChange}
          required
        />
        <label className="block font-bold mb-2">Message *</label>
        <textarea
          name="message"
          className="w-full mb-6 px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onChange={handleInputChange}
          required
        />
        <input
          type="submit"
          value="Send"
          className="bg-blue-700 border-2 border-gray-300  block text-white font-bold py-2 px-4 rounded-lg mx-auto hover:bg-blue-600 focus:outline-none focus:bg-blue-600 cursor-pointer"
          disabled={!isValid}
        />
      </form>
    </div>
  );
};
