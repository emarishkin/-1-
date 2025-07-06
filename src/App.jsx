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



// // Извлечь часть массива, начиная с определенного индекса до конца
// const arr = [4,5,5,4,312,423,2,3,3,2,34,234]
// const res = arr.slice(-2)
// console.log(res) 


// Напишите функцию groupBy(arr, prop), которая группирует элементы массива объектов по значению указанного свойства.

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 25 },
//   { id: 4, name: 'Dave', age: 30 }
// ];
// function groupBy(arr, prop){
// return arr.reduce((acc,obj)=>{
// const key = obj[prop]
// if(!acc[key]){
//   acc[key]=[]
// }
// acc[key].push(obj)
// return acc
// },{})
// }

// console.log(groupBy(users, 'age'));


// // Получить массив имен только активных пользователей (isActive: true),
// //  отсортированных по возрасту (от меньшего к большему).
// const users = [
//   { id: 1, name: "Alice", age: 25, isActive: true },
//   { id: 2, name: "Bob", age: 30, isActive: false },
//   { id: 3, name: "Charlie", age: 22, isActive: true },
//   { id: 4, name: "David", age: 28, isActive: false },
// ];
// const res = [...users].filter(user=>user.isActive).sort((a,b)=>a.age-b.age).map(el=>el.name)
// console.log(res) 




// // Найти общую стоимость всех заказов (price * quantity).
// // Получить массив продуктов, у которых цена больше 100.
// // Ожидаемый результат:
// const orders = [
//   { id: 1, product: "Laptop", price: 1000, quantity: 2 },
//   { id: 2, product: "Mouse", price: 20, quantity: 5 },
//   { id: 3, product: "Keyboard", price: 50, quantity: 1 },
//   { id: 4, product: "Monitor", price: 300, quantity: 1 },
// ];

// const fullPrice = orders.map(item=>{
//   const fullprice = item.price*item.quantity
//   return fullprice
// }).reduce((acc,item)=>acc+item)
// console.log(`Общая стоимость: ${fullPrice}`)

// const newArr = orders.filter(item => item.price>100).map(el=>el.product)
// console.log(`Дорогие продукты: ${newArr.join(', ')}`)



// // Удалить дубликаты и преобразовать в массив уникальных тегов.
// // Посчитать количество повторений каждого тега.

// const tags = ["javascript", "react", "javascript", "node", "react", "vue"];

// const del = tags.reduce((acc,item)=>{
//  if(!acc.includes(item)){
//   acc.push(item)
//  }
//  return acc
// },[])
// console.log(del) 

// const countTags = tags.reduce((acc,item)=>{
//   acc[item] = (acc[item] || 0)+1
//   return acc
// },{})
// console.log(countTags) 


// Рассчитать средний балл каждого студента.
// Отсортировать студентов по среднему баллу (от большего к меньшему).
// Найти студента с самым высоким средним баллом.
// const students = [
//   { name: "Alex", grades: [90, 85, 92] },
//   { name: "Maria", grades: [78, 85, 80] },
//   { name: "John", grades: [88, 91, 89] },
// ];

// const result = students.map((item)=>({
//   name:item.name,
//   newAverangeGrades:parseFloat(item.grades.reduce((acc,el)=>(acc+el),0)/item.grades.length).toFixed(1)
// }))
// const sortirovka = [...result].sort((a,b)=>a.newAverangeGrades-b.newAverangeGrades)
// const bestStudent = [...result].reduce((top,e)=>parseFloat(e.newAverangeGrades)>parseFloat(top.newAverangeGrades)
// ?e
// :top
// )
// console.log(sortirovka) 
// console.log(bestStudent) 


// let sum = 0
// for (let student of students){
//   for(let grade of student.grades){
//     sum+=grade
//   }
//   const avar = sum/student.grades.length
//   console.log(`${student.name}: средний балл ${avar.toFixed(1)}`);
// }


// Найти категорию, в которой есть товар с id = 202.
// Получить массив всех товаров дороже 500.
// Посчитать общую стоимость всех товаров во всех категориях.

// const categories = [
//   {
//     id: 1,
//     name: "Electronics",
//     products: [
//       { id: 101, name: "Laptop", price: 1000 },
//       { id: 102, name: "Phone", price: 800 },
//     ],
//   },
//   {
//     id: 2,
//     name: "Clothing",
//     products: [
//       { id: 201, name: "T-Shirt", price: 20 },
//       { id: 202, name: "Jeans", price: 50 },
//     ],
//   },
// ];
// const result = categories.filter(item=>item.products.some(el=>el.id===202))
// const result2 = categories.map(categorie=>categorie.products.filter(item=>item.price>500)).flat()
// const result3 = categories.map(categorie=>categorie.products.reduce((acc,price)=>acc+price.price,0))
// const finaly = result3.reduce((acc,item)=>acc+item,0)
// console.log(result) 
// console.log(result2) 
// console.log(finaly) 
// const newResult = categories.flatMap(item=>item.products)
// console.log(newResult) 



// const categories = [
//   {
//     id: 1,
//     name: "Electronics",
//     products: [
//       { id: 101, name: "Laptop", price: 1000 },
//       { id: 102, name: "Phone", price: 800 },
//     ],
//   },
//   {
//     id: 2,
//     name: "Clothing",
//     products: [
//       { id: 201, name: "T-Shirt", price: 20 },
//       { id: 202, name: "Jeans", price: 50 },
//     ],
//   },
// ];
// const newResult = categories.flatMap(item=>item.products)
// console.log(newResult)




// Сгруппировать события по дате.
// const events = [
//   { id: 1, title: "Meeting", date: "2023-10-10", participants: ["Alice", "Bob"] },
//   { id: 2, title: "Conference", date: "2023-10-11", participants: ["Charlie", "David"] },
//   { id: 3, title: "Workshop", date: "2023-10-10", participants: ["Alice", "Eve"] },
// ];

// const result1 = events.reduce((acc,item)=>{
//   const data = item.date
//   if(!acc[data]){
//     acc[data] = []
//   }
//   acc[data].push(item)
//   return acc
// },{})
// console.log(result1)

// const result2 = Object.groupBy(events,event=>event.date)
// console.log(result2)



// const result = events.reduce((acc,item)=>{
//  const date = item.date
//  if(!acc[date]){
//   acc[date]=[]
//  }
//  item.participants.forEach(el=>{
//   if(!acc[date].includes(el)){
//     acc[date].push(el)
//   }
//  })
//  return acc
// },{})
// console.log(result)

// const result2 = Object.fromEntries(Object.entries(result).map(([date, participants]) => [date, participants.length]))
// console.log(result2)


// const result = events.filter(item=>item.participants.includes('Alice')).map(el=>el.title)
// console.log(result)


// Создание объекта
// Создай объект user с полями: name (строка), age (число), isAdmin (булево).

// const obj = new Object({
//   name:'efwe',
//   age:12,
//   isAdmin:true
// })
// console.log(obj)




// Выведи в консоль model и year этого объекта.
// const car = { brand: "Toyota", model: "Camry", year: 2020 };
// car.toplivo= 'дизель'
// car['school']= 10
// console.log(car.model,car.year,car.toplivo,car['school'])

// const car = { brand: "Toyota", model: "Camry", year: 2020 };
// const newKey = 'weigt'
// car[newKey] = 2
// console.log(car['weigt'])


// Изменение свойств
// У объекта car из предыдущей задачи измени year на 2022 и добавь новое свойство color со значением "black".
// const car = { brand: "Toyota", model: "Camry", year: 2020 };
// car.year=2022
// car.color = 'black'



// Методы объекта
// Создай объект calculator с методами:
// sum() – возвращает сумму двух чисел,
// mul() – возвращает произведение двух чисел.

// const calculator = {
//   sum:(a,b)=>{
//     return a+b
//   },
//   mul:(a,b)=>{
//     return a*b
//   }
// }
// console.log(calculator.sum(2,3))
// console.log(calculator.mul(2,3))



// Динамические ключи
// Напиши функцию addKeyValue(obj, key, value), которая добавляет в объект obj новый ключ key со значением value.

// function addKeyValue(obj, key, value){
// return obj[key] = value
// }
// const obj = {}
// console.log(addKeyValue(obj,'s',12))

// function addKeyValue(obj,key,value){
//   return {...obj,[key]:value}
// }
// console.log(addKeyValue({},'num',12))


// // Проверка свойства
// // Напиши функцию hasProperty(obj, prop), которая возвращает true, если свойство prop есть в объекте obj, и false – если нет.

// const obj ={
//   ww:12
// }

// function hasProperty(obj, prop){
//   return prop in obj
// }
// console.log(hasProperty(obj,'ww'))


// Методы и this
// Создай объект person с полями name и age, а также методом introduce(), который выводит в консоль:
// "Меня зовут [name], мне [age] лет."


// const person = {
//   name:'egor',
//   age:12,
//   introduce(){
//     console.log(`меня зовут ${this.name}, мне ${this.age} лет`)
//   }
// }
// person.introduce()

// const fruits = { apple: 5, banana: 3, orange: 8 };

// // Object.keys(fruits).forEach(item=>{
// //   console.log({[item]:fruits[item]})
// // })

// Object.keys(fruits).map(item=>{
//   console.log(`'${item}: ${fruits[item]}'`)
// })


// function checkAge(age) {
//   age > 18?  true: confirm('Родители разрешили?');
   
// }
// console.log(checkAge(12))


// function minCalc(a,b){
//   const num = Math.min(a,b)
//   return num
// }
// console.log(minCalc(-1,4))


// function stepen(){
//   const x = prompt('введите число','')
//   const n = prompt('введите степень','')
//   const res = x**n
//   return res
// }
// console.log(stepen())

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//    else no()
// }
// console.log(
//   ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// )
// )

// let schedule = {name:'efwf'};
// function isEmpty(obj){
//   for (let key in obj){
//     return false
//   }
//   return true
// }
// alert( isEmpty(schedule) )

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0
// for (let key in salaries){
//   sum+=salaries[key]
// }
// alert(sum )


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// let sum = 0
// for(let key in menu){
//   if(typeof menu[key]=='number'){
//     sum+=menu[key]
//   }
// }
// alert(sum )

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }
// const result = Object.assign(menu,salaries)
// console.log(result)
// console.log(salaries)

// }



// let calculator = {
  
//   read(){
//      this.a = Number(prompt('ввод 1 числа',''))
//      this.b = Number(prompt('ввод 2 числа',''))
//   },
//   sum(){
//     return this.a+this.b
//   },
//   mul(){
//     return this.a*this.b
//   }
// };

// calculator.read()
// alert( calculator.sum() )
// alert( calculator.mul() )


// const obj = {
//   name: 'Test',
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   }
// };
// obj.greet();


// function BigUser() {

//   this.name = "John";
//   return this.name

// }
// alert( new BigUser().name ); 


// function A(name) {
// this.name = name
// }
// function B(name) {
//   this.name = name
// }
// let a = new A('igor');
// let b = new B('igor');
// console.log(a.name==b.name)



// function Calculator(a,b){
//   this.a = a
//   this.b = b
//   this.sum = function(){
//     return this.a+this.b
//   }
//   this.mul = function(){
//     return this.a*this.b
//   }
// }
// let res = new Calculator(6,6)
// console.log(res.sum())
// console.log(res.mul())


// const  animal = {
//     name:'animal',
//     age:5,
//     hasTail:true
// }
// class Animal {
//     constructor(prop){
//       this.name=prop.name
//       this.age=prop.age
//       this.finalOld=prop.finalOld
//       this.hasTail=prop.hasTail
//     }
//     sum() {
//         return this.finalOld-this.age
//     }
 
// }

// class Dog extends Animal{
//   constructor(prop){
//     super(prop)
//     this.color=prop.color
//   }

//   get updateAge(){
//     return this.age * 5
//   }

//   set updateAge(newAge){
//     this.age=newAge
//   }

// }

// const dog =new Dog({
//     name:'qwerty',
//     age:21,
//     hasTail:false,
//     color:'white',
//     finalOld:60
// })


// console.log(dog.updateAge=15)
// console.log(dog.updateAge)

// //1
// class Rectangle {
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
    
//      area(){
//         return console.log(`Площадь прямоугольника равна ${this.width*this.height}`)
//     }
//     perimeter(){
//         return console.log(`Периметр прямоугольника равен ${(this.width*2)+(this.height*2)}`)
//     }

// }
// const result = new Rectangle(10,20)
// result.area()

// //2
// class User {
//     constructor(name){
//         this.name = name
//     }
//     sayHello(){
//         return console.log(`Привет ${this.name}`)
//     }
// } 
// const user = new User("Маша");
// user.sayHello()

// //3
// class Counter {
//     constructor(){
//         this.count = 0
//     }
//     increment(){
//       return this.count++
//     }
//     reset(){
//       return this.count = 0
//     }
// }
// const counter = new Counter();
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.reset())


// //Уровень 2
// //Задание 1

// class Animal {
//     constructor(name){
//       this.name = name
//     }
//     makeSound(){
//         console.log("Животное издаёт звук")
//     }
// }
// class Dog extends Animal {
//     makeSound(){
//         console.log("Собака лает")
//     }
//     fetch(){
//         console.log("Собака приносит палку")
//     }
// }
// const dog = new Dog("Шарик");
// console.log(dog.name)
// dog.makeSound(); 
// dog.fetch();  

// //Задание 2

// class Product {
//     constructor(name,price){
//         this.name = name
//         this.price = price
//     }
//     get priceWithTax(){
//         return this.price*1.2
//     }
//     set Price(value){
//        if(value>0){
//         return this.price
//        } 
//        return null
//     }
// }
// const p = new Product("Телефон", 1000);
// console.log(p.priceWithTax); // 1200
// p.value = -100; // игнорируется
// console.log(p.price); // 1000


// class Person {
//     constructor(name,age){
//         this.name = name
//         this._age = age
//     }
//     get age(){
//         return this._age
//     }
//     set age(value){
//       if(value>0){
//         return this._age=value
//       }
//     }
// }
// const p = new Person("Аня", 25)
// console.log(p.age);
// p.age = 27
// console.log(p.age);



// class BankAccount {
//     constructor(name,balance){
//       this.name = name
//       this._balance = balance
//     }
//     get balance(){
//         return this._balance
//     }
//     set balance(value){
//         if(value>0){
//             this._balance=value
//         }
//     }
//     deposit(amount){
//         if(amount>0){
//             this._balance+=amount
//         }
//     }
//     withdraw(amount){
//         if(amount>=this._balance){
//             console.log('не хватает средств')
//         } else {
//             this._balance-=amount
//         }
//     }
// }
// const acc = new BankAccount("Игорь", 1000);
// console.log(acc.balance); 

// acc.deposit(500);
// console.log(acc.balance);

// acc.withdraw(250); 
// console.log(acc.balance); 



// class TemperatureConverter {
//     static toCelsius(fahrenheit){
//         return (fahrenheit-32) * 5/9
//     }
//      static toFahrenheit(celsius){
//         return (celsius * 9/5) +32
//     }
// }
// console.log(TemperatureConverter.toCelsius(212));   
// console.log(TemperatureConverter.toFahrenheit(0)); 


// class User {
//     static instanceCount = 0;

//     constructor(name){
//       this.name = name
//       this.constructor.instanceCount++
//     }
//     static getInstanceCount() {
//       return this.instanceCount
//     }
// }
// const u1 = new User("Аня");
// const u2 = new User("Макс");

// console.log(User.getInstanceCount())


// class User {
//     static instanceCount = 0
//     constructor(name){
//         this.name = name
//         User.instanceCount++
//     }
//     static getInstanceCount(){
//         return this.instanceCount
//     }
// }
// class Admin extends User {
//     static instanceCount = 0
//     constructor(name){
//         super(name)
//         Admin.instanceCount++
//     }
//     static getInstanceCount(){
//         return this.instanceCount
//     }
// }


// const u1 = new User("Маша");
// const u2 = new User("Игорь");

// const a1 = new Admin("Антон");
// const a2 = new Admin("Оля");

// console.log(User.getInstanceCount());  
// console.log(Admin.getInstanceCount()); 



// class Vehicle {
//     move() {
//         console.log("Транспорт движется");
//     }
// }
// class Car extends Vehicle {
//     move() {
//         super.move()
//         console.log("Машина едет");
//     }
// }



// function delay(ms){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve()
//       },2000)
//     })
// }
// delay(2000).then(() => console.log("Прошло 2 секунды"));


// function delay(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve()
//         },ms)
//     })
// }
// delay(1000)
// .then(() => {
//     console.log("Прошла 1 секунда")
//     return delay(2000)
// })
// .then(()=>{
//     console.log("Прошло 2 секунды")
//     return delay(3000)
// })
// .then(()=>{
//     console.log("Прошло 3 секунды")
// })

const obj = {
    name: "Илья",
    age: 281,
    city: "Самара" 
}
function fetchUserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(obj)
        },3000)
    })
}
async function showUser() {
    console.log('Загружаю даннные с сервера')
    try{
       const user = await fetchUserData()
       console.log('Данные получены')
       console.log(`Имя: ${user.name}`);
       console.log(`Возраст: ${user.age}`);
       console.log(`Город: ${user.city}`); 
    } catch {
       console.log('Ошибка при получении данных:', error);
    }
}
showUser()





}  