import React, { useEffect } from 'react';
import { EE } from '../App';
import '../css/login.css';
import {PAGE_SIZE_DEFAULT} from "../common/Config";
import { post, relaxGamingVerifyToken } from '../server/server';

export const RelaxGamingLogin = () => {

	useEffect(() => {
		EE.addListener("RESIZE", onResize);
		EE.emit("FORCE_RESIZE");

		verifyToken();
	}, [])

	const onResize = (data) => {
		var div = $('#gameLoadingBack');
		var width = div.width();
		div.css('height', width * 61 / 673);
	}

	const searchParams = React.useMemo(() => new URLSearchParams(window.location.search), [
    window.location.search
  ]);
	const gameId = searchParams.get('gameId')

	const verifyToken = () => {
		const token = searchParams.get('token')
		const env = searchParams.get('env')
		var _token = document.getElementById('root').getAttribute('token');

		var data = {gameId, token, env, _token}
		relaxGamingVerifyToken(data, (res) => {
			console.log("===Relax Gaming Verify Token Response===", res)
			window.location.href = '/game/' + gameId + '?api_exit=/';
		});
	}

	return (
		<div class="popup" id="loading_popup">
			<div id="loading_popup_image" style={{backgroundImage: `url('/images/splash-screen--${gameId}.jpg')` , backgroundColor: '#cccccc'}}>
				<div id="gameLoadingBack">
					<div id="gameLoadingProgress"></div>
					<p id="progressPercent">0.00%</p>
				</div>
			</div>
		</div>
	)
}
