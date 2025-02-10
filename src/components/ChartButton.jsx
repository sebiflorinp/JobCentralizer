function ChartButton({ title, data, setDataFunction, setTitleFunction }) {
  const handleClick = () => {
    setTitleFunction(title);
    setDataFunction(data);
  };

  return (
    <button
      onClick={() => handleClick()}
      className="rounded-lg bg-blue-600 p-2 px-7 text-xl text-white hover:bg-blue-700 active:bg-blue-500"
    >
      {title}
    </button>
  );
}

export default ChartButton;
