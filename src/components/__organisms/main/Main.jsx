import { useState } from "react";
import profile_img from "../../../assets/images/Oval.svg";
import remove_img from "../../../assets/images/trash.svg";
import edit_img from "../../../assets/images/pencil.svg";
import reply_img from "../../../assets/images/Reply(1).svg";
import plus_img from "../../../assets/images/+.svg";
import minus_img from "../../../assets/images/-.svg";
function Main() {
  const [comment, setcomment] = useState("");
  const [replyvalue, setreplyvalue] = useState("");
  const [savecomments, setsavecomments] = useState([]);
  const [deleteclick, setdeleteclick] = useState(false);
  const [deleteindex, setdeleteindex] = useState(null);
  const TakeValue = (e) => {
    setcomment(e.target.value);
  };

  const SaveCommentsFunc = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setsavecomments([
        ...savecomments,
        {
          comment: comment,
          likes: 0,
          reply: false,
          replytxt: "",
          replied: false,
        },
      ]);
      setcomment("");
    }
  };

  const DeleteComment = () => {
    if (deleteindex !== null) {
      setsavecomments(savecomments.filter((_, i) => i !== deleteindex));
    }
    setdeleteclick(false);
    setdeleteindex(null);
  };

  const ClickOnDelete = (key) => {
    setdeleteindex(key);
    setdeleteclick(!deleteclick);
  };

  const PlusFunc = (key) => {
    const updatedlikes = [...savecomments];
    updatedlikes[key].likes += 1;
    setsavecomments(updatedlikes);
  };

  const MinusFunc = (key) => {
    const updatedlikes = [...savecomments];
    if (updatedlikes[key].likes > 0) {
      updatedlikes[key].likes -= 1;
      setsavecomments(updatedlikes);
    }
  };

  const ReplyFunc = (key) => {
    const updatedreply = [...savecomments];
    updatedreply[key].reply = true;
    setsavecomments(updatedreply);
  };

  const TakeReplyValue = (e) => {
    setreplyvalue(e.target.value);
  };

  const SaveReplyValue = (e, key) => {
    e.preventDefault();
    if (replyvalue.trim() !== "") {
      const updatedComments = [...savecomments];
      updatedComments[key] = {
        ...updatedComments[key],
        reply: false,
        replied: true,
        replytxt: replyvalue,
      };
      setsavecomments(updatedComments);
      setreplyvalue("");
    }
  };
  const DeleteReply = (key) => {
    const updatedComments = [...savecomments];
    updatedComments[key].replied = false;
    setsavecomments(updatedComments);
  };
  return (
    <>
      <div className=" relative gap-[24px] flex flex-col">
        <div className=" flex flex-col items-center overflow-y-auto overflow-x-hidden h-[600px] gap-[20px]">
          {savecomments.map((comment, key) => (
            <div className=" w-full flex flex-col" key={key}>
              <div className=" flex bg-[#fff] w-full max-w-[730px] gap-[24px] items-start comments_div">
                <div className=" gap-[20px] justify-center items-center flex flex-col w-[48px] h-[100px] bg-[#F5F6FA] rounded-[10px]">
                  <button
                    onClick={() => PlusFunc(key)}
                    className="cursor-pointer"
                  >
                    <img src={plus_img} alt="" />
                  </button>
                  <p className=" text-[#5357B6] text=[16px] font-[400]">
                    {comment.likes}
                  </p>
                  <button
                    onClick={() => MinusFunc(key)}
                    className="cursor-pointer"
                  >
                    <img src={minus_img} alt="" />
                  </button>
                </div>
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
                        onClick={() => ClickOnDelete(key)}
                      >
                        <img src={remove_img} alt="" />
                        Delete
                      </button>
                      <button className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer">
                        <img src={edit_img} alt="" /> Edit
                      </button>
                      <button
                        onClick={() => ReplyFunc(key)}
                        className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer"
                      >
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
              {comment.reply && (
                <form
                  onClick={(e) => SaveReplyValue(e, key)}
                  className="bg-[#FFF] rounded-[8px] flex items-start gap-[17px]  reply_form"
                  action=""
                >
                  <img src={profile_img} alt="" />
                  <input
                    onChange={TakeReplyValue}
                    className="  outline-none w-[506px] h-[96px] flex border-solid border-[1px] border-[#E9EBF0] "
                    placeholder="Add a reply..."
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
              )}
              {comment.replied && (
                <div className=" flex bg-[#fff] w-full max-w-[640px] self-end gap-[24px] items-start comments_div reply_div">
                  <div className=" gap-[20px] justify-center items-center flex flex-col w-[48px] h-[100px] bg-[#F5F6FA] rounded-[10px]">
                    <button
                      onClick={() => PlusFunc(key)}
                      className="cursor-pointer"
                    >
                      <img src={plus_img} alt="" />
                    </button>
                    <p className=" text-[#5357B6] text=[16px] font-[400]">
                      {comment.likes}
                    </p>
                    <button
                      onClick={() => MinusFunc(key)}
                      className="cursor-pointer"
                    >
                      <img src={minus_img} alt="" />
                    </button>
                  </div>
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
                          onClick={() => DeleteReply(key)}
                          className=" flex justify-center items-center gap-[8px] text-[#ED6368] text-[16px] font-[400] cursor-pointer"
                        >
                          <img src={remove_img} alt="" />
                          Delete
                        </button>
                        <button className="flex justify-center items-center gap-[8px] text-[#5357B6] text-[16px] font-[400px] cursor-pointer">
                          <img src={edit_img} alt="" /> Edit
                        </button>
                      </div>
                    </div>
                    <div className=" overflow-hidden max-w-[600px] h-auto">
                      <p className=" text-[#67727E] text-[16px] font-[400] leading-[24px] comments_p">
                        {comment.replytxt}
                      </p>
                    </div>
                  </div>
                </div>
              )}
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
            <p className="text-[#FFF] text-[16px] font-[400] cursor-pointer ">
              SEND
            </p>
          </button>
        </form>
      </div>
      {deleteclick && (
        <div
          onClick={ClickOnDelete}
          className=" h-full w-full absolute bg-[#000] flex justify-center items-center opacity_div"
        >
          <div className=" justify-center gap-[20px] flex flex-col rounded-[8px]  w-[400px] h-[252px] bg-[#fff] delete_div">
            <p className=" text-[24px] font-[400] text-[334253]">
              Delete comment
            </p>
            <p className=" text-[16px] font-[400] leading-[24px] text-[#67727E]">
              Are you sure you want to delete this <br /> comment? This will
              remove the comment <br /> and can’t be undone.
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
      )}
    </>
  );
}

export default Main;
