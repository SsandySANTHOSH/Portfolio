import React, { useState } from 'react';
import Close from "../assets/close.svg";
import { Zoom } from "react-awesome-reveal";
import parse from "html-react-parser"

const PortfolioItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <div className='portfolio__item'>
            <Zoom duration={500} triggerOnce="true">
                <img src={img} alt="..." className="portfolio__img" />
            </Zoom>
            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">
                    {title}
                </h3>
            </div>
            {
                modal && (
                    <div className="portfolio__modal">
                        <div className="portfolio__modal-content">
                            <img src={Close} alt="..." className="modal__close" onClick={toggleModal} />
                            <h3 className='modal__title'>
                                {title}
                            </h3>
                            <ul className="modal__list grid">
                                {details.map(({ icon, title, desc }, index) => {
                                    return (
                                        <li className="modal__item" key={index}>
                                            <span className='item__icon'>
                                                {icon}
                                            </span>
                                            <div>
                                                <span className='item__title'>
                                                    {title}
                                                </span>
                                                <span className="item__details">
                                                    {title === "Preview : " || title === "Code : " ? parse(`<a href="${desc}" target="_blank">${desc}</a>`) : desc}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <Zoom delay={300} duration={500} triggerOnce="true">
                                <img src={img} alt="..." className="modal__img" />
                            </Zoom>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PortfolioItem