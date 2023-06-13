// import React, { useState } from "react";

// function FnolTypeOfPolicy({ setComponentData, componentData }) {
//   const [showForm1, setShowForm1] = useState(false);
//   const [showForm2, setShowForm2] = useState(false);

//   const handleRadioChange = (e) => {
//     const value = e.target.value;
//     if (value === "form1") {
//       setShowForm1(true);
//       setShowForm2(false);
//     } else if (value === "form2") {
//       setShowForm1(false);
//       setShowForm2(true);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setComponentData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const {
//     vin = "",
//     make = "",
//     model = "",
//     driver = "",
//     plateNumber = "",
//     plateSlate = "",
//     address = "",
//     notes = "",
//   } = componentData || {};

//   return (
//     <div>
//       <div className="row mb-3">
//         <div className="col-4">
//           <label>Type of Policy</label>
//         </div>
//         <div className="col-8">
//           <input
//             type="radio"
//             name="form"
//             value="form1"
//             onChange={handleRadioChange}
//           />
//           Auto Subsection &nbsp; &nbsp;
//           <input
//             type="radio"
//             name="form"
//             value="form2"
//             onChange={handleRadioChange}
//           />
//           Homeowners
//         </div>
//       </div>
//       {showForm1 && (
//         <div>
//           <br />
//           <b>Insured Vehicle Auto subsection</b>
//           <br />
//           <div className="row mb-2">
//             <div className="col-4">
//               <label htmlFor="vin">VIN </label>
//             </div>
//             <div className="col-5">
//               <input
//                 id="vin"
//                 type="text"
//                 value={vin}
//                 onChange={handleInputChange}
//                 className="w-100 form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-2">
//             <div className="col-4">
//               <label htmlFor="make">Make </label>
//             </div>
//             <div className="col-5">
//               <input
//                 id="make"
//                 type="text"
//                 value={make}
//                 onChange={handleInputChange}
//                 className="w-100 form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-2">
//             <div className="col-4">
//               <label htmlFor="model">Model </label>
//             </div>
//             <div className="col-5">
//               <input
//                 id="model"
//                 type="text"
//                 value={model}
//                 onChange={handleInputChange}
//                 className="w-100 form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-2">
//             <div className="col-4">
//               <label htmlFor="plateNumber">Plate Number </label>
//             </div>
//             <div className="col-5">
//               <input
//                 id="plateNumber"
//                 type="number"
//                 value={plateNumber}
//                 onChange={handleInputChange}
//                 className="w-100 form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-2">
//             <div className="col-4">
//               <label htmlFor="plateSlate">Plate Slate </label>
//             </div>
//             <div className="col-5">
//               <input
//                 id="plateSlate"
//                 type="text"
//                 value={plateSlate}
//                 onChange={handleInputChange}
//                 className="w-100 form-control"
//               />
//             </div>
//           </div>
//           <div className="row mb-2">
//             <div className="col-4">
//               <label htmlFor="driver">Driver </label>
//             </div>
//             <div className="col-5">
//               <input
//                 id="driver"
//                 type="text"
//                 value={driver}
//                 onChange={handleInputChange}
//                 className="w-100 form-control"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//       {showForm2 && (
//         <div>
//           <br />
//           <b>Homeowners subsection</b>
//           <br />

//           <div className="row mb-2">
//             <div className="col-4">
//               <label htmlFor="address">Address </label>
//             </div>
//             <div className="col-6">
//               <input
//                 id="address"
//                 type="text"
//                 value={address}
//                 onChange={handleInputChange}
//                 className="w-100 form-control"
//                 placeholder="Mention your complete address"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <br />
//       <div className="row mb-2">
//         <div className="col-4">
//           <label htmlFor="notes">Notes </label>
//         </div>
//         <div className="col-5">
//           <input
//             id="notes"
//             type="text"
//             value={notes}
//             onChange={handleInputChange}
//             className="w-100 form-control"
//             placeholder="Write Here"
//           />
//         </div>
//       </div>
//       <label htmlFor="documents">Documents &nbsp;</label>
//       <input type="file" id="documents" name="documents" />
//     </div>
//   );
// }

// export default FnolTypeOfPolicy;
