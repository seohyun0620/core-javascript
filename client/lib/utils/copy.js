

export function copy (text){
  return navigator.clipboard.writeText(text);
}

//console.log('hello');
//노트북에선 오류나고 컴퓨터에서는 잘 작동함