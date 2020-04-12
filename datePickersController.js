class DatePickersController {
  _datePickerInstances;

  constructor(datePickerElements) {
    this._datePickerInstances = M.Datepicker.init(datePickerElements,
      {
        format: 'dd.mm.yy',
        parse: (val) => new Date(val),
        container: document.querySelector('body')
      }
    );
  }
}

