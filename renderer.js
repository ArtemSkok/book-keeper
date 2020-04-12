
class Renderer {
  _listElement;
  _lengthCounter;

  constructor(listElement, listLengthElelement) {
    this._listElement = listElement;
    this._lengthCounter = listLengthElelement;
  }

  render(booksArray) {
    this._listElement.innerHTML = '';
    booksArray.forEach((e) => {
      this._appendBookToList(e);
    });
    this._setLengthCounterValue(booksArray.length);
  }

  _appendBookToList(book) {
    const elem = document.createElement('div');
    elem.innerHTML = `
    <div class="row list-item">
      <div class="col w-30 deep-purple white-text valign-wrapper font-size-1_4-em">
        <b>${book.id + 1}</b>
      </div>
      <div class="col s8 white list-main">
        <div class="deep-purple-text font-size-1_4-em book-title"><b>${book.title}</b></div>
        <div class="grey-text font-size-1_2-em friend"><b>from ${book.author}</b></div>
      </div>
      <div class="col s3 center-align blue-grey lighten-4 lent-to-container">
        <div class="more-button-container">
          <button class="waves-effect btn-flat deep-purple-text more-button"
            onclick="booksListModel.openEdit(${book.id})">
            <span class="material-icons grey-text">more_vert</span>
          </button>
        </div>
        <div class="deep-purple-text font-size-1_2-em friend">${book.friend}</div>
        <div class="grey-text font-size-1_2-em date">${formatDate(book.from)} - ${book.until || 'open'}</div>
      </div>
    </div>
    `;
    this._listElement.appendChild(elem);
  }

  _setLengthCounterValue(count) {
    this._lengthCounter.innerText = count;
  }
}