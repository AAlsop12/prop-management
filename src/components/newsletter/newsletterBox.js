import React, { Component } from 'react';


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


class NewsletterBox extends Component  {

    render() {
        const { date } = this.props;
        if(!date) {
            return<div>...loading</div>
        }
        return (
            <div className='newsletter-box'>
                <div className='newsletter-box__day'>{date.getDate()}</div>
                <div className='newsletter-box__month-year'>{months[date.getMonth()]} {date.getFullYear()}</div>
                <div className='newsletter-box__point'></div>
            </div>
        )
    }

}

export default NewsletterBox;