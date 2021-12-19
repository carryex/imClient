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

const auth = getAuth(app);

const logInWithEmail = async (email: string, password:string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  const displayName = response.user?.displayName;
  return {displayName, email};
};

const logInWithGoogle = async () => {
  const response = await signInWithPopup(auth, new GoogleAuthProvider());
  const user = response.user;
  const displayName = user.displayName;
  const email = user.email;
  return {displayName, email};
};

const registerWithEmail = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const displayName = response.user?.displayName;
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
      return await refreshCallback(user.displayName, user.email);
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
