### public/firebase-messaging-sw.js

URL: https://fcm.googleapis.com/fcm/send <br/>
Method: POST <br/>
Headers: Authorization: key=YOUR_SERVER_KEY &nbsp; &nbsp; Content-Type: application/json <br/>
Firebase Cloud Messaging API (V1) Enabled <br/>
Cloud Messaging API (Legacy) Enabled <br/>
vapidKey=Key pair (Web Push certificates)

- Go to the Firebase Console: https://console.firebase.google.com/ <br/>
- Select your project. <br/>
- Navigate to Project Settings. <br/>
- In the Project Settings, click on the "Cloud Messaging" tab. <br/>
- You will find the "Server key" under the "Project credentials" section. <br/>

Body (raw JSON):

```{
  "to": "YOUR_DEVICE_TOKEN_OR_TOPIC",
  "notification": {
    "title": "Your Notification Title",
    "body": "Your Notification Body",
    "click_action": "OPEN_ACTIVITY_OR_URL"
  },
  "data": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
