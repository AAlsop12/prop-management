import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, name } = this.props;
        
        return (
            <div className='form-input'>
                <input className={`${className} form-input`}/>
            </div>
        )
    }
}
