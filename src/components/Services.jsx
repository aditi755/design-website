import React from 'react'
import './ServicesStyle.css'
import { FiFigma } from "react-icons/fi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";
const Services = () => {
  return (
    <div className="services">
        <div className="services-title">
            WHERE MOST DESIGNERS GO WRONG AND YOU DONT HAVE TO
        </div>

        <div className="services-card">
            <div className="services-card1">
            <FiFigma style={{fontSize: "50px", marginLeft: "10px"}}/>
                <h4 className="title">Focus only on visuals</h4>
                <div className="para">Some designers focus only on the visual aspects, ignoring important steps like user research, leading to less effective designs</div>
            </div>
            <div className="services-card2">
            <HiOutlineWrenchScrewdriver  style={{fontSize: "50px", marginLeft: "10px"}}/>
                <h4 className="title">Lack of freelancing skills</h4>
                <div className="para">Freelancers often struggle with soft skills such as pricing, organizing projects, and communicating with clients</div>
            </div>
            <div className="services-card3">
            <MdStarOutline  style={{fontSize: "50px", marginLeft: "10px"}} />
                <h4 className="title">No personal brand</h4>
                <div className="para">Some designers focus only on the visual aspects, ignoring important steps like user research, leading to less effective designs</div>
            </div>
        </div>
    </div>
  )
}

export default Services