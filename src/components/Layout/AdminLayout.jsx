import React from "react";

import AdminNavbar from "../UI/AdminNavbar";


const AdminLayout = ({children}) => {
    return (
        <div>
            <AdminNavbar/>
            <div className="p-6">
               {children }
            </div>
        </div>
    );
};

export default AdminLayout;
