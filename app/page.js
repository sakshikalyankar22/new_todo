import Image from "next/image";

export default function Home() {
  return (
    
    <div className="bg-white border border-black-500 p-4 flex flex-col items-center min-h-screen ">
    <div className="mt-16 bg-E3C9C9 border border-black p-8 flex flex-col items-center justify-center rounded-xl w-1/3">
    
      <div className="text-red-400 mt-4 h-20 w-full flex justify-center items-center font-serif text-4xl">
        <p>Login</p>
      </div>

      <div className=" w-full flex justify-center items-center font-serif">
        <p>Sign in to your account</p>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter your username"
          className="h-10 w-80 bg-red-200 outline-none border-none p-2 rounded-xl font-serif"
        />
      </div>

      <div className="mt-4">
        <input
          type="password"
          placeholder="Enter your password"
          className="h-10 w-80 bg-red-200 outline-none border-none p-2 rounded-xl font-serif"
        />
      </div>

      <div className="w-full flex justify-center items-center font-serif ">
        <p>Forget password?</p>
      </div>

      <div className="mt-4 flex justify-center">
        <button className="bg-red-200 hover:bg-red-100 text-white py-2 px-12 rounded font-serif">
          Login
        </button>
      </div>
    </div>
  </div>
  );
}
