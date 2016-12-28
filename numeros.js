var a = [1,1,2,1,3,3,3,3,3,4,1,1,1,2,2,2,3,4,4,4];

function f (){

  var count = 0;
  var atualNumber = a[0];
      console.log(">[");
  for(var i=0; i < a.length; i++){
    if(atualNumber == a[i]){
      count++;
    }else{
      console.log("["+atualNumber+","+count+"],");
      atualNumber = a[i];
      count=1;
    }
  }
      console.log("["+atualNumber+","+count+"]]");
}

var r = f();
