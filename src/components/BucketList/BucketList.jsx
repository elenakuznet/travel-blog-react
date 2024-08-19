import { useState, useEffect } from 'react';
import './BucketList.css';

const INITIAL_DATA = [
  { id: 1, text: 'Visit Kaş Harbor', completed: false },
  { id: 2, text: 'Explore the Ancient Theater', completed: false },
  { id: 3, text: 'Swim in Kaputaş Beach', completed: false },
];

function BucketList() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('bucketListItems');
    return savedItems ? JSON.parse(savedItems) : INITIAL_DATA;
  });

  useEffect(() => {
    localStorage.setItem('bucketListItems', JSON.stringify(items));
  }, [items]);

  const toggleItemCompletion = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="bucket-list">
      <h3 className="bucket-list__title">My Bucket List for Kaş</h3>
      <ul className="bucket-list__items">
        {items.map(item => (
          <li key={item.id} className="bucket-list__item">
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItemCompletion(item.id)}
              />
              <span className={item.completed ? 'completed' : ''}>
                {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;