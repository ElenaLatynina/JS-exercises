// task 6


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
 
//   numbers.forEach((number) => { if(number > value){
//     filteredNumbers.push(number);
//   }})

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }

// /============ task 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(element => {
//     if
//       (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
    
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
      
//     };
//     newNumbers.push(number);
    
//   }
//   )
//    return newNumbers;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));



// /================task 20============
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index, allGenres) => allGenres.indexOf(genres) === index);

// /================task 25============
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.


// const getFriends = (users) =>  users
//     .flatMap((user) => user.friends)
//   .filter((user, index, array) => array.indexOf(user) === index);
    
// /================task 34============
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc , playtime) => { return acc + playtime;}, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// / /================task 47============

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.

// const getSortedFriends = users =>
// users.flatMap(user => user.friends)
// .sort((a, b) => a.localeCompare(b))
//         .filter((friend, index, array) => array.indexOf(friend) === index);

// /================task 48============
//  Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей(свойство balance), пол которых(свойство gender) совпадает со значением параметра gender.
 
const getTotalBalanceByGender = (users, gender) => users.filter( user => user.gender === gender).reduce((total, user) => {
    return total+ user.balance;
},0);