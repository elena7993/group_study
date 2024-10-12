const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const commentListEl = document.querySelector('.comment_list');




// const loadComment = () =>{
//   const saveComment = localStorage.getItem("comments");
//   if(saveComment){

//     const commentsList = saveComment.split("||");

//     for(let i = 0; i < commentsList.length; i++){
//       const newCommentEl = document.createElement('div');
//       newCommentEl.classList.add('comment_item');
//       commentListEl.append(newCommentEl);
//       newCommentEl.innerHTML = `<div>${commentsList[i]}</div>`;
//     };
//   };
// };

// const saveComments = (comment) => {
//   const savedComments = localStorage.getItem("comments");
//   const newComments = savedComments ? `${savedComments}||${comment}` : comment;
//   localStorage.setItem("comments", newComments);
//   console.log("됩니까");
// };

const handleSubmit = (e) => {
  e.preventDefault();

  const inputValue = inputEl.value;

  if(inputValue){
    const newCommentEl = document.createElement('div');
    newCommentEl.classList.add('comment_item');
    commentListEl.append(newCommentEl);
    newCommentEl.innerHTML = `<div>${inputValue}</div>`;

    inputEl.value = '';
    
    let saveComment = localStorage.getItem("comments");
    
    if(saveComment === null){
      localStorage.setItem("COMMENTS_LIST", inputValue);
    }else{
      saveComment += inputValue
      localStorage.setItem("COMMENTS_LIST", saveComments);
    };
    
  }else if(inputValue === "CLEAR"){
    localStorage.removeItem("comments")
    commentListEl.innerHTML = '';
  };

};

formEl.addEventListener('submit', handleSubmit);

// setItem작동 성공시키기*********

// 이벤트랑 함수랑 세트임 중요*******

// 어떤 이벤트가 발생했을 떄 어떤 함수가 실행되느냐가 중요하다********************

// inputEl.value = '';다음에 
// 셋아이템을 바로 때려봐**********

// 확인하고