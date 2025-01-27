// import { api } from "./lib/client"
// import { useQuery } from "@tanstack/react-query"

// type Message = {
//   message: string
// }

// const{data, error} = useQuery({
//   queryKey: ["hello"],
//   queryFn: async () => {
//     // api.base route egyenlő a backendben megadott routal, ami a következő: /api/base/
//     // api.base.$get() = GET kérés a http://localhost:3000/api/base/ cimre
//     // type safe dolgok miatt a route utvonalak az api objektumon belul érhetőek el pl.:api.base

//     const response = await api.base.$get()
//     if(!response.ok){
//       throw new Error(response.statusText)
//     }

//     const data = await response.json()
//     return data as Message

//   }

// })

// if(error){
//   return <pre>{JSON.stringify(error, null, 2)}</pre>
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cars } from "./Pages/Cars";
import { Drivers } from "./Pages/Drivers";
import { Feedback } from "./Pages/Feedback";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import { Order } from "./Pages/Order";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <nav className="bg-[#1e1613e5]">
          <div className="flex items-center justify-between py-6 px-[10%] lg:justify-between">
            <div className="flex items-center justify-center">
              <a href="/">
                <h1 className="text-3xl font-bold text-white ">
                  Ride
                  <span className="px-2 text-black bg-orange-500 rounded-lg">
                    Hub
                  </span>
                </h1>
              </a>
            </div>
            <div className="relative lg:hidden">
              <button
                className="flex items-center justify-center w-10 h-10 text-black bg-orange-500 rounded-full"
                onClick={() =>
                  document
                    .querySelector("#nav-items")
                    ?.classList.toggle("hidden")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              <ul
                className="hidden absolute top-10 right-0 space-y-2 bg-[#1e1613e5] p-4 rounded-lg min-w-[125px] font-medium"
                id="nav-items"
              >
                <div className="flex flex-col mb-4 text-center gap-[6px] min-h-[40%]">
                  <Link to="/signup">
                    <li className="duration-300 text-md hover:text-lg">Sign up</li>
                  </Link>
                  <Link to="login">
                    <li className="px-4 text-black duration-300 bg-orange-500 rounded-lg text-md hover:text-lg">
                      Login
                    </li>
                  </Link>
                </div>
                <Link to="/drivers">
                  <li className="duration-700 text-md hover:ml-2">Drivers</li>
                </Link>
                <Link to="/cars">
                  <li className="duration-700 text-md hover:ml-2">Cars</li>
                </Link>
                <Link to="/feedback">
                  <li className="duration-700 text-md hover:ml-2">Feedback</li>
                </Link>
              </ul>
            </div>
            <div className="hidden list-none lg:flex lg:items-center lg:justify-between lg:space-x-10 lg:mr-10">
              <div className="flex gap-8 mr-10">
                <Link to="/drivers">
                  <li> Drivers</li>
                </Link>
                <Link to="/cars">
                  <li>Cars</li>
                </Link>
                <Link to="/feedback">
                  <li> Feedback </li>
                </Link>
              </div>
              <Link to="/signup">
                <li>Sign up</li>
              </Link>
              <Link to="login">
                <li className="px-4 text-black bg-orange-500 rounded-lg">
                  Login
                </li>
              </Link>
            </div>
          </div>
        </nav>

        <hr className="w-[96%] h-1 mx-auto my-6 bg-gray-100 border-0 rounded dark:bg-stone-900" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
