function getFormValue(form) {
  const valueObj = {};
  [...form.elements].forEach((e) => {
    const key = e.getAttribute('data-input-name');
    valueObj[key] = parseStringValue(e.value);
  });
  return valueObj;
}

function setFormValue(form, valueObj) {
  [...form.elements].forEach((e) => {
    const key = e.getAttribute('data-input-name');
    e.value = valueObj[key];
  });
}

function formatDate(date) {
  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear().toString().slice(-2)}`
}

function parseStringValue(value) {
  try {
    return JSON.parse(value);
  } catch{
    return value;
  }
}

