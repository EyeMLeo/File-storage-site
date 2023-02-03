// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from 'firebase/app';
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  FullMetadata,
  deleteObject,
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

// function to get firebase data and save it to array, returning it as a promise
// without promise Im unable to save data to useState
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

export { firebseDataNameHander, storage, listAll, app as default };
