import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full md:h-screen flex-col gap-5  flex justify-center items-center px-8 "
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full flex-1"
      >
        <div className="mb-8 wow fadeInLeft">
          <h1 className="text-3xl md:text-6xl font-semibold  inline border-b-4 border-purple dark:border-primary ">
            Contact
          </h1>
          <p className="md:text-base pt-8">
            // Submit the form below or shoot me an email - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-gray dark:bg-white py-3 px-4 outline-none file: text-white dark:text-gray  rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 py-3 px-4 bg-gray dark:bg-white outline-none text-white dark:text-gray rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray dark:bg-white py-2 px-4 outline-none text-white dark:text-gray max-h-[150px] rounded-md"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>

        <button className=" rounded-md border-2  px-4 py-3 my-8 mx-auto flex items-center hover:text-purple hover:border-purple dark:hover:text-primary dark:hover:border-primary">
          Let's Collaborate
        </button>
      </form>

      <p className="text-xs md:text-base text-center mb-4 ">
        Copyright © 2022 by{" "}
        <span className=" tracking-[2px] text-14 md:text-base font-semibold">
          NCT
        </span>. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
