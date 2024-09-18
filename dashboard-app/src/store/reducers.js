import data from '../data.json'; // Assuming your JSON data is stored in data.json

const initialState = data;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WIDGET': {
      const { categoryName, widget } = action.payload;
      const newWidget = { ...widget, id: Date.now() }; // Generates unique ID
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.name === categoryName
            ? { ...category, widgets: [...category.widgets, newWidget] }
            : category
        ),
      };
    }

    case 'REMOVE_WIDGET': {
      const { categoryName, widgetId } = action.payload;
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.name === categoryName
            ? {
                ...category,
                widgets: category.widgets.filter((widget) => widget.id !== widgetId),
              }
            : category
        ),
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
