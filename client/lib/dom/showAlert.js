
import { addClass,removeClass } from './css.js';
import { getNode } from "./getNode.js";

export function showAlert(node,text='에러입니다',timeout=1500){ //1500은 기본값
  if(typeof node === 'string') node =getNode(node);
  node.textContent = text;

  addClass(node,'is-active');
  setTimeout(()=>{
    removeClass(node,'is-active'); //일정시간 지나면 remove
  },timeout)
}
