import React from "react";
import { GiCyberEye } from "react-icons/gi";
import { ImSphere } from "react-icons/im";
import { IoIosCloudUpload } from "react-icons/io";
import { MdDeveloperBoard } from "react-icons/md";

const OurOffers = () => {
  const offersData = [
    {
      id: 1,
      offerName: "Development",
      offerLogo: <MdDeveloperBoard />,
      offers: [
        "Buy 1 Get 1 Free on Earbuds",
        "20% Off on Laptops",
        "50% Off on Smartphone Accessories",
        "Free Shipping on orders over $50",
        "Up to $200 off on Gaming Consoles",
      ],
    },
    {
      id: 2,
      offerName: "MSP",
      offerLogo: <ImSphere />,
      offers: [
        "Flat 40% Off on Winter Wear",
        "Buy 2 Get 1 Free on Casuals",
        "Extra 10% Cashback with Wallet Payment",
        "Special Prices on Designer Shoes",
        "Free Returns on All Orders",
      ],
    },
    {
      id: 3,
      offerName: "Cloud",
      offerLogo: <IoIosCloudUpload />,
      offers: [
        "10% Off on Orders Above $100",
        "Buy 1 Get 1 Free on Select Snacks",
        "Free Delivery on First Order",
        "Special Discounts on Organic Products",
        "Up to 30% Off on Fresh Vegetables",
      ],
    },
    {
      id: 4,
      offerName: "Cyber",
      offerLogo: <GiCyberEye />,
      offers: [
        "Up to 50% Off on Domestic Flights",
        "Flat 30% Off on Hotel Bookings",
        "Extra 15% Off for New Users",
        "Special Discounts on Weekend Getaways",
        "Cashback on International Flight Bookings",
      ],
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-extrabold md:text-4xl mb-4">
          What We Offer
        </h2>
        <p className="border border-red-700 rounded-full md:w-4/12 mx-auto shadow-md shadow-red-700">
          Our expert will help you in the following fields.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 p-4 border border-red-700 rounded-lg ">
        {offersData.map((data) => (
          <div
            key={data.id}
            className="bg-red-700 bg-opacity-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow w-11/12 mx-auto"
          >
            <div className="">
              <h2 className="text-9xl font-extrabold text-red-500 opacity-45">
                0{data.id}
              </h2>
              <div className="text-center text-4xl mb-2 flex items-center justify-start gap-6 text-white relative -top-16">
                {data.offerLogo}
                <h3 className="text-3xl font-bold mb-2 text-center">
                  {data.offerName}
                </h3>
              </div>
            </div>
            <div className="w-11/12 ml-9  border border-b-0 border-r-0 border-red-800 pt-2 pl-2 pb-2 pr-10 rounded-ss-3xl bg-red-700 bg-opacity-15 md:h-[67%]">
              <ul className="list-disc list-inside text-white">
                {data.offers.map((offer, index) => (
                  <li className="mb-2" key={index}>
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOffers;
