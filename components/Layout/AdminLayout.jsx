import ProfilePopper from "../navbar/ProfilePopper";
import Sidebar from "../sidebar/Sidebar";

const AdminLayout = ({ children, title }) => {
  return (
    <div className="w-full h-fit min-h-screen flex items-stretch">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="w-full bg-slate-100">
        {/* Navigation */}
        <header className="pt-5 pb-4 px-6 flex items-center justify-between bg-gray-50  border-b-1 border-b-slate-200 shadow-md">
          <h1 className="text-xl font-semibold">{title}</h1>
          <ProfilePopper />
        </header>

        {/* Main content */}
        <main className="min-h-full pt-6 px-6">
          {/* Add article content here */}
          <div className="rounded-md bg-gray-50  border-1 border-slate-200"></div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
