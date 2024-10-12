const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const commentListEl = document.querySelector('.comment_list');

// const upDateComm = localStorage.getItem("NEW_COMMNET");

// if(upDateComm == "SAVE"){
//   localStorage.setItem("NEW_COMMNET", "SAVE");
// };

const loadComment = () =>{
  const saveComment = localStorage.getItem("comments");
  if(saveComment){

    const commentsList = saveComment.split("||");

    for(let i = 0; i < commentsList.length; i++){
      const newCommentEl = document.createElement('div');
      newCommentEl.classList.add('comment_item');
      commentListEl.append(newCommentEl);
      newCommentEl.innerHTML = `<div>${commentsList[i]}</div>`;
    };
  };
};

const saveComments = (comment) => {
  const savedComments = localStorage.getItem("comments");
  const newComments = savedComments ? `${savedComments}||${comment}` : comment;
  localStorage.setItem("comments", newComments);
  // console.log("됩니까");
};

const handleSubmit = (e) => {
  e.preventDefault();

  const inputValue = inputEl.value;
  // console.log(inputValue);

  if(inputValue){
    const newCommentEl = document.createElement('div');
    newCommentEl.classList.add('comment_item');
    commentListEl.append(newCommentEl);
    newCommentEl.innerHTML = `<div>${inputEl.value}</div>`;

    inputEl.value = '';
    // 인풋(입력창) 초기화 해줘야 함!

  }else if(inputValue === "CLEAR"){
    localStorage.removeItem("comments")
    commentListEl.innerHTML = '';
    // =>댓글지워야함
  };

};

formEl.addEventListener('submit', handleSubmit);

window.addEventListener('DOMContentLoaded', loadComment);


// 미션**********
// 스토리지로 리로드 했을 때 댓글 남아있게 하기

// setItem을 꼭 하지 않더라고 getItem을 할 수는 있다


