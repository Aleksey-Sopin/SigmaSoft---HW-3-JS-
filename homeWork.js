// ! Задача1
// let arr = [1, 55, -55, 1, -666, 92, 22, -4, 0, 5]

// function QuickSort(arr){
//     if (arr.length<=1){
//         return arr
//     }
 
//     const pivot=arr[Math.floor(arr.length/2)];
//     const leftArray=[]
//     const rightArray=[]
 
//     for (let i=0; i<arr.length; i++){
//         if(i===Math.floor(arr.length/2)){
//             continue
//         }
//         if (arr[i]<pivot){
//             leftArray.push(arr[i])
//         } else{
//             rightArray.push(arr[i])
//         }       
//     }
//     return [...QuickSort(leftArray), pivot, ...QuickSort(rightArray)]
// }

// function getDefference(arr){
//     QuickSort(arr);

//     let difference;
//     let number = 0;
//     let plusNumber = [];
//     let minusNumber = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < 0){
//             minusNumber.push(arr[i])
//             difference = minusNumber
//         }
//         if(arr[i] > 0){
//             plusNumber.push(arr[i])
//             difference = plusNumber
//         }

//         function Deffirence(minusNumber, plusNumber){
//             return Math.abs(Math.max.apply(null, plusNumber) - (-Math.min.apply(null, minusNumber)))
//         }
//     }
//     console.log(Deffirence(minusNumber,plusNumber))
// }
// console.log(getDefference(arr))

// ! Задача2
// let string = prompt("Enter a set of words to diagnose, comma ' , ' :  ")
// let number = parseInt(prompt("Enter the Number : "))
// let comma = ","

// function getArrayWords(string, number, comma){

//     let arrayStrings = string.split(comma)
//     if( number > 0 && arrayStrings != null){
//         let newArray = [];

//         for(let i=0; i<arrayStrings.length; i++){
//             let arrayWord = arrayStrings[i].split();
            
//             for(let j=0; j<arrayWord.length; j++){
//                 if(arrayWord[j].length >= number){
//                     newArray.push(arrayWord[j])
//                 }
//             } 
//         }
//         console.log(newArray)
//     }
// }
// getArrayWords(string, number, comma);

// ! Задача3
// function solution(first, second){
//    let result = first.endsWith(second)
//    return result
// }
// console.log(solution('abc', 'd') )

// ! Задача 4
// function outAverages(arr){
//     let count=0;
//     let newArray = []
//     while(count < arr.length){
//         if(arr[count+1] != null){
//             let i = (arr[count] + arr[count+1]) / 2
//             newArray.push(i)
//         }
//         count++
//     }
//     return newArray
// }
// function getAverages(arr){
//     let count=0;
//     while(count < arr.length){
//         if(Number.isInteger(arr[count]) ){
//             return console.log( outAverages(arr) )
//         }else false
//         count++
//     }
// }
// getAverages([1, 3, 5, 1, -10])

// ! Задача5
// function getVolwels(string){
//     string.toLowerCase()
//     string = string.split("");
    
//     let volwelsArray = []

//     for(let i=0; i<string.length; i++){
//         if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "u" || string[i] === "o")
//         {
//             volwelsArray.push(string[i])
//         }
//     }
//     return volwelsArray.length
// }
// console.log(getVolwels("Celebration"))

// ! 5.2
// function removeABC(string){
//     string.toLowerCase()
//     string = string.split("");

//     let newArr = [];
//     for(let i=0; i<string.length; i++){
//         switch (string[i]){
//             case 'a':
//             case 'b':
//             case 'c':
//                 continue;    
//             default: 
//                 newArr.push(string[i])
//                 break;
//         }
//     }
//     if(newArr.length === string.length){
//         return null
//     }else{
//         return  newArr.join("")
//     }
// }
// console.log( removeABC("This might be a bit hard") )

// ! Задача6
// function uniqueNumber(arr1, arr2){
//     arr1 = arr1.concat(arr2)
//     arrNew = []
//     arr1.sort( (a, b) => { return(a-b); })
//     let i=0
//     while(i < arr1.length){
//         if(arr1[i] !== arr1[i+1]){
//             arrNew.push(arr1[i])
//         }
//         i++
//     }
//     console.log(arrNew)
// }
// uniqueNumber([1, 2, 3], [100, 2, 1, 10, 55,])

// ! Задача7
// function shifter(object){
//     let shifter = {}
//     for (const key in object) {
//         if (Object.hasOwnProperty.call(object, key)) {  
//             shifter[object[key]] = key 
//         }
//     }
//     console.log(shifter)
// }
// shifter({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})

// ! Задача8
// function calculateDifference(obj, number){

//     let result = 0;
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             result += obj[key]
//         }
//     }
//     if(obj != null && result > number){
//         console.log(result - number)    
//     }else{
//         alert('Error!!!  Incorrect data entered!')
//     }
// }
// calculateDifference({ skate: 10, painting: 20 }, 19)

// ! Задача9
// function doesBrickFit(height,width,depth,holeWidth,holeHeight){

//     if( height <= holeHeight &&
//         height <= holeWidth &&
//         height <= depth &&
//         width <= holeWidth){
//         return true
//     }else if(height <= holeHeight &&
//         height <= holeWidth &&
//         depth <= holeWidth){
//             return true
//     }else{ return false }
// }
// console.log(doesBrickFit(2, 2, 2, 2, 2))

// ! Задача10
// let filePath = 'c:\WebServers\home\testsite\www\myfile.txt';

// function getFileName(filePath){
//     let positionDot = filePath.lastIndexOf('.');
//     let positionLastSlash = filePath.indexOf('www', filePath)

//     let arr = []
//     for(let i=positionLastSlash+3; i<positionDot; i++){
//         arr[i] = filePath[i]
//     }
//     arr = arr.filter(Boolean)
//     return arr.join('')
// }
// console.log(getFileName(filePath))

// ! Задача11
// let string = "Have a nice day!";
// let string2 = "Thank you, bye!";
// let newString = [];
// for(let i=0; i<string.length; i++){
//     newString[i] = string2[i]
// }
// console.log(newString.join(''))// только перезаписать в массив можно

// ! Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b 
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.
// function QuickSort(arr){
//     if (arr.length<=1){
//         return arr
//     }
 
//     const pivot=arr[Math.floor(arr.length/2)];
//     const leftArray=[]
//     const rightArray=[]
 
//     for (let i=0; i<arr.length; i++){
//         if(i===Math.floor(arr.length/2)){
//             continue
//         }
//         if (arr[i]<pivot){
//             leftArray.push(arr[i])
//         } else{
//             rightArray.push(arr[i])
//         }       
//     }
//     return [...QuickSort(leftArray), pivot, ...QuickSort(rightArray)]
// }
// let arr1 = [22,34,5,66,7,4,9,76,54,2,25]

// function getMinAndMaxArray(arr){
//     arr = QuickSort(arr);
//     let diff = [];
//     console.log(arr)
//     for(let i=0; i<arr.length-1;i++){
//         diff.push(arr[i+1] - arr[i])
//     }

//     console.log(diff)
// }
// getMinAndMaxArray(arr1)


// ! Задача13
// let string = "Дано рядок що 22 email 98756941 Cкладається 32564 Зі посилання  33329 розділених пробілами";

// function getNewString(string){
//     const words1 = ['посилання'];
//     const words2 = ['email'];
//     const regexp1 = new RegExp(`(${words1.join('|')})\\w*`, 'ig');
//     const regexp2 = new RegExp(`(${words2.join('|')})\\w*`, 'ig');

//     let newString = string.replace(regexp1, '[посилання заборонено]');
//     newString = newString.replace(regexp2, '[контакти заборонені]');
//     const pattern = /[0-9]{3,}/g;
//     newString = newString.replace(pattern, '' )

//     if(newString.length > string.length){
//         setInterval( () => alert('Чи потрібна Вам допомога?'), 5000) 
//     }
// }
// getNewString(string)

// ! Задача14

// ! Задача15
// function getNewRandomPassword(){
//     let words = 'abcdefghijklmnopqrstuvwxyz';
//     let bigWords = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let numders = '9876543210';
//     let underlining = '_';
//     let password = '';
//     password += underlining;
//     for (let i=0; i< Math.floor(Math.random() * (10 - 5) + 5);i++) {
//         let randomNumber = Math.floor(Math.random() * words.length);
//         password += words.substring(randomNumber, randomNumber+1);
//        }
//     for(let i=0; i< Math.floor(Math.random() * (8 - 5) + 5);i++){
//         randomNumber = Math.floor(Math.random() * bigWords.length);
//         password += bigWords.substring(randomNumber, randomNumber+1);
//     }
//     for(let i=0; i<5; i++){
//         randomNumber = Math.floor(Math.random() * numders.length);
//         password += numders.substring(randomNumber, randomNumber+1);
//     }
//     console.log(password,password.length)
//     let finalPass = new Set(password)
    
//     console.log([...finalPass].join(''))
// }
// getNewRandomPassword()

// ! Задача16
// let arr = [2,3,1,4,5]
// function QuickSort(arr){
//     if (arr.length<=1){
//         return arr
//     }
//     const pivot=arr[Math.floor(arr.length/2)];
//     const leftArray=[]
//     const rightArray=[]
 
//     for (let i=0; i<arr.length; i++){
//         if(i===Math.floor(arr.length/2)){
//             continue
//         }
//         if (arr[i]<pivot){
//             leftArray.push(arr[i])
//         } else{
//             rightArray.push(arr[i])
//         }       
//     }
//     return [...QuickSort(leftArray), pivot, ...QuickSort(rightArray)]
// }
// function MaxMinSort(arr){
//     let arr1 = QuickSort(arr)
//     let newArr = []
//     let newArr2 = []
//     for(let i=0;i<arr1.length;i++){
//         newArr.push(arr1[i])
//         i++
//     }
//     for(let i=0;i<arr1.length;i++){
//         newArr2.unshift(arr1[i+1])
//         i++
//     }
//     if(newArr2.includes(undefined)){
//         newArr2.shift()
//     }
//     let array = [...newArr, ...newArr2]
//     console.log(array)
// }
// MaxMinSort(arr)

// ! Задача17
// Напишіть функцію, яка приймає рядок та повертає новий рядок, 
// відсортований за частотою появи символів. Символи з більшою частотою
// повинні йти раніше за символи з меншою частотою. Використовуйте методи
// роботи з рядками, об'єктами та сортуванням для вирішення задачі.

// let string = 'Lorem ipsum dzzolor sssit amet zconsectetur adipiscing elit sed do eiusmod';

// function FindBrothers(string){
//     let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// 	string = string.toLowerCase().split('');
// 	let pattern = {'a': 'o', 'b' : 'k' }
//     for(let i=0;i<arr_en.length;i++){
//         for (let key in pattern) {
//             if(pattern.hasOwnProperty(key)){
//                 for(let i=0;i<arr_en.length;i++){
//                     pattern[arr_en[i]] = arr_en[i]
//                 }
//             }
//         }
//     }
//     for (let key in pattern) {
//         if (Object.hasOwnProperty.call(pattern, key)) {
//             for(let i=0;i<string.length;i++){
//                 if(pattern[key].includes(string[i])){
//                     pattern[key] = string[i]
//                 }
//             }  
//         }
//     }
//     for (let key in pattern) {
//         if (Object.hasOwnProperty.call(pattern, key)) {
//             for(let i=0;i<string.length;i++){
//                 if(pattern[key].includes(string[i])){
//                     pattern[key] += string[i] 
//                 }
//             }
//         }
//     }
//     let arr = Object.values(pattern)

//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length == 1){
//             delete arr[i]
//         }
//     }
//     srtingFromArray = arr.join('')
// 	console.log(srtingFromArray)
// }
// FindBrothers(string)

// ! Задача18
// let arr = ['asdasd', 'assfvv nbmn asd lkbv']
// function getComparisonResult(inStr, cStr) { 
//     const result = inStr.split('').filter(function(letter) {
//         return (cStr.indexOf(letter) > -1);
//     });
//     return result;
// }
// for (i = 0; i < (arr.length-1); i++) {   
//     var result = (i == 0) ? getComparisonResult(arr[i], arr[i+1]) : getComparisonResult(result.join(''), arr[i+1]);
// }
// let finalStr = result.join(''); 
// finalStr = Array.from(new Set(result)).join('');

// console.log(finalStr)

// ! Задача19
// let eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// let shift = +prompt("Выберите числовое значение сдвига : ");
// let message = prompt("Сообщение на АНГИЙСКОМ для зашифровки(Буквы будут в 'нижнем регистре' + Числа(0-9)) : ");
// message = message.toLowerCase()
// let result = 'Результат : '
// let lang = 'ENG' 
// function shiftingPassword(){
//     if (lang == 'ENG') {
//             for (let i of message) {
//                 let place = eng.indexOf(i);
//                 let new_place = place + shift;
//                 eng.includes(i) ? result += eng[new_place] : result += 1
//             }
//         }
//         alert(result)
// }
// shiftingPassword()

// ! Задача20
// function cheking(){
//     let message = prompt("Сообщение на АНГИЙСКОМ)  -- : ");
//     let messageToCheck = prompt("Сообщение на АНГИЙСКОМ)  -- : ");
//     messageToCheck = messageToCheck.toLowerCase()
//     message = message.toLowerCase()
//     let result;
//     if(message.length == messageToCheck.length){
//         for (const i of message) {
//             result =  messageToCheck.includes(i) ? true : false
//          }
//     }else{
//         alert('Введите одинаковое кол-во символов')
//     }
//     return result
// }
// console.log(cheking())

// ! Задача21
// let students = [] 
// let arrStudentsYear = [];

// function Student(id, firstName, secondName, age, faculty, year){
//     this.id = id;
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.age = age;
//     this.faculty = faculty;
//     this.year = year;
// }
// let University = {
//     addStudent: function(id, firstName, secondName, age, faculty, year){
//         let student = new Student(id, firstName, secondName, age, faculty, year)
//         students.push(student)
//         return student
//     },
//     deleteStudent: function(id){   
//         for (let i in students) {
//             i != id ? false : students.splice(id,1)
//         }  
//     },
//     viewInformationAboutStudentID: function (id){
//         let el = [];
//         students.forEach(i => {
//             if(i.id == id){
//                 for (let key in i) {
//                     if (Object.hasOwnProperty.call(i, key)) {
//                         el += ' \n ' + key + ' : ' + i[key]
//                     }
//                 }
//             }else {false}
//         });
//         return el
//     },
//     viewInformationAboutAllStudentsYear: function (year){
//         students.forEach(i => {
//             if(i.year == year){
//                 arrStudentsYear += '-------\n'
//                 for (let key in i) {
//                     if (Object.hasOwnProperty.call(i, key)) {
//                         arrStudentsYear += (key + ' - ' + i[key]) + '\n'
//                     }
//                 }
//             }else {false}
//         });
//         return arrStudentsYear
//     },
//     viewInformationAboutAllStudentsFaculty: function (faculty){
//         students.forEach(i => {
//             if(i.faculty === faculty){
//                 arrStudentsYear += '-------\n'
//                 for (let key in i) {
//                     if (Object.hasOwnProperty.call(i, key)) {
//                         arrStudentsYear += (key + ' - ' + i[key]) + '\n'
//                     }
//                 }
//             }else {false}
//         });
//         return arrStudentsYear
//     }
// }
// let newStudent = University.addStudent(0,'Kate','Rouge', 24, 'Engineering', 2)
// let newStudent2 = University.addStudent(1,'Alex','Sopin', 34, 'Engineering', 3)
// let newStudent3 = University.addStudent(2,'Mishail','Sopilka', 23, 'Mechanics', 1)
// let newStudent4 = University.addStudent(3,'Sasha','Solianka', 45, 'Programming', 2)
// let newStudent5 = University.addStudent(4,'Sonia','Koriay', 19, 'Programming', 3)
// let newStudent6 = University.addStudent(5,'Kolia','Zelenskiy', 14, 'Programming', 1)

// University.viewInformationAboutAllStudentsFaculty('Engineering')
// console.log(arrStudentsYear)

// ! Задача22
// let string2 = 'diam vulputate! ut pharetra sit amet. aliquam id diam maecenas. ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices? gravida dictum fusce ut placerat orci null'
// let string = 'Напишіть програму, яка аналізує текст та виводить статистику про кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка визначає слова, що найчастіше зустрічаються в тексті.'
// function QuickSort(arr){
//     if (arr.length<=1){
//         return arr
//     }
//     const pivot=arr[Math.floor(arr.length/2)];
//     const leftArray=[]
//     const rightArray=[]
 
//     for (let i=0; i<arr.length; i++){
//         if(i===Math.floor(arr.length/2)){
//             continue
//         }
//         if (arr[i]<pivot){
//             leftArray.push(arr[i])
//         } else{
//             rightArray.push(arr[i])
//         }       
//     }
//     return [...QuickSort(leftArray), pivot, ...QuickSort(rightArray)]
// }
// function getNumberOfWords(string) {
//     let newString = '';
//     let countWord = 1;
//     let countSentence = '';
//     let countLetter = 0;
//     let countCloneWords = 0;
//     // ф-ція конструктор кінцевої збірки для RETURN
//     function Result(countLetter, countSentence, countWord, countCloneWords){
//         this.countLetter = countLetter;
//         this.countSentence = countSentence;
//         this.countWord = countWord;
//         this.countCloneWords = countCloneWords;
//     }
//     let analytic = new Result()
//     // Считаем слова и предложения
//     newString = string.toLowerCase();
//     for (const i of newString) {
//         if(i == '.' || i == '!' || i == '?') {countSentence++}
//         if(i == ' ') {countWord++}
//     }
//     // считаем кол-во символов
//     let pattern = / /gi;
//     let stringWithOutSpace = newString.replace(pattern, '')
//     for (const i of stringWithOutSpace) {
//         i ? countLetter++ : false
//     }
//     // слова наиболее встречающиеся в тексте
//     let cloneWords = [];
//     cloneWordsResult = '';
//     pattern = /[','\'.']/gi;
//     let stringWithOutComma = newString.replace(pattern, '');// робимо нову стрічку без "," "."

//     cloneWords = stringWithOutComma.split([' ']) // робимо новий масив  
//     cloneWords = QuickSort(cloneWords)
//     // додаємо в масив "cloneWordsResult" слова які повторюються
//     for (let i=0; i<cloneWords.length;i++) {
//        if( cloneWords[i] === cloneWords[i+1]){
//         cloneWordsResult += cloneWords[i] + "\n"
//        } 
//     }
//     analytic = (('Letter: ' + countLetter) + (', Sentence: ' + countSentence) + (', Words: ' + countWord) + (',\n CloneWordsResult: ' + '\n' + cloneWordsResult ))
//     return analytic
// }
// console.log(getNumberOfWords(string2))

