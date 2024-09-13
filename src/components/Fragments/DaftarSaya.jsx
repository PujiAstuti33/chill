import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const DaftarSaya = () => {
  const [items, setItems] = useState([]);
  const [newItemId, setNewItemId] = useState("");
  const [newItemImage, setNewItemImage] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("DaftarSaya")) || []);
  }, []);


  useEffect(() => {
    localStorage.setItem("DaftarSaya", JSON.stringify(items));
  }, [items]);

  const handleAddItem = () => {
    if (newItemId.trim() === "" || newItemImage.trim() === "") return;

    if (items.find((item) => item.id === newItemId)) {
      alert("Item already exists");
      return;
    }

    setItems([...items, { id: newItemId, qty: 1, image: newItemImage }]);
    setNewItemId("");
    setNewItemImage("");
  };

  const handleUpdateItem = (id, qty) => {
    if (qty < 0) return; // Prevent negative quantity
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, qty: qty } : item
      )
    );
    setEditingItem(null);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">        
      <div className="mb-4">
        <input
          type="text"
          value={newItemId}
          onChange={(e) => setNewItemId(e.target.value)}
          placeholder="Enter new item ID"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={newItemImage}
          onChange={(e) => setNewItemImage(e.target.value)}
          placeholder="Enter image URL"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add Item
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="mr-4">Item ID: {item.id}, Quantity: {item.qty}</span>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.id}
                  className="w-20 h-20 object-cover mr-4"
                />
              )}
            </div>
            
            {editingItem?.id === item.id ? (
              <div className="flex items-center">
                <input
                  type="number"
                  value={editingItem.qty}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, qty: +e.target.value })
                  }
                  className="border p-1 mr-2"
                  min="0" // Prevent negative values
                />
                <button
                  onClick={() => handleUpdateItem(item.id, editingItem.qty)}
                  className="bg-green-600 text-white py-1 px-2 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingItem(null)}
                  className="bg-gray-600 text-white py-1 px-2 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <button
                  onClick={() => setEditingItem({ id: item.id, qty: item.qty })}
                  className="bg-yellow-600 text-white py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-600 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaftarSaya;