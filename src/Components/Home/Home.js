import React from 'react';

import Header from './Header/Header';
import Content from './Content/Content';
import Input from './Input/Input';
import Answer from './Answer/Answer';
import RightBar from './RightBar/RightBar';
import LeftBar from './LeftBar/LeftBar'

const Home = ({ titles }) => {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Content/>
                    <Input/>
                </div>
                 <Answer/>
                 <LeftBar/>
                <RightBar title={titles}/>
            </div>
        );
}

export default Home;
