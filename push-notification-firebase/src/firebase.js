import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCiEpvZLCGpOqhXOsDdy6fmoGCzoYhnve4",
  authDomain: "push-notification-c96b6.firebaseapp.com",
  projectId: "push-notification-c96b6",
  storageBucket: "push-notification-c96b6.appspot.com",
  messagingSenderId: "248498341141",
  appId: "1:248498341141:web:eced2cfe9651ba44f1d51c",
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
