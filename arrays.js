let fruit = []
let a1=[]
let b1 = []
let a,c, greater=[]
fruit.push(1,2,3)
console.log(fruit.length)

// Can able to add value for non existing index in array. 
// the remaining value will be considered as empty item

fruit[5] = 'hello'
console.log(fruit)
console.log(Object.keys(fruit))
console.log(fruit.length)

// Now change the memory by storing 10
console.log("after change the length")
fruit.length = 10
console.log(fruit)
console.log(Object.keys(fruit))
console.log(fruit.length)
for (let i in fruit){
    console.log('fruit', i)
}
for (let i=0; i<fruit.length; i++){
    console.log('fruit', fruit[i])
}

// decrease arr by length
console.log("Decrease array by length")
fruit.length = 3
console.log(fruit)

/*
Array methods



*/
// concat
// create new array
console.log("create array")
a1 = [1]
a1.length = 2
b1 = [2,3,6]
c = a1.concat(b1)
c.push('sdf')
console.log(a1, b1, c)


/*
copyWithin
changing in actual array
syntax:
copyWithin(target, start, end)
copyWithin(target, start)
*/
console.log("------------------copywithin---------------------------")
a1 = [0,1,2,3,4,5,6,7,8,9]
a = a1.copyWithin(1, 5, 8)
a.push('123')
console.log(a1, a)

/*
every element test whether all the value in list is passed the function
*/
console.log("----------------------every-------------------------")
a = [0, 34, 34,125]
greater = (cur_val)=>{
    return cur_val < 80
}
console.log(a.every(greater))

/*
filters - by condition filter the array
*/
console.log("----------------------Filter-------------------------")
a = [12, 4, 6, 10]
console.log(a.filter(a1 => a1>6))

/*
foreach iterate over the array
*/
a = [1,2,3,4,5]
a.forEach(element => console.log(element))

/*
Index of -> to find the indexof the given element
*/
console.log("--------------------------index of--------------------------")
a = ['hello', 'keerthana', 'hello', 'hello']
console.log(a.indexOf('hello'))
console.log(a.indexOf('hello', 3))
console.log(a.indexOf('hell'))

/*
last index of same as above but find the last index of the searched element
*/
console.log("--------------------------last index of--------------------------")
a = ['hello', 'keerthana', 'hello', 'hello']
console.log(a.lastIndexOf('hello'))
console.log(a.lastIndexOf('hell'))

/*
map in array to perform some operation in all the element in the given array
*/
console.log("----------------------map------------------------------")
a = [2,4,6,8,10]
console.log(a.map(ele => ele-1))

/* 
reverse
modify array
*/

console.log("-------------------------reverse-----------------------------")
console.log(a.reverse())


/*
slick
*/

console.log("--------------------------slice------------------------")
console.log(a.slice())
console.log(a.slice(1, -1))
console.log(a.slice(-10))

/* some */
console.log("-------------------------some----------------------------")
let odd = (ele)=> ele%2 === 0;

console.log(a.some(odd))

/* sort */
console.log("------------------------useless sort----------------------------")
console.log(a)
console.log(a.sort())

/* splice */
console.log("------------------------splice----------------------------------")
console.log(a)
a.splice(2, 0, "kivi", "lwmon")
console.log(a)
a.splice(2, 2)
console.log(a)
a.splice(2, 2, "orange", "apple")
console.log(a)

/* entries */
console.log("-----------------------------entries--------------------------")
for (let[index, ele] of a.entries()){
    console.log(index, ele)
}

/* fill */
console.log("------------------------fill--------------------------")
console.log(a)
console.log(a.fill(4, 2,4))
console.log(a.fill(4))
a = {
    lenght: 2
}
console.log(Array.prototype.fill.call(a, 1))


/* find */
console.log("----------------------find-----------------------------")
a = [1,2,3,4,5,]
let isGreater = (ele)=> ele>4
console.log(a.find(isGreater))