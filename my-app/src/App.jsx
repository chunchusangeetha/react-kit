//import Parent from './Parent'
import './App.css'
//import UserList from './UserList'
//import DeepCompare from './DeepCompare'
import AutoComplete from './AutoComplete'

function App() {

  const str = "Sangeetha"

  const revstr = str.split('').reverse().join('')

  console.log("revese str :::", revstr)

  function strreverse(str) {
    let reversed = "";
    if (str.length === 0) {
      return reversed;
    }
    if (str.length === 1) {
      return str;
    }
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed
  }

//   function strreverse(str) {
//   const result = [];

//   for (let i = str.length - 1; i >= 0; i--) {
//     result.push(str[i]);
//   }

//   return result.join('');
// }

  console.log(strreverse("Sangeetha"), "strreverse")

  function debounce(fn, dealy) {
    let timer
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, dealy)
    }
  }

  const serach = (value) => {
    console.log("delay value", value)
  }

  const decl = debounce(serach, 5000)
  decl("h")
  decl("he")

  const arr = [1, [2, 3], [4, [5, 6]]];

  const result = arr.flat(Infinity);

  console.log(result);

  function flattenarray(arr) {
    return arr.reduce((acc, curr) => {
      return acc.concat(
        Array.isArray(curr) ? flattenarray(curr) : curr
      )
    }, [])
  }

  console.log(flattenarray([1, [2, [3, 4]]]), "flattenarray")

  const duplicatearray = [1, 4, 6, 3, 3, 7, 8, 9, 3, 4, 6, 7]

  const newarr = [...new Set(duplicatearray)]

  console.log(newarr)

  function removeDuplicate(arr) {
    let newarr = []
    arr.forEach(item => {
      if (!newarr.includes(item)) {
        newarr.push(item)
      }
    })
    return newarr
  }

  console.log(removeDuplicate([1, 3, 5, 3, 5, 6, 7, 6, 9]))

  const promise = new Promise((resolve,reject) => {
    return resolve(" data fetched successfully")
  })

  promise
  .then(res =>  console.log(res))
  .catch(err => console.log(err))

  const promises = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});

promises
  .then(res => {
    console.log(res);
    return fetch("https://api.example.com");
  })
  .catch(err => console.log(err));

  return (
    <>
    <AutoComplete/>
      {/* <h1>React Practice</h1> */}
      {/* <Parent/> */}
      {/* <UserList/> */}
      {/* <DeepCompare/> */}
    </>

  )
}

export default App
