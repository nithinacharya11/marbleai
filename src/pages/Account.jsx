import React, {useState, useEffect} from 'react';
import {UserAuth} from '../context/AuthContext';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';
// import { Document } from 'react-pdf';

const Account = () => {
  const [file, setFile] = useState(null);
  const [fileStatus, setFileStatus] = useState(false);
  // const [fileUrls, setFileUrls] = useState([]);
  const { user } = UserAuth();

  // const fileListRef = ref(storage, `${user.email}/`)
  const fileUpload = () => {
    if(file === null){
      alert("Choose the file before uploading");
    };
    const fileRef = ref(storage, `${user.email}/${file.name + v4()}`);
    uploadBytes(fileRef, file).then(() => {
      setFileStatus(true);
    }).catch(error => {
      console.log(error);
    });
  };

  // useEffect(() => {
  //   listAll(fileListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setFileUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, [url]);

  return (
    <div className='text-center mt-20'>
      <p className='text-3xl mb-4'>Welcome {user?.displayName}</p>
      <p className='text-sm mb-8'>Upload any .pdf or .docx file</p>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} accept=".pdf, .docx" className="text-sm p-5 ml-10 font-semibold"/>
      <button onClick={fileUpload} className='block m-auto text-sm border rounded-lg p-3 bg-[#000300] text-white hover:font-bold mt-8'>Upload</button>
      <p className='mt-5'>{fileStatus && "File uploaded successfully."}</p>
      {/* {fileUrls.map((url) => {
        return <Document file={url} />
      })} */}
    </div>
  )
}

export default Account
