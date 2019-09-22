
const locStorage = {
  setItem: (key, value) => localStorage.setItem(key, value),

  getItem: key => localStorage.getItem(key),

  isItem: key => {
    if (localStorage.getItem(key)) {
      return true;
    } else {
      return false;
    }
  },

  //mira si tiene datos en el localstorage, si es asi, los inserta en el formulario
  checklocalStorage: () => {
    const searchInputText = document.querySelector('#filterText');
    const searchInputDate = document.querySelector('#filterDate');

    if (locStorage.isItem('filterText')) {
      searchInputText.value = locStorage.getItem('filterText');

    }

    if (locStorage.isItem('filterDate')) {
      searchInputDate.value = locStorage.getItem('filterDate');

    }
  }
};


export default locStorage;