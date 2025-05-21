"use client";
import React from 'react';
import { Users, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BusinessGoals: React.FC = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Heading and Description */}
      <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-6">
          Achieve your business goals
        </h1>
        <p className="text-base md:text-lg text-slate-700 max-w-xl sm:max-w-2xl md:max-w-6xl mx-auto">
          Microsoft offers the tools and support to help you deliver customer-centric, transformative solutions built on Microsoft AI technology. Whether you're
          developing your first app, delivering complex integrations, or exploring new services offerings, we provide opportunities to innovate, scale, and
          differentiate your business.
        </p>
      </motion.div>

      {/* Two Boxes */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Box */}
        <motion.div
          className="border-4 border-blue-500 p-6 md:p-8 h-auto md:h-80 cursor-pointer transition-all duration-300 hover:shadow-xl"
          variants={itemVariants}
        >
          <div className="flex items-start mb-4">
            <div className="mr-3 md:mr-4">
              <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-500">
              Partners providing services
            </h2>
          </div>
          <div className="pl-0 md:pl-16">
            <p className="text-slate-700 text-sm md:text-base">
              By partnering with Microsoft, you can help customers
              harness AI to drive value faster and shape the future of
              their industries. Access resources and offerings designed
              to accelerate your success with customers, extend your
              reach to new markets, distinguish your business from
              the competition, and drive long-term growth.
            </p>
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div
          className="border-4 border-blue-500 p-6 md:p-8 h-auto md:h-80 cursor-pointer transition-all duration-300 hover:shadow-xl"
          variants={itemVariants}
        >
          <div className="flex items-start mb-4">
            <div className="mr-3 md:mr-4">
              <Network className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-500">
              Partners developing software solutions
            </h2>
          </div>
          <div className="pl-0 md:pl-16">
            <p className="text-slate-700 text-sm md:text-base">
              No matter your business size or stage of growth, we're
              investing in and prioritizing clear, actionable paths to
              help independent software vendors (ISVs) build and
              deliver customer-centric, AI-powered IP. Build and
              extend innovative cloud solutions, scale how you go to
              market, develop and refine your skills, and more.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BusinessGoals;
