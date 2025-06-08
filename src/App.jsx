export default function App(){
  // Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
  // const number = -1
  // {number>0?alert('число положительное'):alert('отрицательное')}

  // Дана строка. Выведите в консоль длину этой строки.
  // const stroka = 'qwerty'
  // alert(stroka.length)
  
  // Дана строка. Выведите в консоль последний символ строки.
  // const str = 'qwerty'

  // const lastS = str[str.length-1]
  // const lastS1 = str.slice(-2)
  // alert(lastS1)

  // Дано число. Проверьте, четное оно или нет.

  // const num = 9
  // {num%2==0?alert('четное'):alert('нечетное')}

  // Даны два слова. Проверьте, что первые буквы этих слов совпадают.


  // function ppp(str1,str2){
  //   return str1[0].toLowerCase === str2[0].toLowerCase
  // }
  //  alert(ppp('пук','хук'))

// const qqq = (str1,str2) => {
//   const q1 = str1.charAt(0).toLowerCase()
//   const q2 = str2.charAt(0).toLowerCase()

//   return q1===q2
// }
// alert(qqq('пук','аGgукq'))

// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const e = (str) => {
 
//  if(str[str.length-1]==='ь'){
//    return str[str.length-2]
//  } else{
//   return str.slice(-1) 
//  } 
// }
// alert(e('молодец12ь'))


// Дано число. Выведите в консоль первую цифру этого числа.

// const num = 123
// console.log(String(num)[0])


// Дано число. Выведите в консоль последнюю цифру этого числа.
// const num = 123
// const Snum = String(num)
// console.log(Snum[Snum.length-1])

// const num = 123
// const Snum = String(num)
// console.log(Snum.slice(-1))


// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const num = 2312414
// const num1 = String(num).charAt(0)
// const num2 = String(num).slice(-1)
// const sum = Number(num1) + Number(num2)
// console.log(sum)


// Дано число. Выведите количество цифр в этом числе.

// const num = 31234123

// const Snum = String(num).length
// console.log(Number(Snum))


// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// function cuc(num1,num2){
// num1=String(num1).charAt(0)
// num1=Number(num1)
// num2=String(num2).charAt(0)
// num2=Number(num2)

// if(num1===num2){
//   return true
// }
// return false
// }
// alert(cuc(23,242))

// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// const str = 'gergfrgfqfvervg'
// console.log(str[str.length-2])


// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// function aqq(num1,num2){
//   if(num1%num2===0){
//     return true
//   }
//   return false
// }
// console.log(aqq(10,3))


// Выведите в консоль все целые числа от 1 до 100.

// for(let i = 1;i<101;i++){
//   console.log(i)
// }

// let i = 1
// while(i<100){
//   i++
//   console.log(i)
// }


// Выведите в консоль все целые числа от -100 до 0.

// for(let i = -100;i<1;i++){
//   console.log(i)
// }



// Выведите в консоль все целые числа от 100 до 1.

// for(let i = 100;i>=1;i--){
//   console.log(i)
// }

// Выведите в консоль все четные числа из промежутка от 1 до 100.

// for(let i = 1;i<=100;i++){
//   if(i%2===0){
//     console.log('четные числа:',i )
//   } 
// }

// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

// for(let i = 1;i<=100;i++){
//   if(i%3===0){
//     console.log('кратно трем:',i )
//   } 
// }


// Найдите сумму всех целых чисел от 1 до 100.
// let sum =0
// for(let i = 1;i<=100;i++){
//   console.log(sum += i)
// }

// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

// let sum =0
// for(let i = 1;i<=100;i++){
//  if(i%2===0){
//   sum+=i  
//  }
// }
// console.log(sum)

// let sum = 0
// for(let i = 2;i<=100;i+=2){
//  sum+=i
// }
// console.log(sum)



// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

// let sum = 0
// for(let i = 1;i<=100;i+=2){
//  sum+=i
//  console.log(sum)
// }
// console.log(sum)


// Даны два целых числа. Найдите остаток от деления первого числа на второе.

// const num1 = 11
// const num2 = 3

// const del = num1%num2
// console.log(del)


// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

// const str = 'ytrewq'
// const newStr = str.split('').reverse().join('')
// console.log(newStr)

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// const arr = [1,2,3,4]
// let sum = 0
// for (let i=0;i<arr.length;i++){
// sum+=arr[i]*arr[i]
// }
// console.log(sum)

// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// const arr = [4,16,9,4]
// let sum = 0
// for (let i=0;i<arr.length;i++){
// sum+=Math.sqrt(arr[i])
// }

// console.log(sum)

// Дан массив с числами. Найдите сумму положительных элементов этого массива.

  // const arr = [4,-16,-9,4]
  // let sum = 0
  // for (let i=0;i<arr.length;i++){
  // if(arr[i]>0){
  //   sum+=arr[i]
  // }
  // }
  // console.log(sum)

//   const arr = [10,-16,-9,4]

//   const sum = arr.reduce((sum,num)=>num>0?sum+num:sum,0)
// console.log(sum)



// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// const arr = [4,-16,-9,4,9,10]
// let sum = 0
// for (let i=0;i<arr.length;i++){
// if(arr[i]>0 && arr[i]<10){
//   sum+=arr[i]
// }
// }
// console.log(sum)

// const arr = [4,-16,-9,4,9,10]
// let sum = arr.reduce((c,a)=>a>0 && a<10?c+a:c,0)
// console.log(sum)

// Дана строка:'abcde'Получите массив букв этой строки.

// const str = 'abcde'
// const arr = str.split('')
// console.log(arr)


// Дано некоторое число:12345 Получите массив цифр этого числа.

// const num = 12345
// const arr = String(num).split('').map(Number)
// console.log(arr)



// Дано некоторое число:12345 Переверните его:54321

// const num = 12345
// const str = String(num).split('').reverse().map(Number).join('')
// console.log(str)


// Дано некоторое число:12345 Найдите сумму цифр этого числа.

// const num = 12345
// const arr = String(num).split('')
// let sum = 0
// for(let i=0;i<arr.length;i++){
// sum+=Number(arr[i])
// }

// console.log(sum)

// Заполните массив целыми числами от 1 до 10.

// const arr = []
// for(let i = 0;i<11;i++){
//   arr.push(i)
// }
// console.log(arr)


// Заполните массив четными числами из промежутка от 1 до 100.

// const arr = []
// for(let i = 2;i<101;i+=2){
//   arr.push(i)
// }
// console.log(arr)

// Дан массив с дробями:[1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

// let arr = [1.456, 2.125, 3.32, 4.1, 5.34]

// for(let i = 0;i<arr.length;i++){
//    arr[i] = Math.round(arr[i]*10)/10
// }
// console.log(arr)


// let arr = [1.456, 2.125, 3.32, 4.1, 5.34]

// const res = arr.map(a=>Math.round(a*10)/10)
// console.log(res);



// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.


// const arr = ['erwerwe','werwre','wefwef','http://efwefwefwef','http://']

// const arr1 = arr.filter(slovo=>slovo.startsWith('http://'))

// console.log(arr1);



// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.


// const arr = ['erwerwe','werwre','wefwef.html','http://efwefwefwef','http://.html']

// const arr1 = arr.filter(slovo=>slovo.endsWith('.html'))

// console.log(arr1);



// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.


// const arr =[1,23,4,5,56,66,67]

// const newArr = arr.map(num=>num*1.1)
// console.log(newArr);


// Заполните массив случайными числами из промежутка от 1 до 100.


// const arr = []
// for(let i=0;i<=100;i++){
//   arr.push(Math.floor(Math.random()*100))
// }
// console.log(arr);



// // Дано некоторое число:12345 Выведите в консоль все его символы с конца.

// const num = 12345
// const str = String(num).split('').reverse().join('')
// console.log(str);

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите в консоль подмассивы из двух элементов нашего массива:[1, 2][3, 4][5, 6]

// const arr = [1, 2, 3, 4, 5, 6]
// const length = 2

// for(let i=0;i<arr.length;i+=length){
//  const newArr = arr.slice(i,i+length)
//  console.log(newArr);
// }


// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:

// [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let res = arr1.concat(arr2)
console.log(res);









}