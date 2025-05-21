"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, AppWindow, Target } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Guiding: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-12">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          className="text-4xl font-bold text-slate-800 mb-4 text-left"
          variants={itemVariants}
        >
          Guiding your path to success
        </motion.h1>

        <motion.p
          className="text-lg text-slate-700 mb-16 text-left"
          variants={itemVariants}
        >
          We're here to help you discover the best resources and tools for your business' growth. Learn about the different paths available—from building and selling solutions to differentiating your organization with a Solutions Partner designation.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First Box */}
          <motion.div className="flex flex-col items-start" variants={itemVariants}>
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <Cloud className="w-12 h-12 text-slate-700" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 text-left">Innovate on a connected technology ecosystem</h2>
            <p className="text-slate-600 text-left">
              Power your customers' transformation and stay at the forefront of innovation by building high-performing AI solutions with Microsoft.
            </p>
          </motion.div>

          {/* Second Box */}
          <motion.div className="flex flex-col items-start" variants={itemVariants}>
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <AppWindow className="w-12 h-12 text-slate-700" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 text-left">Modernize and create apps that delight customers</h2>
            <p className="text-slate-600 text-left">
              Accelerate app development and infuse your customers' low-code solutions with AI capabilities by tapping into Microsoft AI-powered IP.
            </p>
          </motion.div>

          {/* Third Box */}
          <motion.div className="flex flex-col items-start" variants={itemVariants}>
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-slate-700" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-4 text-left">Maximize customer value and impact for your devices</h2>
            <p className="text-slate-600 text-left">
              Enable new customer experiences with Microsoft AI-powered devices, and explore tools that help you build, sell, go to market, and expand your Mixed Reality offerings.
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Sections */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Committed to Partnership */}
          <motion.div 
            className="bg-slate-100 p-8 rounded-lg text-left"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Committed to partnership: now and in the future</h2>
            <p className="text-slate-700">
              Innovate with AI on the Microsoft Cloud, grow your business, and deliver on the promise of AI transformation for customers across industries.
            </p>
          </motion.div>

          {/* Partner for Long-Term Profitability */}
          <motion.div 
            className="bg-slate-100 p-8 rounded-lg text-left"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Partner for long-term profitability</h2>
            <p className="text-slate-700">
              Unlock sustainable growth, streamline how you sell, and achieve more with tools and resources from Microsoft.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Guiding;