interface Button {
  textBtn: string | any;
  color: string;
  onClick: any;
}
const Button: React.FC<Button> = ({ textBtn, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} px-10 py-4  hover:shadow-lg hover:text-opacity-90 font-semibold text-white rounded-btn w-56 flex justify-center items-center w-full`}
    >
      {textBtn}
    </button>
  );
};

export default Button;
