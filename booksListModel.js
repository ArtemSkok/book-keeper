class BooksListModel {
  _booksArray = [];
  _renderer;
  _modalController;
  _editedBookId;

  constructor(renderer, moddalController) {
    this._renderer = renderer;
    this._modalController = moddalController;
  }

  openEdit(id) {
    this._editedBookId = id;
    const popup = this._modalController.getModal('editBookDialog');
    const form = popup.el.querySelector('form');
    const book = this._getBookById(id);
    setFormValue(form, book);
    popup.open();
    M.updateTextFields();
  }

  openAdd() {
    const popup = this._modalController.getModal('addNewBookDialog');
    const form = popup.el.querySelector('form');
    setFormValue(form, { title: '', author: '', friend: '', until: '' });
    popup.open();
  }

  addBook(book) {
    this._booksArray.push(
      {
        ...book,
        id: this._booksArray.length,
        from: new Date(),
        returned: false,
      });
    this._renderer.render(this._booksArray);
  }

  editBook(formValue) {
    const id = this._editedBookId;
    this._editedBookId = null;
    const book = this._getBookById(id);
    if (formValue.returned) {
      this._booksArray.splice(id, 1);
    } else {
      this._booksArray.splice(id, 1, {
        ...book,
        ...formValue,
      });
    }
    this._renderer.render(this._booksArray);
  }

  _getBookById(id) {
    return this._booksArray.find((e) => e.id === id);
  }
}