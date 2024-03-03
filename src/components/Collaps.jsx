import { Component } from 'react';
import PropTypes from 'prop-types';
import "../sass/components/collaps.scss";

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
            <div className="collapsContent">
                <h2 onClick={this.toggleSection} className='headCollaps'>
                    {title}
                    <img 
                        src="src/assets/images/arrow-up.svg" 
                        alt="arrow" 
                        className={`arrow ${isOpen ? 'open' : ''}`} 
                    />
                </h2>
                <div className={`headCollapsContent ${isOpen ? 'open' : ''}`}>
                    <p>{content}</p>
                </div>
            </div>
        );
    }
}

Collaps.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Collaps;
