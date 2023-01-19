/* global gsap */
import {
/*   xhrData,
  xhrPromise, */
  tiger,
  delayP,
  getNode,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard
} from "./lib/index.js";

//유저 카드 생성
//생성된 카드로 랜더링

//userList.js에서 renderUserCard함수 만들고 만들어진 함수 안에
//createUserCard를 던지고, renderUserCard함수를 사용했을 때 렌더링이 잘 되게

const userCardContainer=getNode('.user-card-inner');

async function rendingUserList(){
  
  renderSpinner(userCardContainer)

  try{
    await delayP(2100)
    getNode('.loadingSpinner').remove();

  let response=await tiger.get('https://jsonplaceholder.typicode.com/users')
  
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
console.log(err);
}
}


rendingUserList();
