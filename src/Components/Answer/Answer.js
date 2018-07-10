import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Answer.css';
import arrowup from './arrow-up.png';
import arrow from './arrow.png';


class Answer extends Component{
    render(){
    return (
        <div>
            <div className='kart'>
                    <Typography component="p" className='answerContent answer'>
                        Seamlessly initiate inexpensive quality vectors through error-free best practices. Credibly transition future-proof ideas through granular content. Rapidiously pontificate transparent systems rather.
                        <div className='answers-info'>
                            <p className='answer-date'>10/02/2018</p>
                            <p className='answer-nick'>Kaennn</p>
                          </div>
                        <div className='answers-stats'>
                            <img alt='user' className='arrow-up' src={arrowup} height='34px'/>
                            <img alt='user' className='arrow-down' src={arrow} height='34px'/>
                            <i className="fas fa-seedling seed"></i>
                        </div>
                    </Typography>
                    <Typography component="p" className='answerContent answer'>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum,
                        <div className='answers-info'>
                            <p className='answer-date'>10/02/2018</p>
                            <p className='answer-nick'>Rheawin</p>
                        </div>
                    </Typography>

            </div>
        </div>
    );
}
}

export default Answer;
