var foo=doSomething(8,6);

var bar=doSomething(7,4);

function doSomething(paramOne,paramTwo){
  paramOne=paramOne+3;
  paramOne=paramOne-1;
  paramOne=paramOne*8;

  return paramOne*paramTwo;
}
alert(foo);
alert(bar);
