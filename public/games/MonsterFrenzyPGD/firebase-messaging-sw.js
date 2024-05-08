importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js");
var firebaseConfig = {
    apiKey: "AIzaSyCTv_TORIF9FGibgq2HwRL59um-ZJecoP8",
    authDomain: "test-145be.firebaseapp.com",
    databaseURL: "https://test-145be.firebaseio.com",
    projectId: "test-145be",
    storageBucket: "test-145be.appspot.com",
    messagingSenderId: "341221056798",
    appId: "1:341221056798:web:e4173e4d170bdacdbd690f",
    measurementId: "G-THNES538MZ"
};
firebase.initializeApp(firebaseConfig);
var messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(a) {
    console.log("[firebase-messaging-sw.js] Received background message ", a);
    return self.registration.showNotification("Background Message Title", {
        body: "Background Message body.",
        icon: "/firebase-logo.png"
    })
});
self.addEventListener("install", function(a) {});
self.addEventListener("activate", function(a) {});
self.addEventListener("fetch", function(a) {});