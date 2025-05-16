import React from "react";

export default function Modallayout({ children, modal }) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}
