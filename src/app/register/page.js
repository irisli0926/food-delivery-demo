"use client"
import Image from "next/image";
import { useState } from "react";
export default function RegPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault(); //so that not submitting a form
        //send a request to our register route inside API >> fetch or axios
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {'Content-Type': 'application/json'},
        });
    }
    return (
        // <div>Register</div>
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            {/* registration form */}
            <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
                <input type="name" placeholder="Name" 
                value={name} onChange={event => setName(event.target.value)}/>
                <input type="email" placeholder="Email"
                value={email} onChange={event => setEmail(event.target.value)}/>
                <input type="password" placeholder="Password"
                value={password} onChange={event => setPassword(event.target.value)}/>
                <button type ="submit">Register Now</button>
                <div className="my-4 text-center text-gray-600">
                    or login with provider
                </div>

                <div>
                    <button className="flex gap-3 justify-center">
                        <Image src={'/images/google.png'} width={30} height={30} alt="login with google" />
                        Login with Google
                    </button>
                </div>
                
            </form>

        </section>

    );
}