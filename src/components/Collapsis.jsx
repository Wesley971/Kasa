import { Component } from 'react';
import PropTypes from 'prop-types';

class Collapsis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleSection = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const { isOpen } = this.state;
        const { title, content } = this.props;
        return (
            <div className='collapsContent'>
                <h2 onClick={this.toggleSection} className='headCollaps'>
                     {title}
                </h2>
                {isOpen && (
                    <div className='headCollapsContent'>
                        <p>{content}</p>
                    </div>
                )}
            </div>
        );
    }
}

Collapsis.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Collapsis;

