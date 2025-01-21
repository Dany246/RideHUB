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
import { District } from "./Pages/District";
import {SignUp} from "./Pages/SignUp";
import {Login} from "./Pages/Login"

const App: React.FC = () => {
  return (
    <>
     
      <Router>
        <nav className="pl-8 bg-[#1e1613e5]">
          <div className="flex items-center justify-between py-6 px-12">
              <a href="/">
                <h1 className="text-3xl font-bold text-white ">
                  Ride
                  <span className="bg-orange-500 text-black px-2 rounded-lg">
                    Hub
                  </span>
                </h1>
              </a>
            <Link to="/">
              {" "}
             
            </Link>
            <ul className="inline-flex space-x-8 ">
              <li>
                <Link to="/drivers"> Drivers</Link>
              </li>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
              <li>
                <Link to="/feedback"> Feedback </Link>
              </li>
              <li>
                <Link to="/district"> District </Link>
              </li>
            </ul>
              <ul className="inline-flex space-x-2  text-lg">
                <Link to="/signup">
                  <li>Sign up</li>
                </Link>
                <Link to="login">
                  <li className="bg-orange-500 text-black px-4 rounded-lg">Login</li>
                </Link>
              </ul></div>
        </nav>
        <hr className="w-[96%] h-1 mx-auto my-6 bg-gray-100 border-0 rounded dark:bg-stone-900" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/district" element={<District />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
