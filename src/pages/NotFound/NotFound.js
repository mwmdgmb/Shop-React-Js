import React from "react";
import "./NotFound.style.scss";
import NotFound from "../../assets/preview.png";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <img src={NotFound} alt="not_found" />
    </div>
  );
}

export default NotFoundPage;
