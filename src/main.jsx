import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store, persistor } from './Redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor} >
        <GoogleOAuthProvider
          clientId='463512901423-km9g9fvt6rncfgjd0fcc6mtnm1ktanh1.apps.googleusercontent.com' >
          <App />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
)
