import React from "react";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="py-20 bg-gradient-to-r from-blue-50 to-blue-200"
    >
      <div className="md:flex-row justify-arround flex flex-col gap-10 mx-15">
        <div className="container text-center text-gray-600 underline">
          <h2 className="text-5xl font-bold ">Contact Me</h2>
          <form className="mt-8 max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg shadow-xl"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg shadow-xl"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg shadow-xl"
            ></textarea>
            <button className=" w-full px-6 py-2 bg-blue-600 rounded-md shadow  hover:bg-blue-700 transition  text-white">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.693261748317!2d85.27864657425366!3d27.69587382599959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb187b22823181%3A0x5345a35da77ed2aa!2z4KSu4KSV4KS-4KSy4KWBIOCkhuCkr-CksiDgpLjgpY3gpJ_gpYvgpLA!5e0!3m2!1sne!2snp!4v1757676548100!5m2!1sne!2snp" width="500" height="400" className="rounded-lg" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
