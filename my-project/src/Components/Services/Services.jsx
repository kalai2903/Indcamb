import React from "react";
import Img1 from "../../assets/collaboration.png";
import Img2 from "../../assets/stress.png";
import Img3 from "../../assets/work-life-balance.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Team collaboration",
    description:
      "Effective team collaboration fosters creativity and innovation by combining diverse skills and perspectives.",
  },
  {
    id: 2,
    img: Img2,
    name: "Reduce work stress",
    description:
      "Reducing work stress can be achieved by prioritizing tasks, taking regular breaks, and maintaining a healthy work-life balance.",
  },
  {
    id: 3,
    img: Img3,
    name: "Work life balance",
    description:
      "Work-life balance is the ability to effectively manage professional responsibilities while maintaining a fulfilling personal life.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-4 mt-0"> {/* Added mt-0 to remove margin-top */}
        <div className="container">
          <div className="text-center mb-6 max-w-[400px] mx-auto"> {/* Reduced margin-bottom */}
            <h1 className="text-3xl font-bold">How it helps you</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 place-items-center"> {/* Adjusted gap */}
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[130px] flex justify-center items-center overflow-hidden"> {/* Reduced height */}
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-contain group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-3 text-center"> {/* Reduced padding */}
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;