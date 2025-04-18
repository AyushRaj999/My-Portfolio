import contact from "../assets/contactme.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d163edl", "template_uiar059", form.current, {
        publicKey: "JgEqkJv3d89UhG8na",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email. Please try again.");
          e.target.reset();
        }
      );
  };
  return (
    <section
      id="contact"
      className="z-50 bg-gray-700 relative py-10 px-5 md:px-0"
    >
      <div className="relative" id="about">
        <div className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-serif text-white font-bold tracking-wide uppercase">
                Get in <span className="text-red-500">Touch</span>
              </h2>
            </div>
            <div className="mt-10 ">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <img
                    src={contact}
                    alt=""
                    className="rounded-2xl"
                  />
                </div>

                <div className="max-w-3xl">
                <div class=" mx-auto p-6 bg-gray-100 shadow-md rounded-2xl">
                  <form ref={form} onSubmit={sendEmail} class="space-y-6">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        id="name"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-3 font-medium lg:text-lg"
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="from_email"                       
                        id="email"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-3 font-medium lg:text-lg"
                      />
                    </div>
                    <div>
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2 font-medium lg:text-md"
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Send"
                        class="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
