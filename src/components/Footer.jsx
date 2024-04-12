import React from 'react'
import { footerLinks } from '../constants'
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
      <div className="footer-container">
          <p className="IconType">
            <AiFillLinkedin className="ml-4" color="#0077B5" />
            <a href={'https://www.linkedin.com/in/aryan-singh-b01832193/'} className="ml-2" >About Us</a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer