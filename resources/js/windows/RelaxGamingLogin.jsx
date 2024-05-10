import React, { useEffect } from 'react';
import { EE } from '../App';
import '../css/login.css';
import {PAGE_SIZE_DEFAULT} from "../common/Config";
import { post, relaxGamingVerifyToken } from '../server/server';

const logoimages = [
	"/images/fish/login/logo/1.png",
	"/images/fish/login/logo/2.png",
	"/images/fish/login/logo/3.png",
	"/images/fish/login/logo/4.png",
	"/images/fish/login/logo/5.png",
	"/images/fish/login/logo/6.png",
	"/images/fish/login/logo/7.png",
	"/images/fish/login/logo/8.png",
	"/images/fish/login/logo/9.png",
	"/images/fish/login/logo/10.png",
	"/images/fish/login/logo/11.png",
	"/images/fish/login/logo/12.png",
	"/images/fish/login/logo/13.png",
];

let i = 0;

export const RelaxGamingLogin = () => {

	useEffect(() => {
		EE.addListener("RESIZE", onResize);
		EE.emit("FORCE_RESIZE");

		const int = setInterval(animateLogo, 50);

		verifyToken();

		return () => {
			clearInterval(int);
		}
	}, [])

	const animateLogo = () => {
		const img = document.getElementById("logo-login");
		if(img) {
			img.src = logoimages[i];
			i++;
			if (logoimages.length === i) {
				i = 0;
			}
		}
	}

	const onResize = (data) => {
		const cont = document.getElementsByClassName("modal-window-login__scale-cont")[0];
		const sc = Math.min(data.h/PAGE_SIZE_DEFAULT.height, data.w/PAGE_SIZE_DEFAULT.width);
		if(cont) {
			cont.style.transform = `scale(${sc})`;
		}
	}
	const searchParams = React.useMemo(() => new URLSearchParams(window.location.search), [
    window.location.search
  ]);
	const verifyToken = () => {
		const gameId = searchParams.get('gameId')
		const token = searchParams.get('token')
		var _token = document.getElementById('root').getAttribute('token');

		var data = {gameId, token, _token}
		relaxGamingVerifyToken(data, (res) => {
			console.log("===Relax Gaming Verify Token Response===", res)
		});		
	}

	return (
		<div className="modal-window-login">
			<div className="modal-window-login__scale-cont">
				<div className="modal-window-login__logo">
					<img className="modal-window-login__logo1" src="" id={"logo-login"} alt=""/>
					<img className="modal-window-login__logo2" src="/images/fish/login/logo_text.png" alt=""/>
				</div>
				<div className="modal-window-login__down">
				</div>
			</div>
		</div>
	)
}