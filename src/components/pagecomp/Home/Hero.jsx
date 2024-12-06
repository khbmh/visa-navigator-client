function Hero() {
  return (
    <div className="">
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute h-full w-full text-center left-[50%] top-[50%] bg-black/50 -translate-x-[50%] -translate-y-[50%]"></div>
          <div className="absolute text-center left-[50%] top-[50%] text-white -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-3xl lg:text-5xl font-black">Visit Qatar</h1>
            <p className="font-semibold max-w-md mt-8">
              Visiting Qatar offers a unique blend of modern luxury, rich
              culture, stunning architecture, and vibrant heritage, ideal for
              travelers seeking adventure
            </p>
          </div>
          <img
            src="https://www.remotelands.com/travelogues/app/uploads/2021/07/Qatar-Opens-1.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute h-full w-full text-center left-[50%] top-[50%] bg-black/50 -translate-x-[50%] -translate-y-[50%]"></div>
          <div className="absolute text-center left-[50%] top-[50%] text-white -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-3xl lg:text-5xl font-black">Visit Egypt</h1>
            <p className="font-semibold max-w-md mt-8">
              Visiting Egypt offers breathtaking ancient wonders like the
              Pyramids of Giza, the Nile River, vibrant bazaars, and stunning
              deserts, blending history, culture, and unforgettable landscapes
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600520611035-84157ad4084d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="absolute h-full w-full text-center left-[50%] top-[50%] bg-black/50 -translate-x-[50%] -translate-y-[50%]"></div>
          <div className="absolute text-center left-[50%] top-[50%] text-white -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-3xl lg:text-5xl font-black">Visit Indonesia</h1>
            <p className="font-semibold max-w-md mt-8">
              Visiting Indonesia promises diverse experiences with lush tropical
              islands, rich cultural heritage, iconic temples like Borobudur,
              vibrant cities, pristine beaches, and breathtaking landscapes like
              Bali and Komodo.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="absolute h-full w-full text-center left-[50%] top-[50%] bg-black/50 -translate-x-[50%] -translate-y-[50%]">
          </div>
          <div className="absolute text-center left-[50%] top-[50%] text-white -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-3xl lg:text-5xl font-black">Visit Somalia</h1>
            <p className="font-semibold max-w-md mt-8">
            Visiting Somalia unveils unique adventures with its untouched beaches, ancient cave art at Laas Geel, rich Somali culture, traditional cuisine, and the vibrant port city of Mogadishu
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1603999540542-b8c65c6d3e89?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
