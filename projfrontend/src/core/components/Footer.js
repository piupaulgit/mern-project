import React from 'react'
import '../../styles/Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <p className="text-center mb-0">Designed and Developed with 
            <span className="text-danger heart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </span>by Piu Paul.</p>
        </div>
    )
}

export default Footer
