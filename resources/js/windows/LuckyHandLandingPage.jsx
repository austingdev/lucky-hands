import React from 'react';
import { EE } from '../App';
import '../css/lh-landing-page.css';
import $ from 'jquery';
import {PAGE_SIZE_DEFAULT} from "../common/Config";
import { post } from '../server/server';

export class LuckyHandLandingPage extends React.Component {
	int = 0;
	i = 0;
	b = 0;
	constructor() {
		super();
	}



	render () {
		return (
			<div className="luckyhands-landing-page">
                <div className="lh-gnome">
                    <img src="/images/restricted-char.png" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="lh-text">
                    <img src="/images/lh-logo.png" style={{width: '121px', height: '40px', marginBottom: 20 }}/>
                    <h2>Uh oh!</h2>
                    <p>Game session has ended.</p>
                    <p className="lh-grey-text">Use the logo in the top left to return back to the game lobby.</p>
                </div>
            </div>
        )
    }
}
