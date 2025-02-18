import React from "react";

function Delete({ ClickOnDelete, DeleteComment }) {
  return (
    <div
      onClick={ClickOnDelete}
      className=" h-full w-full absolute bg-[#00000080] flex justify-center items-center opacity_div"
    >
      <div className=" justify-center gap-[20px] flex flex-col rounded-[8px]  w-[400px] h-[252px] bg-[#fff] !pl-[32px]">
        <p className=" text-[24px] font-[400] text-[334253]">Delete comment</p>
        <p className=" text-[16px] font-[400] leading-[24px] text-[#67727E]">
          Are you sure you want to delete this <br /> comment? This will remove
          the comment <br /> and can’t be undone.
        </p>
        <div className=" flex  gap-[14px]">
          <button
            className=" cursor-pointer w-[160px] h-[48px] font-[400] text-[16px] text-[#fff] bg-[#67727E] rounded-[8px]"
            onClick={ClickOnDelete}
          >
            NO, CANCEL
          </button>
          <button
            className=" cursor-pointer w-[160px] h-[48px] font-[400] text-[16px] text-[#fff] bg-[#ED6368] rounded-[8px]"
            onClick={DeleteComment}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
