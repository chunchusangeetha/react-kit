const numbers = [1, 2, 3, 5, 67, 83]

const double = numbers.map(num => num * 2)

console.log(double, "double")
console.log("numbers", numbers)

//event bubling and capturing
document.getElementById("top").addEventListener
    ("click", () => {
        console.log("outer div has clicked")
    }, true)

document.getElementById("mid-div").addEventListener
    ("click", () => {
        console.log("mid div has clicked")
    }, true)

document.getElementById("inner-div").addEventListener
    ("click", () => {
        console.log("inner div has clicked")
    }, true)

//regular fun
function greet() {
    console.log("hello")
}

greet();

//IIFE

(function () {
    console.log("hello IIFE");
})();


function outerfunction() {
    let outer = "this is outer";
    function innerfun() {
        console.log(outer)
    }
    return innerfun
}

const closure = outerfunction()
closure()


function counter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count
        },
        decrement: function () {
            count--;
            return count
        },
        displaycount: function () {
            let message = "current count" + count
            return message
        }
    }
}

const mycounter = counter();

console.log(mycounter.increment(), mycounter.displaycount())



const timerId = setTimeout(() => {
    console.log("settimeoute check")
}, 2000);

clearInterval(timerId)

const timer = setInterval(() => {
    console.log("setinterval check")
}, 5000)

clearInterval(timer)


// promises

const data = { name: "jon", age: 12 }

function fetchdata() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(data)
        }, 2000)
    })
}

fetchdata().then(
    data => {
        console.log("data", data)
    }
).catch(err => {
    console.log("err", err)
})


//async/await

async function fetcData() {
    try {
        const response = await fetch('https://dghsfj.com')

        const data = await response.json();
        console.log("DATA", data)
    } catch (err) {
        console.log("ERROR", err)
    }
}

fetcData()


//call,apply,bind

function cook(ing1, ing2) {
    console.log(`${this.name} is having a meal with ${ing1}and ${ing2}`)
}

const adam = { name: "geetha" }

cook.call(adam, "rice", "curry")
cook.apply(adam, ["rice", "curry"])

const cookforgeetha = cook.bind(adam, "rice", "chicken")

cookforgeetha()

//event deligation


const items = document.querySelectorAll("#itemlist li")

items.forEach(item => {
    item.addEventListener("click", function () {
        console.log("clicked", this.textContent)
    })
})

const item = document.getElementById("itemlist")

item.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        console.log("clicked", e.target.textContent)
    }
})


//async/await with promise

// fetcData1()
// .then(result1 => {
//     return fetcData2(result1)
// })
// .then(result2 => {
//     console.log(result2)
// })
// .catch(err => {
//     console.log(err)
// })


async function fetcData(){
    try{
        const result1 = await fetcData1();
        const result2 = await fetchdata2(result1)
        console.log(result2)
    }catch(err){
        console.log(err)
    }
}

fetcData()

const arr = [1,4,5,6,7]

//reduce

function sum(arr){
    return arr.reduce((acc, curr) => acc + curr, 0)
}

console.log("sum of arr",sum(arr))

//currying


function add(a){
    return function(b){
        return a+b;
    }
}

const add2 = add(5);
console.log(add2(8))


function doubles(a){
    return function(b){
        return a*b;
    }
}

const dub = doubles(2);
console.log(dub(6))

//generator fun

function* infiniteseq(){
    let num = 1;
    while(true){
        yield num;
        num++;
    }
}

const seq = infiniteseq()
console.log(seq.next().value)
console.log(seq.next().value)
console.log(seq.next().value)

for(let i = 0;i<10; i++){

    console.log(seq.next().value)
}


//weakmap weaksets

let weakMap = new WeakMap()

let obj = {name :"geethhha"}

weakMap.set(obj,"empl")

obj = null;
console.log(weakMap.get(obj))

let weakset = new WeakSet()

let objs = {name :"geethhha"}

weakset.add(objs,"empl")

objs = null;

console.log(weakset.has(objs))


//shallow deep

const original = { name:"geetha" , address: {
    city:"hyd"
}}
//obj.assign
const shallowcopy = Object.assign({},original)

shallowcopy.name = "Sangeerha"
console.log(original.name)

 const shallowcopy2 = {...original}

 shallowcopy2.address.city = "delhi new city"

 console.log(original.name ,original.address.city)

 const original1 = { name:"geetha" , address: {
    city:"hyd"
}}
const deepcopy = JSON.parse(JSON.stringify(original1))
deepcopy.name  = "sangeethaaaaa"
deepcopy.address.city = "ban new city"

console.log(original1.address.city)
console.log(original1.name)

//prototype
const person = {
  greet() {
    console.log("Hello")
  }
}

const user = {
  name: "Sangeetha"
}

// link prototype
user.__proto__ = person

user.greet() // Hello ✅
//user → person → Object.prototype → nul


//debounce

function debounce(fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function search(value) {
  console.log("API call for:", value)
}

const debouncedSearch = debounce(search, 500)

//throttle

function throttle(fn, limit) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= limit) {
      lastCall = now
      fn.apply(this, args)
    }
  }
}

function handleScroll() {
  console.log("scroll event")
}

const throttledScroll = throttle(handleScroll, 1000)




