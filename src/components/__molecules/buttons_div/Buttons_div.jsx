import React from "react";

function Buttons_div({
  index,
  clickfunc,
  remove_img,
  editfunc,
  edit_img,
  reply_img,
  replyfunc,
}) {
  return (
    <div className="flex gap-[24px]   ">
      {index != 0 && (
        <button
          className=" flex justify-center items-center gap-[8px] text-[#ED6368] text-[16px] font-[400] cursor-pointer"
          onClick={clickfunc}
        >
          <img src={remove_img} alt="" />
          Delete
        </button>
      )}
      {index != 0 && (
        <button
          onClick={editfunc}
          className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer"
        >
          <img src={edit_img} alt="" /> Edit
        </button>
      )}
      <button
        onClick={replyfunc}
        className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer"
      >
        <img src={reply_img} alt="" />
        Reply
      </button>
    </div>
  );
}

export default Buttons_div;
