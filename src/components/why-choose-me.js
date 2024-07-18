import React from "react";

const WhyChooseMe = () => {
  return (
    <section className="  py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Me</h2>
        <p className="mb-12">Delivering excellence in every project.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Responsive Design"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Responsive Design</h3>
            <p>Ensuring seamless experiences across devices.</p>
          </div>
          <div className="p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Robust Security"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Robust Security</h3>
            <p>Implementing best practices for data protection.</p>
          </div>
          <div className="p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Innovative Solutions"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Innovative Solutions</h3>
            <p>Leveraging cutting-edge technology for your needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
