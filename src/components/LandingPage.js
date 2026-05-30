import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import languageData from "../language";
import "../App.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const menuRef = useRef(null); // Ref để kiểm tra click/chạm ngoài menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLang(lang === "en" ? "vi" : "en");
  const [expandedExperience, setExpandedExperience] = useState({});

  const toggleExperienceDetails = (index) => {
    setExpandedExperience((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderExperienceDescription = (item, index) => {
    const isExpanded = expandedExperience[index];

    if (Array.isArray(item.description)) {
      const visibleLines = isExpanded
        ? item.description
        : item.description.slice(0, 2);
      return (
        <>
          <ul className="item-description-list">
            {visibleLines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
          {item.description.length > 2 && (
            <button
              className="toggle-details"
              onClick={() => toggleExperienceDetails(index)}
            >
              {isExpanded
                ? content.experience.hideDetails
                : content.experience.readMore}
            </button>
          )}
        </>
      );
    }

    const longText =
      typeof item.description === "string" ? item.description : "";
    const previewText =
      longText.length > 120 ? `${longText.slice(0, 120).trim()}...` : longText;
    const needsToggle = longText.length > 120;

    return (
      <>
        <p className="item-description">
          {isExpanded || !needsToggle ? longText : previewText}
        </p>
        {needsToggle && (
          <button
            className="toggle-details"
            onClick={() => toggleExperienceDetails(index)}
          >
            {isExpanded
              ? content.experience.hideDetails
              : content.experience.readMore}
          </button>
        )}
      </>
    );
  };

  const content = languageData[lang];

  // Xử lý click/chạm ngoài menu để ẩn trên mobile
  useEffect(() => {
    const handleOutsideInteraction = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideInteraction);
    document.addEventListener("touchstart", handleOutsideInteraction);
    return () => {
      document.removeEventListener("mousedown", handleOutsideInteraction);
      document.removeEventListener("touchstart", handleOutsideInteraction);
    };
  }, [isMenuOpen]);

  // Animation variants cho menu mobile
  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="landing-page">
      {/* Hiệu ứng lá rơi */}
      <div className="leaf-fall">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`leaf leaf-${i}`} />
        ))}
      </div>

      {/* Header */}
      <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          {content.header}
        </motion.h1>
        <motion.button
          className="menu-toggle"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? "✖" : "☰"} {/* Chuyển icon */}
        </motion.button>
        <nav ref={menuRef} className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <motion.ul
            variants={window.innerWidth <= 768 ? menuVariants : undefined}
            initial={window.innerWidth <= 768 ? "hidden" : false}
            animate={
              window.innerWidth <= 768 && isMenuOpen ? "visible" : "hidden"
            }
            exit={window.innerWidth <= 768 ? "exit" : undefined}
          >
            <motion.li
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                <motion.img
                  src="/images/information.png"
                  alt="star"
                  className="menu-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                {content.menu.about}
              </ScrollLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                <motion.img
                  src="/images/user-experience.png"
                  alt="experience"
                  className="menu-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                {content.menu.experience}
              </ScrollLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ScrollLink
                to="achievements"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                <motion.img
                  src="/images/achievement.png"
                  alt="sword"
                  className="menu-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                {content.menu.achievements}
              </ScrollLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                <motion.img
                  src="/images/drawer.png"
                  alt="ship"
                  className="menu-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                {content.menu.projects}
              </ScrollLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                <motion.img
                  src="/images/contacts.png"
                  alt="mail"
                  className="menu-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                {content.menu.contact}
              </ScrollLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <motion.img
                  src="/images/cv.png"
                  alt="resume"
                  className="menu-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                {lang === "en" ? "Resume" : "Sơ yếu lý lịch"}
              </a>
            </motion.li>
            <motion.li
              className="mobile-lang"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button className="lang-toggle" onClick={toggleLanguage}>
                {lang === "en" ? "VN" : "EN"}
              </button>
            </motion.li>
          </motion.ul>
        </nav>
        <button className="lang-toggle desktop-lang" onClick={toggleLanguage}>
          {lang === "en" ? "VN" : "EN"}
        </button>
      </motion.header>

      {/* Các section */}
      <section id="about" className="section about">
        <motion.div
          className="content-box"
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: "12px 12px 0px #1a3c34" }}
        >
          <div className="about-header">
            <motion.img
              src="/images/avt.jpg"
              alt="Thuong Cao Nguyen"
              className="profile-image"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ rotate: 5, scale: 1.1 }}
            />
            <motion.div
              className="about-title"
              initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              <h1 style={{ fontSize: "2.2rem" }}>{content.about.title}</h1>
              <h3 style={{ fontSize: "1.5rem" }}>{content.about.subtitle}</h3>
            </motion.div>
          </div>
          <h2>
            <img
              src="/images/information.png"
              alt="star"
              className="section-icon"
            />{" "}
            {content.about.section}
          </h2>
          <p style={{ lineHeight: "1.5", textAlign: "justify" }}>
            {content.about.description}
          </p>
        </motion.div>
      </section>

      <section id="experience" className="section experience">
        <motion.div
          className="content-box"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2>
            <img
              src="/images/achievement.png"
              alt="experience"
              className="section-icon"
            />{" "}
            {content.experience.section}
          </h2>
          <div className="grid-content">
            {content.experience.items.map((item, index) => (
              <motion.div
                key={index}
                className="grid-item"
                initial={{
                  scale: 0.8,
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                whileHover={{
                  y: -10,
                  rotate: index % 2 === 0 ? 3 : -3,
                  boxShadow: "8px 8px 0px #1a3c34",
                }}
              >
                <div className="experience-header">
                  <strong>{item.title}</strong>
                  <span className="item-company">{item.company}</span>
                </div>
                <p className="item-duration">{item.duration}</p>
                <div className="experience-details-block">
                  {renderExperienceDescription(item, index)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="achievements" className="section achievements">
        <motion.div
          className="content-box"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2>
            <img
              src="/images/achievement.png"
              alt="sword"
              className="section-icon"
            />{" "}
            {content.achievements.section}
          </h2>
          <div className="grid-content">
            {content.achievements.items.map((item, index) => (
              <motion.div
                key={index}
                className="grid-item"
                initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotate: 5,
                  boxShadow: "8px 8px 0px #1a3c34",
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 1.5,
                    delay: index * 0.3,
                  },
                }}
              >
                <img
                  src={`/images/dt${index + 1}.jpg`}
                  alt="item.title"
                  className="grid-image"
                />
                <strong>🎮 {item.title}</strong>
                <p>{item.location}</p>
                <p>{item.award}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section projects">
        <motion.div
          className="content-box"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2>
            <img src="/images/drawer.png" alt="ship" className="section-icon" />{" "}
            {content.projects.section}
          </h2>
          <div className="grid-content">
            {content.projects.items.map((item, index) => (
              <motion.div
                key={index}
                className="grid-item"
                initial={{ scale: 0.8, opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{
                  y: -10,
                  rotate: index === 0 ? 5 : -5,
                  boxShadow: "8px 8px 0px #1a3c34",
                }}
                animate={{
                  rotate: [0, index === 0 ? 2 : -2, index === 0 ? -2 : 2, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.5,
                  },
                }}
              >
                <img
                  src={`/images/game_${index + 1}.jpg`}
                  alt="item.title"
                  className="grid-image"
                />
                <strong>
                  {index === 0 ? "🌠" : "⚔️"} {item.title}
                </strong>
                {Array.isArray(item.description) ? (
                  <ul className="item-description-list">
                    {item.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}
                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-button"
                  whileHover={{ scale: 1.1, rotate: index === 0 ? 10 : -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Play
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="section contact">
        <motion.div
          className="content-box"
          initial={{ x: "100%", opacity: 0, rotate: 10 }}
          whileInView={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          whileHover={{ y: -15, boxShadow: "12px 12px 0px #1a3c34" }}
        >
          <h2>
            <img
              src="/images/contacts.png"
              alt="contacts"
              className="section-icon"
            />{" "}
            {content.contact.section}
          </h2>
          <div className="social-links">
            <motion.a
              href="https://www.facebook.com/thuong.teb/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="social-icon"
              />
            </motion.a>
            <motion.a
              href="https://github.com/ThuongDev1203"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <img
                src="/images/github.png"
                alt="GitHub"
                className="social-icon"
              />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/thuongdev192"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </motion.a>
            <motion.a
              href="mailto:thuongdev1203@gmail.com"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <img
                src="/images/gmail.png"
                alt="Gmail"
                className="social-icon"
              />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1a3c34" }}>
        <p style={{ color: "white" }}>{content.footer}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
