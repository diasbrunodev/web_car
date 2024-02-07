import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDjEr7a_yzbtQJuPBUhHaxAMDQgyAEVBhw',
  authDomain: 'webcarros-9f15b.firebaseapp.com',
  projectId: 'webcarros-9f15b',
  storageBucket: 'webcarros-9f15b.appspot.com',
  messagingSenderId: '406983677765',
  appId: '1:406983677765:web:71dca69987c9ffccc9d02c',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }
