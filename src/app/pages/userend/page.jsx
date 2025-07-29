'use client';

import { useEffect, useState } from "react";

export default function StorePage() {
  const [storeData, setStoreData] = useState([]);
  const [mainCategory, setMainCategory] = useState([]);
  const [selectedStoreName, setSelectedStoreName] = useState('');

  useEffect(() => {
    async function fetchStoreData() {
      try {
        const res = await fetch('http://localhost:3000/getStore');  
        const data = await res.json();
        setStoreData(data);
      } catch (error) {
        console.error("Failed to fetch store data:", error);
      }
    }

    fetchStoreData();
  }, []);

  const handleItemclick = async (store) => {
    console.log('clicked clicked:', store);
    setSelectedStoreName(store.name);
    try {
      const res = await fetch(`http://localhost:3000/getMain/${store.id}`);
      const data = await res.json();
      console.log('Fetched mainCategory:', data); 

      setMainCategory(data)
    }
    catch (error) {
      console.error('failed to fetch main:', error)
    }
  };

  return (
    <div>
      <h1 className="flex flex-row justify-center items-center">Store Data</h1>

      <ul className="flex flex-row justify-center items-center mb-6">
  {storeData.map((store) => (
    <li
      className="cursor-pointer px-4 py-2 border rounded hover:bg-gray-100 w-1/2 text-center"
      onClick={() => handleItemclick(store)}
      key={store.id}
    >
      {store.name}
    </li>
  ))}
</ul>

      {mainCategory.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mb-2">
            MainCategory for:{selectedStoreName}

          </h2>
          <ul>
            {mainCategory.map((main) => (
              <li key={main.id}>{main.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
