/* 
0: uninitalized //초기화
1: loading //로딩
2: loaded //로딩이 완료된
3: interactive //인터랙티브
4: complete //완료
*/

import { typeError } from "../error/typeError.js";

  export function xhrData({  //받는 즉시 구조분해할당
    url = '',
    method = 'GET',
    body = null,
    onSuccess = null,
    headers = {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    onFail=null
  }={}){ // ={}는 기본값 설정

  const xhr = new XMLHttpRequest();
//console.log(xhr);

//비동기 통신 오픈(시작)
xhr.open(method,url);

// Object.entries(headers).forEach(([key,value])=>{
//   xhr.setRequestHeader(key,value);
// })

//readystate가 변경이 될 때 마다 실행해줘(이벤트가 호출됨)
  xhr.addEventListener('readystatechange',()=>{
    const{status,readyState,response}=xhr; //객체 구조 분해 할당, xhr은 객체임
    if(status>=200 && status<400){
      if(readyState === 4){
        console.log('통신 성공');
        onSuccess(JSON.parse(response))
        //console.log(JSON.parse(response)); //JSON.parse해서 객체화 시킴, JSON.parse안시키면 xhr.response이 문자임
      }
    }else{
      onFail('통신 실패');
    }
})

xhr.send(JSON.stringify(body)); //서버에 요청을 보냄 (open이랑 세트)
}

/* xhrData({
  url:'https://jsonplaceholder.typicode.com/users/1',
  onSuccess: (result) =>{
    console.log(result);
  },
  onFail : (err)=>{
    console.error(err);
  }
}) */

// shorthand property
xhrData.get = (url,onSuccess,onFail) =>{
  xhrData({
    url,
    onSuccess,
    onFail
  })
}
xhrData.post = (url,body,onSuccess,onFail) =>{
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.put = (url,body,onSuccess,onFail) =>{
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.delete = (url,body,onSuccess,onFail) =>{
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}
/* 
xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/3',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
 */

/* xhrData('POST','https:jsonplaceholder.typicode.com/users', {
  "name": "seohyun",
  "username": "Bret",
  "email": "tjgus7924@naver.com",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "010-2098-6126",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}) */


//Promise API 

const defaultOptions={
  url:'',
  method:'GET',
  headers:{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body:null
}

export function xhrPromise(options={}){
  const xhr=new XMLHttpRequest();

  const {method,url,body,headers} = Object.assign({},defaultOptions,options);

  if(!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');

  xhr.open(method,url);
  
  xhr.send(body ? JSON.stringify(body) : null)

  return new Promise((resolve, reject) => {

    xhr.addEventListener('readystatechange',()=>{
      const {status, readyState, response} = xhr;

      if(status >= 200 && status < 400){
        if(readyState === 4){
          resolve(JSON.parse(response));
        }
      }else{
        reject('에러입니다.');
      }
    })
  })
}

// xhrPromise({
//   url:'https://jsonplaceholder.typicode.com/users/1'
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })


xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
}
xhrPromise.post = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}
xhrPromise.put = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}
xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method:'DELETE'
  })
}

xhrPromise
.get('www.naver.com') // promise
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})