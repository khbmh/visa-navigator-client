function Review() {
  const reviews = [
    {
      name: 'John Doe',
      img: 'https://images.unsplash.com/photo-1597969892064-a7b26a98c335?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profession: 'Travel Enthusiast',
      review:
        'The Visa Navigator Portal made applying for my tourist visa a breeze. The detailed information and user-friendly interface saved me a lot of time and effort.',
    },
    {
      name: 'Michael Smith',
      img: 'https://images.unsplash.com/photo-1597612041762-93a90e22af06?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profession: 'Business Consultant',
      review:
        'As a frequent traveler for business, I appreciate the efficiency of this portal. The ability to add and manage visa entries is a game-changer.',
    },
    {
      name: 'David Johnson',
      img: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profession: 'Student',
      review:
        'Applying for my student visa through the Visa Navigator Portal was incredibly straightforward. The step-by-step guidance and comprehensive details were very helpful.',
    },
    {
      name: 'Robert Brown',
      img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profession: 'Freelance Photographer',
      review:
        'The Visa Navigator Portal is a must-have tool for any traveler. It simplifies the visa application process and provides all the necessary information in one place.',
    },
    {
      name: 'William Davis',
      img: 'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profession: 'Software Engineer',
      review:
        'I found the portal very intuitive and easy to use. The dark/light theme toggle is a nice touch, making it comfortable to use at any time of day.',
    },
    {
      name: 'James Wilson',
      img: 'https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profession: 'Marketing Manager',
      review:
        'The Visa Navigator Portal has significantly improved my travel planning. The ability to track my visa applications and manage entries is incredibly useful.',
    },
  ];

  return (
    <div className="container mx-auto w-[70vw] my-16">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        What Our Customers Say About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-between flex-grow">
        {reviews.map((review) => (
          <div key={review.name} className="mb-8 mid p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm">{review.profession}</p>
              </div>
            </div>
            <p className="mt-3">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
