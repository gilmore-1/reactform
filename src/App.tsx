import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  lastname: string;
  email: string;
  password: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="container mx-auto px-4 w-screen h-screen flex items-center justify-center md:flex-row flex-col gap-12">
      <div className="flex flex-col w-full md:w-[525px] gap-3 text-center md:text-left">
        <h1 className="text-white font-bold text-[30px] md:text-[50px] leading-[36px] md:leading-[55px] tracking-[-0.5px] font-poppins">
          Learn to code by watching others
        </h1>
        <p className="text-white font-medium text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-poppins">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="w-full md:w-[520px] space-y-5 px-4 md:px-0">
        <button className="w-full bg-[#5E54A4] text-white text-center font-bold text-[15px] leading-[26px] tracking-[0.25px] font-poppins px-6 py-2 rounded-[10px] shadow-[0_8px_0_rgba(0,0,0,0.15)]">
          Try it free 7 days then $20/mo. thereafter
        </button>

        <form
          className="bg-white p-4 md:p-8 rounded-[10px] shadow-[0_8px_0_rgba(0,0,0,0.15)]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <input
              {...register("username", { required: true })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="username"
              placeholder="Enter your username"
            />
            {errors.username && (
              <div className="text-right text-[#FF7979] text-[11px] font-poppins font-medium italic leading-normal">
                First Name cannot be empty
              </div>
            )}
          </div>

          <div className="mb-4">
            <input
              {...register("lastname", { required: true })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="lastname"
              placeholder="Enter your lastname"
            />
            {errors.lastname && (
              <div className="text-right text-[#FF7979] text-[11px] font-poppins font-medium italic leading-normal">
                Last Name cannot be empty
              </div>
            )}
          </div>

          <div className="mb-4">
            <input
              {...register("email", { required: "Email Address is required" })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="text-right text-[#FF7979] text-[11px] font-poppins font-medium italic leading-normal">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <input
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 6,
              })}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="text-right text-[#FF7979] text-[11px] font-poppins font-medium italic leading-normal">
                Password cannot be empty
              </div>
            )}
          </div>

          <button
            className="bg-[#38CC8B] mt-5 w-full text-white font-semibold text-[15px] leading-[26px] tracking-[1px] font-poppins px-6 py-2 rounded-[5px] shadow-[inset_0_-4px_0_rgba(0,0,0,0.09)]"
            type="submit"
          >
            CLAIM YOUR FREE TRIAL
          </button>

          <p className="text-[#BAB7D4] text-center font-poppins text-[11px] font-medium leading-[26px] mt-2">
            By clicking the button, you are agreeing to our{" "}
            <a href="/terms" className="text-[#FF7979] font-bold">
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
