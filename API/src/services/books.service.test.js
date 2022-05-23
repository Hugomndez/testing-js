const BooksService = require('./books.service');

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('Should return a book list', async () => {
      // Arrange

      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });
  });
});
