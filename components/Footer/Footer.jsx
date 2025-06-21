"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0ovaa67", "template_xmrqy23", form.current, {
        publicKey: "2lnxgrL-gZWZCnyVy",
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully");
          e.target.reset();
          setFormData({ name: "", email: "", project: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="text-white relative flex items-center justify-center flex-col overflow-hidden py-24">
      <img
        src="/pattern.png"
        className="w-[50%] absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
        alt=""
      />
      <h1 className="text-4xl font-bold text-center">
        Ready to take <span className="text-[#CBACF9]">your</span> digital{" "}
        <br /> presence to the next level?
      </h1>
      <h1 className="text-[#C1C2D3] text-sm mt-2 text-center">
        Reach out to me today and <br /> let's discuss how I can help you
        achieve your goals.
      </h1>

      {isClicked ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col text-sm z-50 mt-20"
        >
          <div className="space-x-10">
            <input
              name="user_name"
              required
              type="text"
              placeholder="Your name"
              className="input border-0 border-b-[0.5px] border-gray-700 focus:border-white placeholder:font-light focus:outline-none placeholder:text-xs "
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              name="user_email"
              required
              type="email"
              placeholder="your email"
              className="input border-0 border-b-[0.5px] border-gray-700 focus:border-white placeholder:font-light focus:outline-none placeholder:text-xs sm:mt-0 mt-10"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            required
            placeholder="your message"
            className="border-0 border-b-[0.5px] border-gray-700 focus:border-white placeholder:font-light focus:outline-none 
          placeholder:text-xs custom-scrollbar focus:outline-0 place-content-end resize-none mt-5"
            value={formData.project}
            onChange={(e) =>
              setFormData({ ...formData, project: e.target.value })
            }
          ></textarea>

          <button
            className={`mt-7 rounded-xl py-3 px-6 bg-gradient-to-r from-[#161A31] to-[#06091F] 
              font-semibold border-t border-l border-[#6971A266] text-white text-[16px] hover:text-[#f8e875] 
               hover:bg-gradient-to-r hover:from-[#212121] hover:to-[#212121] hover:shadow-[0_0_120px_#FFEB3B] hover:ring-2 hover:ring-[#FFEB3B] hover:transition-all  transition-transform duration-500 
              hover:scale-[1.02] cursor-pointer group`}
          >
            <div className="flex justify-center items-center gap-1">
              Submit
              <ArrowUpRight className="group-hover:translate-x-0.5 transition-transform duration-500" />
            </div>
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsClicked(true)}
          className={`mt-7 rounded-xl py-3 px-6 bg-gradient-to-r from-[#161A31] to-[#06091F] 
              font-semibold border-t border-l border-[#6971A266] text-white text-[16px] hover:text-[#f8e875] 
               hover:bg-gradient-to-r hover:from-[#212121] hover:to-[#212121] hover:shadow-[0_0_120px_#FFEB3B] hover:ring-2 hover:ring-[#FFEB3B] hover:transition-all  transition-transform duration-500 
              hover:scale-[1.02] cursor-pointer group z-50 hover:rotate-2`}
        >
          <div className="flex justify-center items-center gap-1">
            Contact with me
            <ArrowUpRight className="group-hover:translate-x-0.5 transition-transform duration-500" />
          </div>
        </button>
      )}

      <div className="mt-10 flex items-center gap-2">
        <a
          href="https://github.com/khh-Niloy"
          target="_blank"
          className="hover:-translate-y-1 duration-300 transition-all"
        >
          <div className="p-2 rounded-full border border-[#66699C6E] bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.0)_4%,_rgba(255,255,255,0.20)_100%)]">
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/hasibhossain-niloy01/"
          target="_blank"
          className="hover:-translate-y-1 duration-300 transition-all"
        >
          <div className="p-2 rounded-full border border-[#66699C6E] bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.0)_4%,_rgba(255,255,255,0.20)_100%)]">
            <FaLinkedin />
          </div>
        </a>
        <a
          href="https://www.facebook.com/khhniloy.niloy/"
          target="_blank"
          className="hover:-translate-y-1 duration-300 transition-all"
        >
          <div className="p-2 rounded-full border border-[#66699C6E] bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.0)_4%,_rgba(255,255,255,0.20)_100%)]">
            <FaFacebook />
          </div>
        </a>
      </div>
    </div>
  );
}
