import React from "react";
import AdminSidebar from "../UI/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="p-6 flex-1">{children}</div>
    </div>
  );
};

export default AdminLayout;
