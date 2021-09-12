 //Array - Object
// Array:  a =[1, 2, 3, 4, 5] => a[4]
// - Thứ tự dữ liệu là quan trọng nhất, để sắp xếp dữ liệu
// - Các Array được đánh index từ 0
//Object:  
// b = {
//     title: 'xyz',
//     rate: 3.4,
// } 
// - Sắp xếp dữ liệu thông tin dựa vào Key/ value
// - Tên của dữ liệu là quan trọng nhất
// ------------------------------------------------------------------------------------------------
// Array
let listFirm = ['Silicon valley', 'Batman', 'Harry Potter', 'Avengers:Endgame'];
 console.log(listFirm);
//CRUD
//Create 
let film = 'Aquaman'
listFirm.push(film);
 console.log(listFirm);
 //Update
 let updateFirm = 'Silicon valley 2'
 listFirm[0] = updateFirm;
 console.log(listFirm);
 //Delete
listFirm.splice(1,1);
console.log(listFirm);
//Object
let movie = {
    title: 'Avengers: Endgame',
    year: 2012,
    rate: 8.4,
}
console.log(movie);
console.log(movie.title);
console.log(movie['title']);
movie.rate = 8.7;
console.log(movie);
delete movie.title;
//Array of objects
let movie1 = {
    title: 'Avengers: Endgame',
    year: 2012,
    rate: 8.4,
}
let movie2 = {
    title: 'Batman',
    year: 2019,
    rate: 7,
}
let movie3 = {
    title: 'Aquaman',
    year: 2017,
    rate: 8.7,
}
let movieArray = [];
movieArray.push(movie1);
movieArray.push(movie3);
movieArray.push(movie2);
console.log(movieArray);
console.log(movieArray[1]);
console.log(movieArray[1].title);

// objectContainingArray
let X ={
    title: 'Aquaman',
    year: 2017,
    rate: 8.7,
    character: ['X', 'Y', 'Z'],
}
X.character.push('T');
console.log(X);














