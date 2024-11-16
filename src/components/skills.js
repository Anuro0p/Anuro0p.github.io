import React, { useState } from "react";

const SkillsAndExpertise = () => {
  const [expand, setExpand] = useState("");
  return (
    <section className=" text-white py-12 alegreya-head">
      <div className="container justify-center md:justify-start  mx-auto df-text flex flex-col md:flex-row">
        <div className="flex items-center justify-center md:justify-start  md:w-2/5 mb-8 md:h-72 md:mb-0">
          <div className="md:ml-12 relative">
            <h2 className="md:hidden text-3xl font-extrabold">Skills & Expertise</h2>
            <h2 className="hidden md:block text-6xl font-extrabold">Skills & </h2>
            <h2 className="hidden md:block text-6xl font-extrabold">Expertise</h2>
          </div>
        </div>
        <div className="md:w-3/5 flex flex-col items-center justify-center md:justify-start">
          <h3 className="text-3xl font-bold mb-6">Technologies</h3>
          <ul className="tracking-wider font-thin	">
            <li
              onClick={() => setExpand("front")}
              className="flex justify-between  items-center border-b border-t border-gray-700 py-4"
            >
              <div className="ml-6 transition-all pr-24  duration-700">
                <h4 className="text-lg font-thin">Front-End Development</h4>
                {expand == "front" ? (
                  <></>
                ) : (
                  <p className="font-sans transition-all duration-700 text-sm">
                    Creating seamless, engaging, and interactive user
                    experiences.
                  </p>
                )}

                {expand == "front" && (
                  <p className="font-sans mt-4  transition-all duration-700  text-sm">
                    Focused on creating seamless, engaging, and interactive user
                    experiences using HTML, CSS, and JavaScript. This involves
                    designing interfaces that are visually appealing and
                    responsive across various devices, leveraging frameworks
                    like React and libraries such as Material-UI to build
                    dynamic applications.
                  </p>
                )}
              </div>
              <span className="text-2xl md:mr-0 mr-8">&rarr;</span>
            </li>
            <li
              onClick={() => setExpand("back")}
              className="flex justify-between items-center border-b border-gray-700 py-4"
            >
              <div className="ml-6 pr-24">
                <h4 className="text-lg ">Back-End Development</h4>
                {expand == "back" ? (
                  <></>
                ) : (
                  <p className="font-sans text-sm">
                    Developing reliable, scalable, and efficient server-side
                    logic.
                  </p>
                )}
                {expand == "back" && (
                  <p className="font-sans mt-4  transition-all duration-700 c text-sm">
                    Develop reliable, scalable, and efficient server-side logic.
                    This includes working with server-side technologies like
                    Node.js and Express.js to build robust APIs and services,
                    ensuring data integrity, security, and performance
                    optimization.
                  </p>
                )}
              </div>
              <span className="text-2xl md:mr-0 mr-8">&rarr;</span>
            </li>
            <li
              onClick={() => setExpand("full")}
              className="flex justify-between items-center border-b border-gray-700 py-4"
            >
              <div className="ml-6 pr-24">
                <h4 onClick={() => setExpand("full")} className="text-lg ">
                  Full-Stack Development
                </h4>
                {expand == "full" ? (
                  <></>
                ) : (
                  <p className="font-sans text-sm">
                    Providing comprehensive and integrated end-to-end software
                    solutions.
                  </p>
                )}
                {expand == "full" && (
                  <p className="font-sans mt-4  transition-all duration-700 c text-sm">
                    Manage the complete development lifecycle of web
                    applications, combining front-end and back-end expertise.
                    This involves ensuring that client-side and server-side
                    components work harmoniously to deliver cohesive and
                    well-rounded software solutions.
                  </p>
                )}
              </div>
              <span
                className={`text-2xl md:mr-0 mr-8 ${
                  expand == "full" ? "transform rotate-90" : ""
                }`}
              >
                &rarr;
              </span>
            </li>

            <li
              onClick={() => setExpand("mobile")}
              className="flex justify-between items-center border-b border-gray-700 py-4"
            >
              <div className="ml-6 pr-24">
                <h4 className="text-lg ">Mobile App Development</h4>
                {expand == "mobile" ? (
                  <></>
                ) : (
                  <p className="font-sans text-sm">
                    Designing user-friendly mobile applications optimized for
                    diverse platforms.
                  </p>
                )}
                {expand == "mobile" && (
                  <p className="font-sans mt-4  transition-all duration-700 c text-sm">
                    Design user-friendly mobile applications optimized for
                    diverse platforms using frameworks like React Native. This
                    includes creating cross-platform apps that offer a native
                    look and feel on both iOS and Android devices, focusing on
                    performance, responsiveness, and user experience.
                  </p>
                )}
              </div>
              <span
                className={`text-2xl md:mr-0 mr-8 ${
                  expand == "mobile" ? "transform rotate-90" : ""
                }`}
              >
                &rarr;
              </span>
            </li>
            <li
              onClick={() => setExpand("devops")}
              className="flex justify-between items-center border-b border-gray-700 py-4"
            >
              <div className="ml-6 pr-24">
                <h4 className="text-lg ">DevOps Engineering</h4>
                {expand == "devops" ? (
                  <></>
                ) : (
                  <p className="font-sans text-sm">
                    Optimizing and automating development pipelines for
                    efficiency.
                  </p>
                )}
                {expand == "devops" && (
                  <p className="font-sans mt-4  transition-all duration-700 c text-sm">
                    Optimize and automate development pipelines for efficiency.
                    This involves implementing continuous integration and
                    continuous deployment (CI/CD) practices using tools like
                    Jenkins and GitHub Actions to streamline development
                    processes and ensure consistent software releases.
                  </p>
                )}
              </div>
              <span
                className={`text-2xl md:mr-0 mr-8 ${
                  expand == "devops" ? "transform rotate-90" : ""
                }`}
              >
                &rarr;
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExpertise;
