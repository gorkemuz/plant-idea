import React from "react";
import "./rightbar.css";

const RightBar = ({ title }) => {
    return (
        <div className="Kategoriler">
            <p className="kategori-title">Popüler İçerikler</p>
            {title.map(item => <p className="kategori">{item}</p>)}
        </div>
    );
};

export default RightBar;
