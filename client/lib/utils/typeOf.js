
export function isNumericString(data){
  data=Number(data);
  return !isNaN(data) //윈도우가 제공해줌(isNaN)
}
//console.log(isNumericString('123')) //숫자면 7번째로 이동하고 true반환