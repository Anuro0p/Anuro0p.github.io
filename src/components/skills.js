import React from "react";

const SkillsAndExpertise = () => {
  return (
    <section className=" text-white py-12 alegreya-base">
      <div className="container mx-auto df-text flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold">Skills & Expertise</h2>
        </div>
        <div className="md:w-2/3">
          <h3 className="text-3xl font-bold mb-6">Technologies</h3>
          <ul>
            <li className="flex justify-between items-center border-b border-gray-700 py-4">
              <div>
                <h4 className="text-xl font-semibold">Front-End Development</h4>
                <p>Building intuitive user interfaces.</p>
              </div>
              <span className="text-2xl">&rarr;</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-700 py-4">
              <div>
                <h4 className="text-xl font-semibold">Back-End Development</h4>
                <p>Creating robust server-side logic.</p>
              </div>
              <span className="text-2xl">&rarr;</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-700 py-4">
              <div>
                <h4 className="text-xl font-semibold">
                  Full-Stack Development
                </h4>
                <p>End-to-end software solutions.</p>
              </div>
              <span className="text-2xl">&rarr;</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-700 py-4">
              <div>
                <h4 className="text-xl font-semibold">DevOps Engineering</h4>
                <p>Streamlining development pipelines.</p>
              </div>
              <span className="text-2xl">&rarr;</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-700 py-4">
              <div>
                <h4 className="text-xl font-semibold">Machine Learning</h4>
                <p>Implementing AI-driven insights.</p>
              </div>
              <span className="text-2xl">&rarr;</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndExpertise;
