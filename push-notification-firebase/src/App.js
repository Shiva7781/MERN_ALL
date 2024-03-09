import "./App.css";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

function App() {
  useEffect(() => {
    // Req user for notification permission
    requestPermission();

    //when user's tab is on then this function will show the notification
    onMessage(messaging, (payload) => {
      // console.log("Message received. ", payload);
      alert(payload.notification.title);
    });
  }, []);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    console.log("permission:", permission);

    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BHkuPd1UGqsdAN1I1q2rFEuSFAGXYGesWc4pa8NX7VwmfE0TgooTWBN55oejQv4udWn_sorbvG3Rbp8sekKU-5E",
      });
      console.log("token:", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  };

  return <div className="App">Hello</div>;
}

export default App;
