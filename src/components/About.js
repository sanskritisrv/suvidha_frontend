import React from 'react';
import LoginHeader from './LoginHeader';

function About() {
  return (
    <>
      <LoginHeader />
      <div>
        <div style={{ height: '5px', backgroundColor: '#f2b705', width: '100%', marginTop: '60px' }}></div>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Learn About Us</h2>
          <h3>Suvidha Foundation (Suvidha Mahila Mandal)</h3>
          <p>
            Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship, and the scope to volunteer. Through these programs, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equips them for the unforeseen future.
          </p>

          <h3>Mission</h3>
          <ul>
            <li><strong>Imparting Education:</strong> Suvidha Foundation strives to bridge the educational gap by providing access to quality education, particularly for underprivileged children and those facing financial challenges.</li>
            <li><strong>Empowering Communities:</strong> We aim to empower individuals and communities through social awareness campaigns, healthcare initiatives, and vocational training programs.</li>
            <li><strong>Building a Sustainable Future:</strong> The foundation actively promotes environmental sustainability through tree plantation drives and fostering greener practices.</li>
          </ul>

          <h3>Vision</h3>
          <p>
            Suvidha Foundation envisions equal opportunities, quality education, and a sustainable future.
          </p>

          <h3>Key Activities</h3>
          <ul>
            <li>Education: Scholarships, internships, and mentorship programs.</li>
            <li>Social Awareness: Campaigns on hygiene, healthcare, and sustainability.</li>
            <li>Healthcare: Affordable, quality healthcare access.</li>
            <li>Environment: Tree plantation drives for sustainability.</li>
            <li>Women Empowerment: Skill development and support initiatives.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
