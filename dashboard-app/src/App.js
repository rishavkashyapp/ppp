import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './Category';
import { addWidget } from './store/dashboardSlice';

function App() {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();
  
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddWidget = () => {
    if (widgetName && widgetText && selectedCategory) {
      dispatch(addWidget({
        categoryName: selectedCategory,
        widget: { name: widgetName, text: widgetText },
      }));
      setWidgetName('');
      setWidgetText('');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}

      <div>
        <h3>Add a Widget</h3>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
}

export default App;
