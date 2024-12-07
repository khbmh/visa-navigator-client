import { Link } from 'react-router';

function LatestVisa() {
  const cards = [
    {
      id: 1,
      title: 'Visa for Students',
      image:
        'https://images.unsplash.com/photo-1721378467002-8c1f2d8edec2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, justo vel lobortis ullamcorper, velit enim pharetra est, vel consectetur neque felis a nunc.',
    },
    {
      id: 2,
      title: 'Visa for Students',
      image:
        'https://images.unsplash.com/photo-1711915482570-a7714a3a4660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, justo vel lobortis ullamcorper, velit enim pharetra est, vel consectetur neque felis a nunc.',
    },
    {
      id: 3,
      title: 'Visa for Students',
      image:
        'https://images.unsplash.com/photo-1697382609222-e6f6a99a2a7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, justo vel lobortis ullamcorper, velit enim pharetra est, vel consectetur neque felis a nunc.',
    },
    {
      id: 4,
      title: 'Visa for Students',
      image:
        'https://images.unsplash.com/photo-1579388653943-35ae96d6c31f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, justo vel lobortis ullamcorper, velit enim pharetra est, vel consectetur neque felis a nunc.',
    },
    {
      id: 5,
      title: 'Visa for Students',
      image:
        'https://images.unsplash.com/photo-1603738115219-d2d66074819d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, justo vel lobortis ullamcorper, velit enim pharetra est, vel consectetur neque felis a nunc.',
    },
    {
      id: 6,
      title: 'Visa for Students',
      image:
        'https://images.unsplash.com/photo-1593672740624-38a34ff53d5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, justo vel lobortis ullamcorper, velit enim pharetra est, vel consectetur neque felis a nunc.',
    },
  ];

  return (
    <div className="container mx-auto w-[70vw] my-16 flex flex-col items-center justify-between">
      <h1 className="text-3xl lg:text-5xl text-center font-bold my-8">
        Check Latest Visa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {cards.map((card) => (
          <div key={card.id} className="border rounded-xl">
            <div className="p-4 rounded-lg shadow-md">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/all-visa" className="btn btn-success btnn border">
        See All Visa
      </Link>
    </div>
  );
}

export default LatestVisa;
