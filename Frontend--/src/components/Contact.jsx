import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


const Contact = () => {
  return (
    <div className=" text-neutral-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="font-bold text-white mb-4">ABOUT US</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Our Story</a></li>
            <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-white">Wholesale Program</a></li>
            <li><a href="#" className="hover:text-white">Press Inquiries</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div>
          <h2 className="font-bold text-white mb-4">CUSTOMER SUPPORT</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white">Shipping Information</a></li>
            <li><a href="#" className="hover:text-white">Track Your Order</a></li>
            <li><a href="#" className="hover:text-white">Promo Code Lookup</a></li>
            <li><a href="#" className="hover:text-white">Gift Card Lookup</a></li>
            <li><a href="#" className="hover:text-white">Earn Rewards</a></li>
            <li><a href="#" className="hover:text-white">Payment Plans</a></li>
            <li><a href="#" className="hover:text-white">Retail Store Locator</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div>
          <h2 className="font-bold text-white mb-4">CONNECT WITH US</h2>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-neutral-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-neutral-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-neutral-400 hover:text-white"><FaYoutube /></a>
            <a href="#" className="text-neutral-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-neutral-400 hover:text-white"><FaPinterestP /></a>
            <a href="#" className="text-neutral-400 hover:text-white"><FaTiktok /></a>
          </div>
          <p className="mb-4 text-sm">
            Want $20 Off? Sign up for our Newsletter. Sign up for SMS alerts and be the first to know!
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Get in the loop!</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
