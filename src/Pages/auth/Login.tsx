import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-[90%] py-[2em] flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <div>
            <img src="/e-commerce-logo.png" alt="" className="max-w-[5em]" />
            <h1>Sign In</h1>
          </div>
        </div>
        <form action="">
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <br />
            <input
              type="email"
              className="min-w-full p-1 mt-2 bg-slate-100 border border-slate-300"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Password</label>
            <br />
            <input
              type="password"
              className="min-w-full py-1 px-1 mt-2 bg-slate-100 border border-slate-300"
            />
          </div>
    
          <p>
            Don't have an account click{" "}
            <Link to="/auth/register" className="text-sky-500">
              here
            </Link>
          </p>
          <button
            type="submit"
            className="p-3 my-3 rounded w-full bg-green-700 text-slate-50">
            Sign In
          </button>
          <div className="flex items-center gap-3">
            <hr className="min-w-[50%] border border-slate-400" />
            <h6>or</h6>
            <hr className="min-w-[50%] border border-slate-400" />
          </div>
          <button className="border border-slate-500 rounded p-2 w-full justify-center flex items-center gap-3">
            <img src="/google-icon.jpg" alt="" className="max-w-[1em]" />
            Sign up with Google
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login
