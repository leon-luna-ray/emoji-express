import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className="container py-[2rem] text-center text-[0.875rem] font-[200] flex-col flex">
            <span>🚧 This app in in development 🚧</span>
            <span>© {year} <a href="https://www.rayluna.dev/" target="_blank" className='text-yellow-300 hover:underline'>Ray Luna</a></span>
        </div>
    </footer>
  )
}

export default Footer