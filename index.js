let modalsController;
let datePickerController;
let booksListModel;
let formsController;

document.addEventListener('DOMContentLoaded', () => {
  const modalElems = document.querySelectorAll('.modal');
  modalsController = new ModalsConroller(modalElems);

  const datePickerElems = document.querySelectorAll('.datepicker');
  datePickerController = new DatePickersController(datePickerElems);

  const list = document.getElementById('list');
  const counter = document.getElementById('counter');

  const renderer = new Renderer(list, counter);
  booksListModel = new BooksListModel(renderer, modalsController);
});
