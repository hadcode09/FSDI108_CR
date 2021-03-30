//imrc
import React, { Component } from 'react';

import"./footer.css";

//cc
class Footer extends Component {

    render(){
        return (
            <React.Fragment>
            <div className="footer">    
            <div className="footer-cr"> 
            2021 All rights reserved.
            </div>
            <label className="footer-name">Mark Hadley</label>
            </div>
            </React.Fragment>
        );
    }
}

export default Footer;
