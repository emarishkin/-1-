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

// const num = 34323;
// const str = num.toString(); // Преобразуем число в строку
// const digits = str.split(''); // Разбиваем строку на массив цифр

// const res = digits.reduce((acc, item, index) => {
//     // Исключаем первую и последнюю цифры числа
//     if (index !== 0 && index !== str.length - 1) {
//         if (item === '3') {
//             acc.push(index);
//         }
//     }
//     return acc;
// }, []);

// console.log(res); // [2] (индекс третьей цифры)




// Дан массив чисел [1, 2, 3, 4, 5]. Выведи каждый элемент, умноженный на 2.

// const arr = [1, 2, 3, 4, 5]
// const newArr = []
// const res = arr.forEach(el=>newArr.push(el*2))
// console.log(newArr)

// // Дан массив имен ["Аня", "Петя", "Маша"]. Выведи приветствие для каждого ("Привет, Аня!").

// const arr = ["Аня", "Петя", "Маша"]
// arr.forEach(item=>console.log(`Привет, ${item}`))


// Дан массив объектов пользователей [{name: "Аня", age: 25}, {name: "Петя", age: 30}]. Выведи только имена.
// const arr = [
//     {name: "Аня", age: 25},
//     {name: "Петя", age: 30}
// ]
// arr.forEach(item=>console.log(item.name))


// // Дан массив [1, 2, 3]. Создай новый массив, где каждый элемент увеличен на 10.
// const arr = [1, 2, 3]
// const newArr = arr.map((item)=>{
//     return item+10
// })
// console.log(newArr)


// // Дан массив строк ["apple", "banana", "cherry"]. Создай массив длин этих строк [5, 6, 6].

// const arr = ["apple", "banana", "cherry"]
// const newArr = arr.map(item=>{
//     return item.length
// })
// console.log(newArr)


// // Дан массив товаров [{name: "Laptop", price: 1000}, {name: "Phone", price: 500}]. Создай массив цен с НДС (20%).
// const arr = [{name: "Laptop", price: 1000}, {name: "Phone", price: 500}]
// const newArr = arr.map(item=>item.price*1.2)
// console.log(newArr)


// Дан массив [10, 20, 30, 40]. Оставь только числа больше 25.

// const arr = [10, 20, 30, 40]
// const newArr = arr.filter(item=>item>25)
// console.log(newArr)

// Дан массив строк ["cat", "dog", "elephant", "bird"]. Оставь только строки длиной ≤ 3.

// const arr = ["cat", "dog", "elephant", "bird"]
// const newArr = arr.filter(item=>item.length<=3)
// console.log(newArr)

// Дан массив пользователей [{name: "Аня", age: 17}, {name: "Петя", age: 25}]. Оставь только совершеннолетних.
// const arr = [{name: "Аня", age: 17}, {name: "Петя", age: 25}]
// const newArr = arr.filter(item=>item.age>17)
// console.log(newArr)


// Дан массив [5, 12, 8, 130]. Найди первый элемент больше 10.

// const arr = [5, 12, 8, 130]
// const findEl = arr.find(el=>el>10)
// console.log(findEl)

// Дан массив [{id: 1, name: "Аня"}, {id: 2, name: "Петя"}]. Найди объект с id = 2.

// const arr = [{id: 1, name: "Аня"}, {id: 2, name: "Петя"}]
// const findEl = arr.find(el=>el.id===2)
// console.log(findEl)

// Дан массив заказов [{id: 1, status: "shipped"}, {id: 2, status: "pending"}]. Найди индекс заказа со статусом "pending".
// const arr = [{id: 1, status: "shipped"}, {id: 2, status: "pending"}]
// const findEl = arr.findIndex(el=>el.status==='pending')
// console.log(findEl)


// // Дан массив [1, 2, 3, 4]. Проверь, есть ли хотя бы один четный элемент.
// const arr = [1, 2, 3, 4]
// const newArr = arr.some(el=>el%2===0)
// console.log(newArr)

// // Дан массив ["apple", "banana", "cherry"]. Проверь, все ли строки длиннее 3 символов.

// const arr = ["apple", "banana", "cherry"]
// const newArr = arr.every(el=>el.length>3)
// console.log(newArr)


// // Дан массив студентов [{name: "Аня", passed: true}, {name: "Петя", passed: false}]. Проверь, все ли сдали экзамен.
// const arr = [{name: "Аня", passed: true}, {name: "Петя", passed: false}]
// const newArr = arr.every(el=>el.passed===true)
// console.log(newArr)


// Дан массив [3, 1, 4, 2]. Отсортируй по возрастанию.

// const arr = [3, 1, 4, 2]
// arr.sort((a,b)=>a-b)
// console.log(arr)

// const arr = [3, 1, 4, 2]
// const newArr = arr.sort((a,b)=>a-b)
// console.log(newArr)

// Дан массив строк ["banana", "apple", "cherry"]. Отсортируй в алфавитном порядке.

//  const arr = ["banana", "apple", "cherry"]
//  arr.sort()
//  console.log(arr)


// // Дан массив объектов [{name: "Аня", age: 25}, {name: "Петя", age: 20}]. Отсортируй по возрасту.
//  const arr = [{name: "Аня", age: 25}, {name: "Петя", age: 20}]
//  arr.sort((a,b)=>a.age-b.age)
//  console.log(arr)


// 3. Средний уровень
// Задача: Создайте массив объектов, где каждый объект содержит исходную строку и её длину.
// Исходный массив:

    // const words = ['hello', 'world', 'javascript'];

    // const newWord = words.map((word)=>(
    //     {
    //         word:word,
    //         length:word.length
    //     }
    // ))
    // console.log(newWord) 

//     4. Средний/Сложный уровень
// Задача: Преобразуйте массив температур в градусах Цельсия в градусы Фаренгейта (формула: F = C * 9/5 + 32), округлив результат до целого.


// const celsiusTemps = [0, 25, 100, -10];

// const newTemps = celsiusTemps.map((temp)=>{
//     const www = Math.round(temp*9/5+32)
//     return www
// })
// console.log(newTemps) 
// const res = newTemps.map(item=>({
//     'температура':item
// }))
// console.log(res,'F') 



// 5. Сложный уровень
// Задача: Дан массив пользователей. Создайте массив строк вида "Name: [name], Age: [age]", но только для пользователей старше 18 лет.

// const users = [
//   { id: 1, name: 'Alice', age: 17 },
//   { id: 2, name: 'Bob', age: 21 },
//   { id: 3, name: 'Charlie', age: 15 },
//   { id: 4, name: 'David', age: 25 }
// ];

// const newUsers = users.filter(item=>item.age>18).map(el=>`name:${el.name},age:${el.age}`)
// console.log(newUsers) 


// Бонус (Очень сложный)
// Задача: Преобразуйте массив чисел в массив объектов,
//  где каждый объект содержит число, его квадрат и признак четности.
// const nums = [1, 2, 3, 4];
// const newArr = nums.map((num)=>({
//     num:num,
//     'квадрат':num*num,
//     'четное':num%2===0
// }))
// console.log(newArr) 



// const products = [
//   { id: 1, name: 'Ноутбук', price: 45000, inStock: true, category: 'electronics' },
//   { id: 2, name: 'Мышка', price: 1200, inStock: false, category: 'electronics' },
//   { id: 3, name: 'Книга', price: 500, inStock: true, category: 'books' },
//   { id: 4, name: 'Футболка', price: 800, inStock: true, category: 'clothes' },
//   { id: 5, name: 'Наушники', price: 7000, inStock: true, category: 'electronics' }
// ];

// const result = products
// .filter(el=>el.inStock)
// .map((product)=>({
//     ...product,
//     formattedPrice:product.price.toLocaleString('ru-RU') + ' ₽',
//     category:product.category==='electronics'?`⚡ ${product.category}`:product.category,
//     isExpensive:product.price>5000
// }))
// console.log(result) 


// Объединить два массива чисел
// Добавить элемент в конец массива
// Объединить три массива
// Создать новый массив на основе существующего с добавлением элементов
// Объединить массив с другим массивом и дополнительными элементами

// 1,2
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const res = arr1.concat(arr2)
// res.push(1)
// console.log(res) 

// 3
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const res = arr1.concat(arr2,arr3)
// console.log(res) 

// // 4
// const arr1 = [1, 2];
// const newArr = arr1.concat([3,4])
// console.log(newArr) 



// // Объединить массив с другим массивом и дополнительными элементами
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const res = arr1.concat(arr2,5,6)
// console.log(res) 


// Проверить, есть ли число 5 в массиве
// Проверить,есть ли строка "apple" в массиве
// Проверить наличие элемента перед его добавлением
// Проверить, содержит ли массив хотя бы один из элементов другого массива
// Проверить наличие элемента в массиве объектов (по простому значению)

// const arr = [4,4,5,56,6,6]
// const res = arr.includes(5)
// console.log(res) 


// // Проверить наличие элемента перед его добавлением
// const arr = [4,5,56,6,6]
// const poisk = 4

// if(!arr.includes(poisk)){
//   arr.push(poisk)
// }
// console.log(arr) 

// // Проверить, содержит ли массив хотя бы один из элементов другого массива
// const arr1 = [4,5,5]
// const arr2 = [4,9,9]

// const res1 = arr1.some(item=>arr2.includes(item))
// const res2 = arr1.find(item=>arr2.includes(item))
// const res3 = arr1.every(item=>arr2.includes(item))
// const res4 = arr1.filter(item=>arr2.includes(item))
// console.log(res) 








}
