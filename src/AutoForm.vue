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
  created: async function () {
    const docRef = db.doc(documentPath);

    let data = (await docRef.get() ).data();

    if (!data) {
      data = { name: '', phone: '', email: '' }
      docRef.set(data)
    }

    this.formData = data;
    this.state = 'synced'
  },
});

export default {

  // omitted

  
  },
});
