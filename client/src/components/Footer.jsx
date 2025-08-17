import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="container py-[2rem] text-center label-text-3 font-tertiary text-black flex-col flex">
            <p>© {year} <a href="https://www.rayluna.dev/" target="_blank" className='text-black'>rayluna.dev</a></p>
        </div>
    </footer>
  )
}

export default Footer;