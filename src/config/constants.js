import firebase from 'firebase'

export const BASE_URL = '/math'


const appConfig = {
	apiKey: "AIzaSyACypH4o2TFCn-oNdbKQchtF8AyQHUNnV4",
	authDomain: "mathsite-e9273.firebaseapp.com",
	databaseURL: "https://mathsite-e9273.firebaseio.com",
	storageBucket: "mathsite-e9273.appspot.com",
	messagingSenderId: "1096802129876"
}

const devConfig = {
	apiKey: "AIzaSyA5JgBObwTJ86eoFvFyDVOPc0JlDr9wBZY",
	authDomain: "mathsitedev.firebaseapp.com",
	databaseURL: "https://mathsitedev.firebaseio.com",
	storageBucket: "mathsitedev.appspot.com",
	messagingSenderId: "1036725185091"
}

firebase.initializeApp(devConfig)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth