import React, { Component } from 'react' ;

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {
    
    render() {
        return (
            <div className='requests-item'>
                    <Icon className='requests-item__icon'icon='fas fa-exclamation-triangle'/>
                    <div className='requests-item__title'>
                        Fix my sprinkler!
                    </div>
                    <div className='requests-item__tenant-unit'>
                        Max - Unit 335
                    </div>
                    <Icon className='requests-item__arrow' icon='fas fa-sort-down'/>
                    <div className='requests-item__date'>
                        10/10/1991
                    </div>
                    <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('tryna change request item status')}/>
                    
            </div>
        )
    }
}

export default RequestsItem;