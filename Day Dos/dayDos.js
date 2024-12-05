import { readFileSync } from "node:fs";

const input = readFileSync("dayDosInput.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

const list1 = input.map((l) => l.split(" ").map((e) => Number(e)))

const test1 = [[1,2,3,8], [8,8,7,6,5], ]
// const test1 = [[5,5,5,6,7,8], [5,4,6,3,2], [1,5,3,4,5], [8,11,7,6,5], [8,8,11,7,6,5], [5,4,6,3,2, 9], [5,4,6,3,2, 9]]
// const test1 = [[1,2,7,8,9] ]

const list2 = list1.map((arr) => {
    let count = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    const options = [1,2,3]
    const arrLength = arr.length

    if(arr[0] === arr[1]){
        const filterArray = arr.filter((e,i) => i !== 0)

        if(filterArray[0] === filterArray[1]){
            return 0
        }

        if(filterArray[0] > filterArray[1]){
            while(options.includes(filterArray[count] - filterArray[count+1]) ){
                count = count + 1
            }

            if(count+1 === filterArray.length){
                return 1
            }
        }

        if(filterArray[0] < filterArray[1]){
            while(options.includes(filterArray[count+1] - filterArray[count]) ){
                count = count + 1
            }

            if(count+1 === filterArray.length){
                return 1
            }
        }

        return 0
    }

    if(arr[0] > arr[1]){
        while(options.includes(arr[count] - arr[count+1]) ){
            count = count + 1
        }

        if(count+1 === arrLength){
            return 1
        }
       
        const secondArr = arr.filter((e,i) => i !== 1)
        const firstArr = arr.filter((e,i) => i !== count+1)
        const thirdArr = arr.filter((e,i) => i !== 0)
        count = 0

        if(firstArr[0] > firstArr[1]){
            while(options.includes(firstArr[count] - firstArr[count+1])){
                count = count +1
            }
             if(count+1 === firstArr.length){
                return 1
            }
        }

        if(firstArr[0] < firstArr[1]){
            while(options.includes(firstArr[count+1] - firstArr[count])){
                count = count +1
            }
            if(count+1 === firstArr.length){
                return 1
            }
        }

        if(secondArr[0] > secondArr[1]){
        while(options.includes(secondArr[count2] - secondArr[count2+1])){
            count2 = count2 +1
        }

        if(count2+1 === secondArr.length){
                return 1
            }
        }

        if(secondArr[0] < secondArr[1]){
        while(options.includes(secondArr[count2+1] - secondArr[count2])){
            count2 = count2 +1
        }
        if(count2+1 === secondArr.length){
                return 1
            }
        }

        if(thirdArr[0] > thirdArr[1]){
        while(options.includes(thirdArr[count3] - thirdArr[count3+1])){
            count3 = count3 +1
        }

        if(count3+1 === thirdArr.length){
                return 1
            }
        }

        if(thirdArr[0] < thirdArr[1]){
        while(options.includes(thirdArr[count3+1] - thirdArr[count3])){
            count3 = count3 +1
        }
        if(count3+1 === thirdArr.length){
                return 1
            }
        }
       
        return 0
    }

    if(arr[0] < arr[1]){
        while(options.includes(arr[count+1] - arr[count])){
            count = count +1
        }

        if(count+1 === arrLength){
            return 1
        }

        const firstArr = arr.filter((e,i) => i !== count+1)
        const secondArr = arr.filter((e,i) => i !== count)
        const thirdArr = arr.filter((e,i) => i !== 0)
        count = 0
    
        if(firstArr[0] > firstArr[1]){
            while(options.includes(firstArr[count] - firstArr[count+1])){
                count = count +1
            }
            if(count+1 === firstArr.length){
                return 1
            }
        }

        if(firstArr[0] < firstArr[1]){
            while(options.includes(firstArr[count+1] - firstArr[count])){
                count = count +1
            }
            if(count+1 === firstArr.length){
                return 1
            }
        }

        if(secondArr[0] > secondArr[1]){
        while(options.includes(secondArr[count2] - secondArr[count2+1])){
            count2 = count2 +1
        }
        if(count2+1 === secondArr.length){
            return 1
        }
        }

        if(secondArr[0] < secondArr[1]){
        while(options.includes(secondArr[count2+1] - secondArr[count2])){
            count2 = count2 +1
        }
        if(count2+1 === secondArr.length){
            return 1
        }
        }

        if(thirdArr[0] > thirdArr[1]){
        while(options.includes(thirdArr[count3] - thirdArr[count3+1])){
            count3 = count3 +1
        }

        if(count3+1 === thirdArr.length){
                return 1
            }
        }

        if(thirdArr[0] < thirdArr[1]){
        while(options.includes(thirdArr[count3+1] - thirdArr[count3])){
            count3 = count3 +1
        }
        if(count3+1 === thirdArr.length){
                return 1
            }
        }

        return 0
    }

})

console.log('answer', list2)
console.log('answer', list2.filter((e) => e === 1).length)



