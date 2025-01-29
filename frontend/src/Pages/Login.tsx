export const Login = () => {
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-black rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
        <h1 className="text-3xl font-extrabold">Login</h1> <br />
        <h2 className="text-3xl  max-w-md text-center">E-mail: </h2><input type="email" placeholder="Enter your e-mail" required />
        <h2 className="text-3xl  max-w-md text-center">Password:</h2> <input type="password" placeholder="Enter your password" required />
      </div>
      
    </div> 
     
    </>
      );
    };
    
