"use client";

import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/layout";
import { Dashboard } from "../components/admin-component/admin-sidebar";


const DashboardAdmin = ({ params }: { params: { admin: string } }) => {
  return (
    <ProtectedRoute>
      <div>
        <Layout />
        <Dashboard />
      </div>
    </ProtectedRoute>
  );
};

export default DashboardAdmin;
