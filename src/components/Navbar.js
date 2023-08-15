import DarkMode from './DarkMode/DarkMode'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-40 navbar'>
      <div className='items-center justify-between w-full p-8 px-16 mv:hidden md:flex'>
        <DarkMode />
        <ul className='flex items-center space-x-7 font-poppins cursor-pointer'>
          <li className='hover-link'>About</li>
          <li className='hover-link'>Writing</li>
          <li className='hover-link'>Projects</li>
          <li className='py-1 px-3 bg-[#E8A0B2] text-[#061E3E] rounded-md hover:rounded-[20px] ease-in duration-150'>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}
