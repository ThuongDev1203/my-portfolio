import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import "../App.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="landing-page">
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
          THUONG DEV
        </motion.h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <motion.ul
            initial={{ x: "-100%" }}
            animate={{ x: isMenuOpen ? 0 : "-100%" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
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
                <img
                  src="/images/information.png"
                  alt="star"
                  className="menu-icon"
                />{" "}
                About
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
                <img
                  src="/images/achievement.png"
                  alt="sword"
                  className="menu-icon"
                />{" "}
                Achievements
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
                <img
                  src="/images/drawer.png"
                  alt="ship"
                  className="menu-icon"
                />{" "}
                Projects
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
                <img
                  src="/images/contacts.png"
                  alt="mail"
                  className="menu-icon"
                />{" "}
                Contact
              </ScrollLink>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>

      {/* About Section */}
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
              src="/images/avt.jpg" // Ảnh 1926x2568px
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
              <h1 style={{ fontSize: "2.5rem" }}>Hi, I'm Thuong Cao Nguyen</h1>
              <h3 style={{ fontSize: "1.5rem" }}>Unity Intern</h3>
            </motion.div>
          </div>
          <h2>
            <img
              src="/images/information.png"
              alt="star"
              className="section-icon"
            />{" "}
            About Me
          </h2>
          <p
            style={{
              textAlign: "justify",
              fontSize: "1.1rem",
              lineHeight: 1.5,
            }}
          >
            I’m a senior student majoring in Computer Science at Van Hien
            University, passionate about game programming. I have good skills in
            C# and have participated in many game projects. Among them, I have
            won 3 awards such as: Gold prize and second prize in game
            programming, encouragement prize in algorithms. I always strive to
            learn and develop myself.
          </p>
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
            Achievements
          </h2>
          <div className="grid-content">
            <motion.div
              className="grid-item"
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                y: -10,
                rotate: 5,
                boxShadow: "8px 8px 0px #1a3c34",
              }}
              animate={{
                y: [0, -5, 0],
                transition: { repeat: Infinity, duration: 1.5 },
              }}
            >
              <img
                src="/images/dt1.jpg"
                alt="Academic Competition Season 1"
                className="grid-image"
              />
              <strong>🎮 Academic Competition Season 1</strong>
              <p>Van Hien University</p>
              <p>Award: Consolation Prize</p>
            </motion.div>
            <motion.div
              className="grid-item"
              initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                y: -10,
                rotate: -5,
                boxShadow: "8px 8px 0px #1a3c34",
              }}
              animate={{
                y: [0, -5, 0],
                transition: { repeat: Infinity, duration: 1.5, delay: 0.3 },
              }}
            >
              <img
                src="/images/dt2.jpg"
                alt="Van Hien University"
                className="grid-image"
              />
              <strong>🎮 Academic Competitions Season 2</strong>
              <p>My game went viral.</p>
              <p>Award: Second Prize</p>
            </motion.div>
            <motion.div
              className="grid-item"
              initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                y: -10,
                rotate: -5,
                boxShadow: "8px 8px 0px #1a3c34",
              }}
              animate={{
                y: [0, -5, 0],
                transition: { repeat: Infinity, duration: 1.5, delay: 0.3 },
              }}
            >
              <img
                src="/images/dt3.jpg"
                alt="Van Hien University"
                className="grid-image"
              />
              <strong>🎮 Academic Competitions Season 3</strong>
              <p>Van Hien University</p>
              <p>Award: Gold Prize</p>
            </motion.div>
            <motion.div
              className="grid-item"
              initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                y: -10,
                rotate: -5,
                boxShadow: "8px 8px 0px #1a3c34",
              }}
              animate={{
                y: [0, -5, 0],
                transition: { repeat: Infinity, duration: 1.5, delay: 0.3 },
              }}
            >
              <img
                src="/images/dt4.jpg"
                alt="Van Hien University"
                className="grid-image"
              />
              <strong>🎮 Game Idea & Program Contest</strong>
              <p>Korea cultural center</p>
              <p>Award: Consolation Prize</p>
            </motion.div>
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
            Projects
          </h2>
          <div className="grid-content">
            <motion.div
              className="grid-item"
              initial={{ scale: 0.8, opacity: 0, x: -50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                y: -10,
                rotate: 5,
                boxShadow: "8px 8px 0px #1a3c34",
              }}
              animate={{
                rotate: [0, 2, -2, 0],
                transition: { repeat: Infinity, duration: 2 },
              }}
            >
              <img
                src="/images/game_1.jpg"
                alt="Pig Adventure"
                className="grid-image"
              />
              <strong>🌠 Pig Adventure</strong>
              <p>The pig is cheerful, enthusiastic and active.</p>
              <motion.button
                href="https://thuonggamedev.itch.io/pigadventure"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                Play
              </motion.button>
            </motion.div>
            <motion.div
              className="grid-item"
              initial={{ scale: 0.8, opacity: 0, x: 50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                y: -10,
                rotate: -5,
                boxShadow: "8px 8px 0px #1a3c34",
              }}
              animate={{
                rotate: [0, -2, 2, 0],
                transition: { repeat: Infinity, duration: 2, delay: 0.5 },
              }}
            >
              <img
                src="/images/game_2.jpg"
                alt="Undead Sirvivor"
                className="grid-image"
              />
              <strong>⚔️ Undead Sirvivor</strong>
              <p>Fight evil zombies and have a variety of skills.</p>
              <motion.button
                href="https://thuonggamedev.itch.io/undead-sirvivor"
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                Play
              </motion.button>
            </motion.div>
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
            Contact
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
        <p>© 2024 ThuongDev | All rights reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
