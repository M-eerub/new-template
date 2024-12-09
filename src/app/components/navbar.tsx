'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'
import { BiUser } from 'react-icons/bi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* New banner */}
      <div className="bg-black text-white py-4">
        
      <div className="text-2xl flex items-center justify-center text-center font-bold">
            <span className="text-orange-500">Food</span>
            <span className="text-white">tuck</span>
          </div>
      </div>

      {/* Existing Navbar */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <Link href="/menu" className="hover:text-orange-500">Menu</Link>
            <Link href="/details" className="hover:text-orange-500">Blog</Link>
            <Link href="/checkout" className="hover:text-orange-500">Pages</Link>
            <Link href="/cheif" className="hover:text-orange-500">About</Link>
            <Link href="/shop" className="hover:text-orange-500">Shop</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
          </div>

          {/* Right Section (Search, Cart, User) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full py-1 px-4 pr-8 focus:outline-none"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <Link href="/cart" className="text-white hover:text-yellow-300 ml-2">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />
            </Link>
            <Link href="/signup" className="text-white hover:text-yellow-300 ml-2">
              <BiUser className="h-6 w-6 relative" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black text-white px-4 items-center py-3">
            <div className="space-y-4">
              <Link href="/" className="block hover:text-orange-500">Home</Link>
              <Link href="/menu" className="block hover:text-orange-500">Menu</Link>
              <Link href="/details" className="block hover:text-orange-500">Blog</Link>
              <Link href="/checkout" className="block hover:text-orange-500">Pages</Link>
              <Link href="/shop" className="block hover:text-orange-500">About</Link>
              <Link href="/shop" className="block hover:text-orange-500">Shop</Link>
              <Link href="/contact" className="block hover:text-orange-500">Contact</Link>
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800 text-white rounded-full w-full py-1 px-4 pr-8 focus:outline-none"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <div className="flex space-x-4 mt-3">
                <Link href="/cart" className="text-white hover:text-yellow-300">
                  <ShoppingCart className="w-6 h-6 cursor-pointer" />
                </Link>
                <Link href="/signup" className="text-white hover:text-yellow-300">
                  <BiUser className="h-6 w-6 relative" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar