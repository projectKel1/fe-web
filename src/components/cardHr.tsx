import Button from "./button";

interface Target {
  tittle: string;
  subTittle: string;
  textBtn: string;
}
const CardHr: React.FC<Target> = ({ tittle, subTittle, textBtn }) => {
  return (
    <div className="rounded-cardBase bg-white w-full p-10">
      <div>
        <h1 className="font-semibold text-2xl">{tittle}</h1>
        <p className="text-subTitle font-medium text-lg">{subTittle}</p>
      </div>
      <div className="py-10 flex flex-wrap justify-end">
        <div>
          <Button onClick={``} textBtn={textBtn} color="bg-bgBtn" />
        </div>
      </div>
    </div>
  );
};

export default CardHr;
