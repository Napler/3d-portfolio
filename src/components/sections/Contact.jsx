import React, { useState } from 'react'
import TitleHeader from '../titleheader'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Float, Environment, OrbitControls } from '@react-three/drei'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [isSlidingUp, setIsSlidingUp] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showSuccessNotification = (message) => {
    console.log('showSuccessNotification called with:', message)
    setNotificationMessage(message)
    setShowNotification(true)
    setIsSlidingUp(false)
    console.log('Notification state set to true')
    setTimeout(() => {
      console.log('Starting slide-up animation')
      setIsSlidingUp(true)
      setTimeout(() => {
        console.log('Hiding notification after slide-up')
        setShowNotification(false)
        setIsSlidingUp(false)
      }, 500) // Wait for slide-up animation to complete
    }, 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    console.log('All env vars:', import.meta.env)
    console.log('Form Data:', formData)
    setIsLoading(true)
    console.log('Loading state set to true')
    
    // Real EmailJS sending
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email sent successfully:', result)
      setIsLoading(false)
      setFormData({ name: '', email: '', message: '' })
      showSuccessNotification('Message sent successfully! 🎉')
    }, (error) => {
      console.log('Email sending failed:', error)
      setIsLoading(false)
      setFormData({ name: '', email: '', message: '' })
      showSuccessNotification('Failed to send message. Please try again.')
    });
  }

  return (
    <div id='contact' className='flex-center section-padding'>
      {/* Success Notification Popup */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '9999',
          backgroundColor: '#10b981',
          color: 'white',
          padding: '16px',
          margin: '16px',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          transition: 'transform 0.5s ease-in-out',
          transform: isSlidingUp ? 'translateY(-100%)' : 'translateY(0)'
        }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>✓</span>
          <span style={{ fontWeight: '500' }}>{notificationMessage}</span>
        </div>
      )}
      {console.log('showNotification state:', showNotification)}

      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title='Get In Touch' sub="Let's work together! 🚀" />
        
        <div className='contact-layout mt-16'>
          {/* Left Side - Contact Form */}
          <div className='contact-form-wrapper'>
            <form onSubmit={handleSubmit} className='contact-form'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='your.email@example.com'
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project...'
                  rows={5}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <button type='submit' className='submit-btn' disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Side - 3D Model */}
          <div className='contact-model-wrapper'>
            <Canvas style={{ width: '100%', height: '100%' }}>
              <ambientLight intensity={0.4} />
              <directionalLight 
                position={[5, 5, 5]} 
                intensity={1.2} 
                castShadow 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <directionalLight 
                position={[-5, 3, 2]} 
                intensity={0.8} 
                color="#62e0ff"
              />
              <directionalLight 
                position={[3, -2, 4]} 
                intensity={0.7} 
                color="#ff6b35"
              />
              <pointLight 
                position={[0, 2, 0]} 
                intensity={0.5} 
                color="#ff8c42"
              />
              {/* Cool spotlight effects */}
              <spotLight
                position={[0, 5, 0]}
                angle={0.3}
                penumbra={0.5}
                intensity={0.8}
                color="#00ffff"
                castShadow
              />
              <spotLight
                position={[5, 0, 5]}
                angle={0.4}
                penumbra={0.3}
                intensity={0.6}
                color="#ff00ff"
                castShadow
              />
              <pointLight 
                position={[-3, 1, 3]} 
                intensity={0.4} 
                color="#ffff00"
                distance={8}
              />
              <Environment preset='city' />
              <OrbitControls 
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                minDistance={2}
                maxDistance={10}
                autoRotate={false}
                autoRotateSpeed={1}
              />
              <Float 
                speed={3} 
                rotationIntensity={0} 
                floatIntensity={1.2}
                floatingRange={[-0.4, 0.4]}
              >
                <group>
                  <primitive 
                    object={useGLTF('/models/letter.glb').scene} 
                    scale={2.2} 
                    position={[0, 0, 0]} 
                    rotation={[0, Math.PI / 4, 0]}
                  />
                </group>
              </Float>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact