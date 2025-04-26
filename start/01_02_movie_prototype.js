class Movie {
  /**
   * 
   * @param {string} title 
   * @param {string} director 
   * @param {'Action' | 'Drama' | 'Horror' | 'SciFi'} genre 
   * @param {number} releaseYear 
   * @param {1 | 2 | 3 | 4 | 5} rating 
   */
  constructor(title, director, genre, releaseYear, rating){
    this.title = title
    this.director = director
    this.genre = genre
    this.releaseYear = releaseYear
    this.rating = rating
  }

  get overview() {
    return this.getOverview
  }
  
  getOverview() {
    return (`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. 
It received a rating of ${this.rating}`)    
  }
}

const braveHeart = new Movie("Brave Heart", "Mel Gibson", "Action", 2012, 5)
console.log(braveHeart.overview())