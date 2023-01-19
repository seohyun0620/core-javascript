

const defaultOptions={
  method:'GET',
  mode:'cors',
  body:null,
  cache:'no-cache',
  credential:'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{'Content-Type': 'application/json; charset=UTF-8'
  }
}

export const tiger=async(options={})=>{

  //추출과 합성을 동시에 햇음
  //defaultOptions,options을 합성하고 url을 제외한 나머지 개체들을 restOptions에 넣음
const{url, ...restOptions}={
  ...defaultOptions,
  ...options,
  headers:{...defaultOptions.headers, ...options.headers} //headers 키만 복사되니까 값도 복사하기위해
}

console.log(restOptions);

// fetch가 promise를 내뱉음, fetch 자체가 url값을 따로 가져감
  let response=await fetch(url,restOptions)

  if(response.ok){
    response.data=await response.json() //responese안에 json()값을 가져온다는 문법
  }
  //console.log(response);
  return response;
}

tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url,body,options) =>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.put = (url,body,options) =>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url,options) =>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}
