import { Link, Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div>
      <div className="p-4 border-b border-slate-300 een flex justify-between items-center">
            <div className="flex gap-3 items-center">
            <img src="/e-commerce-logo.png" alt="" className="max-w-[3em]" />
            <h1 className="font-bold text-2xl">
                Gefclusive admin Dashboard
            </h1>
            </div>
            <button className="bg-slate-800 text-slate-100 rounded-3xl px-8 py-1">Logout</button>
        </div>
          
          <div className="flex gap-6">
            <div className="border-r min-h-[85vh] border-slate-400 p-4">
                <nav>
                      <ul>
                          <Link to="/admin">
                            <li>Admin</li>
                          </Link>
                          <Link to="/admin/add-item">
                            <li>Add Item</li>
                          </Link>
                          <Link to="/admin/item-list">
                        <li>Item List</li>
                          </Link>
                          <Link to="/admin/order">
                        <li>Made Orders</li>
                          </Link>
                    </ul>
                </nav>
            </div>
            <Outlet />
          </div>
    </div>
  );
}

export default AdminLayout