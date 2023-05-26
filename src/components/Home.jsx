import React from "react";
import {
  ShoppingCartIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigation } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../Animation/reading.json";
import Spinner from "./LoadingSpinner";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === true) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="w-3/4 mx-auto my-24 md:flex sm:justify-center md:justify-between items-center">
      {/* Home Description  */}
      <div>
        <span className="bg-yellow-300 p-1 rounded-md font-semibold">
          ON SALE!
        </span>
        <h1 className="mt-5 text-4xl font-bold">A reader lives a</h1>
        <h1 className="mt-5 text-4xl font-bold">
          thousand lives <span className="text-blue-400">before he dies</span>
        </h1>
        <p className="my-5 w-30">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div>
          <Link
            className="inline-flex justify-center items-center mt-6 bg-blue-700 rounded-md p-3 text-white font-semibold me-5"
            to="/books"
          >
            <span>Visit Store </span>
            <ShoppingCartIcon className="w-6 h-6"></ShoppingCartIcon>
          </Link>
          <Link to="/about" className="inline-flex  items-center">
            <span>Learn More</span>
            <ArrowLongRightIcon className="w-6 h-5"></ArrowLongRightIcon>
          </Link>
        </div>
      </div>
      {/* Animation  */}
      <div className="mt-10 md:mt-0">
        <Lottie animationData={animation} loop={true} />
      </div>
    </div>
  );
};

export default Home;
