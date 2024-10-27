"use client";

import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/layout";

const DashboardAdmin = ({ params }: { params: { admin: string } }) => {
  return (
    <ProtectedRoute>
      <div>
        <Layout />
      </div>
    </ProtectedRoute>
  );
};

export default DashboardAdmin;
