import { useState } from "react";
import profile_img from "../../../assets/images/Oval.svg";
import remove_img from "../../../assets/images/trash.svg";
import edit_img from "../../../assets/images/pencil.svg";
import reply_img from "../../../assets/images/Reply(1).svg";
function Main() {
  const [comment, setcomment] = useState("");
  const [savecomments, setsavecomments] = useState([]);
  const [deleteclick, setdeleteclick] = useState(false);

  const TakeValue = (e) => {
    setcomment(e.target.value);
  };

  const SaveCommentsFunc = (e) => {
    e.preventDefault();
    setsavecomments([...savecomments, { comment: comment }]);
    setcomment("");
  };

  const DeleteComment = (index) => {
    const updatedComments = savecomments.filter((_, i) => i !== index);
    setsavecomments(updatedComments);
  };

  const ClickOnDelete = () => {
    setdeleteclick(!deleteclick);
  };
  return (
    <>
      <div className=" relative gap-[24px] flex flex-col">
        <div className=" flex flex-col items-center overflow-y-auto overflow-x-hidden h-[600px] gap-[20px]">
          {savecomments.map((comment, key) => (
            <div className=" w-full flex flex-col" key={key}>
              <div className=" flex bg-[#fff] w-full max-w-[730px] gap-[24px] items-start comments_div">
                <div className=" w-[48px] h-[100px] bg-[#F5F6FA] rounded-[10px]"></div>
                <div className=" w-full">
                  <div className="  flex justify-between items-center">
                    <div className=" flex gap-[16px]">
                      <img
                        className=" w-[32px] h-[32px]"
                        src={profile_img}
                        alt=""
                      />
                      <p className=" text-[#334253] text-[16px] font-[400]">
                        amyrobson
                      </p>
                      <p className=" text-[#67727E] text-[16px] font-[400] ">
                        1 month ago
                      </p>
                    </div>
                    <div className="flex gap-[24px]">
                      <button
                        className=" flex justify-center items-center gap-[8px] text-[#ED6368] text-[16px] font-[400] cursor-pointer"
                        onClick={ClickOnDelete}
                      >
                        <img src={remove_img} alt="" />
                        Delete
                      </button>
                      <button className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer">
                        <img src={edit_img} alt="" /> Edit
                      </button>
                      <button className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer">
                        <img src={reply_img} alt="" />
                        Reply
                      </button>
                    </div>
                  </div>
                  <div className=" overflow-hidden max-w-[600px] h-auto">
                    <p className=" text-[#67727E] text-[16px] font-[400] leading-[24px] comments_p">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={SaveCommentsFunc}
          className="bg-[#FFF] rounded-[8px] flex items-start gap-[17px] "
          action=""
        >
          <img src={profile_img} alt="" />
          <input
            onChange={TakeValue}
            value={comment}
            className="  outline-none w-[506px] h-[96px] flex border-solid border-[1px] border-[#E9EBF0] "
            placeholder="Add a comment…"
            type="text"
          />
          <button
            type="submit"
            className=" w-[104px] h-[48px] bg-[#5357B6] rounded-[8px]"
          >
            <p className="text-[#FFF] text-[16px] font-[400]">SEND</p>
          </button>
        </form>
      </div>
      {deleteclick && (
        <div className=" h-full w-full absolute bg-[#000] flex justify-center items-center opacity_div">
          <div className=" justify-center gap-[20px] flex flex-col rounded-[8px] opacity-[1]  w-[400px] h-[252px] bg-[#fff] delete_div">
            <p>Delete comment</p>
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can’t be undone.
            </p>
            <div className=" flex  gap-[14px]">
              <button onClick={ClickOnDelete}>NO, CANCEL</button>
              <button onClick={() => DeleteComment(key)}>YES, DELETE</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
