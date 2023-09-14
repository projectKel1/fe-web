const Login = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen bg-bgMain">
        <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="space-y-3">
              <h1 className="text-xl flex justify-center  font-bold leading-tight tracking-tightmd:text-2xl">
                Login
              </h1>
            </div>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className=" mb-2 text-sm font-semibold ">Email</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="email@email.com"
                  required
                />
              </div>
              <div>
                <label className="mb-2 text-sm font-semibold ">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button className="font-semibold text-white bg-bgBtn hover:bg-hoverBtn rounded-full  px-16 py-3 text-center">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
