import { NavLink, Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div>
      <div className="p-4 border-b border-slate-400 een flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src="/e-commerce-logo.png" alt="" className="max-w-[3em]" />
          <h1 className="font-bold text-2xl">Gefclusive admin Dashboard</h1>
        </div>
        <button className="bg-slate-800 text-slate-100 rounded-3xl px-8 py-1">
          Logout
        </button>
      </div>

      <div className="flex gap-6">
        <div className="border-r min-h-[85vh] border-slate-400 pl-4">
          <nav>
            <ul>
              <NavLink to="/admin/home" >
                <li className="py-3 border-b active:border-r-8 active:border-green-700 hover:">
                  Admin
                </li>
              </NavLink>
              <NavLink to="/admin/add-item">
                <li className="py-3 border-b hover:border-r-8 hover:border-green-700">
                  Add Item
                </li>
              </NavLink>
              <NavLink to="/admin/item-list">
                <li className="py-3 border-b hover:border-r-8 hover:border-green-700">
                  Item List
                </li>
              </NavLink>
              <NavLink to="/admin/order">
                <li className="py-3 border-b hover:border-r-8 hover:border-green-700">
                  Made Orders
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout