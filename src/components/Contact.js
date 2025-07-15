import React from 'react';
import LoginHeader from './LoginHeader';

function Contact() {
  const phone = '+91 7620086320';
  const email = 'info@suvidhafoundationedutech.org';

  return (
    <>
      <LoginHeader />
      <div>
        <div style={{ height: '5px', backgroundColor: '#f2b705', width: '100%', marginTop: '60px' }}></div>
        <div style={{ padding: '20px' }}>
          <h2>Contact Page</h2>
          <div style={{ marginTop: '20px', fontSize: '16px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#222831" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
              </svg>
              {phone}
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#222831" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-9l8 6 8-6v9H4z"/>
              </svg>
              {email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
