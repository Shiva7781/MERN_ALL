importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCiEpvZLCGpOqhXOsDdy6fmoGCzoYhnve4",
  authDomain: "push-notification-c96b6.firebaseapp.com",
  projectId: "push-notification-c96b6",
  storageBucket: "push-notification-c96b6.appspot.com",
  messagingSenderId: "248498341141",
  appId: "1:248498341141:web:eced2cfe9651ba44f1d51c",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = payload?.notification?.title;
  const notificationOptions = {
    body: payload?.notification?.body,
    icon: payload?.notification?.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

