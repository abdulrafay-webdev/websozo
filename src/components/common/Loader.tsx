'use client';

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] overflow-hidden"
    >
      {/* Background Animated Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] animate-pulse delay-700" />

      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: 1,
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
            times: [0, 0.6, 1]
          }}
          className="relative mb-8"
        >
          <img 
            src="/images/logo.png" 
            alt="Websozo Logo" 
            className="h-32 w-auto object-contain relative z-10"
          />
          {/* Neon Ring around logo */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-x-[-20%] inset-y-[-20%] border border-cyan-500/30 rounded-full blur-[2px] -z-10"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1.05, 1, 1.05]
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-x-[-15%] inset-y-[-15%] border border-purple-500/20 rounded-full blur-[1px] -z-10"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black tracking-[0.2em] uppercase text-white mb-2">
            Web<span className="text-cyan-400">sozo</span>
          </h2>
          <div className="w-48 h-[2px] bg-white/10 mx-auto relative overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full"
            />
          </div>
          <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.5em] animate-pulse">
            Initializing Evolution...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
