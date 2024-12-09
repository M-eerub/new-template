/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const CheckoutPage = () => {
  return (
     
    <div className="bg-checkout-bg bg-cover bg-center min-h-screen">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-48 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Shopping Cart</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Checkout</span>
        </p>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Form */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Choose country</option>
              </select>
              <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Choose city</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address 1"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Address 2"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Zip code"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="billing" />
              <label htmlFor="billing" className="text-sm">
                Same as shipping address
              </label>
            </div>
          </form>

          {/* Buttons */}
          <div className="mt-6 flex items-center justify-between">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-300">
              &lt; Back to cart
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-500">
              Proceed to shipping &gt;
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  
                  <div>
                    <p className="text-sm font-semibold">Chicken Tikka Kabab</p>
                    <p className="text-sm text-gray-500">150 gm net - $50</p>
                  </div>
                </div>
                <p className="text-sm font-semibold">$50</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>$130</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>25%</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$54.76</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$432.65</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-orange-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-500">
            Place an order &gt;
          </button>
        </div>
      </div>   
    </div>
  );
};

export default CheckoutPage;
