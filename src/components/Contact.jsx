import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full md:h-screen  flex justify-center items-center px-8 md:mt-48"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-semibold  inline border-b-4 border-primary ">
            Contact
          </h1>
          <p className="md:text-base pt-8">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 outline-none text-gray"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] outline-none text-gray"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 outline-none text-gray max-h-[150px]"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>

        <button className=" border-2 hover:text-primary hover:border-primary px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
