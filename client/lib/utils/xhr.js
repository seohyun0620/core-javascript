/* 
0: uninitalized //초기화
1: loading //로딩
2: loaded //로딩이 완료된
3: interactive //인터랙티브
4: complete //완료
*/

function xhrData(method,url,body){
  const xhr = new XMLHttpRequest();
//console.log(xhr);

//비동기 통신 오픈(시작)
xhr.open(method,url);

//readystate가 변경이 될 때 마다 실행해줘(이벤트가 호출됨)
  xhr.addEventListener('readystatechange',()=>{
    if(xhr.status>=200 && xhr.status<400){
      if(xhr.readyState === 4){
        console.log('통신 성공');
        console.log(JSON.parse(xhr.response)); //JSON.parse해서 객체화 시킴, JSON.parse안시키면 xhr.response이 문자임
      }
    }
    else{
      console.error('통신 실패');
    }
})
xhr.send(JSON.stringify(body)); //서버에 요청을 보냄 (open이랑 세트)

//console.log(xhr);
}

xhrData('POST','https:jsonplaceholder.typicode.com/users', {
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
})
