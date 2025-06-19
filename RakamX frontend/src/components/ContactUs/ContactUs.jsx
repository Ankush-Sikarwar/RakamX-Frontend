
import {useState} from "react";
import { CardSpotlight } from "../ui/card-spotlight";
import Navbar from "../Navbar/Navbar";


export default function ContactUs() {
  const [formValues, setFormValues] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "", 
    message: "" 
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormValues({ 
      ...formValues, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://rakamx-backend.onrender.com/contact/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setSubmitStatus("success");
       
        setFormValues({ 
          name: "", 
          email: "", 
          phone: "", 
          subject: "", 
          message: "" 
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
       setSubmitStatus("error");
    }
  };


  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex flex-row">
         <section id="contact-us" className="bg-black flex-1 w-50 text-gray-100 py-16 px-4 mt-15 pl-25">
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-8">Get in touch with us by filling out the form below</p>

      
        <CardSpotlight className="max-w-md p-6 rounded-md border border-gray-700 relative">
           <div className="z-10 relative ">
             <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-4 text-white ">
            <input
              className="bg-gray-900 opacity-75 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              onChange={handleChange}
              value={formValues.name}
              placeholder="Name"
              required
            />

            <input
              className="bg-gray-900 opacity-75 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              onChange={handleChange}
              value={formValues.email}
              placeholder="Email"
              type="email"
              required
            />

            <input
              className="bg-gray-900 opacity-75 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="phone"
              onChange={handleChange}
              value={formValues.phone}
              placeholder="Phone Number"
              type="tel"
            />

            <input
              className="bg-gray-900 opacity-75 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="subject"
              onChange={handleChange}
              value={formValues.subject}
              placeholder="Subject"
            />

            <textarea
              className="bg-gray-900 opacity-75 p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              onChange={handleChange}
              value={formValues.message}
              placeholder="Message"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500  hover:bg-blue-600 text-gray-50 font-semibold py-2 px-4 rounded-md transition duration-500">
              Send Message
            </button>
            {submitStatus === "success" && (
  <div className="bg-green-500 text-gray-50 p-4 rounded-md mt-4 transition transform ease-in-out">
    Your message was successfully sent! 🌟
  </div>
 )}

{submitStatus === "error" && (
  <div className="bg-red-500 text-gray-50 p-4 rounded-md mt-4 transition transform ease-in-out">
    Failed to send your message. Please try again! ❌
  </div>
)}

          </form>
        

           </div>
         </CardSpotlight>
      </section>
   </div>
</div>
  );
}

