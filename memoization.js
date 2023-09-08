// 1 1 2 3 5 8 
let count = 0
function fib(n, s){
    console.log(n, s)
    if (n <= 2){
        return 1
    }
    else{
        console.log("started", n)
        let result = fib(n-1, "first") + fib(n-2, "second")
        console.log("result", result)
        return result
    }
}
console.log('final',fib(6))