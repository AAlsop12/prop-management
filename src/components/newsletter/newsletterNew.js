import React, { Component } from 'react';
import NewNewsletterform from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log('trying to handle submit')  
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterform onSubmit={(event) => this.onSubmit(event)}/>  
            </div>
        )
    }
}

export default NewNewsletter;