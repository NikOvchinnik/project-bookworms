// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s',
  authDomain: 'bookworms-de9f1.firebaseapp.com',
  databaseURL:
    'https://bookworms-de9f1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bookworms-de9f1',
  storageBucket: 'bookworms-de9f1.appspot.com',
  messagingSenderId: '67746495730',
  appId: '1:67746495730:web:2051c7fd00eaf14945646b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Authorization
const auth = getAuth(app);
//Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
