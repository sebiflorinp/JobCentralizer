import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Header() {
  return (
    <div className="col-span-full row-span-1 row-start-1 flex items-center gap-7 bg-blue-700 p-10 text-xl text-white">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="rounded-xl p-3 duration-100 hover:bg-blue-800 active:bg-blue-600"
      >
        <Link to="/">Jobs</Link>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="rounded-xl p-3 duration-100 hover:bg-blue-800 active:bg-blue-600"
      >
        <Link to="/statistics">Statistics</Link>
      </motion.button>
    </div>
  );
}

export default Header;
