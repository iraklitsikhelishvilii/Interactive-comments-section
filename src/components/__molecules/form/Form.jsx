import React from "react";

function Form({ SaveCommentsFunc, profile_img, TakeValue, comment }) {
  return (
    <form
      onSubmit={SaveCommentsFunc}
      className="bg-[#FFF] rounded-[8px] flex items-start gap-[17px] !p-[24px] !mt-[8px]"
      action=""
    >
      <img src={profile_img} alt="" />
      <textarea
        onChange={TakeValue}
        value={comment}
        className="!px-[24px] !py-[12px]  outline-none w-[506px] h-[96px] flex border-solid border-[1px] border-[#E9EBF0] "
        placeholder="Add a comment…"
        type="text"
      />
      <button
        type="submit"
        className=" w-[104px] h-[48px] bg-[#5357B6] rounded-[8px]"
      >
        <p className="text-[#FFF] text-[16px] font-[400] cursor-pointer ">
          SEND
        </p>
      </button>
    </form>
  );
}

export default Form;
