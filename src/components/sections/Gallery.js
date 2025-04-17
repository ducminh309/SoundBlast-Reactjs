import React from 'react';

const Gallery = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">🖼️ Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <img src="https://via.placeholder.com/200" alt="Gallery 1" className="rounded-xl shadow" />
        <img src="https://via.placeholder.com/200" alt="Gallery 2" className="rounded-xl shadow" />
      </div>
    </section>
  );
};

export default Gallery;
