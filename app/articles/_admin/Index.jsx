import ProfilePopper from "@/components/navbar/ProfilePopper";
import Sidebar from "@/components/sidebar/Sidebar";

const AdminArticles = () => {
  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="w-full">
        {/* Navigation */}
        <header className="pt-5 pb-4 px-6 flex items-center justify-between bg-white shadow-md">
          <h1 className="text-xl font-semibold">Articles</h1>
          <ProfilePopper />
        </header>

        {/* Main content */}
        <main className="p-6">{/* Add article content here */}</main>
      </div>
    </div>
  );
};

export default AdminArticles;
