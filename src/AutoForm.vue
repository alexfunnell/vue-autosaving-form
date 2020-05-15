import { db } from './firebase';
import { debounce } from 'debounce';

const documentPath = 'contacts/jeff';

export default {
  data() {
    return {
      state: 'loading', // synced, modified, revoked, error
      firebaseData: null,
      formData: {},
      errorMessage: ''
    };
  },

  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    };
  },
});
