class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name
    this.releaseDate = releaseDate
    this.pagesCount = pagesCount
    this._state = 100
    this.type = null
  }

  get state() {
    return this._state
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0
    } else if (newState > 100) {
      this._state = 100
    } else {
      this._state = newState
    }
  }

  fix() {
    this.state = this._state * 1.5
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "magazine" // конкретный тип
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author
    this.type = "book" // конкретный тип
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "novel"
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "fantastic"
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "detective"
  }
}

class Library {
  constructor(name) {
    this.name = name
    this.books = []
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] !== undefined && book[type] === value) {
        return book
      }
    }
    return null
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const givenBook = this.books.splice(i, 1)[0]
        return givenBook
      }
    }
    return null
  }
}

class Student {
  constructor(name) {
    this.name = name
    this.marks = {}
  }

  addMark(mark, subject) {
    // валидация оценки
    if (mark < 2 || mark > 5) {
      return
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = []
    }

    this.marks[subject].push(mark)
  }

  getAverageBySubject(subject) {
    if (
      !this.marks.hasOwnProperty(subject) ||
      this.marks[subject].length === 0
    ) {
      return 0
    }

    const sum = this.marks[subject].reduce((acc, grade) => acc + grade, 0)
    return sum / this.marks[subject].length
  }

  getAverage() {
    const subjects = Object.keys(this.marks)
    if (subjects.length === 0) {
      return 0
    }

    const totalAverageSum = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject)
    }, 0)

    return totalAverageSum / subjects.length
  }
}
