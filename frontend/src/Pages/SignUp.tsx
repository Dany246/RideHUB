import {  X } from 'lucide-react';
import { useEffect, useState } from 'react';

export const SignUp = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          window.location.href = "/";
        }
      }}
    >
      <div 
        className={`relative bg-neutral-950 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 transition-all duration-1000 transform ${
          loaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <a href="/" className="absolute top-4 right-5 text-white">
          <X size={25} strokeWidth={1.5} />
        </a>

        <h2 className="text-3xl max-w-md text-center">First Name: </h2>
        
        <input className="rounded px-1 text-black" type="text" placeholder="Enter your First Name" required />
        
        <h2 className="text-3xl max-w-md text-center">Last  Name: </h2>
        
        <input className="rounded px-1 text-black" type="text" placeholder="Enter your Last Name" required />

        <h2 className="text-3xl max-w-md text-center">User Name: </h2>
        
        <input className="rounded px-1 text-black" type="text" placeholder="Enter your UserName" required />
        
        <h2 className="text-3xl max-w-md text-center">E-mail: </h2>
      
        <input className="rounded px-1 text-black" type="email" placeholder="Enter your e-mail" required />

        <h2 className="text-3xl max-w-md text-center">Password: </h2>
      
        <input className="rounded px-1 text-black" type="password" placeholder="Enter your password" required />
        
        <h2 className="text-3xl max-w-md text-center mt-3">Password again:</h2>

        <input className="rounded text-black px-1" type="password" placeholder="Enter your password again" required />



        
        <button className="text-2xl font-extrabold">
          Sign<span className="bg-orange-500 text-black px-1 rounded-lg">Up</span>
        </button>
      </div>
    </div>
  );
};
