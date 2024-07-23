// Task 1

const book = {
    title : "Chai Aur Code" ,
    author: "Hitesh Chaudhary",
    year : 2024,
};
console.log(book);

//Task 2
console.log(book.title);
console.log(book.author);

//Task 3

book.getInfo = function() {
    return `${this.title} by ${this.author}`;
};

console.log(book.getInfo);

//Task 4

book.updateYear = function (newYear) {
    this.year = newYear;
};
book.updateYear(2025);
console.log(book);

//Task 5

let library ={
    name: "Central Library AUH",
    books :  [
       { title : "Console Busters" , author:"Aakash" , year:2024 },
       {title : "Chai Aur Code" ,author: "Hitesh Chaudhary",year : 2024 },
    ],
};
console.log(library);

//Task 6
console.log(library.name);
library.books.forEach((book) => {
    console.log(book.title);
});

//Task 7

book.getTitleAndYear = function () {
    return `${this.title} (${this.year})`;

};
console.log(book.getTitleAndYear());

// Task 8
for(let key in book) {
    if(book.hasOwnProperty(key)) {
        console.log(`${key} : ${book[key]}`);
    }
}

// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));
