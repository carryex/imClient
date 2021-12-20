
import {QueryDocumentSnapshot, collection, addDoc} from 'firebase/firestore';
import {Set} from '../../redux/types/set.types';
import {db} from './config';


/**
 * Set data service
 */
class SetDataService {
  static collection = 'sets'
  /**
  * @param {string} title - The set title
  * @param {string} description - The set description
  * @param {Card[]} cards - The set description
  */
  constructor(public set: Set) {}

  /**
   * @param {Set} data - Set
   * @param {string} userId - User id
   */
  static async create(data :Set, userId: string) {
    const ref = collection(
        db,
        `users/${userId}/${this.collection}`)
        .withConverter(this.setConverter);

    return await addDoc(ref, new SetDataService(data) );
  }

  /**
   *
  */
  get obj():Set {
    return {...this.set};
  }

  static setConverter = {
    toFirestore: (set: SetDataService) => set.obj,
    fromFirestore: (snapshot: QueryDocumentSnapshot) => {
      const data = snapshot.data() as Set;
      return new SetDataService(data);
    },
  };
}

export {SetDataService};
