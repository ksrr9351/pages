"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Develop: React.FC = () => {
  return (
    <motion.div 
      className="w-full max-w-[93%] mx-auto bg-gray-100 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-semibold text-blue-500 mb-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Develop the skills you need to succeed
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Browse our training gallery to learn more about Microsoft products and programs, build your team's talent, and strengthen key skillsets in an evolving cloud technology landscape.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer text-lg h-auto"
          >
            Start here
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Develop;