function CardInformationText({ category, text }) {
  return (
    <span className={"flex gap-2 text-lg text-blue-500"}>
      <p className={"font-semibold"}>{category}: </p>
      <p>{text}</p>
    </span>
  );
}

export default CardInformationText;
