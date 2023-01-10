function getAttr(node,prop){
  if(typeof node === 'string'){
    node=getNode(node);
  }

  return node.getAttribute(prop);
}

//set함수 만들기
function setAttr(node,prop,value){
  if(typeof node === 'string') node=getNode(node);

  if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  
  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수 값 입니다.');

  //세팅만 해주기에 return을 안해줘도 됨
  node.setAttribute(prop,value);
}

//atrr(common)함수 만들기
function attr(node,prop,value){
  if(!value){
    return getAttr(node,prop);

  }
  else{
    setAttr(node,prop,value);
  }
}