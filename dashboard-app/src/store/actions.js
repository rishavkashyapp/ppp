export const addWidget = (categoryName, widget) => ({
    type: 'ADD_WIDGET',
    payload: { categoryName, widget },
  });
  
  export const removeWidget = (categoryName, widgetId) => ({
    type: 'REMOVE_WIDGET',
    payload: { categoryName, widgetId },
  });
  