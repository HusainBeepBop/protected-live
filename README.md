# PROTECTED LIVE WEB APP

This is a web application designed to provide a live stream of events. It features a responsive design, Firebase authentication, and a live video streaming interface.

## Features

- **User Authentication**: Secure login and logout functionality using Firebase Authentication.
- **Live Video Streaming**: Embed live YouTube videos for real-time event streaming.
- **Responsive Design**: Fully responsive layout for seamless viewing on desktops, tablets, and mobile devices.
- **Secure Interface**: Right-click disabled to prevent unauthorized access to the context menu.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase Authentication
- **Video Streaming**: YouTube Embed API

## Setup Instructions

### Prerequisites

- A Firebase project with Authentication enabled.
- A YouTube video link for embedding live streams.

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/HusainBeepBop/protected-live.git
   cd protected-live
   ```
2. Open the project in your preferred code editor (e.g., Visual Studio Code).

3. Configure Firebase:
- Open **js/firebase-config.js**.
- Replace the placeholders in the **firebaseConfig** object with your Firebase project credentials:
    ```bash
    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    ```

4. Update the YouTube video link:
- Open **main.html**.
- Replace the **src** attribute of the **<iframe>** in the **.video-container** with your YouTube video link:
    ```bash
    <iframe 
     src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&modestbranding=1&rel=0"
     frameborder="0"
     allowfullscreen
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
    ```
5. Open the project in a browser:
- Use a local server (e.g., Live Server in VS Code) to serve the files.
- Open **index.html** in your browser.

## Folder Structure

```bash
    HT-nanpura-live/
├── [index.html](http://_vscodecontentref_/1)          # Login page
├── [main.html](http://_vscodecontentref_/2)           # Main live relay page
├── styles/
│   ├── login.css       # Styles for the login page
│   └── main.css        # Styles for the main page
├── js/
│   ├── firebase-config.js # Firebase configuration
│   ├── auth.js         # Authentication logic
│   └── main.js         # Main page logic
└── [README.md](http://_vscodecontentref_/3)           # Project documentation
```
## Usage
1. Open the application in your browser.
2. Log in using your email and password.
3. Once authenticated, you will be redirected to the live relay page.
4. Watch the live stream embedded in the application.

## License
### This project is licensed under the MIT License. Feel free to use and modify it as needed.

#### Notes
- Ensure your Firebase project is properly configured with email/password authentication enabled.
- Replace the YouTube video link with the desired live stream URL.