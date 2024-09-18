import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';  // Import the initial JSON data

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: data,  // Set the initial state using the JSON data
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find((cat) => cat.name === categoryName);
      if (category) {
        category.widgets.push({ ...widget, id: Date.now() });  // Add widget with a unique ID
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter((widget) => widget.id !== widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;  // Export actions
export default dashboardSlice.reducer;  // Export the reducer
