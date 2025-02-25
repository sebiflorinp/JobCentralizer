import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Header() {
  return (
    <div className="flex max-h-24 items-center gap-7 bg-blue-600 p-10 text-xl text-white">
      <Link to="/">
        <motion.button
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 1000 }}
          className="rounded-xl p-3 duration-100 hover:bg-blue-700 active:bg-blue-500"
        >
          Anunțuri
        </motion.button>
      </Link>
      <Link to="/statistics">
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="rounded-xl p-3 duration-100 hover:bg-blue-700 active:bg-blue-500"
        >
          Statistici
        </motion.button>
      </Link>
    </div>
  );
}

export default Header;
