import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import languageData from "../language";
import "../App.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("en");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLang(lang === "en" ? "vi" : "en");

  const content = languageData[lang];

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
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <motion.ul>
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
              transition={{ delay: 0.3 }}
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
            {/* Nút chuyển ngôn ngữ trên mobile */}
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
        {/* Nút chuyển ngôn ngữ trên desktop */}
        <button className="lang-toggle desktop-lang" onClick={toggleLanguage}>
          {lang === "en" ? "VN" : "EN"}
        </button>
      </motion.header>

      {/* ... (Các section khác giữ nguyên) */}
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
              <h1 style={{ fontSize: "2.5rem" }}>{content.about.title}</h1>
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
          <p>{content.about.description}</p>
        </motion.div>
      </section>

      {/* Achievements Section */}
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
                  alt={item.title}
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

      {/* Projects Section */}
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
                  alt={item.title}
                  className="grid-image"
                />
                <strong>
                  {index === 0 ? "🌠" : "⚔️"} {item.title}
                </strong>
                <p>{item.description}</p>
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

      {/* Contact Section */}
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
      <footer>
        <p>{content.footer}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
