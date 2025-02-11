import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Header() {
  return (
    <div className="flex max-h-24 items-center gap-7 bg-blue-600 p-10 text-xl text-white">
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 1000 }}
        className="rounded-xl p-3 duration-100 hover:bg-blue-700 active:bg-blue-500"
      >
        <Link to="/">Anunțuri</Link>
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.8 }}
        className="rounded-xl p-3 duration-100 hover:bg-blue-700 active:bg-blue-500"
      >
        <Link to="/statistics">Statistici</Link>
      </motion.button>
    </div>
  );
}

export default Header;
