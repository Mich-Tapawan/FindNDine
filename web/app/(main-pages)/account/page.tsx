"use client";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Profile Header */}
      <section className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          U
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">Username</h1>
        <p className="text-gray-600">user@email.com</p>
      </section>

      {/* Account Info */}
      <section className="bg-white rounded-2xl shadow p-6 mb-10 max-w-2xl mx-auto w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Account Information
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Full Name</span>
            <span className="text-gray-800 font-medium">John Doe</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600">Email</span>
            <span className="text-gray-800 font-medium">
              john.doe@email.com
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Member Since</span>
            <span className="text-gray-800 font-medium">Jan 2025</span>
          </div>
        </div>
      </section>

      {/* Settings / Actions */}
      <section className="bg-white rounded-2xl shadow p-6 max-w-2xl mx-auto w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center cursor-pointer hover:text-yellow-500 transition">
            <span>Edit Profile</span>
            <span>›</span>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:text-yellow-500 transition">
            <span>Change Password</span>
            <span>›</span>
          </li>
          <li className="flex justify-between items-center cursor-pointer text-red-500 hover:text-red-600 transition">
            <span>Log Out</span>
            <span>›</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
