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

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = arr1.concat(arr2)
// console.log(res);


// Дана некоторая строка. Найдите позицию первого нуля в строке.

// const str = '1012345'
// console.log(str[0])
// console.log(str.indexOf('0'))

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.?

// const result = []

// for(let i =10;i<=1000;i++){
//   const q=i.toString()
//   if(Number(q[0])+Number(q[1])===5){
//     result.push(Number(q))
//   }
// }
// let sum = 0
// for(let j =0;j<result.length;j++){
//    sum += result[j]
// }
// console.log(sum)


// const result = [];

// for (let i = 10; i <= 1000; i++) {
//   const str = i.toString();
//   if (Number(str[0]) + Number(str[1]) === 5) {
//     result.push(i);
//   }
// }

// const sum = result.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 3880

// // Дан массив. Удалите из него элементы с заданным значением.

// const arr = [2,4,4,3,6]

// let removeItem = 2

// const newqq = arr.filter(item=>item!=removeItem)
// console.log(newqq)



// Дан некоторый массив, например, вот такой[1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.

// const arr = [1, 2, 3, 4, 5, 6]
// let middle = Math.floor(arr.length/2)
// let sum = 0
// for(let i=0;i<middle;i++){
//   sum+=arr[i]
// }
// console.log(sum)


// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

// const arr = [1, 2, 3, 4, 5, 6]
// let polovina = Math.floor(arr.length/2)
// let sum = 0
// for (let i=0;i<polovina;i++){
//   sum +=arr[i]
// }
// console.log(sum)


// // Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

// const arr = [1,1,2,2,3,-2,0,-11]
// let newArr = []
// arr.filter(item=>item<0?newArr.push(item):'')
// console.log(newArr)
// console.log(newArr.length)


// // Дан массив с числами. Оставьте в нем только положительные числа.

// const arr =  [1,1,2,2,3,-2,0,-11]

// const newArr = arr.filter(item=>item>0)
// console.log(newArr)


// // Дана строка. Удалите предпоследний символ из этой строки.

// const str = 'qwerty'

// const newStr = str.split('')
// const remove = newStr.splice(-2,1)
// console.log(remove)
// console.log(newStr)
// newStr.join()
// console.log(newStr)



// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// const arr = [1, 2, 3, 4, 5, 6 , 2]

// let middle = Math.floor(arr.length/2)

// let first = 0
// let second = 0
// for(let i=0;i<middle;i++){
//   first +=arr[i] 
// }
// for(let j=middle;j<arr.length;j++){
//   second +=arr[j] 
// }
// let sum = first/second
// console.log(sum)



// const arr = [1, 2, 3, 4, 5, 6]

// const first = arr.slice(0,3).reduce((sum,a)=>sum+a,0)
// const second = arr.slice(3).reduce((sum,a)=>sum+a,0)

// let sum = first/second
// console.log(sum)


// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

// const str1 = 'Марик'
// const str2 = 'Комарик'

// const newStr1 = str1.toLowerCase().slice(-1)
// const newStr2 = str2.toLowerCase().charAt(0)

// let q = false
// if(newStr1===newStr2){
//    q = true
  
// }
// console.log(q )


// Дана некоторая строка. Найдите позицию третьего нуля в строке.

// const str = '1304055505500'

// const arr = str.split('')

// let count = 0
// for(let i=0;i<arr.length;i++){
//  if(arr[i]==='0'){
//   count++
//    if(count===3){
//     console.log(i)
//     break
//    }
//  }
// }



// // Даны числа, разделенные запятыми:'12,34,56'Найдите сумму этих чисел.
// const str = '12,34,56'
// const arr = str.split(',').map(Number).reduce((sum,a)=>sum+a,0)
// console.log(arr)
// // 12+34+56=102


// const first = Number(str.slice(0,2))
// const second = Number(str.slice(3,5))
// const third = Number(str.slice(6))
// const res = first+second+third
// console.log(res)

// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }


// const str =  '2025-12-31'

// const arr = str.split('-')

// const obj = {
//   year:arr[0],
//   month:arr[1],
//   day:arr[2]
// }


// console.log(obj)


// // Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

// const str = 'fff1h2g312g31g4'

// const arr = str.split('')

// for (let i=0;i<arr.length;i++){
//   if(parseInt(arr[i])){
//     console.log(i)
//     break
//   }
// }


// // Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.


// const obj = {
//   key1:'value1',
//   key2:'value2',
//   key3:'value3',
//   key4:'value4',
// }

// const keys = Object.keys(obj)
// const values = Object.values(obj)


// console.log(keys)
// console.log(values)
// .map(Number).reduce((sum,a)=>sum+a,0)

// Дано число. Выведите в консоль количество четных цифр в этом числе.

  // const num = 123123148
  // const str = num.toString().split('').filter(item=>item%2===0)
  // console.log(str.length)


// Дана некоторая строка:

// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

// 'AbCdE'


// const str = 'abcde'

// const result = str.split('')

// for (let i=0;i<result.length;i++){
//   if(i%2===0){
//     result[i] = result[i].toUpperCase()
    
//   }
// }
// console.log(result)




// Дана некоторая строка со словами:

// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

// 'Aaa Bbb Ccc'



// const res = str.split(' ')

// for (let i=0;i<res.length;i++){
// res[i]=res[i].charAt(0).toUpperCase()+ res[i].slice(1);
// }
// const result = res.join(' ')

// console.log(result)



// const str = 'aaa bbb ccc'

// const result = str.split(' ').map(item=>item.charAt(0).toUpperCase()+ item.slice(1))
// console.log(result)



// // Дана некоторая строка, например, вот такая:

// // '023m0df0dfg0'
// // Получите массив позиций всех нулей в этой в строке.

// const str = '023m0df0dfg0'

// const res = []

// for (let i=0;i<str.length;i++){
//   if(str[i]==='0'){
//     res.push(i)
//   }
// }
// console.log(res)


// // Дана некоторая строка:

// // 'abcdefg'
// // Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:

// // 'abdeg'

// const str = 'abcdefg'
// let res =''
// const result = str.split('').filter((_,index)=>(index+1)%3!==0).join('')

// // for (let i=0;i<str.length;i++){
// //   if((i+1)%3!==0){
// //    res+=str[i]
// //   }
// // }

// console.log(result)


// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// const arr = [1, 2, 3, 4, 5, 6]

// const arr1 = arr.filter((_,index)=>index%2==0).reduce((sum,el)=>sum+el,0)
// const arr2 = arr.filter((_,index)=>index%2==1).reduce((sum,el)=>sum+el,0)



// const res = arr2/arr1
// console.log(res)



// // Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

// const str = 'u1igb1yh23g1y2312'
// const res = []

// for(let i=0;i<str.length;i++){
//   if(parseInt(str[i])){
//     res.push(i)
//   }
// }

// console.log(res)




// // Дан массив с некоторыми числами, например, вот такой:

// // [123, 456, 789]
// // Напишите код, который перевернет числа в этом массиве по следующему принципу:

// // [321, 654, 987]


// const arr =  [123, 456, 789]

// const res = arr.map(item=>Number(item.toString().split('').reverse().join('')))
// console.log(res)



// Дана некоторая строка с числом:

// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// '1 234 567'


// const str = '1234567'
// let result = ''
// let count = 0
// for (let i=str.length-1;i>=0;i--){
//   result= str[i] +result
//   count++
//   if(count%3===0  ){
//     result = ' ' +result
//   }
// }
// console.log(result); 


// // Дана некоторая строка:

// // 'AbCdE'
// // Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

// // 'aBcDe'


// const str = 'AbCdE'
// const result = str.split('').map(item=>item===  item.toUpperCase()?item.toLowerCase():item.toUpperCase()).join('')

// console.log(result);



// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:

// 'aaa Bbb ccc Eee fff'




// const str = 'aaa bbb ccc eee fff'

// const result = str.split(' ').map((e,index)=>(index+1)%2===0?e.charAt(0).toUpperCase()+str.slice(1,3):e).join(' ')

// console.log(result);




// Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'

// const str = 'a bc def ghij'
// let result = str.split(' ')
// let res = []
// for(let i=0;i<result.length;i++){
//   if(result[i].length<=3){
//     res.push(result[i].toUpperCase())
//   }else{
//     res.push(result[i])
//   }
// }
// console.log(res);



//  const str = 'a bc def ghij'
//  const res = str.split(' ').map(item=>item.length<=3?item.toUpperCase():item).join(' ')
//  console.log(res);



// // Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

// const str = 'вЫ'

// const res = str.split('').map(item=>item===item.toUpperCase()?'верхний регистр':'нижний регистр')
// console.log(res);



// // Дано некоторое число, например, такое:

// // 123789
// // Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

// // 28

// const num = 123789
// const res = num.toString().split('').filter(item=>item%2===0).map(Number).join('')
// console.log(res);





// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

// const str = 'jdEjfdjkk'
// let count = 0

// for(let i=0;i<str.length;i++){
//   if(str[i]===str[i].toUpperCase() && str[i]!==str[i].toLowerCase()){
//     count++
//     if(count>2)break
//   }
// }
// console.log(count<=2?'норм':'не норм');


// const str = 'jdEEEjfdjkk'
// const res = str.split('').filter(item=>item===item.toUpperCase())
// console.log(res.length<=2?'норм':'не норм');




// Дана некоторая строка:

// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:

// '1 22 333 22 1'


// const str = '1 22 333 4444 22 5555 1'
// const res = str.split(' ').filter(item=>item.length<4).join(' ')
// console.log(res);




// // Даны два массива:
// // let arr1 = [1, 2, 3];
// // let arr2 = ['a', 'b', 'c'];
// // Слейте эти массивы в новый массив следующим образом:
// // [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];

// const res = [...arr1.slice(0,2),...arr2,...arr1.slice(2)]

// console.log(res);

 


// // Дано некоторое число:
// // 123456
// // Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// // 12 + 34 + 56


// const num = 123456

// const res = num.toString()
// let sum = 0
// for(let i=0;i<res.length;i+=2){
//   let para = res.slice(i,i+2)
//   sum += parseInt(para, 10);
//   console.log(para)  
// }

// console.log(sum);


// // Дан массив с числами:

// // [1, 2, 3, 4, 5]
// // Выведите в консоль элементы этого массива в обратном порядке.


// const arr = [1, 2, 3, 4, 5]

// const res = arr.reverse()
// console.log(res);


// // Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// const str = 'bSS3423gb2'
// const res = str.split('').filter(item=>/[a-z,A-Z]/.test(item)).length
// console.log(res<=3?'норм':'не норм')



// // Дано число. Получите первую четную цифру с конца этого числа.


// const num = 822392389

// const str = num.toString()

// for(let i=str.length-1;i>=0;i--){
//   if(str[i]%2===0){
//     console.log(Number(str[i]))
//     break
//   }
// }


// // Дана некоторая строка:
// // 'abcde abcde abcde'
// // Замените в ней первый символ каждого слова на '!':
// // '!bcde !bcde !bcde'

// const str = 'abcde abcde abcde'
// const res = str.split(' ').map(item=>'!'+item.slice(1)).join(' ')
// console.log(res);



// // Дан массив с числами:
// // [1, 2, 3, 3, 4, 5]
// // Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// const arr = [1, 2, 3, 3, 4, 5]

// for(let i=0;i<arr.length;i++){
//   if(arr[i]===arr[i+1]){
//     console.log(arr[i])
//   }
// }




// // Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// const num = 123456

// const str = num.toString()
// let isTrue = true
// for(let i=0;i<str.length;i++){
//   if(str[i]>str[i+1]){
//     isTrue = false
//   } 
// }
// console.log(isTrue?'норм':'не норм')



// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.


// const arr = [1, '', 2, 3, '', 5]
// const res = arr.filter(item=>item!=='')

// console.log(res)





// // Дан массив:

// // [
// // 	[2, 1, 4, 3, 5],
// // 	[3, 5, 2, 4, 1],
// // 	[4, 3, 1, 5, 2],
// // ]
// // Отсортируйте элементы в каждом подмассиве.


// const arr = [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]

// const res = arr.map(item=>item.sort((a,b)=>a-b))
// console.log(res)



// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.


// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];

// const minLenght = Math.min(arr1.length,arr2.length)

// const newArr1 = arr1.slice(0,minLenght)
// const newArr2 = arr2.slice(0,minLenght)

//  console.log(newArr1)
//  console.log(newArr2)




// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
// for(let i=10;i<1001;i++){
//   if(i.toString().at(-2)%2===0){
//     console.log(i)
//   }
// }



// // Дан массив. Удалите из него каждый пятый элемент.
// // const res = arr.filter((_,index)=>(index+1)%5!==0)

// const arr = ['e','e','r','t','b','s','v','w','s','v','w']
// let newArr = []
// for(let i=0;i<arr.length;i++){
//   if((i+1)%5!==0){
//    newArr.push(arr[i])
//   }
// }
// console.log(newArr)


// // Дана некоторая переменная с числом:
// // let num = 5;
// // Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// // '00000'

// let num = 7 
// let str = ''
// for(let i=0;i<num;i++){
//   str+='0'
// }
// console.log(str)



// // Дана некоторая строка со словами:
// // 'aaa bbb ccc eee fff'
// // Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// // 'aaa ccc fff'

// const str = 'aaa bbb ccc eee fff'
// const res = str.split(' ').reduce((acc,item,index)=>{
//   if((index+1)%2!==0) acc.push(item)
//     return acc
// },[])
// console.log(res)


// const str = 'aaa bbb ccc eee fff'
// const res = str.split(' ').filter((_,index)=>(index+1)%2!==0)
// console.log(res)



// // Дан массив:
// // [
// // 	[1, 2, 3],
// // 	[4, 5, 6],
// // 	[7, 8, 9],
// // ]
// // Найдите сумму элементов этого массива.

// const arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

// const res = arr.reduce((sum,a)=>sum+a.reduce((sumArr,b)=>sumArr+b,0),0)
// console.log(res)



// // Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

// const arr = ['efwef','wefwefw','efwefwef','ee','ddd']
// const res = arr.filter(item=>item.length<4)
// console.log(res)

  //  const arr = ['efwef','wefwefw','efwefwef','ee','ddd']

  //  let res = arr.reduce((acc,a)=>{
  //   if(a.length<=3){
  //     acc.push(a)
  //   }
  //   return acc
  //  },[])
 
  // console.log(res)



//Дано некоторое число:
// 1357
// Проверьте, что все цифры этого числа являются нечетными.

// const num = 1557

// const res = num.toString()
// let isChet = true

// for (let i=0;i<res.length;i++){
//   if(res[i]%2===0){
//     isChet = false
//   } 
// }
// console.log(isChet?'чет':'нечет')




// // Дано некоторое слово:
// // 'abcba'
// // Проверьте, что это слово читается одинаково с любой стороны.

// const str = 'abcba'

// const res = str === str.split('').reverse().join('')
// console.log(res?'да':'нет')


// // Дан массив:

// // [
// // 	[
// // 		[11, 12, 13],
// // 		[14, 15, 16],
// // 		[17, 17, 19],
// // 	],
// // 	[
// // 		[21, 22, 23],
// // 		[24, 25, 26],
// // 		[27, 27, 29],
// // 	],
// // 	[
// // 		[31, 32, 33],
// // 		[34, 35, 36],
// // 		[37, 37, 39],
// // 	],
// // ]
// // Найдите сумму элементов этого массива.

// const arr = [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]

// const res = arr.reduce((sum,a)=>sum+a.reduce((subSum,b)=>subSum+b.reduce((subSubSum,c)=>subSubSum+c,0),0),0)
// const sum = arr.flat(2).reduce((a, b) => a + b, 0);
// console.log(res)




// // Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

// let str = ''
// for(let i=10;i<=1000;i++){
//   if(i.toString().charAt(0)%2===0){
//    console.log(i)
//   }
// }


// // Дан некоторый массив, например, вот такой:
// // [1, 2, 3, 4, 5, 6]
// // Поменяйте местами пары элементов этого массива:
// // [2, 1, 4, 3, 6, 5]


// const arr = [1, 2, 3, 4, 5, 6]

// const newArr = []

// for(let i=0;i<arr.length;i+=2){
//   if(i+1<arr.length){
//     newArr.push(arr[i+1],arr[i])
//   }
// }
// console.log(newArr)



// let obj = {
//   1: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   2: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   3: {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// };

// let sum = 0;

// for (let key1 in obj){
//   const innerObj = obj[key1]
//   for (let key2 in innerObj){
//     sum+=innerObj[key2]
//   }
// }
// console.log(sum)


// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

// const str = 'qwweqwe rgerger aefe wefwef aefefe'
// const words = str.split(' ')
// const arr = []

// for(let i=0;i<words.length;i++){
// if(words[i].charAt(0)==='a'){
//   arr.push(words[i])
// }
// }
// console.log(arr)

// const str = 'qwweqwe rgerger aefe wefwef aefefe'

// const res = str.split(' ').filter(item=>item.charAt()==='a')
// console.log(res)



// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

// const arr = [4,54,3,4,34,53,453,55]

// const res = arr.filter(item=>item%5===0)
// console.log(res)


// const arr = [4,54,3,4,34,53,453,55]
// let newArr = []
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%5===0){
//     newArr.push(arr[i])
//   }
// }
// console.log(newArr)


// const arr = [4,54,3,4,34,53,453,55,5,125]

// const res = arr.reduce((acc,item)=>{
//   if(item%5===0){
//     return acc+item
//   }
//   return acc
// },0)
// console.log(res)



// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

// const res = arr.reduce((acc,item)=>{
//   if(item.toString().includes('0')){
//     acc.push(item)
//   }
//   return acc
// },[])
// console.log(res)


// const arr = [4,504,3,4,304,53,4503,55,5,125]
// const res = arr.filter((item)=>item.toString().includes('0'))
// console.log(res)



// // Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

// const arr = [4,504,3,4,304,53,4503,55,5,125]
// const res = arr.filter(item=>item.toString().includes('3'))
// console.log(res)

// const arr = [4,504,3,4,304,53,4503,55,5,125]
// const res = arr.reduce((acc,item)=>{
//   if(item.toString().includes('3')){
//     acc.push(item)
//   }
//   return acc
// },[])
// console.log(res)




// Дано некоторое число:

// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

// 12345

// const num = 35142
// const res = num.toString().split('').sort().map(Number).join('')
// console.log(res)



// Напишите программу, которая сформирует следующую строку:
// '-1-2-3-4-5-'


const arr = [1,2,3,4,5]
const res = '-'+arr.join('-')+'-'
console.log(res)


















}
