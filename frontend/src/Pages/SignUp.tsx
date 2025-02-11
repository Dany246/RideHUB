import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { registerUser } from "../../../backend/server/api/api.ts";
import { useNavigate } from "react-router-dom";




  export const SignUp = () => {
    const [loaded, setLoaded] = useState(false);
useEffect(() => {
    setLoaded(true);
    }, []);



    const [form, setForm] = useState({ firstName: '', lastName: '', userName: '', email: '', password: '' })
    const navigate = useNavigate()

  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        await registerUser(form)
        alert('Sikeres regisztráció!')
        navigate('/login')
      } catch (error: any) {
        alert(error.response?.data?.error || 'Hiba történt')
      }
    }

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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-3xl max-w-md text-center">First Name:</h2>
          <input
            className="rounded px-1 text-black"
            type="text"
            placeholder="Enter your First Name"
         
            onChange={handleChange}
            required
          />

          <h2 className="text-3xl max-w-md text-center">Last Name:</h2>
          <input
            className="rounded px-1 text-black"
            type="text"
            placeholder="Enter your Last Name"
            onChange={handleChange}
            required
          />

          <h2 className="text-3xl max-w-md text-center">User Name:</h2>
          <input
            className="rounded px-1 text-black"
            type="text"
            placeholder="Enter your UserName"
            onChange={handleChange}
            required
          />

          <h2 className="text-3xl max-w-md text-center">E-mail:</h2>
          <input
            className="rounded px-1 text-black"
            type="email"
            placeholder="Enter your e-mail"

            onChange={handleChange}
            required
          />

          <h2 className="text-3xl max-w-md text-center">Password:</h2>
          <input
            className="rounded px-1 text-black"
            type="password"
            placeholder="Enter your password"

            onChange={handleChange}
            required
          />

          <button type="submit" className="text-2xl font-extrabold">
            Sign
            <span className="bg-orange-500 text-black px-1 rounded-lg">Up</span>
          </button>
        </form>
      </div>
    </div>
  );
}


