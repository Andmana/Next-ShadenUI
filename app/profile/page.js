import { ErrorDisplay } from "@/components/errorDIsplay/ErrorDisplay";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { verifySession } from "@/lib/sessions";
import axios from "axios";
import Link from "next/link";

export default async function Profile() {
  try {
    const { token } = await verifySession();
    const res = await axios.get(
      "https://test-fe.mysellerpintar.com/api/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 5000,
        validateStatus: (status) => status >= 200 && status < 300,
      }
    );

    if (!res.data) {
      throw new Error("Invalid data structure from API");
    }

    console.log("token :", token);

    const data = res.data;

    return (
      <div className="w-full h-svh sm:h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1 w-full flex items-center justify-center py-10 px-5 sm:px-40">
          <div className="sm:w-100 border-1 rounded-m px-4 py-6 flex flex-col gap-9">
            <h1 className="font-semibold text-xl text-center">User Profile</h1>

            <div className="w-full flex flex-col gap-6">
              {/* Avatar */}
              <div className="relative m-auto w-17 h-17 rounded-full bg-[#BFDBFE] flex justify-center items-center ">
                <span className="text-base font-medium">A</span>
              </div>
              {/* Detail Row */}
              <div className="w-full flex flex-col gap-3 text-base">
                <DetailRow label={"Username"} value={data.username} />
                <DetailRow label={"Password"} value={"*******"} />
                <DetailRow label={"Role"} value={data.role} />
              </div>

              <Link
                href="/"
                className="w-full h-10 bg-blue-600 py-2 px-4 rounded-md text-white font-medium text-sm flex items-center justify-center"
              >
                Back to home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch articles:", error);

    return (
      <ErrorDisplay
        message={
          error instanceof Error
            ? error.message
            : "Failed to load articles. Please try again later."
        }
      />
    );
  }
}

const DetailRow = ({ label, value }) => {
  return (
    <div className="bg-gray-100 border-1 border-slate-200 rounded-md  py-2.5 px-3 flex justify-between gap-4">
      <div className="flex-1 flex justify-between gap-4">
        <label>{label}</label> <span>:</span>
      </div>
      <p className="text-center w-[210px]">{value}</p>
    </div>
  );
};
