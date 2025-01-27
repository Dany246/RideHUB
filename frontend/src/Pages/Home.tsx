import { useState, useEffect } from "react";

export const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
      <img
        src="./public/HomePagePictures/kerek.png"
        alt=""
        className="mx-auto hidden sm:block w-full h-auto"
      />
      <h1
        className={`text-4xl font-bold my-8 text-center text-white transition-opacity duration-1000 delay-100 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        Ride<span className="bg-orange-500 text-black px-2 rounded-lg">Hub</span>
      </h1>

      <h1
        className={`mt-4 text-2xl font-bold text-center text-white my-14  transition-opacity duration-1000 delay-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        Developers of the project:
      </h1>
      <div
        className={`flex flex-wrap justify-evenly gap-2 transition-opacity duration-1000 delay-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="https://github.com/niezz01 "
          target="_blank"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-yellow-950 dark:bg-orange-500 dark:hover:bg-orange-600 sm:w-1/2"
        >
          <img
            className="object-cover w-full h-full rounded-t-lg md:h-full md:w-48 md
            :rounded-none md:rounded-l-lg hidden sm:block"
            src="./public/HomePagePictures/Bence.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Tóth Bence
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-900">
              I am 25 years old from Hajdú-Bihar county, from Hungary. I
              learning sofware development at Szigeti Endre vocational school in
              Szeghalom.
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Dany246"
          target="_blank"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-yellow-950 dark:bg-orange-500 dark:hover:bg-orange-600 sm:w-1/2" 
        >
          <img
            className="object-cover w-full h-auto rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg hidden sm:block"
            src="./public/HomePagePictures/Dani.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Éri Tibor Dániel
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-900">
              I am 20 years old from Békés county, from Hungary. I learning
              sofware development at Szigeti Endre vocational school in
              Szeghalom.
            </p>
          </div>
        </a>
      </div>
      <h4
        className={`my-20 text-xl w-[60%] m-auto font-bold text-center text-white  transition-opacity duration-1000 delay-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        This project is a web application for find a ride, anywhere you want to go. Our project's goal, to help people who are in a hurry and don't have a car, here they can find a safe and quick way to get to their destination. 
      </h4>

      <div className={`text-center transition-opacity duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}>
        <p className="text-2xl font-bold text-white"><a className="duration-500 hover:text-3xl" href="/order">⮚ Order a ride<span className="bg-orange-500 text-black p-1 rounded-lg">Here</span> ⮘</a></p>
      </div>
    </div>
  );
};
