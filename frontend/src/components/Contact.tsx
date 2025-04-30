import React, { useState } from "react";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    info: { error: boolean; msg: string | null };
  }>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" }
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Something went wrong. Please try again." }
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-24 bg-secondary"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="flex items-center text-2xl md:text-3xl font-bold text-textLight mb-6">
          <span className="text-accent font-mono mr-2">06.</span> Get In Touch
          <div className="ml-4 h-px bg-gray-600 flex-grow"></div>
        </h2>

        <p className="text-text text-lg mb-12 text-center">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-textLight mb-2 font-mono">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-primary border border-gray-700 rounded-md py-3 px-4 text-text focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-textLight mb-2 font-mono">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-primary border border-gray-700 rounded-md py-3 px-4 text-text focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-textLight mb-2 font-mono">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-primary border border-gray-700 rounded-md py-3 px-4 text-text focus:outline-none focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className="border border-accent text-accent hover:bg-accent hover:bg-opacity-10 px-8 py-3 rounded font-mono text-sm transition-all duration-300 w-full md:w-auto"
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </button>

          {status.info.msg && (
            <div
              className={`p-4 rounded-md ${
                status.info.error ? "bg-red-500 bg-opacity-10 text-red-300" : "bg-green-500 bg-opacity-10 text-green-300"
              }`}
            >
              {status.info.msg}
            </div>
          )}
        </form>

        <div className="mt-16 text-center">
          <p className="text-text mb-4">Or reach out directly:</p>
          <a href="mailto:harsh20y@gmail.com" className="text-accent hover:underline text-lg">
            harsh20y@gmail.com
          </a>
          <p className="text-text mt-2">+91-9353124730</p>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;