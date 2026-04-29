
const AdminLogin = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
          <form action="" className="shadow p-4 rounded">
              Admin Panel
        <div className="my-3">
          <label htmlFor="email">Email Address</label><br />
          <input type="email" className="bg-slate-100 rounded p-1" />
        </div>
        <div className="my-3">
          <label htmlFor="password">Password</label><br />
          <input type="password" className="bg-slate-100 rounded p-1" />
              </div>
              <button className="bg-slate-900 py-1 w-full rounded text-slate-100">Login</button>
      </form>
    </section>
  );
}

export default AdminLogin