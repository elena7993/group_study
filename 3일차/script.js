const wrap = document.querySelector('.wrap');

const con = document.querySelectorAll('.con');



//# classList.add()
//# classList.remove()
//# classList.toggle()
//# classList.contains()
//# partentNode.classList


// con[0].addEventListener('click', () => {
//   con[0].classList.toggle('active');
// })
// con[1].addEventListener('click', () => {
//   con[1].classList.add('active');
// })
// con[2].addEventListener('click', () => {
//   con[2].classList.add('active');
// })
// con[3].addEventListener('click', () => {
//   con[3].classList.add('active');
// })
// con[4].addEventListener('click', () => {
//   con[4].classList.add('active');
// })



// const clickHandler = (e) => {
//   if (e.target.classList.contains('con')){
//     // e.target.parentNode.classList.toggle('active');
//     e.target.classList.toggle('active');
//   }}


// wrap.addEventListener('click', clickHandler);



//! 정보화(저장)
const our = [
  {
    id: 1,
    userName: '현아',
    userAge: 8,
    userSex: '여자'
  },
  {
    id: 2,
    userName: '지훈',
    userAge: 29,
    userSex: '남자'
  },
  {
    id: 3,
    userName: '성찬',
    userAge: 27,
    userSex: '남자'
  },
  {
    id: 4,
    userName: '정현',
    userAge: 53,
    userSex: '여자'
  },
  {
    id: 5,
    userName: '재원',
    userAge: 11,
    userSex: '남자'
  },
];


//! 정보 표출

for (i = 0; i < our.length; i++) {
  con[i].innerHTML = `<div>이름: ${our[i].userName}</div> <div>나이: ${our[i].userAge}</div><div>성별: ${our[i].userSex}</div>`;
}


