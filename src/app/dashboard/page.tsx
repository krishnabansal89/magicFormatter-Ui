"use client";
import { useEffect, useState } from "react";
interface UserData {
  name: string;
  joinDate: string;
  plan: {
    tier: string;
    status: string;
  };
  stats: {
    projects: number;
  };
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const fetchData = async () => {
      try {
        // Get JWT token from localStorage
        const token = localStorage.getItem("user");
        if (!token) throw new Error("No authentication token found");

        const user = JSON.parse(token);
        console.log("USER /n", user);
        const dateString = user.createdAt;
        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        // Convert to human-readable month (1-12)
        const monthName = monthNames[monthIndex];

        // Get year
        const year = date.getFullYear();

        setUserData({
          name: user.name,
          joinDate: `${monthName} ${year}`,
          plan: { tier: user.plan, status: "Active" },
          stats: { projects: user.activeDocument },
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch data");
        // Fallback dummy data
        setUserData({
          name: "John Doe",
          joinDate: "January 2023",
          plan: {
            tier: "Pro",
            status: "Active",
          },
          stats: {
            projects: 24,
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="pt-20 bg-neutral-950 min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="pt-20 bg-neutral-950 min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );

  return (
    <main className="pt-[8rem] bg-neutral-950 h-[100%]">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-neutral-900 rounded-xl shadow-2xl overflow-hidden border border-neutral-800 md:w-fit mx-auto">
          <div className="p-6 md:p-8">
            {/* Header with user info */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden border-2 border-blue-400">
                    <span className="text-3xl font-bold text-white">
                      {userData?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "JD"}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-black"></div>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    {userData?.name || "John Doe"}
                  </h1>
                  <p className="text-neutral-400">
                    Member since {userData?.joinDate || "January 2023"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg shadow-blue-900/30">
                  Upgrade Plan
                </button>
              </div>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-800 rounded-lg p-5 border border-neutral-700">
                <p className="text-neutral-400 text-sm mb-1">Total Projects</p>
                <h3 className="text-2xl font-bold text-white">
                  {userData?.stats.projects}
                </h3>
                <div className="mt-2 flex items-center">
                  
                  <span className="text-green-400 text-sm ml-2">
                    Unlimited left
                  </span>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-lg p-5 border border-neutral-700">
                <p className="text-neutral-400 text-sm mb-1">Subscription</p>
                <h3 className="text-2xl font-bold text-white">
                  {(userData?.plan.tier as string).toUpperCase() || "FREE"}
                </h3>
                <div className="mt-2 flex items-center ">
                  <span className="text-blue-400 text-sm">
                    {userData?.plan.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
