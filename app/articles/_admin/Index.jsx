import ProfilePopper from "@/components/navbar/ProfilePopper";

const AdminArticles = () => {
  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-[267px] bg-blue-600 p-4">
        {/* Sidebar content */}
        <h2 className="text-white text-lg font-bold">Admin Sidebar</h2>
        {/* Add more sidebar elements here */}
      </aside>

      {/* Main content */}
      <div className="w-full">
        {/* Navigation */}
        <nav className="pt-5 pb-4 px-6 flex items-center justify-between bg-white shadow-md">
          <h1 className="text-xl font-semibold">Articles</h1>
          <ProfilePopper />
        </nav>

        {/* Main content */}
        <main className="p-6">{/* Add article content here */}</main>
      </div>
    </div>
  );
};

export default AdminArticles;
