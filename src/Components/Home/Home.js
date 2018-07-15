import React from "react";

import Header from "./header/header";
import Content from "./content/content";
import Input from "./input/input";
import Answer from "./answer/answer";
import RightBar from "./rightbar/rightbar";
import LeftBar from "./leftbar/leftbar";

const Home = ({ titles }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Content />
                <Input />
            </div>
            <Answer />
            <LeftBar />
            <RightBar title={titles} />
        </div>
    );
};

export default Home;
