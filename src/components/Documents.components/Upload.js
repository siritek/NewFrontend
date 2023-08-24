// import React, { useRef, useState } from 'react';

// function Upload(props) {
  
//   const fileInputRef = useRef(null);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleDocumentClick = () => {
//     props.onDocumentClick();
//   };

//   const handleFileSelection = (event) => {
//     const files = Array.from(event.target.files || event.dataTransfer.files);
//     setSelectedFiles(files); // Store the entire file objects
//   };

//   const handleUploadButtonClick = () => {
//     for (let i = 0; i < selectedFiles.length; i++) {
//       const file = selectedFiles[i];
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const fileData = e.target.result;

//         // Generate a unique key for each file, e.g., using a timestamp or file name
//         const key = `uploadedFile_${Date.now()}`;

//         // Save the file data to local storage using the generated key
//         localStorage.setItem(key, fileData);
//         console.log(`File ${file.name} uploaded and saved to local storage with key ${key}`);
//       };

//       reader.readAsDataURL(file);
//     }
    
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center">
//         <h2>Upload Document</h2>
//         <div>
//           <button type="button" className="btn btn-dark" onClick={handleDocumentClick}>
//             Back
//           </button>
//           &nbsp;
//           <button type="button" className="btn btn-success" onClick={handleUploadButtonClick}>
//             Upload
//           </button>
//         </div>
//       </div>
//       <hr />

//       <label htmlFor="Documents">Documents &nbsp;</label>
//       <input
//         type="file"
//         id="Documents"
//         name="Documents"
//         ref={fileInputRef}
//         multiple
//         onChange={handleFileSelection}
//         onDrop={(e) => e.preventDefault()} // Prevent default behavior of opening the dropped file
//       />
      
//     </div>
//   );
// }

// export default Upload;
