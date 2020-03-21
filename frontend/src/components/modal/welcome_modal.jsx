import React from 'react';

import Logo from '../../public/COVID415.png';
import SocialDistancing from '../../public/social_distancing.svg'
import HayesValley from '../../public/hayes_valley.png';
import Potrero from '../../public/potrero.png';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="modal-welcome-container">
                <div className="modal-welcome-heading">
                    <img src={ Logo } className='welcome-logo' />
                    Neighbors helping neighbors affected by COVID-19 in San Francisco.
                </div>
                <div className="modal-welcome-body">
                        <div className="welcome-section-1">
                            <div className="modal-body-header">Self-isolating?</div>
                            <div className="modal-body-text">Request a delivery from a local volunteer.</div>
                            <br />
                            <div className="modal-body-header">Want to help your neighbors?</div>
                            <div className="modal-body-text">Deliver essential items to quarantined people nearby.</div>
                            <img src={HayesValley} className='sample-card' />
                            <img src={Potrero} className='sample-card' />
                        </div>
                        <div className="welcome-section-2">
                            <img src={SocialDistancing} className="modal-splash" />
                            <button className="continue-button" onClick={this.props.closeModal}>Continue </button>
                        </div>    
                </div>
            </div>
        )
    }
};

export default WelcomeModal;