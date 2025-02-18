import { useState, useEffect } from "react";
import profile_img from "../../../assets/images/Oval.svg";
import remove_img from "../../../assets/images/trash.svg";
import edit_img from "../../../assets/images/pencil.svg";
import reply_img from "../../../assets/images/Reply(1).svg";
import plus_img from "../../../assets/images/+.svg";
import minus_img from "../../../assets/images/-.svg";
import Likes_div from "../../__molecules/likes_div/Likes_div";
import Delete from "../../__molecules/delete_div/Delete_div";
import Form from "../../__molecules/form/Form";
import Buttons_div from "../../__molecules/buttons_div/Buttons_div";
function Main() {
  const [comment, setcomment] = useState("");
  const [replyvalue, setreplyvalue] = useState("");
  const [savecomments, setsavecomments] = useState(() => {
    const savedComments = localStorage.getItem("comments");
    return savedComments
      ? JSON.parse(savedComments)
      : [
          {
            comment:
              "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
            name: "amyrobson",
            likes: 4,
            reply: false,
            replytxt: [],
            replied: false,
            edit: false,
          },
        ];
  });
  const [deleteclick, setdeleteclick] = useState(false);
  const [deleteindex, setdeleteindex] = useState(null);
  const [editReplyText, setEditReplyText] = useState("");
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(savecomments));
  }, [savecomments]);
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
          name: "Irakli",
          likes: 0,
          reply: false,
          replytxt: [],
          replied: false,
          edit: false,
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

  const PlusFunc = (commentIndex, replyIndex = null) => {
    const updatedComments = [...savecomments];

    if (replyIndex === null) {
      updatedComments[commentIndex].likes += 1;
    } else {
      updatedComments[commentIndex].replytxt[replyIndex].likes += 1;
    }
    setsavecomments(updatedComments);
  };

  const MinusFunc = (commentIndex, replyIndex = null) => {
    const updatedComments = [...savecomments];
    if (replyIndex === null) {
      updatedComments[commentIndex].likes -= 1;
    } else {
      updatedComments[commentIndex].replytxt[replyIndex].likes -= 1;
    }
    setsavecomments(updatedComments);
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
      updatedComments[key].replytxt.push({
        text: replyvalue,
        likes: 0,
        edit: false,
        name: "Irakli",
      });
      updatedComments[key].reply = false;
      setsavecomments(updatedComments);
      setreplyvalue("");
    }
  };

  const DeleteReply = (key, replyindex) => {
    const updatedComments = [...savecomments];
    updatedComments[key].replytxt.splice(replyindex, 1);
    setsavecomments(updatedComments);
  };
  const EditClick = (key) => {
    if (key !== 0) {
      const updatedcomments = [...savecomments];
      updatedcomments[key].edit = true;
      setsavecomments(updatedcomments);
    }
  };
  const UpdateEditedComment = (e, key) => {
    const updatedComments = [...savecomments];
    updatedComments[key].comment = e.target.value;
    setsavecomments(updatedComments);
  };
  const SaveEditedComment = (key) => {
    const updatedComments = [...savecomments];
    updatedComments[key].edit = false;
    setsavecomments(updatedComments);
  };
  const ReplyEditClick = (commentIndex, replyIndex) => {
    const updatedComments = [...savecomments];
    updatedComments[commentIndex].replytxt[replyIndex].edit = true;
    setEditReplyText(updatedComments[commentIndex].replytxt[replyIndex].text);
    setsavecomments(updatedComments);
  };
  const UpdateEditedReply = (e) => {
    setEditReplyText(e.target.value);
  };
  const SaveEditedReply = (commentIndex, replyIndex) => {
    const updatedComments = [...savecomments];
    updatedComments[commentIndex].replytxt[replyIndex].text = editReplyText;
    updatedComments[commentIndex].replytxt[replyIndex].edit = false;
    setsavecomments(updatedComments);
  };

  return (
    <>
      <div className=" relative gap-[24px] flex flex-col">
        <div className=" flex flex-col items-center overflow-y-auto overflow-x-hidden h-[600px] gap-[20px]">
          {savecomments.map((comment, key) => (
            <div className=" w-full flex flex-col" key={key}>
              <div className=" flex bg-[#fff] w-full max-w-[730px] gap-[24px] items-start !p-[24px]">
                <Likes_div
                  func={() => PlusFunc(key)}
                  plus_img={plus_img}
                  minus_img={minus_img}
                  MinusFunc={() => MinusFunc(key)}
                  comment={comment}
                />
                <div className=" w-full">
                  <div className="  flex justify-between items-center">
                    <div className=" flex gap-[16px]">
                      <img
                        className=" w-[32px] h-[32px]"
                        src={profile_img}
                        alt=""
                      />
                      <p className=" text-[#334253] text-[16px] font-[400]">
                        {comment.name}
                      </p>
                      <p className=" text-[#67727E] text-[16px] font-[400] ">
                        1 month ago
                      </p>
                    </div>
                    <Buttons_div
                      index={key}
                      clickfunc={() => ClickOnDelete(key)}
                      remove_img={remove_img}
                      editfunc={() => EditClick(key)}
                      edit_img={edit_img}
                      reply_img={reply_img}
                      replyfunc={() => ReplyFunc(key)}
                    />
                  </div>
                  {comment.edit ? (
                    <div className="!mt-[20px] flex flex-col items-end w-[530px] ">
                      <textarea
                        className="!px-[24px] !py-[12px] w-[100%]"
                        value={comment.comment}
                        onChange={(e) => UpdateEditedComment(e, key)}
                      />
                      <button
                        className=" w-[108px] h-[48px] bg-[#5357B6] rounded-[8px] text-[16px] font-[400] text-[#fff] !mt-[12px]"
                        onClick={() => SaveEditedComment(key)}
                      >
                        UPDATE
                      </button>
                    </div>
                  ) : (
                    <div className=" overflow-hidden max-w-[600px] h-auto">
                      <p className=" text-[#67727E] text-[16px] font-[400] leading-[24px] !mt-[15px]">
                        {comment.comment}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {comment.reply && (
                <Form
                  SaveCommentsFunc={(e) => SaveReplyValue(e, key)}
                  profile_img={profile_img}
                  TakeValue={TakeReplyValue}
                />
              )}
              {comment.replytxt.length > 0 &&
                comment.replytxt.map((reply, replyindex) => (
                  <div
                    key={replyindex}
                    className=" flex bg-[#fff] w-full max-w-[640px] self-end gap-[24px] items-start !p-[24px] !mt-[20px]"
                  >
                    <Likes_div
                      func={() => PlusFunc(key, replyindex)}
                      plus_img={plus_img}
                      minus_img={minus_img}
                      MinusFunc={() => MinusFunc(key, replyindex)}
                      comment={reply}
                    />

                    <div className=" w-full">
                      <div className="  flex justify-between items-center">
                        <div className=" flex gap-[16px]">
                          <img
                            className=" w-[32px] h-[32px]"
                            src={profile_img}
                            alt=""
                          />
                          <p className=" text-[#334253] text-[16px] font-[400]">
                            {reply.name}
                          </p>
                          <p className=" text-[#67727E] text-[16px] font-[400] ">
                            1 month ago
                          </p>
                        </div>
                        <Buttons_div
                          index={key}
                          clickfunc={() => DeleteReply(key, replyindex)}
                          remove_img={remove_img}
                          editfunc={() => ReplyEditClick(key, replyindex)}
                          edit_img={edit_img}
                          reply_img={reply_img}
                          replyfunc={() => ReplyFunc(key)}
                        />
                      </div>
                      {reply.edit ? (
                        <div className="!mt-[20px] flex flex-col items-end w-[530px]">
                          <textarea
                            className="!px-[24px] !py-[12px] w-[100%]"
                            value={editReplyText}
                            onChange={UpdateEditedReply}
                          />
                          <button
                            className="w-[108px] h-[48px] bg-[#5357B6] rounded-[8px] text-[16px] font-[400] text-[#fff] !mt-[12px]"
                            onClick={() => SaveEditedReply(key, replyindex)}
                          >
                            UPDATE
                          </button>
                        </div>
                      ) : (
                        <div className=" overflow-hidden max-w-[600px] h-auto">
                          <p className=" text-[#67727E] text-[16px] font-[400] leading-[24px] !mt-[15px]">
                            <span className="text-[16px] font-[400] text-[#5357B6]">
                              {comment.name === "Irakli"
                                ? "@Irakli"
                                : "@amyrobson"}
                            </span>
                            <span className="!ml-[4px]">{reply.text}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <Form
          SaveCommentsFunc={SaveCommentsFunc}
          profile_img={profile_img}
          TakeValue={TakeValue}
          comment={comment}
        />
      </div>
      {deleteclick && (
        <Delete ClickOnDelete={ClickOnDelete} DeleteComment={DeleteComment} />
      )}
    </>
  );
}

export default Main;
