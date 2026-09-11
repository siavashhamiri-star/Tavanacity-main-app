import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';

const defaultFirebaseConfig = {
  apiKey: "AIzaSyDummyKeyForInitialSetupApp0000",
  authDomain: "farshbazaar-tavana.firebaseapp.com",
  projectId: "farshbazaar-tavana",
  storageBucket: "farshbazaar-tavana.appspot.com",
  messagingSenderId: "100000000000",
  appId: "1:100000000000:web:abcdef123456"
};

export function initializeFirebase(): { firebaseApp: FirebaseApp } {
  if (getApps().length > 0) {
    return { firebaseApp: getApp() };
  }

  const config = {
    apiKey: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_API_KEY) || defaultFirebaseConfig.apiKey,
    authDomain: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) || defaultFirebaseConfig.authDomain,
    projectId: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_PROJECT_ID) || defaultFirebaseConfig.projectId,
    storageBucket: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) || defaultFirebaseConfig.storageBucket,
    messagingSenderId: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) || defaultFirebaseConfig.messagingSenderId,
    appId: (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_APP_ID) || defaultFirebaseConfig.appId,
  };

  const firebaseApp = initializeApp(config);
  return { firebaseApp };
}

export * from './provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './error-emitter';
export * from './errors';
