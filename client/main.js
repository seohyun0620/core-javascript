import {getNode} from "./lib/dom/getNode"
// const { ESLint } = require('eslint');

/* 1.인풋 벨류값 가져오기
2.이벤트 핸들러 연결하기
3.이벤트 기본 동작 차단하기
4.두 수의 합을 더해주기
5.화면에 출력하기 */
/* eslint no-undef:'warn' */
/* eslint no-unused-vars:'off' */

/* 내가 짠거 비교해보기
const firstNumber=getNode('.firstNumber');
const secondNumber=getNode('.secondNumber');
const done=getNode('.done');

function handler(e){
  e.preventDefault();
  let target=e.target;
  //console.log(target);
  first_id=getAttr('.first', id)
  second_id=getAttr('.second', id)
  done=first_id+second_id
  return done;
}
  
done.addEventListener('click',handler) */

const firstInput=getNode('#firstNumber');
const secondInput=getNode('#secondNumber');
const done=getNode('#done');
const result = getNode('.result');

function getInputValue(node){
  if(typeof node === 'string') node =getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다')//tagName은 대문자로 결과 반환
  return node.value;
}

const sum=(valueA,valueB)=>valueA+valueB;

function clearContents(node){
  if(typeof node === 'string') node =getNode(node);
  node.textContent='';
}

function handler(e){
  e.preventDefault(); //submit이 되는 순간 새로고침이 되는게 폼의 기본동작을 멈추게 함
  
  let firstValue = +getInputValue(firstInput);//input으로 우리가 받은 문자를 숫자로 형변환 시켜줌
  let secondValue = +getInputValue(secondInput);
  let total =sum(firstValue,secondValue);

  console.log(total);

  clearContents('.result');
  insertLast('.result',total)//beforedend로 붙음
}

function inputHandler(){
  let firstValue = +getInputValue(firstInput);//input으로 우리가 받은 문자를 숫자로 형변환 시켜줌
  let secondValue = +getInputValue(secondInput);
  let total =sum(firstValue,secondValue);

  clearContents(result);
  insertLast(result, total);
}
done.addEventListener('click',handler);

firstInput.addEventListener('change',inputHandler);
secondInput.addEventListener('change',inputHandler);