// import $ from 'jquery';
import _ from "lodash";
import {EE} from "../App";
//
const Q_LOGIN = "/login";
const Q_SIGNUP = "/signup";
const Q_LOGOUT = "logout";
const Q_GAMES = "/gamelist";
const Q_RG_LOGIN = "/verifyRGToken";
const Q_MONEY = "info";
const Q_PASS = "/password/change";
const Q_SEND_SMS = "/sms/send";
const Q_VERIFY_SMS = "/sms/verify";
const Q_SEND_REFERRAL = "/sms/referral";
const Q_SPIN_WHEEL = "/collect_wheel";
const Q_DELETE_USER = '/deleteuser';

export let User = {
	token: "",
	phone: "",
	phone_ref: "",
	username: "UserName",
	info: {
		user_balance: 99999.99
	},
	getdata: ()=>{
		return {
			token: User.token,
			username: User.username
		};
	}
}

export let BonusWheelData =
{
	available_prizes : [],
	bonus_time: '',
	active: false
}

function query(q, par, callback) {
	console.log( "get query::: ", q, par);

	$.get(q, par)
		.done(function( data ) {
			if(data.error) {
				EE.emit('SHOW_ERROR', {text: data.error});
				return;
			}
			// console.log( "query result! ", data);
			callback(data);
		})
		.fail(() => {
			console.log( "GET DATA ERROR! ", q );
			EE.emit('SHOW_ERROR', {text: "Query error. Try again later"});
		})
}

function queryPost(q, par, callback) {
	console.log( "post query::: ", q, par);

    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(par),
        url: q
    }).done(function( data ) {
			if(data.error) {
				EE.emit('SHOW_ERROR', {text: data.error});
				return;
			}
			// console.log( "query result! ", data);
			callback(data);
		})
		.fail((error) => {
            console.log(error);
			console.log( "GET DATA ERROR! ", q );
			EE.emit('SHOW_ERROR', {text: "Query error. Try again later"});
		})
}

export function signIn(us, pas, callback) {
	User.username = us;
	User.ps = pas;

	queryPost(Q_LOGIN, {
		username: us,
		password: pas
	}, (e)=>{
		User.token = e.token;
		callback(e);
	});
}

export function signUp(data, callback) {
	queryPost(Q_SIGNUP, data, (e)=>{
		callback(e);
	});
}

export function relaxGamingVerifyToken(data, callback) {
	queryPost(Q_RG_LOGIN, data, callback);
}

export function post(path, params, method='post') {

	// The rest of this code assumes you are not using a library.
	// It can be made less verbose if you use one.
	const form = document.createElement('form');
	form.method = method;
	form.action = path;

	for (const key in params) {
	  if (params.hasOwnProperty(key)) {
		const hiddenField = document.createElement('input');
		hiddenField.type = 'hidden';
		hiddenField.name = key;
		hiddenField.value = params[key];

		form.appendChild(hiddenField);
	  }
	}

	document.body.appendChild(form);
	form.submit();
}

export function signOut(callback) {
	query(Q_LOGOUT, User.getdata(), callback);
}

export function getGames(callback) {
	query(Q_GAMES + "?t=" + new Date().getTime() , User.getdata(), callback);
}

export function getMoney(callback) {
	query(Q_MONEY, User.getdata(), (e)=>{
		User.info = JSON.parse(e);
		callback(e);
	});
}

export function newPassword(new_p, callback) {
	query(Q_PASS, _.merge(User.getdata(), {
		old_password: User.ps,
		password: new_p,
		password_confirmation: new_p

	}), callback);
}

export function sendSMS(data, callback) {
	query(Q_SEND_SMS, data, callback);
}

export function verifySMS(data, callback) {
	query(Q_VERIFY_SMS, data, callback);
}

export function sendReferral(data, callback) {
	query(Q_SEND_REFERRAL, data, callback);
}

export function collectBonus(id, callback) {
	query(Q_COLLECT_BONUS, _.merge(User.getdata(), {
		bonus_id: id
	}), callback);
}

export function spinWheel(data, callback) {
	query(Q_SPIN_WHEEL, data, callback);
}

export function deleteUser(callback)
{
	query(Q_DELETE_USER, {}, callback);
}
