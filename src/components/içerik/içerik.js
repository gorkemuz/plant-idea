import React from 'react';

import Header from './header/header';
import Content from './content/content';
import Input from './input/input';
import Answer from './answer/answer';
import RightBar from './rightbar/rightbar';


class Home extends React.Component {
  render(){
    this.url = this.props.match.params.id;
  return (
    <div>
      <Header  email={this.props.email} />
      <div className="conta">
        <Content url={this.url} />
        <Input  url={this.url} />
      </div>
      <Answer url={this.url} />
      {/*<LeftBar />*/}
      <RightBar />
    </div>
  );}
};

export default Home;
