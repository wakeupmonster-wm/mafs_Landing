/* eslint-disable no-useless-escape */
// // /* eslint-disable no-unused-vars */
// // // WaitlistPage.jsx
// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useSearchParams } from "react-router-dom";

// // export default function WaitlistPage() {
// //   const [searchParams] = useSearchParams();
// //   const fromQR = searchParams.get("join") === "true";

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     city: "",
// //   });
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [focusedField, setFocusedField] = useState(null);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!formData.name || !formData.email) return;
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsLoading(false);
// //       setIsSubmitted(true);
// //     }, 1800);
// //   };

// //   const fields = [
// //     {
// //       name: "name",
// //       label: "Full Name",
// //       type: "text",
// //       placeholder: "John Smith",
// //       icon: "👤",
// //       required: true,
// //     },
// //     {
// //       name: "email",
// //       label: "Email Address",
// //       type: "email",
// //       placeholder: "john@example.com",
// //       icon: "📧",
// //       required: true,
// //     },
// //     {
// //       name: "phone",
// //       label: "Phone Number",
// //       type: "tel",
// //       placeholder: "+61 400 000 000",
// //       icon: "📱",
// //       required: false,
// //     },
// //     {
// //       name: "city",
// //       label: "City",
// //       type: "text",
// //       placeholder: "Sydney, Melbourne...",
// //       icon: "📍",
// //       required: false,
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12">
// //       {/* ✅ Background */}
// //       <div className="absolute inset-0 z-0">
// //         <img
// //           src="/aqua-bg.jpg"
// //           alt="bg"
// //           loading="lazy"
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-black/30" />
// //       </div>

// //       {/* ✅ Floating stars */}
// //       {["10%", "85%", "20%", "70%", "50%"].map((left, i) => (
// //         <motion.div
// //           key={i}
// //           className="absolute text-white/20 text-2xl pointer-events-none z-[1]"
// //           style={{ left, top: `${15 + i * 15}%` }}
// //           animate={{
// //             y: [0, -15, 0],
// //             rotate: [0, 20, -20, 0],
// //             scale: [1, 1.2, 1],
// //           }}
// //           transition={{
// //             duration: 3 + i * 0.5,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //             delay: i * 0.4,
// //           }}
// //         >
// //           ✦
// //         </motion.div>
// //       ))}

// //       {/* ✅ Main Card */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40, scale: 0.95 }}
// //         animate={{ opacity: 1, y: 0, scale: 1 }}
// //         transition={{ duration: 0.6, ease: "easeOut" }}
// //         className="relative z-10 w-full max-w-lg"
// //       >
// //         <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden">
// //           {/* ✅ Header */}
// //           <div className="bg-gradient-to-r from-[#22D3EE] to-[#0891B2] px-6 sm:px-8 pt-8 pb-6">
// //             <motion.div
// //               initial={{ opacity: 0, y: -20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 }}
// //               className="text-center"
// //             >
// //               {/* Logo */}
// //               <motion.img
// //                 src="/image.png"
// //                 alt="Logo"
// //                 className="h-8 sm:h-10 mx-auto mb-4 brightness-0 invert"
// //                 initial={{ scale: 0 }}
// //                 animate={{ scale: 1 }}
// //                 transition={{
// //                   delay: 0.4,
// //                   type: "spring",
// //                   stiffness: 200,
// //                 }}
// //               />

// //               <h1 className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-2">
// //                 Join the Waitlist
// //               </h1>
// //               <p className="text-white/80 text-sm sm:text-base font-medium">
// //                 Be among the first 1000 to get
// //                 <span className="text-white font-bold"> 3 months FREE</span>
// //               </p>

// //               {/* ✅ Badge */}
// //               {fromQR && (
// //                 <motion.div
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   transition={{ delay: 0.6 }}
// //                   className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mt-3 border border-white/30"
// //                 >
// //                   <span>📱</span>
// //                   <span>Scanned via QR Code</span>
// //                 </motion.div>
// //               )}
// //             </motion.div>
// //           </div>

// //           {/* ✅ Form / Success */}
// //           <div className="px-6 sm:px-8 py-6 sm:py-8">
// //             <AnimatePresence mode="wait">
// //               {!isSubmitted ? (
// //                 // ✅ FORM
// //                 <motion.form
// //                   key="form"
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   exit={{ opacity: 0, y: -20 }}
// //                   onSubmit={handleSubmit}
// //                   className="space-y-4"
// //                 >
// //                   {fields.map((field, i) => (
// //                     <motion.div
// //                       key={field.name}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       transition={{ delay: 0.1 * i + 0.3 }}
// //                     >
// //                       <label className="block text-sm font-semibold text-gray-700 mb-1.5">
// //                         {field.label}
// //                         {field.required && (
// //                           <span className="text-[#22D3EE] ml-1">*</span>
// //                         )}
// //                       </label>
// //                       <div className="relative">
// //                         {/* Icon */}
// //                         <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">
// //                           {field.icon}
// //                         </span>

// //                         <input
// //                           type={field.type}
// //                           name={field.name}
// //                           value={formData[field.name]}
// //                           onChange={handleChange}
// //                           onFocus={() => setFocusedField(field.name)}
// //                           onBlur={() => setFocusedField(null)}
// //                           placeholder={field.placeholder}
// //                           required={field.required}
// //                           className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-2xl border-2 text-gray-800 text-sm sm:text-base placeholder-gray-400 outline-none transition-all duration-200"
// //                           style={{
// //                             borderColor:
// //                               focusedField === field.name
// //                                 ? "#22D3EE"
// //                                 : formData[field.name]
// //                                 ? "#86EFAC"
// //                                 : "#E5E7EB",
// //                             boxShadow:
// //                               focusedField === field.name
// //                                 ? "0 0 0 4px rgba(34,211,238,0.1)"
// //                                 : "none",
// //                             background:
// //                               focusedField === field.name ? "#F0FDFF" : "white",
// //                           }}
// //                         />

// //                         {/* ✅ Checkmark jab filled */}
// //                         <AnimatePresence>
// //                           {formData[field.name] &&
// //                             focusedField !== field.name && (
// //                               <motion.span
// //                                 initial={{ scale: 0, opacity: 0 }}
// //                                 animate={{ scale: 1, opacity: 1 }}
// //                                 exit={{ scale: 0, opacity: 0 }}
// //                                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green-400 text-base"
// //                               >
// //                                 ✓
// //                               </motion.span>
// //                             )}
// //                         </AnimatePresence>
// //                       </div>
// //                     </motion.div>
// //                   ))}

// //                   {/* ✅ Submit Button */}
// //                   <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.7 }}
// //                     className="pt-2"
// //                   >
// //                     <motion.button
// //                       type="submit"
// //                       disabled={isLoading}
// //                       whileTap={{ scale: 0.97 }}
// //                       className="w-full py-4 rounded-2xl text-white font-bold text-base sm:text-lg relative overflow-hidden"
// //                       style={{
// //                         background: "linear-gradient(135deg, #22D3EE, #0891B2)",
// //                         boxShadow: "0 8px 25px rgba(34,211,238,0.35)",
// //                       }}
// //                     >
// //                       <AnimatePresence mode="wait">
// //                         {isLoading ? (
// //                           <motion.div
// //                             key="loading"
// //                             initial={{ opacity: 0 }}
// //                             animate={{ opacity: 1 }}
// //                             exit={{ opacity: 0 }}
// //                             className="flex items-center justify-center gap-2"
// //                           >
// //                             {/* ✅ Loading dots */}
// //                             {[0, 1, 2].map((dot) => (
// //                               <motion.div
// //                                 key={dot}
// //                                 className="w-2 h-2 bg-white rounded-full"
// //                                 animate={{ y: [0, -6, 0] }}
// //                                 transition={{
// //                                   duration: 0.6,
// //                                   repeat: Infinity,
// //                                   delay: dot * 0.15,
// //                                 }}
// //                               />
// //                             ))}
// //                           </motion.div>
// //                         ) : (
// //                           <motion.span
// //                             key="text"
// //                             initial={{ opacity: 0 }}
// //                             animate={{ opacity: 1 }}
// //                             exit={{ opacity: 0 }}
// //                             className="flex items-center justify-center gap-2"
// //                           >
// //                             Join Waitlist
// //                             <span>🚀</span>
// //                           </motion.span>
// //                         )}
// //                       </AnimatePresence>
// //                     </motion.button>
// //                   </motion.div>

// //                   {/* ✅ Privacy note */}
// //                   <motion.p
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ delay: 0.8 }}
// //                     className="text-center text-xs text-gray-400 pt-1"
// //                   >
// //                     🔒 Your info is safe. No spam, ever.
// //                   </motion.p>
// //                 </motion.form>
// //               ) : (
// //                 // ✅ SUCCESS STATE
// //                 <motion.div
// //                   key="success"
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   transition={{ type: "spring", stiffness: 200 }}
// //                   className="text-center py-8 space-y-4"
// //                 >
// //                   {/* ✅ Success icon */}
// //                   <motion.div
// //                     animate={{
// //                       scale: [1, 1.2, 1],
// //                       rotate: [0, 10, -10, 0],
// //                     }}
// //                     transition={{
// //                       duration: 0.6,
// //                       repeat: 2,
// //                     }}
// //                     className="text-6xl"
// //                   >
// //                     🎉
// //                   </motion.div>

// //                   <div>
// //                     <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
// //                       You're on the list!
// //                     </h3>
// //                     <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
// //                       Welcome to MATCH AT FIRST SWIPE.
// //                       <br />
// //                       We'll notify you as soon as we launch in Australia 🇦🇺
// //                     </p>
// //                   </div>

// //                   {/* ✅ Perks */}
// //                   {[
// //                     "3 months FREE Premium",
// //                     "Early Access",
// //                     "Exclusive Rewards",
// //                   ].map((perk, i) => (
// //                     <motion.div
// //                       key={perk}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       transition={{ delay: 0.3 + i * 0.1 }}
// //                       className="flex items-center gap-2 bg-[#F0FDFF] rounded-xl px-4 py-2.5 text-sm font-medium text-[#0891B2]"
// //                     >
// //                       <span className="text-[#22D3EE]">✓</span>
// //                       {perk}
// //                     </motion.div>
// //                   ))}
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // }


// /* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useSearchParams } from "react-router-dom";

// export default function WaitlistPage() {
//   const [searchParams] = useSearchParams();
//   const fromQR = searchParams.get("join") === "true";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//   });
//   const [errors,setErrors] = useState({})
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ UPDATED: SheetDB Integration Logic
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email) return;

//     setIsLoading(true);

//     try {
//       // 1. Data prepare karo
//       const payload = {
//         ...formData,
//         source: fromQR ? "QR Code" : "Direct Web", // Track karega ki QR se aaya ya nahi
//         date: new Date().toLocaleString(), // Time stamp add karega
//       };

//       // 2. SheetDB API call
//       const response = await fetch("https://sheetdb.io/api/v1/sl4zxdx7tagip", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ data: payload }),
//       });

//       // 3. Response handle karo
//       if (response.ok) {
//         setIsSubmitted(true); // Success screen dikhao
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Network error. Please check your connection.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fields = [
//     {
//       name: "name",
//       label: "Full Name",
//       type: "text",
//       placeholder: "John Smith",
//       icon: "👤",
//       required: true,
//     },
//     {
//       name: "email",
//       label: "Email Address",
//       type: "email",
//       placeholder: "john@example.com",
//       icon: "📧",
//       required: true,
//     },
//     {
//       name: "phone",
//       label: "Phone Number",
//       type: "tel",
//       placeholder: "+61 400 000 000",
//       icon: "📱",
//       required: false,
//     },
//     {
//       name: "city",
//       label: "City",
//       type: "text",
//       placeholder: "Sydney, Melbourne...",
//       icon: "📍",
//       required: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12">
//       {/* ✅ Background */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/aqua-bg.jpg"
//           alt="bg"
//           loading="lazy"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30" />
//       </div>

//       {/* ✅ Floating stars */}
//       {["10%", "85%", "20%", "70%", "50%"].map((left, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-white/20 text-2xl pointer-events-none z-[1]"
//           style={{ left, top: `${15 + i * 15}%` }}
//           animate={{
//             y: [0, -15, 0],
//             rotate: [0, 20, -20, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 3 + i * 0.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.4,
//           }}
//         >
//           ✦
//         </motion.div>
//       ))}

//       {/* ✅ Main Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative z-10 w-full max-w-lg"
//       >
//         <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden">
//           {/* ✅ Header */}
//           <div className="bg-gradient-to-r from-[#22D3EE] to-[#0891B2] px-6 sm:px-8 pt-8 pb-6">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-center"
//             >
//               {/* Logo */}
//               <motion.img
//                 src="/image.png"
//                 alt="Logo"
//                 className="h-8 sm:h-10 mx-auto mb-4 brightness-0 invert"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{
//                   delay: 0.4,
//                   type: "spring",
//                   stiffness: 200,
//                 }}
//               />

//               <h1 className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-2">
//                 Join the Waitlist
//               </h1>
//               <p className="text-white/80 text-sm sm:text-base font-medium">
//                 Be among the first 1000 to get
//                 <span className="text-white font-bold"> 3 months FREE</span>
//               </p>

//               {/* ✅ Badge */}
//               {fromQR && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.6 }}
//                   className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mt-3 border border-white/30"
//                 >
//                   <span>📱</span>
//                   <span>Scanned via QR Code</span>
//                 </motion.div>
//               )}
//             </motion.div>
//           </div>

//           {/* ✅ Form / Success */}
//           <div className="px-6 sm:px-8 py-6 sm:py-8">
//             <AnimatePresence mode="wait">
//               {!isSubmitted ? (
//                 // ✅ FORM
//                 <motion.form
//                   key="form"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   onSubmit={handleSubmit}
//                   className="space-y-4"
//                 >
//                   {fields.map((field, i) => (
//                     <motion.div
//                       key={field.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.1 * i + 0.3 }}
//                     >
//                       <label className="block text-sm font-semibold text-gray-700 mb-1.5">
//                         {field.label}
//                         {field.required && (
//                           <span className="text-[#22D3EE] ml-1">*</span>
//                         )}
//                       </label>
//                       <div className="relative">
//                         {/* Icon */}
//                         <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">
//                           {field.icon}
//                         </span>

//                         <input
//                           type={field.type}
//                           name={field.name}
//                           value={formData[field.name]}
//                           onChange={handleChange}
//                           onFocus={() => setFocusedField(field.name)}
//                           onBlur={() => setFocusedField(null)}
//                           placeholder={field.placeholder}
//                           required={field.required}
//                           className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-2xl border-2 text-gray-800 text-sm sm:text-base placeholder-gray-400 outline-none transition-all duration-200"
//                           style={{
//                             borderColor:
//                               focusedField === field.name
//                                 ? "#22D3EE"
//                                 : formData[field.name]
//                                 ? "#86EFAC"
//                                 : "#E5E7EB",
//                             boxShadow:
//                               focusedField === field.name
//                                 ? "0 0 0 4px rgba(34,211,238,0.1)"
//                                 : "none",
//                             background:
//                               focusedField === field.name ? "#F0FDFF" : "white",
//                           }}
//                         />

//                         {/* ✅ Checkmark jab filled */}
//                         <AnimatePresence>
//                           {formData[field.name] &&
//                             focusedField !== field.name && (
//                               <motion.span
//                                 initial={{ scale: 0, opacity: 0 }}
//                                 animate={{ scale: 1, opacity: 1 }}
//                                 exit={{ scale: 0, opacity: 0 }}
//                                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green-400 text-base"
//                               >
//                                 ✓
//                               </motion.span>
//                             )}
//                         </AnimatePresence>
//                       </div>
//                     </motion.div>
//                   ))}

//                   {/* ✅ Submit Button */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.7 }}
//                     className="pt-2"
//                   >
//                     <motion.button
//                       type="submit"
//                       disabled={isLoading}
//                       whileTap={{ scale: 0.97 }}
//                       className="w-full py-4 rounded-2xl text-white font-bold text-base sm:text-lg relative overflow-hidden"
//                       style={{
//                         background: "linear-gradient(135deg, #22D3EE, #0891B2)",
//                         boxShadow: "0 8px 25px rgba(34,211,238,0.35)",
//                       }}
//                     >
//                       <AnimatePresence mode="wait">
//                         {isLoading ? (
//                           <motion.div
//                             key="loading"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex items-center justify-center gap-2"
//                           >
//                             {/* ✅ Loading dots */}
//                             {[0, 1, 2].map((dot) => (
//                               <motion.div
//                                 key={dot}
//                                 className="w-2 h-2 bg-white rounded-full"
//                                 animate={{ y: [0, -6, 0] }}
//                                 transition={{
//                                   duration: 0.6,
//                                   repeat: Infinity,
//                                   delay: dot * 0.15,
//                                 }}
//                               />
//                             ))}
//                           </motion.div>
//                         ) : (
//                           <motion.span
//                             key="text"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex items-center justify-center gap-2"
//                           >
//                             Join Waitlist
//                             <span>🚀</span>
//                           </motion.span>
//                         )}
//                       </AnimatePresence>
//                     </motion.button>
//                   </motion.div>

//                   {/* ✅ Privacy note */}
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.8 }}
//                     className="text-center text-xs text-gray-400 pt-1"
//                   >
//                     🔒 Your info is safe. No spam, ever.
//                   </motion.p>
//                 </motion.form>
//               ) : (
//                 // ✅ SUCCESS STATE
//                 <motion.div
//                   key="success"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className="text-center py-8 space-y-4"
//                 >
//                   {/* ✅ Success icon */}
//                   <motion.div
//                     animate={{
//                       scale: [1, 1.2, 1],
//                       rotate: [0, 10, -10, 0],
//                     }}
//                     transition={{
//                       duration: 0.6,
//                       repeat: 2,
//                     }}
//                     className="text-6xl"
//                   >
//                     🎉
//                   </motion.div>

//                   <div>
//                     <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
//                       You're on the list!
//                     </h3>
//                     <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
//                       Welcome to MATCH AT FIRST SWIPE.
//                       <br />
//                       We'll notify you as soon as we launch in Australia 🇦🇺
//                     </p>
//                   </div>

//                   {/* ✅ Perks */}
//                   {[
//                     "3 months FREE Premium",
//                     "Early Access",
//                     "Exclusive Rewards",
//                   ].map((perk, i) => (
//                     <motion.div
//                       key={perk}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-2 bg-[#F0FDFF] rounded-xl px-4 py-2.5 text-sm font-medium text-[#0891B2]"
//                     >
//                       <span className="text-[#22D3EE]">✓</span>
//                       {perk}
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }









/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export default function WaitlistPage() {
  const [searchParams] = useSearchParams();
  const fromQR = searchParams.get("join") === "true";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // ✅ Error hatao jab user type kare
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // ✅ Validation Function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\+\-\(\)]{8,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    } else if (formData.city.trim().length < 2) {
      newErrors.city = "Please enter a valid city name";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit Handler with Validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        source: fromQR ? "QR Code" : "Direct Web",
        date: new Date().toLocaleString(),
      };

      const response = await fetch("https://sheetdb.io/api/v1/sl4zxdx7tagip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: payload }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Saari fields required: true
  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "John Smith",
      icon: "👤",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
      icon: "📧",
      required: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+61 400 000 000",
      icon: "📱",
      required: true,
    },
    {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "Sydney, Melbourne...",
      icon: "📍",
      required: true,
    },
  ];

  // ✅ Border color logic with error
  const getBorderColor = (fieldName) => {
    if (errors[fieldName]) return "#EF4444"; // Red for error
    if (focusedField === fieldName) return "#22D3EE"; // Cyan for focus
    if (formData[fieldName]) return "#86EFAC"; // Green for filled
    return "#E5E7EB"; // Gray default
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* ✅ Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/aqua-bg.jpg"
          alt="bg"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ✅ Floating stars */}
      {["10%", "85%", "20%", "70%", "50%"].map((left, i) => (
        <motion.div
          key={i}
          className="absolute text-white/20 text-2xl pointer-events-none z-[1]"
          style={{ left, top: `${15 + i * 15}%` }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* ✅ Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden">
          {/* ✅ Header */}
          <div className="bg-gradient-to-r from-[#22D3EE] to-[#0891B2] px-6 sm:px-8 pt-8 pb-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              {/* Logo */}
              <motion.img
                src="/image.png"
                alt="Logo"
                className="h-8 sm:h-10 mx-auto mb-4 brightness-0 invert"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
              />

              <h1 className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-2">
                Join the Waitlist
              </h1>
              <p className="text-white/80 text-sm sm:text-base font-medium">
                Be among the first 1000 to get
                <span className="text-white font-bold"> 3 months FREE</span>
              </p>

              {/* ✅ Badge */}
              {fromQR && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mt-3 border border-white/30"
                >
                  <span>📱</span>
                  <span>Scanned via QR Code</span>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* ✅ Form / Success */}
          <div className="px-6 sm:px-8 py-6 sm:py-8">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                // ✅ FORM
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {fields.map((field, i) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>
                      <div className="relative">
                        {/* Icon */}
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">
                          {field.icon}
                        </span>

                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          className="w-full pl-10 pr-4 py-3 sm:py-3.5 rounded-2xl border-2 text-gray-800 text-sm sm:text-base placeholder-gray-400 outline-none transition-all duration-200"
                          style={{
                            borderColor: getBorderColor(field.name),
                            boxShadow:
                              focusedField === field.name
                                ? "0 0 0 4px rgba(34,211,238,0.1)"
                                : errors[field.name]
                                ? "0 0 0 4px rgba(239,68,68,0.1)"
                                : "none",
                            background:
                              focusedField === field.name 
                                ? "#F0FDFF" 
                                : errors[field.name]
                                ? "#FEF2F2"
                                : "white",
                          }}
                        />

                        {/* ✅ Checkmark jab filled (no error) */}
                        <AnimatePresence>
                          {formData[field.name] &&
                            !errors[field.name] &&
                            focusedField !== field.name && (
                              <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green-400 text-base"
                              >
                                ✓
                              </motion.span>
                            )}
                        </AnimatePresence>

                        {/* ✅ Error icon jab error ho */}
                        <AnimatePresence>
                          {errors[field.name] && focusedField !== field.name && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-red-500 text-base"
                            >
                              ✕
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* ✅ Error Message */}
                      <AnimatePresence>
                        {errors[field.name] && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-xs mt-1.5 ml-1 flex items-center gap-1"
                          >
                            <span>⚠️</span>
                            {errors[field.name]}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}

                  {/* ✅ Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pt-2"
                  >
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-4 rounded-2xl text-white font-bold text-base sm:text-lg relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background: "linear-gradient(135deg, #22D3EE, #0891B2)",
                        boxShadow: "0 8px 25px rgba(34,211,238,0.35)",
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-2"
                          >
                            {[0, 1, 2].map((dot) => (
                              <motion.div
                                key={dot}
                                className="w-2 h-2 bg-white rounded-full"
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  delay: dot * 0.15,
                                }}
                              />
                            ))}
                          </motion.div>
                        ) : (
                          <motion.span
                            key="text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-2"
                          >
                            Join Waitlist
                            <span>🚀</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>

                  {/* ✅ Privacy note */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center text-xs text-gray-400 pt-1"
                  >
                    🔒 Your info is safe. No spam, ever.
                  </motion.p>
                </motion.form>
              ) : (
                // ✅ SUCCESS STATE
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center py-8 space-y-4"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: 2,
                    }}
                    className="text-6xl"
                  >
                    🎉
                  </motion.div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                      You're on the list!
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                      Welcome to MATCH AT FIRST SWIPE.
                      <br />
                      We'll notify you as soon as we launch in Australia 🇦🇺
                    </p>
                  </div>

                  {[
                    "3 months FREE Premium",
                    "Early Access",
                    "Exclusive Rewards",
                  ].map((perk, i) => (
                    <motion.div
                      key={perk}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 bg-[#F0FDFF] rounded-xl px-4 py-2.5 text-sm font-medium text-[#0891B2]"
                    >
                      <span className="text-[#22D3EE]">✓</span>
                      {perk}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}