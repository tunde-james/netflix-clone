import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyles } from "./global-styles"
import App from "./App"
import FirebaseContext from "./context/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC7Dudet7QMKD8psdn9j791sdUFXaLt0-E",
  authDomain: "netflix-dev-3b5df.firebaseapp.com",
  projectId: "netflix-dev-3b5df",
  storageBucket: "netflix-dev-3b5df.appspot.com",
  messagingSenderId: "121182054438",
  appId: "1:121182054438:web:8be244f7341faf46981ee7",
}

const firebase = window.firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
)
