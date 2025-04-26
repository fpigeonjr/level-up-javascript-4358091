
class Book {
   constructor(title, author, ISBN, numCopies=0) {
    this.title = title
    this.author = author
    this.ISBN = ISBN
    this.numCopies = numCopies
   }

   get availability() {
      return this.getAvailability
   }

   getAvailability() {
      if (this.numCopies === 0) {
         return console.log(`${this.title} is out of stock`)
      } else if (this.numCopies < 10){
         return console.log(`${this.title} stock is low`)
      } else {
         return console.log(`${this.title} is in stock`)
      }
   }

   restock(numCopies = 5) {
      this.numCopies += numCopies
   }

   sell(numSold = 5) {
      this.numCopies -= numSold
   }
}

const myBook = new Book('My Awesome Book', 'Frank', '012380')
console.log(myBook)
myBook.availability()
myBook.restock(10)
myBook.availability()
myBook.sell(20)
myBook.availability()
