class ModalsConroller {
  _modalInstances;

  constructor(modatElements) {
    this._modalInstances = M.Modal.init(modatElements);
  }

  togglePopup(popupId) {
    const popup = this._getModal(popupId);
    popup.isOpen
      ? popup.close()
      : popup.open();
  }

  getModal(id) {
    return this._modalInstances.find((elem) => elem.id === id);
  }
}


