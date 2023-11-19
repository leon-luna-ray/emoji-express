import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="container py-[2rem] text-center text-[0.875rem] font-[200] flex-col flex">
            <span>© {year} <a href="https://www.rayluna.dev/" target="_blank" className='underline'>Ray Luna</a></span>
        </div>
    </footer>
  )
}

export default Footer;