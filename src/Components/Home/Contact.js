import React from "react";
import Dropdown from "../../Pages/Dropdown";

import Contacts from "../../Pages/Contacts";

const Contact = () => {
  return (
    <div className="w-screen ">
      <Dropdown value="Contact Us" />

      <div className="flex flex-row mt-2 p-3 space-x-5">
        <div className="w-2/3 space-y-3 p-3">
          <h1 className="text-3xl font-black text-primary ">Contact Form</h1>
          <h1 className="font-md">Contact Dr. Chaterjee</h1>
          <div className="flex pl-5">
            <div className="flex w-[700px]  ">
              <div className="text-center"></div>
              <form>
                <div className="mb-4 mt-3">
                  <label htmlFor="name" className="block text-black font-semibold">
                     First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Vrushab Hanumesh"
                    required
                    className="w-[500px] px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4 mt-3">
                  <label htmlFor="name" className="block text-black font-semibold">
                     Last Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Vrushab Hanumesh"
                    required
                    className="w-[500px] px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-black font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    label="Email address"
                    required
                    placeholder="Email address"
                    className="w-[500px] px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-black font-semibold"
                  >
                    Phone Number
                  </label>
                  <input
                    type="email"
                    name="email"
                    label="Email address"
                    required
                    placeholder="812 525 3372"
                    className="w-[500px] px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                
             
                <div className="mb-4">
                  <label
                    htmlFor="additionalInfo"
                    className="block text-black font-semibold"
                  >
                    Additional Info (optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="tell us anything!"
                    className="w-[500px] px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary w-[500px] font-semibold text-white px-4 py-2 rounded-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Contacts />
      </div>
    </div>
  );
};

export default Contact;
