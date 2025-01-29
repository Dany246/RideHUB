export const Login = () => {
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-neutral-950 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
        <h1 className="text-3xl font-extrabold">Log<span className="bg-orange-500 text-black px-1 rounded-lg">in</span></h1> <br />
        <h2 className="text-3xl max-w-md text-center">E-mail: </h2><input className="rounded px-1" type="email" placeholder="Enter your e-mail" required />
        <h2 className="text-3xl max-w-md text-center">Password:</h2> <input className="rounded px-1" type="password" placeholder="Enter your password" required />
      </div>
      
    </div> 
     
    </>
      );
    };
    
