// import React from "react";

// function Comments_div({
//   comment,
//   minus_img,
//   plus_img,
//   MinusFunc,
//   PlusFunc,
//   profile_img,
//   ClickOnDelete,
//   EditClick,
//   edit_img,
//   remove_img,
//   ReplyFunc,
//   reply_img,
//   UpdateEditedComment,
//   SaveEditedComment,
//   key,  
// }) {
//   return (
//     <div className=" flex bg-[#fff] w-full max-w-[730px] gap-[24px] items-start !p-[24px]">
//       <div className=" gap-[20px] justify-center items-center flex flex-col min-w-[48px] h-[100px] bg-[#F5F6FA] rounded-[10px]">
//         <button onClick={() => PlusFunc(key)} className="cursor-pointer">
//           <img src={plus_img} alt="" />
//         </button>
//         <p className=" text-[#5357B6] text=[16px] font-[400]">
//           {comment.likes}
//         </p>
//         <button onClick={() => MinusFunc(key)} className="cursor-pointer">
//           <img src={minus_img} alt="" />
//         </button>
//       </div>
//       <div className=" w-full">
//         <div className="  flex justify-between items-center">
//           <div className=" flex gap-[16px]">
//             <img className=" w-[32px] h-[32px]" src={profile_img} alt="" />
//             <p className=" text-[#334253] text-[16px] font-[400]">
//               {comment.name}
//             </p>
//             <p className=" text-[#67727E] text-[16px] font-[400] ">
//               1 month ago
//             </p>
//           </div>
//           <div className="flex gap-[24px]">
//             {key != 0 && (
//               <button
//                 className=" flex justify-center items-center gap-[8px] text-[#ED6368] text-[16px] font-[400] cursor-pointer"
//                 onClick={() => ClickOnDelete(key)}
//               >
//                 <img src={remove_img} alt="" />
//                 Delete
//               </button>
//             )}
//             {key != 0 && (
//               <button
//                 onClick={() => EditClick(key)}
//                 className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer"
//               >
//                 <img src={edit_img} alt="" /> Edit
//               </button>
//             )}
//             <button
//               onClick={() => ReplyFunc(key)}
//               className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer"
//             >
//               <img src={reply_img} alt="" />
//               Reply
//             </button>
//           </div>
//         </div>
//         {comment.edit ? (
//           <div className="!mt-[20px] flex flex-col items-end w-[530px] ">
//             <textarea
//               className="!px-[24px] !py-[12px] w-[100%]"
//               value={comment.comment}
//               onChange={(e) => UpdateEditedComment(e, key)}
//             />
//             <button
//               className=" w-[108px] h-[48px] bg-[#5357B6] rounded-[8px] text-[16px] font-[400] text-[#fff] !mt-[12px]"
//               onClick={() => SaveEditedComment(key)}
//             >
//               UPDATE
//             </button>
//           </div>
//         ) : (
//           <div className=" overflow-hidden max-w-[600px] h-auto">
//             <p className=" text-[#67727E] text-[16px] font-[400] leading-[24px] !mt-[15px]">
//               {comment.comment}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Comments_div;
