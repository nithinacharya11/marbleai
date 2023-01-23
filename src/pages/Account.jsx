import React, { useState } from 'react';
import {UserAuth} from '../context/AuthContext';
import {storage} from '../firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div className='text-center mt-20'>
      <p className='text-3xl'>Welcome {user?.displayName}</p>
      <form onSubmit={formHandler} className='flex flex-col justify-center items-center mt-10 mb-10 gap-5'>
        <input type="file" accept=".pdf, .docx" className="text-sm p-5 ml-10" />
        <button type="submit" className='text-sm border rounded p-3 bg-gray-600 text-white'>Upload</button>
      </form>
      <hr />
      <h2 className='mt-2'>Uploading  {progress === 100 ? 'done ✅' : `${progress}%`}</h2>
      <button onClick={handleSignOut} className='text-md mt-20 border rounded px-3 py-1 bg-gray-900 text-white'>Logout</button>
    </div>
  )
}

export default Account
