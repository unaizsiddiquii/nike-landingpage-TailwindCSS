const Button = ({
  label,
  iconURl,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red  text-white border-coral-red"
    }
    `}
    >
      {label}

      {iconURl && (
        <img
          src={iconURl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 transition duration-100 ease hover:translate-x-2"
        />
      )}
    </button>
  );
};

export default Button;
