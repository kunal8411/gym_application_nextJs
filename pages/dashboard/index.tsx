import { LoginForm } from "@/components/login-form";

import { Dashboard } from "@/components/dashboard-01";

export default function DashboardPage() {
  return (
    <>
      <div className="breadcrumb-text">
        <div className="flex items-center justify-center w-full h-screen px-4">
          {/* <LoginForm /> */}
          <Dashboard/>
        </div>
      </div>
    </>
  );
}
