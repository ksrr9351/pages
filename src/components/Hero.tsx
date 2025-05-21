"use client";

import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Hero = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-6 py-8">
      {/* Info Alert at the top */}
      <motion.div
        className="mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <div className="relative border border-gray-200 bg-gray-100 overflow-hidden h-40">
          {/* Left accent border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800" />

          <div className="flex justify-between p-5 h-full">
            <div className="flex items-start gap-4 pl-2">
              <div className="h-8 w-8 min-w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 mt-0.5 bg-white">
                <span className="text-sm font-semibold">i</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-xl">
                  Now available: Grow with partner benefits packages
                </h3>
                <p className="text-gray-600 mt-2 text-base">
                  Get the new product, support and advisory benefits designed to
                  help build your cloud and AI practice.
                  <br />
                  Explore our three cost-saving packages today.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 ml-4 mt-2">
              <Link
                href="#"
                className="text-base text-gray-600 underline font-medium"
              >
                Start here
              </Link>
              <button className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
                ×
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Section */}
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 mt-12"
          initial="hidden"
          animate="visible"
          variants={slideInLeftVariant}
        >
          <h1 className="text-5xl md:text-4xl lg:text-5xl text-blue-600 mb-6">
            Partnering for innovation
          </h1>
          <p className="text-gray-700 mb-8 text-2xl">
            As you provide customers with the services and solutions they’re searching for, we’ll support your success with pathways designed for greater innovation, growth, and profitability.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={slideInRightVariant}
        >
          <div className="relative rounded-lg overflow-hidden mb-6">
            <AspectRatio ratio={16 / 9} className="bg-gray-100">
              <Image
                src="/hero.jpg"
                alt="RWA Cloud Partner"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </AspectRatio>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;