export default function App(){
 

// // Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

// const arr = ['f','n','e']
// let newArr = []
// for(let i=0;i<arr.length;i++){
//  newArr.push(arr[i],arr[i])
// }
// console.log(newArr); 


// // Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
// const arr = ['4','11','1']
// const num = 11

// const res = arr.reduce((acc,item)=>{
//     const number = Number(item)
//     if(num%number===0){
//         acc.push(number)
//     }
//     return acc
// },[])
// console.log(res)



// // Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе

// const num1 = 143
// const num2 =15364

// const str1 = num1.toString().split('')
// const str2 = num2.toString().split('')

// const res = str1.filter(item=>str2.includes(item)).map(Number)
// console.log(res)


// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

const num = 34323;
const str = num.toString(); // Преобразуем число в строку
const digits = str.split(''); // Разбиваем строку на массив цифр

const res = digits.reduce((acc, item, index) => {
    // Исключаем первую и последнюю цифры числа
    if (index !== 0 && index !== str.length - 1) {
        if (item === '3') {
            acc.push(index);
        }
    }
    return acc;
}, []);

console.log(res); // [2] (индекс третьей цифры)




}
