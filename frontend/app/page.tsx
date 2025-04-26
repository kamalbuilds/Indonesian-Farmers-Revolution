'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  // Language setup placeholder - would be replaced with actual translation implementation
  const messages = {
    title: "MakmurTani: Tokenizing Prosperity for Farmers",
    subtitle: "Empowering 33 million Indonesian smallholders with RWA tokenization, DeFi microloans, and transparent supply chains",
    cta: "Get Started",
    featuresTitle: "Key Features",
    rwaTitle: "Real-World Asset Tokenization",
    rwaDescription: "Convert farmland, crops, and farming activities into tradable digital assets",
    transparencyTitle: "Supply Chain Transparency",
    transparencyDescription: "Track agricultural products from farm to table with immutable blockchain records",
    loansTitle: "Microloans",
    loansDescription: "Access capital by using tokenized assets as collateral",
    marketplaceTitle: "Digital Marketplace",
    marketplaceDescription: "Buy and sell tokenized agricultural assets at fair prices"
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.8,
        type: "spring",
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    },
    tap: { scale: 0.95 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: custom * 0.2 + 0.5,
        duration: 0.6,
        ease: "easeOut" 
      }
    }),
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                variants={itemVariants}
              >
                {messages.title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut"
                    }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0 mb-8"
                variants={itemVariants}
              >
                {messages.subtitle}
              </motion.p>
              <motion.button 
                onClick={() => router.push('/dashboard')}
                className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {messages.cta}
              </motion.button>
            </motion.div>

            {/* Image Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 px-4">
              <motion.div 
                className="col-span-2"
                custom={1}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src="/farmers/farmer3.jpg" 
                    alt="Indonesian farmer working in rice field" 
                    fill
                    style={{ objectFit: 'cover' }} 
                    className="hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div 
                custom={2}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src="/farmers/farmer5.jpg" 
                    alt="Smiling Indonesian farmer in field" 
                    fill
                    style={{ objectFit: 'cover' }} 
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
              <motion.div 
                custom={3}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src="/farmers/farmer6.jpg" 
                    alt="Indonesian farmer with traditional basket" 
                    fill
                    style={{ objectFit: 'contain' }} 
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {messages.featuresTitle}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-12 w-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{messages.rwaTitle}</h3>
              <p className="text-gray-600">{messages.rwaDescription}</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-12 w-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{messages.transparencyTitle}</h3>
              <p className="text-gray-600">{messages.transparencyDescription}</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-12 w-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{messages.loansTitle}</h3>
              <p className="text-gray-600">{messages.loansDescription}</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-12 w-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{messages.marketplaceTitle}</h3>
              <p className="text-gray-600">{messages.marketplaceDescription}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-green-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-green-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to transform your agricultural assets?
          </motion.h2>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/dashboard" className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-block">
                Dashboard
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/marketplace" className="bg-white text-green-800 border border-green-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-block">
                Explore Marketplace
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
