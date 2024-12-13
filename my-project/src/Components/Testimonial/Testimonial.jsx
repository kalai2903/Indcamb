import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
    {
        id: 1,
        name: "Kalai",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elite,At proin primis volutpat sociosqu lacus venenatis iaculis lacinia,Quis dignissim ultrices class mattis incep, Amet quam adipiscing non senectus tortor justo",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Kavitha",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elite,At proin primis volutpat sociosqu lacus venenatis iaculis lacinia,Quis dignissim ultrices class mattis incep, Amet quam adipiscing non senectus tortor justo",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Tamil",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elite,At proin primis volutpat sociosqu lacus venenatis iaculis lacinia,Quis dignissim ultrices class mattis incep, Amet quam adipiscing non senectus tortor justo",
        img: "https://st4.depositphotos.com/13194036/22902/i/450/depositphotos_229020394-stock-photo-beautiful-female-teacher-formal-wear.jpg",
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-14 mb-10">
            <div className="max-w-3xl mx-auto px-4"> {/* Centered container */}
                {/* Header Section */}
                <div className="space-y-4 text-center mb-6">
                    <h1 className="uppercase font-semibold text-orange-600">
                        OUR TESTIMONIALS
                    </h1>
                    <p className="font-semibold text-3xl">
                        What Our Clients Say About Us
                    </p>
                </div>
                {/* Testimonial Cards Section */}
                <div>
                    <Slider {...settings}>
                        {TestimonialsData.map((item) => (
                            <div key={item.id}>
                                <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                                    {/* Upper Section */}
                                    <div className="flex justify-start items-center gap-5">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full"
                                        />
                                        <div>
                                            <p className="text-xl font-bold text-black/80">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Bottom Section */}
                                    <div className="py-6 space-y-4">
                                        <p className="text-sm text-gray-500">
                                            {item.text}
                                        </p>
                                        <p className="text-yellow-500 text-lg">★ ★ ★ ★ ★</p> {/* Yellow stars */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;