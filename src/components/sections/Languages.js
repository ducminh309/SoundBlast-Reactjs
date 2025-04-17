import React from 'react';

const Languages = () => {
  const langs = ['English', 'Vietnamese', 'Korean', 'Japanese', 'Spanish'];

  return (
    <section className='text-center'>
      <h2 className="text-3xl font-bold mb-6">🌍 Languages</h2>
      <div className="flex flex-wrap gap-3">
        {langs.map((lang, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full font-medium shadow"
          >
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Languages;

