import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>PRINCES</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label >News Letter</label>
        
        <div>
          <input type="text" placeholder='email' />
          <button>Subscribe</button>
        </div>
        <p>Sign up with your email address to recieve news and updates!</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer