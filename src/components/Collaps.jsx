import { Component } from 'react';
import PropTypes from 'prop-types';

class Collaps extends Component {
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
                    {isOpen ? <img src="src\assets\images\arrow-up.svg" alt="arrow" /> : <img src="src\assets\images\arrow-down.svg" alt="arrow" />}
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

Collaps.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Collaps;
