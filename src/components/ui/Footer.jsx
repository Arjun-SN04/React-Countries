import React from 'react'
import footerData from "../../api/footerApi.json"
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
const footerIcon = {
  MdPlace: <MdPlace />,
  IoCallSharp: <IoCallSharp />,
  TbMailPlus: <TbMailPlus />,
};

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='grid container grid-three-cols ' >
        {footerData.map((data, idx) => {
          const { icon, title, details } = data;
          return (
            <div className="footer-contact" key={idx}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  )
}

export default Footer