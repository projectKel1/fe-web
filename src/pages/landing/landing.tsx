import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 bg-bgMain h-screen gap-5">
      <img
        className="h-full grid col-span-2"
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="self-center text-center mx-6">
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores
          optio adipisci obcaecati soluta quasi!
        </p>
        <button
          onClick={() => navigate('/login')}
          className="bg-bgBtn py-2 px-5 rounded-full font-semibold text-white hover:bg-hoverBtn"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
