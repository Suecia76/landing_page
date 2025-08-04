import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src="/assets/finz.png" alt="Logo de finzs" />

      <div>
        <ul className='social-media'>
            <li className='social-media__item'>
                <a className='social-media__link' href="https://www.instagram.com/finz.app/">
                    <img className='social-media__icon' src="/assets/instagram.png" alt="Instagram" /> 
                </a>
            </li>
            <li className='social-media__item'>
                <a className='social-media__link' href="https://www.x.com/">
                    <img className='social-media__icon' src="/assets/x.png" alt="X" /> 
                </a>
            </li>
            <li className='social-media__item'>
                <a className='social-media__link' href="https://www.discord.com/">
                    <img className='social-media__icon' src="/assets/discord.png" alt="Instagram" /> 
                </a>
            </li>
            <li className='social-media__item'>
                <a className='social-media__link' href="https://www.tiktok.com/">
                    <img className='social-media__icon' src="/assets/tiktok.png" alt="Instagram" /> 
                </a>
            </li>
        </ul>
      </div>
    </footer>
  )
}

export {Footer}
