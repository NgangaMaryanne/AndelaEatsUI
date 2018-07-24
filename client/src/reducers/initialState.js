export default {
  isLoading: false,
  activeUser: {},
  menus: []
};

export const initialMenus = {
  menus: [],
  acc1: '',
  acc2: '',
  mainMeal: ''
};

export const orders = {
  isLoading: false,
  error: "",
  totalRecords: 0,
  currentPage: 1,
  meals: [],
  isFiltered: false,
  menu: {
    meal: {
      main: [],
      firstAccompaniment: [],
      secondAccompaniment: []
    }
  }
};
