import React, { Component } from 'react';
import NewNewsletterform from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        //     console.log(button)  
        //     if(button == 'submit') {
        //         console.log('trying to submit to backend.')
        //     } 
        this.props.history.push('/dashboard');

    }

    onCancel = () => {

        this.props.history.push('/dashboard');

    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterform 
                onCancel={() => this.onCancel()} 
                onSubmit={(event) => this.onSubmit(event)}
                title='New Newsletter' />
            </div>
        )
    }
}

export default NewNewsletter;