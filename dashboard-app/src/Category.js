import React from 'react';
import Widget from './Widget';
import { useDispatch } from 'react-redux';
import { removeWidget } from './store/dashboardSlice';

function Category({ category }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
          onRemove={() => dispatch(removeWidget({ categoryName: category.name, widgetId: widget.id }))}
        />
      ))}
    </div>
  );
}

export default Category;
