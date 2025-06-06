"use client"
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Dropdown states
  const [dropdowns, setDropdowns] = useState({
    about: false,
    products: false,
    mobileAbout: false,
    mobileProducts: false
  });

  // Initialize dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
  };

  // Handle dropdown toggle
  const handleDropdown = (key) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Menu items data with proper links
  const menuItems = {
    about: {
      label: "About",
      items: [
        { name: "About TMT Plus", link: "/AboutTMTPlus" },
        // { name: "Our Management", link: "/management" },
        { name: "Our History", link: "/History" },
        // { name: "Certification", link: "/certification" },
        { name: "Quality Policy", link: "/QualityPolicy" },
        // { name: "Our Clients", link: "/clients" }
      ],
    },
    // products: {
    //   label: "Products",
    //   categories: [
    //     {
    //       title: "Conduit Pipes",
    //       image: "/images/conduit-pipes.jpg",
    //       link: "/products/conduit-pipes"
    //     },
    //     {
    //       title: "Water Tanks",
    //       image: "/images/water-tanks.jpg",
    //       link: "/products/water-tanks"
    //     },
    //     {
    //       title: "Metal Boxes & Accessories",
    //       image: "/images/metal-boxes.jpg",
    //       link: "/products/metal-boxes"
    //     },
    //     {
    //       title: "uPVC Pipes and Fittings",
    //       image: "/images/upvc-pipes.jpg",
    //       link: "/products/upvc-pipes"
    //     },
    //   ],
    // },
    Products: {
      label: "Products",
      items: [
        { name: "Conduit Pipes", link: "/Products#id1" },
        // { name: "Our Management", link: "/management" },
        { name: "Water Tanks",  link: "/Products#id6"  },
        // { name: "Certification", link: "/certification" },
        { name: "Casing & Capping", link: "/Products#id8" },
        // { name: "Our Clients", link: "/clients" }
        { name: "Corrugated Pipes", link: "/Products#id12" },
        { name: "Metal Boxes & Accessories", link: "/Products#id9" },

      ],
    },
  };

  return (
    <div className="relative">
      {/* Top Bar Section - Hidden on mobile */}
      <div className={`hidden md:block w-full ${isDarkMode ? "dark bg-gray-900" : "bg-white"} fixed top-0 z-50`}>
        <div className={`w-full ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} border-b`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center py-2">
              {/* Contact Info */}
              <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 mb-2 md:mb-0 text-sm">
                <a href="mailto:contact@tmtplus.com" className="flex items-center space-x-2 hover:text-blue-600">
                  <FaEnvelope />
                  <span>info@finetmtplus.com</span>
                </a>
                <a href="tel:+918447490707" className="flex items-center space-x-2 hover:text-blue-600">
                  <FaPhone />
                  <span>+91 8447490707</span>
                </a>
              </div>

              {/* Social Links and CTA */}
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <a href="https://facebook.com/tmtplus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    <FaFacebook className="text-lg" />
                  </a>
                  <a href="https://youtube.com/tmtplus" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                    <FaYoutube className="text-lg" />
                  </a>
                  <a href="https://linkedin.com/company/tmtplus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="https://instagram.com/tmtplus" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>
                <Link href="/ContactUs" className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <header className={`shadow-md ${isDarkMode ? "bg-gray-800" : "bg-sky-800"} md:mt-6 fixed w-full z-40 text-white pt-5`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/logo.png"
                alt="TMT Plus Logo"
                width={160}
                height={64}
                className="h-12 w-auto md:h-16"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {/* About Dropdown */}
              <Link href="/" className="hover:text-blue-300 py-6">Home</Link>

              <div className="relative group">
                <button
                  onClick={() => handleDropdown("about")}
                  className="flex items-center space-x-1 hover:text-blue-300 py-6"
                  aria-expanded={dropdowns.about}
                >
                  <span>About</span>
                  <FaChevronDown className={`transition-transform ${dropdowns.about ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-50 ${dropdowns.about ? "block" : "hidden"}`}
                >
                  {menuItems.about.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>


              <div className="relative group">
                <button
                  onClick={() => handleDropdown("products")}
                  className="flex items-center space-x-1 hover:text-blue-300 py-6"
                  aria-expanded={dropdowns.products}
                >
                  <span>Products</span>
                  <FaChevronDown className={`transition-transform ${dropdowns.products ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2 z-50 ${dropdowns.products ? "block" : "hidden"}`}
                >
                  {menuItems.Products.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Products Mega Menu */}
              {/* <div className="relative group">
                <button
                  onClick={() => handleDropdown("products")}
                  className="flex items-center space-x-1 hover:text-blue-300 py-6"
                  aria-expanded={dropdowns.products}
                >
                  <span>Products</span>
                  <FaChevronDown className={`transition-transform ${dropdowns.products ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-0 w-[600px] bg-white dark:bg-gray-700 shadow-lg rounded-md p-4 z-50 ${dropdowns.products ? "block" : "hidden"}`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {menuItems.products.categories.map((category, index) => (
                      <Link key={index} href={category.link} className="group">
                        <div className="relative h-40 overflow-hidden rounded-lg">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <h3 className="text-white font-medium text-lg">{category.title}</h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div> */}
              {/* <Link href="/Products" className="hover:text-blue-300 py-6">Products</Link> */}

              {/* Other Links */}
              {/* <Link href="/gallery" className="hover:text-blue-300 py-6">Gallery</Link> */}
              <Link href="/Dealership" className="hover:text-blue-300 py-6">Become A Dealer</Link>
              <Link href="/ContactUs" className="hover:text-blue-300 py-6">Contact Us</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-800 z-30 mt-16 overflow-y-auto mobile-menu-container">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile About Dropdown */}
            <div className="mb-4 border-b dark:border-gray-700 pb-2">
              
              <button
                onClick={() => handleDropdown("mobileAbout")}
                className="flex justify-between items-center w-full py-3 font-medium text-lg"
                aria-expanded={dropdowns.mobileAbout}
              >
                <span>About</span>
                <FaChevronRight className={`transition-transform ${dropdowns.mobileAbout ? "rotate-90" : ""}`} />
              </button>
              {dropdowns.mobileAbout && (
                <div className="pl-4 space-y-2 mt-2">
                  {menuItems.about.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div className="mb-4 border-b dark:border-gray-700 pb-2">
              <button
                onClick={() => handleDropdown("mobileProducts")}
                className="flex justify-between items-center w-full py-3 font-medium text-lg"
                aria-expanded={dropdowns.mobileProducts}
              >
                <span>Products</span>
                <FaChevronRight className={`transition-transform ${dropdowns.mobileProducts ? "rotate-90" : ""}`} />
              </button>
              {dropdowns.mobileProducts && (
                <div className="pl-4 space-y-3 mt-2">
                  {menuItems.products.categories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.link}
                      className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Mobile Links */}
            {/* <Link href="/gallery" className="block py-3 border-b dark:border-gray-700 hover:text-blue-600 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link> */}
            <Link href="/Dealership" className="block py-3 border-b dark:border-gray-700 hover:text-blue-600 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Become A Dealer</Link>
            <Link href="/ContactUs" className="block py-3 border-b dark:border-gray-700 hover:text-blue-600 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            
            {/* Mobile Contact Info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:contact@tmtplus.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <FaEnvelope />
                <span>contact@tmtplus.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <FaPhone />
                <span>+91 12345 67890</span>
              </a>
            </div>

            {/* Mobile Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/tmtplus" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://youtube.com/tmtplus" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-red-600">
                <FaYoutube className="text-xl" />
              </a>
              <a href="https://linkedin.com/company/tmtplus" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-700">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://instagram.com/tmtplus" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-600">
                <FaInstagram className="text-xl" />
              </a>
            </div>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="mt-4 flex items-center space-x-2 text-gray-600 dark:text-gray-300"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* Mobile Get Quote Button */}
            <Link 
              href="/ContactUs" 
              className="block mt-6 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;