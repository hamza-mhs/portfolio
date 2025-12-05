// import React, { useEffect, useState, useRef } from "react";

// const sections = [
//     { id: "section1", label: "Portfolio" },
//     { id: "section2", label: "Contact Me" },
//     { id: "section3", label: "Favorites" },
// ];

// export default function ScrollTabsSection() {
//     const [activeTab, setActiveTab] = useState(sections[0].id);
//     const sectionRefs = useRef([]);

//     // Update active tab on scroll
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveTab(entry.target.id);
//                     }
//                 });
//             },
//             { threshold: 0.6 }
//         );

//         sectionRefs.current.forEach((section) => {
//             if (section) observer.observe(section);
//         });

//         return () => observer.disconnect();
//     }, []);

//     const handleTabClick = (id) => {
//         const section = document.getElementById(id);
//         section.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <section className="scroll-tabs-section">
//             <div className="tabs-container">
//                 {sections.map((tab) => (
//                     <button
//                         key={tab.id}
//                         className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
//                         onClick={() => handleTabClick(tab.id)}
//                     >
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>

//             <div className="tab-sections">
//                 {sections.map((sec, idx) => (
//                     <div
//                         key={sec.id}
//                         id={sec.id}
//                         ref={(el) => (sectionRefs.current[idx] = el)}
//                         className="tab-content"
//                     >
//                         <h2>{sec.label}</h2>
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                             euismod, nunc vel tincidunt consectetur, nisl nisl aliquam nisl,
//                             eget aliquam nisl nisl sit amet nisl.
//                         </p>
//                         <div className="demo-boxes">
//                             <div className="demo-box">Content 1</div>
//                             <div className="demo-box">Content 2</div>
//                             <div className="demo-box">Content 3</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Inline CSS */}
//             <style>{`
//         .scroll-tabs-section {
//           padding: 64px 224px;
//           background: #0d0e10;
//           color: #fff;
//           font-family: Inter, sans-serif;
//         }

//         .tabs-container {
//           display: flex;
//           gap: 24px;
//           overflow-x: auto;
//           position: sticky;
//           top: 0;
//           background: #0d0e10;
//           z-index: 10;
//           padding: 16px 0;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//           scrollbar-width: none; /* Firefox */
//         }
//         .tabs-container::-webkit-scrollbar { display: none; } /* Chrome/Safari */

//         .tab-btn {
//           padding: 10px 20px;
//           border-radius: 8px;
//           background: transparent;
//           border: 1px solid rgba(255,255,255,0.2);
//           color: #fff;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s;
//           flex-shrink: 0;
//         }
//         .tab-btn:hover {
//           background: #202021;
//         }
//         .tab-btn:active {
//           background: #2f3132;
//         }
//         .tab-btn.active {
//           background: #646cff;
//           color: #fff;
//           border-color: #646cff;
//         }

//         .tab-sections {
//           display: flex;
//           flex-direction: column;
//           gap: 96px;
//           margin-top: 32px;
//         }

//         .tab-content {
//           min-height: 70vh;
//         }

//         .tab-content h2 {
//           font-size: 32px;
//           margin-bottom: 16px;
//         }

//         .demo-boxes {
//           display: flex;
//           gap: 16px;
//           flex-wrap: wrap;
//           margin-top: 16px;
//         }

//         .demo-box {
//           flex: 1 1 200px;
//           height: 150px;
//           background: rgba(255,255,255,0.05);
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Mobile swipe support */
//         @media (max-width: 768px) {
//           .tabs-container {
//             gap: 12px;
//             padding: 12px 0;
//           }
//           .tab-btn {
//             padding: 8px 16px;
//           }
//           .scroll-tabs-section {
//             padding: 100px 24px;
//       }
//         }

//         @media (max-width: 440px) {
//             .scroll-tabs-section {
//                 padding: 100px 24px;
//           }
//       `}</style>
//         </section>
//     );
// }
