import React, { Component } from 'react' ;

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {
    
    render() {
        return (
            <div className='requests-item'>
                    <Icon className='requests-item__icon'icon='fas fa-exclamation-triangle'/>
                    <div className='requests-item__title'>
                        <div className='requests-item__title__text'>Fix my sprinkler!</div>
                        <Icon className='requests-item__title__arrow' icon='fas fa-sort-down'/>
                    </div>
                    <div className='requests-item__tenant-unit'>
                        Max - Unit 335
                    </div>
                    <div className='requests-item__date'>
                        10/10/1991
                    </div>
                    <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('tryna change request item status')}/>
                    
                    <div className='requests-item__description'>
                        <img 
                            className='requests-item__description.img'
                            src='http://via.placeholder.com/160x94'
                            />
                        <p className='requests-item__description-text'>
                            lorem ipsum gind oaindfasdoin adoignasdofin 
                            lorem ipsum gind oaindfasdoin adoignasdofin 
                            lorem ipsum gind oaindfasdoin adoignasdofin 
                            lorem ipsum gind oaindfasdoin adoignasdofin 

                        
                        </p>
                    </div>
            </div>
        )
    }
}

export default RequestsItem;