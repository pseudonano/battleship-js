let testParam;
function doIt(param){
    param += 2
    testParam = param
}

var test =1;
doIt(test);
console.log(test)
console.log(testParam)
