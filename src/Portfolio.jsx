import React, { useEffect, useState, useRef } from "react";
import FolderIcon from "./assets/folder-l.svg";
import BookIcon from "./assets/book-l.svg";
import DocIcon from "./assets/doc-l.svg";
import logoDark from "./assets/logo-dark.svg";
import logoLight from "./assets/logo-light.svg";
import SunIcon from "./assets/sun.svg";
import MoonIcon from "./assets/moon.svg";
import MyImage from './assets/myimg.jpeg';
import Meet from './assets/meet.svg'
import CheckIcon from './assets/check-icon.svg'

// Email icons
import EmailIconWhite from "./assets/EmailIconWhite.svg";
import EmailIconBlack from "./assets/EmailIconBlack.svg";

// Calendar icons
import CalendarIconWhite from "./assets/CalendarIconWhite.svg";
import CalendarIconBlack from "./assets/CalendarIconBlack.svg";

// LinkedIn logos
import LinkedInLogoWhite from "./assets/LinkedInLogoWhite.svg";
import LinkedInLogoBlack from "./assets/LinkedInLogoBlack.svg";


import oonly from './assets/oonly.svg';
import oonly1 from "./assets/previews/oonly/preview.avif";
import oonly2 from "./assets/previews/oonly/preview-1.avif";
import oonly3 from "./assets/previews/oonly/preview-2.jpg";
import oonly4 from "./assets/previews/oonly/preview-3.jpg";
import oonly5 from "./assets/previews/oonly/preview-4.jpg";
import oonly6 from "./assets/previews/oonly/preview-5.avif";




import edaly from './assets/edaly.svg';
import edaly1 from "./assets/previews/edaly/preview.jpg";
import edaly2 from "./assets/previews/edaly/preview-1.jpg";
import edaly3 from "./assets/previews/edaly/preview-2.jpg";
import edaly4 from "./assets/previews/edaly/preview-3.jpg";
import edaly5 from "./assets/previews/edaly/preview-4.jpg";
import edaly6 from "./assets/previews/edaly/preview-5.jpg";



import wiser from './assets/wiser.svg';
import wiser1 from "./assets/previews/wiser/preview.jpg";
import wiser2 from "./assets/previews/wiser/preview-1.jpg";
import wiser3 from "./assets/previews/wiser/preview-2.jpg";
import wiser4 from "./assets/previews/wiser/preview-3.jpg";
import wiser5 from "./assets/previews/wiser/preview-4.jpg";
import wiser6 from "./assets/previews/wiser/preview-5.jpg";

import syntroper from './assets/syntroper.svg';
import syntroper1 from "./assets/previews/syntroper/preview.jpg";
import syntroper2 from "./assets/previews/syntroper/preview-1.jpg";
import syntroper3 from "./assets/previews/syntroper/preview-2.jpg";
import syntroper4 from "./assets/previews/syntroper/preview-3.jpg";
import syntroper5 from "./assets/previews/syntroper/preview-4.jpg";
import syntroper6 from "./assets/previews/syntroper/preview-5.jpg";


import takeoffyachts from './assets/takeoffyachts.svg';
import toy1 from "./assets/previews/takeoffyachts/preview.jpg";
import toy2 from "./assets/previews/takeoffyachts/preview-1.jpg";

import cigul from './assets/cigul.svg';
import cigul1 from "./assets/previews/cigul/preview.jpg";
import cigul2 from "./assets/previews/cigul/preview-1.jpg";
import cigul3 from "./assets/previews/cigul/preview-2.jpg";
import cigul4 from "./assets/previews/cigul/preview-3.jpg";
import cigul5 from "./assets/previews/cigul/preview-4.jpg";
import cigul6 from "./assets/previews/cigul/preview-5.jpg";


import imast from './assets/imast.svg';
import imast1 from "./assets/previews/imast/preview.jpg";
import imast2 from "./assets/previews/imast/preview-1.jpg";
import imast3 from "./assets/previews/imast/preview-2.jpg";
import imast4 from "./assets/previews/imast/preview-3.jpg";
import imast5 from "./assets/previews/imast/preview-4.jpg";
import imast6 from "./assets/previews/imast/preview-5.jpg";


import venu from './assets/venu.svg';
import venu1 from "./assets/previews/venu/preview.jpg";
import venu2 from "./assets/previews/venu/preview-1.jpg";
import venu3 from "./assets/previews/venu/preview-2.jpg";
import venu4 from "./assets/previews/venu/preview-3.jpg";

// Imports
import cheeer from './assets/cheeer.svg';
import cheeer1 from "./assets/previews/cheeer/preview.jpg";
import cheeer2 from "./assets/previews/cheeer/preview-1.jpg";

import mezbaan from './assets/mezbaan.svg';
import mezbaan1 from "./assets/previews/mezbaan/preview.jpg";
import mezbaan2 from "./assets/previews/mezbaan/preview-1.jpg";
import mezbaan3 from "./assets/previews/mezbaan/preview-2.jpg";


import lonch from './assets/lonch.svg';
import lonch1 from "./assets/previews/lonch/preview.jpg";
import lonch2 from "./assets/previews/lonch/preview-1.jpg";

import portant from './assets/portant.svg';
import portant1 from "./assets/previews/portant/preview.jpg";
import portant2 from "./assets/previews/portant/preview-1.jpg";

import showcase from "./assets/showcase.mp4";



import "./styles.css";

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [revealCount, setRevealCount] = useState(0); // 0..4
    const [activeTab, setActiveTab] = useState("tab1");

    const tabRefs = useRef([]);
    const sectionRefs = useRef([]);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "r" || e.key === "R") {
                setRevealCount((c) => Math.min(4, c + 1));
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // IntersectionObserver for active tab
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveTab(entry.target.id);
                });
            },
            { threshold: 0.6 }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    function toggleTheme() {
        setDark((d) => !d);
    }

    function handleRClick() {
        setRevealCount((c) => Math.min(4, c + 1));
    }



    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRefs.current) return;

            const scrollPos = window.scrollY + window.innerHeight / 3;

            sectionRefs.current.forEach((section, index) => {
                if (section) {
                    const offsetTop = section.offsetTop;
                    const offsetBottom = offsetTop + section.offsetHeight;

                    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                        setActiveTab(`tab${index + 1}`);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleTabClick(id) {
        setActiveTab(id);
        const section = sectionRefs.current.find((el) => el.id === id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 64, // adjust for sticky header height if needed
                behavior: "smooth",
            });
        }
    }



    return (
        <div className={dark ? "app dark" : "app light"}>
            <div className="container-lock">

                <header className="site-header ">
                    <div className="logo">
                        <img src={dark ? logoLight : logoDark} alt="logo" width={40} height={40} />
                    </div>

                    <button
                        className="theme-toggle"
                        aria-label={dark ? "switch to light" : "switch to dark"}
                        onClick={toggleTheme}
                    >
                        {dark ? (
                            <img src={MoonIcon} alt="Dark Mode" className="theme-icon" />
                        ) : (
                            <img src={SunIcon} alt="Light Mode" className="theme-icon" />
                        )}
                    </button>
                </header>

                <main className="hero">
                    <div className="hero-inner">
                        <div className="left-column">
                            <div className="chips">
                                <span className="chip">Karachi, Pakistan</span>
                                <span className="chip">Open To Work</span>
                            </div>

                            <div className="heading">
                                <h1>
                                    Hey, I’m Hamza. UX Designer with a thing for interface design.
                                </h1>
                            </div>

                            <div className="reveal-row">
                                <span className="small muted">Press</span>
                                <button
                                    className="kbd"
                                    onClick={handleRClick}
                                    aria-label="press R"
                                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                >
                                    R
                                </button>
                                <span className="small muted">to reveal my email</span>

                                <span className="email-wrapper" aria-hidden={revealCount < 4}>
                                    <span
                                        className="email"
                                        style={{ filter: `blur(${mapRevealToBlur(revealCount)})` }}
                                    >
                                        info@meethamza.com
                                    </span>
                                </span>
                            </div>

                            <div className="cta-row">
                                <a href="https://cal.com/hamza-shahzad-k9jpac/quick-chat" target="_blank" rel="noopener noreferrer"  >
                                    <button className="cta">
                                        <img src={Meet} alt="doc" /> Book a Call
                                    </button>
                                </a>

                                <a href="https://uixhamza.gumroad.com/l/mastering-ui-design" target="_blank" rel="noopener noreferrer">
                                    <button className="cta">
                                        <img src={BookIcon} alt="book" /> UI Design eBook ⭐ 4.8
                                    </button>
                                </a>

                            </div>
                        </div>

                        <div className="right-column">
                            <img
                                src={MyImage}
                                alt="Profile"
                                className="hero-profile-image" />
                        </div>

                    </div>
                </main>

                {/* --- Scroll Tabs Section --- */}
                <section className="scroll-tabs-section">
                    {/* Tab Headings */}
                    <div className="tabs-container">
                        {["Portfolio", "Pricing"].map((tab, index) => {
                            const id = `tab${index + 1}`;
                            return (
                                <h2
                                    key={id}
                                    className={`tab-heading ${activeTab === id ? "active" : ""}`}
                                    onClick={() => handleTabClick(id)}
                                >
                                    {tab}
                                </h2>
                            );
                        })}
                    </div>

                    {/* Tab Contents */}
                    <div className="tab-sections">
                        {/* First tab */}

                        <div id="tab1" ref={el => sectionRefs.current[0] = el} className="tab-content">

                            <div
                                id="tab1"
                                ref={el => sectionRefs.current[0] = el}
                                className="tab-content video-wrapper"
                                style={{ width: "100%" }}
                            >
                                <div style={{
                                    width: "100%",
                                    aspectRatio: "1 / 1",
                                    overflow: "hidden",
                                }}>
                                    <video
                                        src={showcase}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                </div>
                            </div>


                            <div className="portfolio-cards">
                                {[
                                    { logo: oonly, name: "oonly AI", description: "A tool that reveals why users convert or drop. I simplified insights into a clear, revenue-focused interface.", date: "2025 - 2026", images: [oonly1, oonly2, oonly3, oonly4, oonly5, oonly6] },
                                    { logo: venu, name: "Venu", description: "A social platform for finding venues and events. I structured the experience around real-time, interest-based discovery.", date: "2024 - 2024", images: [venu1, venu2, venu3, venu4] },
                                    { logo: wiser, name: "wiser AI", description: "AI built for GTM and CX teams to automate planning, prep, and follow-ups. I refined how the product communicates intelligence and productivity.", date: "2024 - 2024", images: [wiser1, wiser2, wiser3, wiser4, wiser5, wiser6] },
                                    { logo: syntroper, name: "Syntroper", description: "Modern diagramming software with fractional architect support. I worked on making architecture workflows faster and cleaner.", date: "2025 - 2026", images: [syntroper1, syntroper2, syntroper3, syntroper4, syntroper5, syntroper6] },
                                    { logo: edaly, name: "Edaly AI", description: "Travel & Tourism Application", date: "2024 - 2024", images: [edaly1, edaly2, edaly3, edaly4, edaly5, edaly6] },
                                    { logo: cigul, name: "Cigul", description: "A design agency where I built polished UI templates for their template marketplace.", date: "2024 - 2024", images: [cigul1, cigul2, cigul3, cigul4, cigul5, cigul6] },
                                    { logo: takeoffyachts, name: "TakeOffYachts", description: "A design agency where I built polished UI templates for their template marketplace.", date: "2024 - 2024", images: [toy1, toy2] },
                                    { logo: imast, name: "Imast", description: "Travel & Tourism Application", date: "2024 - 2024", images: [imast1, imast2, imast3, imast4, imast5, imast6] },
                                    { logo: cheeer, name: "Cheeer", description: "An AI sports companion for smarter updates and conversations. I tuned the experience to feel quick and fan-friendly.", date: "2024 - 2024", images: [cheeer1, cheeer2] },
                                    { logo: mezbaan, name: "Mezbaan", description: "A travel platform connecting tourists with Pakistani travel agencies. I worked on making trip discovery and booking simple.", date: "2024 - 2024", images: [mezbaan1, mezbaan2, mezbaan3] },
                                    { logo: lonch, name: "Lonch", description: "Travel & Tourism Application", date: "2024 - 2024", images: [lonch1, lonch2] },
                                    { logo: portant, name: "Portant", description: "Travel & Tourism Application", date: "2024 - 2024", images: [portant1, portant2] },
                                    // { logo: portant, name: "Portant", date: "2024 - 2024", images: [portant1, portant2] },
                                    // { logo: cheeer, name: "Cheeer", date: "2024 - 2024", images: [cheeer1, cheeer2] },
                                    // { logo: chaajao, name: "Chaajao", date: "2024 - 2024", images: [chaajao1, chaajao2] },
                                    // { logo: syntroper, name: "Syntroper", date: "2024 - 2024", images: [syntroper1, syntroper2] },


                                ].map((p, i) => (
                                    <div key={i} className="portfolio-card">
                                        <div className="portfolio-header">
                                            <img src={p.logo} alt="project logo" className="portfolio-logo" />
                                            <div className="portfolio-info">
                                                <div className="project-name">{p.name}</div>
                                                <div className="project-date">{p.date}</div>
                                            </div>
                                        </div>
                                        <div className="project-description">
                                            {p.description}
                                        </div>
                                        <div className="project-images">
                                            {p.images.map((img, idx) => (
                                                <img key={idx} src={img} alt={`preview ${idx + 1}`} className="project-image" />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Third tab placeholder */}
                        <div id="tab2" ref={el => sectionRefs.current[1] = el} className="tab-content">

                            <div className="pricing-section">
                                <div className="pricing-cards">
                                    {/* Card 1 */}
                                    <div className="pricing-card">
                                        {/* Top Section */}
                                        <div className="pricing-card-header">
                                            <h3>Design Retainer</h3>
                                            <p>Perfect for individuals</p>
                                        </div>

                                        {/* Features */}
                                        <div className="pricing-features">
                                            <div className="feature">
                                                <img src={CheckIcon} alt="check" className="feature-icon" />
                                                <p>Basic analytics and insights</p>
                                            </div>
                                            <div className="feature">
                                                <img src={CheckIcon} alt="check" className="feature-icon" />
                                                <p>Access to standard templates</p>
                                            </div>
                                            <div className="feature">
                                                <img src={CheckIcon} alt="check" className="feature-icon" />
                                                <p>Email support</p>
                                            </div>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="pricing-footer">
                                            <div className="price-info">
                                                <span className="price-sub">Starting at</span>
                                                <h4>$1,498/mo</h4>
                                            </div>
                                            <a href="https://www.linkedin.com/in/uixhamza/" target="_blank" rel="noopener noreferrer"  >
                                                <button className="cta-pricing">Let's Chat</button>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="pricing-card">
                                        <div className="pricing-card-header">
                                            <h3>Website/Product</h3>
                                            <p>For growing businesses</p>
                                        </div>

                                        <div className="pricing-features">
                                            <div className="feature">
                                                <img src={CheckIcon} alt="check" className="feature-icon" />
                                                <p>Advanced analytics and insights</p>
                                            </div>
                                            <div className="feature">
                                                <img src={CheckIcon} alt="check" className="feature-icon" />
                                                <p>Priority email & chat support</p>
                                            </div>
                                            <div className="feature">
                                                <img src={CheckIcon} alt="check" className="feature-icon" />
                                                <p>Custom integrations</p>
                                            </div>
                                        </div>

                                        <div className="pricing-footer">
                                            <div className="price-info">
                                                <span className="price-sub">Starting at</span>
                                                <h4>$3,489</h4>
                                            </div>
                                            <a href="https://www.linkedin.com/in/uixhamza/" target="_blank" rel="noopener noreferrer"  >
                                                <button className="cta-pricing">Let's Chat</button>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 3 - CTA-style */}
                                    <div className="pricing-card pricing-card-cta">
                                        <h3 className="cta-heading">Got any Queries? Let's Catch up!</h3>
                                        <div className="cta-buttons">
                                            <a href="https://cal.com/hamza-shahzad-k9jpac/quick-chat" target="_blank" rel="noopener noreferrer"  >
                                                <button className="cta-pricing extended">
                                                    <img src={Meet} alt="Calendar" className="cta-icon" />
                                                    Book a Call
                                                </button>
                                            </a>

                                            <a href="https://www.linkedin.com/in/uixhamza/" target="_blank" rel="noopener noreferrer"  >
                                                <button className="cta-light">
                                                    <img src={LinkedInLogoBlack} alt="Calendar" className="cta-icon" />
                                                    Let's Connect
                                                </button>
                                            </a>
                                        </div>
                                    </div>




                                </div>
                            </div>

                        </div>




                        {/* Second tab placeholder */}
                        {/* <div
                            id="tab3"
                            ref={el => sectionRefs.current[2] = el}
                            className="tab-content cta-section"
                            style={{
                                "--cta-bg": dark ? "#ffffff" : "#0D0E10",
                                "--cta-color": dark ? "#0D0E10" : "#ffffff"
                            }}
                        >
                            <h2 className="cta-heading">Got any queries? Let's catch up!</h2>
                            <div className="cta-buttons">
                                {dark ? (
                                    <>
                                        <button className="cta">
                                            <img src={Meet} alt="Calendar" className="cta-icon" />
                                            Book a call
                                        </button>
                                        <button className="cta">
                                            <img src={LinkedInLogoWhite} alt="LinkedIn" className="cta-icon" />
                                            Let's Connect
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="cta-light">
                                            <img src={Meet} alt="Calendar" className="cta-icon" />
                                            Schedule a call
                                        </button>
                                        <button className="cta-light">
                                            <img src={LinkedInLogoBlack} alt="LinkedIn" className="cta-icon" />
                                            Let's Connect
                                        </button>
                                    </>
                                )}
                            </div>

                        </div> */}





                    </div>





                </section>

                <div className="footer-final">
                    <p>Copyright © 2026 Hamza Shahzad | Your Friendly Neighbourhood Designer :)</p>
                </div>

            </div>
        </div>
    );
}

function mapRevealToBlur(count) {
    switch (count) {
        case 0: return "8px";
        case 1: return "5px";
        case 2: return "3px";
        case 3: return "1px";
        case 4: return "0px";
        default: return "8px";
    }
}
