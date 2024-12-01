import { readFileSync } from "node:fs";

const input = readFileSync("dayUnoInput.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

const list1 = input.map((e) => Number(e.substring(0, e.indexOf(" ")))).sort((a, b) => a - b)
const list2 = input.map((e) => Number(e.substring(e.indexOf(" "), e.length).trim())).sort((a, b) => a - b)

const resultPart1 = list1.map((e, i) => {
    if(e > list2[i]){
        return e-list2[i]
    } else if (e < list2[i]){
        return list2[i]-e
    }

    return 0
})

console.log(11111, resultPart1.reduce((a,b) => a+b))

const resultPart2 = list1.map((e) => {
    const count = list2.filter((e2) => e2 === e).length

    if (count === 0){
        return 0
    }

    return count * e
})

console.log(22222, resultPart2.reduce((a,b) => a+b))