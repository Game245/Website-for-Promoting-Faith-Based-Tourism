import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p);

  return (
    <nav className="text-gray-600 text-sm py-2 px-4">
      <Link to="/" className="text-blue-500 hover:underline">หน้าแรก</Link>
      {paths.map((path, index) => {
        const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
        return (
          <span key={fullPath}>
            {" » "}
            <Link to={fullPath} className="text-blue-500 hover:underline">
              {decodeURIComponent(path)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
