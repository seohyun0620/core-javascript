function addClass(node,className){
  if(typeof node === 'string'){
    node=getNode(node);
  }
  if(typeof className !== 'string'){
    typeError('addClass함수의 두 번쨰 인자는 문자 타입이어야 합니다.');
  }
  node.classList.add(className)
}

function removeClass(node,className){
  if(typeof node === 'string'){
    node=getNode(node);
  }
  if(!className){
    node.classNme='';
    return;
  }
  if(typeof className !== 'string'){
    typeError('removeClass함수의 두 번쨰 인자는 문자 타입이어야 합니다.');
  }
  node.classList.remove(className);
}

function toggleClass(){
  if(typeof node === 'string'){
    node=getNode(node);
  }
  if(typeof className !== 'string'){
    typeError('toggleClass함수의 두 번쨰 인자는 문자 타입이어야 합니다.');
  }
  node.classList.toggle(className)
}


//자바스크립트에선 객체의 ket,value값을 변수로 받기 위해선 . 사용 못함
//[]각괄호표기법
function getCss(node,prop){
  if(typeof node === 'string'){
    node=getNode(node);
  }
  if(!(prop in document.body.style)){
    syntaxError('getCss함수의 두 번째 인자인 prop은 유효한 css속성이 아닙니다');
  }
  return getComputedStyle(node)[prop];
}

function setCss(node,prop,value){
  if(typeof node === 'string'){
    node=getNode(node);
  }
  if(!(prop in document.body.style)){
    syntaxError('setCss함수의 두 번째 인자인 prop은 유효한 css속성이 아닙니다');
  }
  if(!value){
    syntaxError('setCss함수의 세 번째 인자는 필수값 입니다.');
  }
  node.style[prop]=value;
}

const css = (node,prop,value) => !value ? getCss(node,prop) : setCss (node,prop,value);
/* function css(node,prop,value){
  if(!value){
    return getCss(node,prop);
  }
  else {
    setCss(node,prop,value);
  }
} */