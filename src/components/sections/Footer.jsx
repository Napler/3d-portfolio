import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-info'>
            <p>&copy; 2024 Bechir Dhouibi. All rights reserved.</p>
          </div>
          <div className='footer-socials'>
            <a 
              href="https://www.instagram.com/dhouibbechir?igsh=cXJwbmU2dmd4ZGY5&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className='social-link'
            >
              <img src="/images/insta.png" alt="Instagram" />
            </a>
            <a 
              href="https://github.com/your_username" 
              target="_blank" 
              rel="noopener noreferrer"
              className='social-link'
            >
              <img src="/images/logos/git.svg" alt="GitHub" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhouib-bechir" 
              target="_blank" 
              rel="noopener noreferrer"
              className='social-link'
            >
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a 
              href="https://www.facebook.com/bechir.dhouib.73" 
              target="_blank" 
              rel="noopener noreferrer"
              className='social-link'
            >
              <img src="/images/fb.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 