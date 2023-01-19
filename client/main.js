/* global gsap */
import {
/*   xhrData,
  xhrPromise, */
  tiger,
  delayP,
  getNode as $,//getnode를 $로 대체해서 쓸 수 있음
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  attr
} from "./lib/index.js";

//유저 카드 생성
//생성된 카드로 랜더링

//userList.js에서 renderUserCard함수 만들고 만들어진 함수 안에
//createUserCard를 던지고, renderUserCard함수를 사용했을 때 렌더링이 잘 되게

const userCardContainer=$('.user-card-inner');

async function rendingUserList(){
  
  renderSpinner(userCardContainer)

  try{
    await delayP(2100)
    $('.loadingSpinner').remove();

  let response=await tiger.get(' http://localhost:3000/users')
  
  let userData=response.data;
  //console.log(userData);

  //forEach는 순환목적이라서 return 필요 없음
  userData.forEach((data)=>renderUserCard(userCardContainer,data));

  //console.log(gsap.utils.toArray('.user-card'));
  changeColor('.user-card');
  gsap.to(gsap.utils.toArray('.user-card'),{
    x:0,
    opacity:1,
    duration:1.5,
    stagger:0.2,
  })
}catch(err){
//console.log(err);
renderEmptyCard(userCardContainer);
}
}


rendingUserList();

//삭제버튼 누르면 콘솔에 '삭제'글자가 출력될 수 있도록 만들어주세영

function handler(e){ //부모한테 이벤트 위임
  //console.log(e.target.closest('button')); //버튼 말고 다른 곳 누르면 null,버튼 누르면 버튼 출력(가장 가까운 button 누르기?)

  let deleteButton=e.target.closest('button'); //누른 대상에 가까운 button
  let article=e.target.closest('article'); //대상에 인접한 article

  if(!deleteButton||!article) return;//삭제버튼 누르면 버튼이면서 아티클
  
  let id=attr(article,'data-index').slice(5);

  tiger.delete(` http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML='';
    rendingUserList();
  })
  //console.log(deleteButton);
}

userCardContainer.addEventListener('click',handler)
/* userCardContainer.addEventListener('click',(e)=>{
  console.log(e.target);
}) */
