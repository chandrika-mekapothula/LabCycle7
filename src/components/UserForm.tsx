// import React, { useState, type ChangeEvent } from 'react'
// import { type FieldErrors, type User } from '../types/Userdetails.type'

// const UserForm = ({ name, mail, message }: User) => {
//     const [formData, setFormData] = useState<User>({
//         name: "",
//         mail: "",
//         message: ""
//     })
//     const [errors, setErrors] = useState < FieldErrors > useState("")
//     const submitForm = () => {



//     }
//     const handleChange = (
//         e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//         setErrors((prev) => ({
//             ...prev,
//             [name]: "",
//         }));
//         setSuccess("");
//     };
//     return (
//         <>
//             <div>
//                 <h1>User Form</h1>
//                 <form onSubmit={submitForm}>
//                     <label htmlFor="">UserName:</label>
//                     <input type='text'
//                         placeholder='Enter the UserName'
//                         value={formData.name}
//                         onChange={handleChange}
//                     ></input>
//                     {}
//                     <label htmlFor="">Mail:</label>
//                     <input type='text'
//                         placeholder='Enter the Mail'
//                         value={formData.mail}
//                         onChange={handleChange}
//                     ></input>
//                     {}
//                     <label htmlFor="">Message:</label>
//                     <textarea
//                         placeholder='Enter the Message'
//                         value={formData.message}
//                         onChange={handleChange}
//                     ></textarea>
//                     {}
//                 </form>
//             </div>
//         </>
//     )
// }

// export default UserForm