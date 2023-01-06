









console.log(x)


function first(){
  let x= 10;

  return () => {
    let y = 30;
    return x + y;
  }
}

var x = first();

const value = first();

console.log(x)