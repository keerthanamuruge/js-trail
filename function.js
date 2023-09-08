const add = (function () {
    let counter = 0;
    console.log(counter)
    return function () {return counter;}
  })();
  console.log(add())
//   console.log(add()())
//   console.log(add()())