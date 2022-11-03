import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyRisvbB01mvGanC70q3G1KnPYhj1Ygyg",
  authDomain: "sidecom-react.firebaseapp.com",
  projectId: "sidecom-react",
  storageBucket: "sidecom-react.appspot.com",
  messagingSenderId: "772453853988",
  appId: "1:772453853988:web:b08323f0611b89529521b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app;
}