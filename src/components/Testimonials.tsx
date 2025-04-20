// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
// import { testimonialsData } from '../data/testimonialsData';

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     // Auto-rotate testimonials
//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextTestimonial = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
//     );
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevTestimonial = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
//     );
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   return (
//     <section id="testimonials" className="py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
//       <div className="container mx-auto px-4 relative">
//         {/* Abstract shapes for futuristic background */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
//           <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-600 blur-3xl"></div>
//         </div>
        
//         <div className="text-center mb-20 relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">Client Testimonials</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Discover what our clients say about their transformative experiences working with us
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto relative">
//           {/* Main testimonial card */}
//           <div className="relative backdrop-blur-lg bg-gray-900/40 border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
//             {/* Glowing accent */}
//             <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
//             <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
            
//             {/* Quote icon */}
//             <div className="absolute top-8 left-8 text-blue-400/20">
//               <Quote size={96} strokeWidth={1} />
//             </div>
            
//             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
//               {/* Person info with animated border */}
//               <div className="flex-shrink-0 text-center md:text-left">
//                 <div className="relative group">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur animate-spin-slow"></div>
//                   <div className="w-28 h-28 rounded-full mx-auto relative overflow-hidden border-4 border-gray-800 p-1">
//                     <div className="w-full h-full rounded-full overflow-hidden">
//                       <img 
//                         src={testimonialsData[currentIndex].avatar} 
//                         alt={testimonialsData[currentIndex].name}
//                         className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mt-6">{testimonialsData[currentIndex].name}</h3>
//                 <p className="text-blue-400">{testimonialsData[currentIndex].position}</p>
                
//                 {/* Rating stars */}
//                 <div className="flex justify-center md:justify-start mt-3 space-x-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Testimonial text */}
//               <div className="flex-1">
//                 <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-inner">
//                   <p className="text-gray-200 text-lg italic leading-relaxed">
//                     "{testimonialsData[currentIndex].text}"
//                   </p>
//                 </div>
                
//                 {/* Navigation dots */}
//                 <div className="flex justify-center md:justify-end space-x-3 mt-8">
//                   {testimonialsData.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         index === currentIndex 
//                           ? 'bg-gradient-to-r from-blue-400 to-purple-500 scale-125' 
//                           : 'bg-gray-600 hover:bg-gray-500'
//                       }`}
//                       onClick={() => setCurrentIndex(index)}
//                       aria-label={`Go to testimonial ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Navigation buttons */}
//             <button 
//               onClick={prevTestimonial}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center focus:outline-none hover:bg-gray-700 border border-gray-700/50 transition-all duration-300 group"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={24} className="text-gray-300 group-hover:text-white" />
//             </button>
            
//             <button 
//               onClick={nextTestimonial}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center focus:outline-none hover:bg-gray-700 border border-gray-700/50 transition-all duration-300 group"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={24} className="text-gray-300 group-hover:text-white" />
//             </button>
//           </div>
          
//           {/* Client logos with futuristic styling */}
//           <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[1, 2, 3, 4].map((num) => (
//               <div key={num} className="flex justify-center group">
//                 <div className="relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm p-6 border border-gray-700/30 transition-all duration-500 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
//                   <img 
//                     src={`/api/placeholder/180/80`} 
//                     alt={`Client logo ${num}`}
//                     className="h-12 object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Custom animation style */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Testimonials;