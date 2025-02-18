import React from "react";

function Likes_div({
  func,
  MinusFunc,
  plus_img,
  minus_img,
  comment,
  className,
}) {
  return (
    <div className={className}>
      <button onClick={func} className="cursor-pointer">
        <img src={plus_img} alt="" />
      </button>
      <p className=" text-[#5357B6] text=[16px] font-[400]">{comment.likes}</p>
      <button onClick={MinusFunc} className="cursor-pointer">
        <img src={minus_img} alt="" />
      </button>
    </div>
  );
}

export default Likes_div;
