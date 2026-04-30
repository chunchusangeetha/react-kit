import { useCallback, useState, useEffect } from "react";
import Child from "./Child";
import useDebounce from "./components/useDebounce";
import UsePrevious from "./components/usePrevious";
export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log(":::::Clicked");
  }, []);

  console.log(":::::Parent rendered");
  const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

function flattenObject(obj){
    return Object.keys(obj).reduce((acc,key) => {
        if(typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])){
            const flatObject = flattenObject(obj[key]);
            Object.keys(flatObject).forEach(flatKey => {
                acc[`${key}.${flatKey}`] = flatObject[flatKey]
            })
        }else{
            acc[key] = obj[key]
        }
        return acc;
    }, {})
}
console.log(":::::::",flattenObject(input))
const [search, setSearch] = useState("helloooo");

const debouncedSearch = useDebounce(search, 500);

useEffect(() => {
  if (debouncedSearch) {
    console.log("API Call::::::::::", debouncedSearch);
  }
}, [debouncedSearch]);

const useprevioushook = UsePrevious(count);

  return (
    <div>
        <p>Count now: {count}, count before: {useprevioushook}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}