import React, { useEffect } from "react";
import FoodCard from "./FoodCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    document.title = "Fuit-Fun";
  }, []);
  return (
    <div>
      {/* banner  */}
      <div
        data-aos="zoom-out-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="bg-yellow-50 mb-5"
      >
        <img
          className="md:w-[75%] p-6 mx-auto lg:mt-20 md:mt-16 mt-10"
          src="https://img.freepik.com/free-vector/flat-design-food-facebook-cover_23-2149108159.jpg?w=2000"
          alt=""
        />
        <h1 className="lg:text-4xl text-2xl font-bold font-serif p-4 text-center">
          Home Cooked Fuit-Fun Is Healthier Than Fast Food Or Takeout
        </h1>
      </div>
      {/* food section  */}
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <FoodCard />
      </div>
      {/* recepy section  */}
      <div data-aos="zoom-out-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className="mb-16">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold font-serif mb-2">
            Customer Favorite Dish
          </h1>
          <h3 className="text-xl">Incredibly Tasty Bangladeshi Dish</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:px-[15%] px-3 gap-8 shadow-md">
          <div>
            <h1 className="text-3xl text-red-600 font-bold mb-10 font-serif">
              How to Make Shorshe Ilish?
            </h1>
            <h1 className="text-xl flex flex-col gap-3 font-serif">
              <p>১। 750 gm. Hilsa fish (cut into 6-7 pieces)</p>
              <p>২। 1/2 teaspoon turmeric powder</p>
              <p> ৩। 1/2 tablespoon black mustard seeds</p>

              <p> ৪। 1 tablespoon yellow mustard seeds</p>

              <p> ৫। 4 large green chillies</p>

              <p>৬। 100 ml. mustard oil + a few drops to finish</p>

              <p> ৭। 1/2 teaspoon nigella seeds</p>

              <p> ৮। Salt to taste</p>
            </h1>
          </div>
          <div>
            <img
              className="rounded-[80%]"
              src="https://thumbs.dreamstime.com/b/raw-uncooked-hilsa-terubok-mustard-green-leaves-black-board-popular-bengali-dish-national-fish-bangladesh-255830321.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl text-red-600 font-bold mb-6 font-serif">
              Process
            </h1>
            <p className="font-serif text-gray-800">
              Panta Ilish is a traditional food that almost every Bangladeshi eats at the Pohela Boishakh Festival (the first day of Bangla year). It’s the most popular food in Bangladesh. We love this dish as it is a great symbol and celebration of our culture and tradition. <br />
              Apply salt and turmeric powder on hilsa fish. Set aside. Reserve 2
              tablespoon of the mustard oil. Heat the remaining oil. Fry the
              hilsa on both sides over medium high heat till light golden (about
              30-35 seconds per side). Remove and put them aside.
              <br />
              To the remaining mustard oil, add 1 tablespoon of the fried hilsa
              oil, and heat it over high heat till the oil is really hot but not
              smoking. Add the nigella seeds, lower the heat to a simmer, and
              immediately add the mustard paste and 1/4th teaspoon turmeric,
              followed by 1 cup water.
            </p>
          </div>
        </div>
      </div>

      {/* food review       */}
      <section data-aos="fade-zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" className="overflow-hidden  md:mx-[13%] bg-[url(https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000)] rounded-lg bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Homemade Fuit-Fun gives people ACCESS to variety
            </h2>

            <p className=" max-w-md  text-white/90 md:mt-6 md:text-lg md:leading-relaxed">
              You don’t have to live in a big city to be able to find good
              ethnic food at your disposal. The YouFeed app, the first
              home-cooking app of its kind to launch in the state of Wyoming,
              allows users to find talented, vetted home cooks in their local
              proximity and order meals from them!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
