import Button from "./button";
import Popup from "./popup";
import { motion } from "framer-motion";
import { useState } from "react";

interface Target {
  tittle: string;
  subTittle: string;
  textBtn: string;
}
const CardHr: React.FC<Target> = ({ tittle, subTittle, textBtn }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="rounded-cardBase bg-white w-full p-10">
      <div>
        <h1 className="font-semibold text-2xl">{tittle}</h1>
        <p className="text-subTitle font-medium text-lg">{subTittle}</p>
      </div>
      <div className="py-10 flex flex-wrap justify-end">
        <div>
          <Button onClick={handleOpen} textBtn={textBtn} color="bg-bgBtn" />
        </div>
      </div>
      {open ? (
        <Popup onConfirm={handleClose}>
          <motion.div
            animate={{ y: 10 }}
            className="relative w-full max-w-xl max-h-full"
          >
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-black">
                  Add Employee
                </h3>
                <form className="space-y-4" action="#">
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      className="border border-gray-300 text-black text-sm rounded-sm block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      name="text"
                      className="border border-gray-300 text-black text-sm rounded-sm block w-full p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">
                      Password
                    </label>
                    <input
                      type="password"
                      name="text"
                      className="border border-gray-300 text-black text-sm rounded-sm block w-full p-2.5"
                    />
                  </div>
                  <div className="flex gap-2 py-2 justify-end">
                    <button
                      type="button"
                      onClick={() => handleClose()}
                      className="text-white bg-bgBtnRed rounded-cardBase font-semibold text-sm px-5 py-2.5 text-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-white bg-bgBtn font-semibold rounded-cardBase text-sm px-8 py-2.5 text-center"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </Popup>
      ) : null}
    </div>
  );
};

export default CardHr;
