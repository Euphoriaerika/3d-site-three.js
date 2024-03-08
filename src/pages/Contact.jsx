import { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";
import Loader from "../components/Loader";

const Contact = () => {
  // Use useRef to reference the form element
  const formRef = useRef();
  // Use useState to store the form state and loading status
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // Change handler to update the form state on input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler for form submission
  const hendleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Upon submitting, triggers the running animation of the fox
    setCurrentAnimation("hit");

    // Use the emailjs library to send an email
    emailjs
      .send(
        // Accessing environment variables for EmailJS service and template IDs
        // These variables can be defined in the .env.local file at the root directory
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bohdan",
          from_email: form.email,
          to_email: "b.r.rudenko@student.khai.edu",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        // TODO: show success message
        // TODO: hide an alert

        // Upon successful form submission, after a 3-second timeout, switches the fox animation
        // from the running state to the idle state.
        setTimeout(() => {
          setCurrentAnimation("idle");

          // Reset the form after submission
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        // Disable loading state after submission attempt, log error, switch fox animation to idle.
        setIsLoading(false);
        console.log(error);
        setCurrentAnimation("idle");
        // TODO: show error message
      });
  };

  // Set fox animation to 'walk' when the input element gains focus.
  const handleFocus = () => setCurrentAnimation("walk");
  
  // Set fox animation to 'idle' when the input element loses focus.
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-x-[50%] flex flex-col">
        <h1 className="head-text">Get it touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={hendleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Denya"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="denya.ovcharka@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
