import { KeySquare, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { loginUser } from "../../../backend/server/api/api.ts";
import { useNavigate } from "react-router-dom";


export  const Login = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      setLoaded(true);
    }, []);



    const [form, setForm] = useState({ email: '', password: '' })
    const navigate = useNavigate()
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        await loginUser(form)
        alert('Sikeres bejelentkezés!')
        navigate('/dashboard')
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
        }`} onSubmit={handleSubmit}
      >
        <a href="/" className="absolute top-4 right-5 text-white">
          <X size={25} strokeWidth={1.5} />
        </a>

        <h2 className="text-3xl max-w-md text-center">E-mail: </h2>
        <Mail
          className="absolute left-[3.4rem] top-[6.1rem] text-orange-500"
          size={20}
          strokeWidth={1}
        />
        <input
          className="rounded px-1 text-black"
          type="email"
          placeholder="Enter your e-mail"
           onChange={handleChange}
          required
        />

        <h2 className="text-3xl max-w-md text-center mt-3">Password:</h2>
        <KeySquare
          className="text-orange-500 absolute left-[3.5rem] top-[13.1rem]"
          size={20}
          strokeWidth={1}
        />
        <input
          className="rounded text-black px-1"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />

        <button className="text-2xl font-extrabold" type="submit">
          Log
          <span className="bg-orange-500 text-black px-1 rounded-lg">In</span>
        </button>
      </div>
    </div>
  );
};

