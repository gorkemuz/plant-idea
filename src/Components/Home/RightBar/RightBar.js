import React from "react";
import "./rightbar.css";

const RightBar = ({ title }) => {
  return (
    <div className="Kategoriler">
      <p className="kategori-title">Popüler İçerikler</p>
      {title.map((item, i) => (
        <p key={i} className="kategori">
          {item}
        </p>
      ))}
    </div>
  );
};

export default RightBar;
