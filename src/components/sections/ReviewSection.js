import React from 'react';

const ReviewSection = () => {
  const reviews = [
    { name: 'Người dùng A', comment: 'Album này cực kỳ hay!' },
    { name: 'Người dùng B', comment: 'Ca sĩ trình diễn tuyệt vời.' },
  ];

  return (
    <section className='text-center'>
      <h2 className="text-3xl font-bold mb-6">📝 Review Album/Artist</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-xl shadow">
            <p>
              <strong>{review.name}:</strong> {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;

