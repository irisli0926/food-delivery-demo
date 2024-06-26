import Link from "next/link";

export default function Header() {
    return (
    <>
      <header className="flex items-center justify-between"> 
        {/* text color; bolded; fontsize */}
        <Link className="text-primary font-bold text-3xl" href={'/'}>SIMS4 Delivery</Link>
        {/* spread evenly; gap 5 btw */}
        <nav className="flex items-center gap-6 text-gray-500">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Menu</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Contact</Link>
          {/* special bg color for login */}
          {/* <Link href={''} className="bg-primary rounded-full text-white px-8 py-3">Login</Link> */}
        </nav>
        <nav className="flex items-center gap-4 text-gray-500">
          <Link href={'/login'} className="">Login</Link>
          <Link href={'/register'} className="bg-primary rounded-full text-white px-7 py-3">
            Register
          </Link>


        </nav>
      </header>
    
    </>
    )

}