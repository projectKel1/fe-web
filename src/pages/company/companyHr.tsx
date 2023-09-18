const CompanyHr = () => {
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2">
        <div className="rounded-cardBase bg-white w-full p-10">
          <div>
            <h1 className="font-semibold text-2xl">Company Profile</h1>
            <p className="text-subTitle font-medium text-sm text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem cumque minus suscipit saepe ad reprehenderit.
              Recusandae, beatae hic ut sit aliquam soluta id quo, sequi at
              similique quod quos placeat!
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 px-6 w-full bg-white rounded-cardBase flex-grow flex flex-wrap gap-10 py-12">
        <div className="w-80 h-100 shadow-lg rounded-xl">
          <div className="px-8 py-4 bg-bgCard rounded-t-xl flex justify-between items-center">
            <h1 className="font-semibold text-lg">Visi</h1>
          </div>
          <div className="flex justify-center h-1/2 items-center">
            <span className="text-sm pt-12 pb-6 px-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas
              voluptates magni harum debitis, officia iste autem nam, similique
              ullam quod placeat minima, esse minus tempora. Odio voluptate id
              tenetur.
            </span>
          </div>
        </div>

        <div className="w-80 h-100 shadow-lg rounded-xl">
          <div className="px-8 py-4 bg-bgCard rounded-t-xl flex justify-between items-center">
            <h1 className="font-semibold text-lg">Misi</h1>
          </div>
          <div className="flex justify-center h-1/2 items-center">
            <span className="text-sm pt-12 pb-6 px-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas
              voluptates magni harum debitis, officia iste autem nam, similique
              ullam quod placeat minima, esse minus tempora. Odio voluptate id
              tenetur.
            </span>
          </div>
        </div>

        <div className="w-80 h-100 shadow-lg rounded-xl">
          <div className="px-8 py-4 bg-bgCard rounded-t-xl flex justify-between items-center">
            <h1 className="font-semibold text-lg">Contact</h1>
          </div>
          <div className="flex justify-center h-1/2 items-center">
            <span className="text-sm pt-12 pb-6 px-4 text-justify">
              Jl Test, No 999, Blok Z, Jakarta Pusat, 30123
              <br/>
              Phone Number: +62 1234 9381
              <br />
              Email: test@mail.com
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CompanyHr;
