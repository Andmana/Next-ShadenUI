import ProfilePopper from "../navbar/ProfilePopper";
import Sidebar from "../sidebar/Sidebar";

const AdminLayout = ({ children, title }) => {
  return (
    <div className="w-full h-fit min-h-screen grid grid-cols-[267px_1fr] ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="w-full min-h-full h-fit grid grid-rows-[auto_1fr] ">
        {/* Navigation */}
        <header className="pt-5 pb-4 px-6 flex items-center justify-between bg-gray-50  border-b-1 border-b-slate-200 shadow-md">
          <h1 className="text-xl font-semibold">{title}</h1>
          <ProfilePopper />
        </header>

        {/* Main content */}
        <main className="w-full min-h-full bg-slate-100 pt-6 px-6 grid grid-cols-1">
          {/* Add article content here */}
          <div className="flex-1 rounded-md bg-gray-50  border-1 border-slate-200">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
