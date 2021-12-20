import {doc, setDoc} from 'firebase/firestore';
import {db} from './config';
import {serverTimestamp, QueryDocumentSnapshot} from 'firebase/firestore';

const COLLECTION = 'users';

/**
 * User class
 */
class User {
  public timestamp
  /**
  *
  * @param {string} name - The user display name
  * @param {string} email - The user email adress
  */
  constructor(public name: string = '', public email: string) {
    this.timestamp = serverTimestamp();
  }
}

// Firestor data convecter
const userConverter = {
  toFirestore: (user: User) => {
    return {
      name: user.name,
      email: user.email,
      timestamp: user.timestamp,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data();
    return new User(data.name, data.email);
  },
};

export {User};

const userDoc = {
  set: async (id: string, name: string, email: string) => {
    const ref = doc(db, COLLECTION, id).withConverter(userConverter);
    await setDoc(ref, new User(name, email));
  },
};

export {userDoc};

