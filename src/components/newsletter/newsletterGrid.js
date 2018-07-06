import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';


class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    render() {

        const latest = {
            _id: '115',
            title: 'Happy Holidays Fam',
            body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'

        }
        return (
            <div className='newsletter-grid'>
                <Button className="newsletter-grid__button" icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid; 