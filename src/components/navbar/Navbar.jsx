import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar*/}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Cem Şener
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/cem-%C5%9Fener-aa259ab8/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7VN8WI7ImzBt2Ce7EGINgfTNV87xNjmv_w&usqp=CAU"
              alt=""
            />
          </a>
          <a
            href="https://github.com/cemsener"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg"
              alt=""
            />
          </a>
          <a
            href="https://medium.com/@cemener"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
