import React from 'react';

const TopSearchedSongs = () => {
  const topSearches = ['See You Again', 'Shape of You', 'Let Her Go', 'Despacito'];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center mt-4">🔍 Top Searched Songs</h2>
      <div className="bg-white shadow rounded-xl p-6 max-w-xl mx-auto">
        <ol className="list-decimal pl-6 space-y-3 text-lg">
          {topSearches.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TopSearchedSongs;


