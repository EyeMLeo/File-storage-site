// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from 'firebase/app';
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  FullMetadata,
} from 'firebase/storage';
import * as React from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'file-upload-fea56.firebaseapp.com',
  projectId: 'file-upload-fea56',
  storageBucket: 'file-upload-fea56.appspot.com',
  messagingSenderId: '157104268967',
  appId: '1:157104268967:web:d02bfb627b228926029d82',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//----- Firebase storage code
const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, '');

// async function firebseDataNameHander() {
//   return new Promise((resolve, reject) => {
//     listAll(listRef)
//       .then(async (res) => {
//         let names: FullMetadata[] = [];

//         res.items.forEach(async (itemRef) => {
//           await getMetadata(itemRef).then((obj) => {
//             names.push(obj);
//           });
//         });
//         console.log('names ===', names);
//         resolve(names);
//       })

//       .catch((error) => {
//         console.log(error);
//         reject(error);
//       });
//   });
// }

async function firebseDataNameHander(): Promise<FullMetadata[]> {
  return new Promise((resolve, reject) => {
    listAll(listRef)
      .then(async (res) => {
        let names: FullMetadata[] = [];

        for (const itemRef of res.items) {
          await getMetadata(itemRef).then((obj) => {
            names.push(obj);
          });
        }
        resolve(names);
      })

      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

// function firebseDataNameHander() {
//   listAll(listRef)
//     .then((res) => {
//       let names: FullMetadata[] = [];
//       res.items.forEach((itemRef) => {
//         getMetadata(itemRef).then((url) => {
//           names.push(url);
//         });
//       });
//     })

//     .catch((error) => {
//       console.log(error);
//     });
//   console.log('Final names ===', names);
//   return names;
// }

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    // console.log('res ===', res);
    // res.prefixes.forEach((folderRef) => {
    //   // All the prefixes under listRef.
    //   // You may call listAll() recursively on them.
    // });
    // res.items.forEach((itemRef) => {
    //   // All the items under listRef.
    //   console.log('itemRef ===', itemRef);
    //   getMetadata(itemRef).then((url) => {
    //     console.log('url ===', url);
    //   });
    // });
  })
  .catch((error) => {
    console.log(error);
  });
//----- Firebase storage code

// function getFullFirebaseList(){
// }

export { firebseDataNameHander, storage, listAll, app as default };
