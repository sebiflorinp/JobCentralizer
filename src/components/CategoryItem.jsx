import { motion } from "motion/react";

function CityCategoryItem({
  categoryItemName,
  numberOfJobs,
  index,
  isToggled,
  addCategoryItem,
  removeCategoryItem,
  isChecked,
  handleChecking,
}) {
  const handleOnChange = (e) => {
    if (e.target.checked) {
      addCategoryItem(categoryItemName);
    } else {
      removeCategoryItem(categoryItemName);
    }

    handleChecking(categoryItemName, e.target.checked);
  };

  return (
    <motion.div
      className="flex items-center justify-between p-3 text-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{
        duration: 0.2,
        delay: isToggled ? 0.025 * index : 0,
      }}
    >
      <ul className="flex grow items-center justify-between pr-3">
        <p>{categoryItemName}</p>
        <p>{numberOfJobs}</p>
      </ul>
      <input
        onChange={handleOnChange}
        className="h-5 w-5 rounded accent-blue-500"
        type="checkbox"
        checked={isChecked}
      />
    </motion.div>
  );
}

export default CityCategoryItem;
