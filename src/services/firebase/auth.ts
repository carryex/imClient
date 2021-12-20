import {app} from './config';

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

import {userDoc} from './user';

const auth = getAuth(app);

const logInWithEmail = async (email: string, password:string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  const displayName = response.user?.displayName;
  return {displayName, email};
};

const logInWithGoogle = async () => {
  const response = await signInWithPopup(auth, new GoogleAuthProvider());
  const user = response.user;
  const displayName = user.displayName || '';
  const email = user.email || '';
  await userDoc.set(user.uid, displayName, email);
  return {displayName, email};
};

const registerWithEmail = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const user = response.user;
  const displayName = '';
  await userDoc.set(user.uid, '', email);
  return {displayName, email};
};

const logOut = async () => {
  await signOut(auth);
};

const authStateChanged = async (
    refreshCallback: (displayName: string | null, email: string | null) => void,
    logoutCallback: () => void,
    authenticated?: boolean,
) => {
  onAuthStateChanged(auth, async (user) => {
    if (user && !authenticated) {
      return refreshCallback(user.displayName, user.email);
    }
    if (!user && !authenticated) {
      logoutCallback();
    }
  });
  await setPersistence(auth, browserSessionPersistence);
};


export {
  logInWithEmail,
  logInWithGoogle,
  registerWithEmail,
  logOut,
  authStateChanged,
};
