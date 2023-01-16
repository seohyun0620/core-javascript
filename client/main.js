import { 
  diceAnimation,
  disableElement,
  enableElement,
  getNode,
  getNodes,
  visibledElement,
  invisibleElement,
  insertLast,
  attr,
  clearContents,
  memo
} from './lib/index.js';

  //배열의 구조분해 할당
  const [rollingDiceButton,recordButton,resetButton]=getNodes('.buttonGroup > button');
//  console.log(button);
//버튼그룹안에 잇는 친자식 버튼을 잡으건데 그 중에 n번쨰 자식을 잡을거야
/* const rollingDiceButton=getNode('.buttonGroup > button:nth-child(1)');
const recordButton=getNode('.buttonGroup > button:nth-child(2)');
const resetButton=getNode('.buttonGroup > button:nth-child(3)'); */

const recordListWrapper=getNode('.recordListWrapper');

memo('@tbody',()=>getNode('.recordListWrapper tbody'));



/* render */
let count=0;
let total=0;
function renderRecordListItem(){
  //let diceValue=+attr('#cube','data-dice'); 값은 string 이라서 + 붙임
  let diceValue = Number(attr(memo('cube'),'data-dice'));
  let template = /*html */ `
      <tr>
        <td>${++count}</td>
        <td>${diceValue}</td>
        <td>${total+=diceValue}</td>
      </tr>
      `
      insertLast(memo('@tbody'),template)
    //insertLast('.recordListWrapper tbody',template)
    //스크롤 길이만큼 찍어준다(아래부터 보여줌)
    recordListWrapper.scrollTop=recordListWrapper.scrollHeight;
}


/* event */
const handleRollingDice=(()=>{
  let stopAnimation;
  let isRolling=false;

  return ()=>{
    //setInterval() : 변수로 받을 수 있고 1초마다 안의 내용을 계속 실행, clearInterval로 받은 변수값을 가지고 인터벌 종료 가능
    if(!isRolling){ //움직임
      stopAnimation=setInterval(diceAnimation,100)

      disableElement(recordButton);
      disableElement(resetButton);
    }
    else{ //멈춤
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }
    isRolling=!isRolling;
  }
})()

const handleRecord=()=>{
  visibledElement(recordListWrapper);
  renderRecordListItem();
}
const handleReset=()=>{
  count =0;
  total =0;
  invisibleElement(recordListWrapper);
  clearContents(memo('@tbody'))
  //clearContents('.recordListWrapper tbody')
}

rollingDiceButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)
