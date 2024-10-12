const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const commentListEl = document.querySelector('.comment_list');

const handleSubmit = (e) => {
  e.preventDefault();

  const inputValue = inputEl.value;
  if(inputValue){
    // console.log(`하: ${inputValue}`);
    const newCommentEl = document.createElement('div');
    newCommentEl.classList.add('comment_item');
    commentListEl.append(newCommentEl);
    newCommentEl.innerHTML = `<div>${inputEl.value}</div>`;

    inputEl.value = '';
    // 인풋(입력창) 초기화 해줘야 함!
  }

};

formEl.addEventListener('submit', handleSubmit);


// 미션**********
// 스토리지로 리로드 했을 때 댓글 남아있게 하기