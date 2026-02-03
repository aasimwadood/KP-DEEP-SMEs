export default function ProjectTeam() {
  const teamMembers = [
    {
      id: 1,
      name: 'Tanzeel Ur Rehman',
      role: 'Project Supervisor',
      institution: 'GPGC Kohat',
      expertise: ['React Native', 'React.js', 'Project Management'],
      contact: '03339636797'
    },
    {
      id: 2,
      name: 'Muhammad Luqman',
      role: 'Technical Lead',
      institution: 'GPGC Kohat',
      expertise: ['ASP.NET Core API', 'MySQL', 'React.js'],
      contact: '03327360332'
    },
    {
      id: 3,
      name: 'Asim Wadood',
      role: 'Mobile Lead',
      institution: 'GPGC Kohat',
      expertise: ['ASP.NET Core API', 'React Native', 'MySQL'],
      contact: '03333083467'
    }
  ];

  const industrySupport = [
    { name: 'KPITB', role: 'Servers & Hosting', details: 'Tier-III Data Center' },
    { name: 'Bank of Khyber', role: 'Banking Integration', details: 'API Access & Support' },
    { name: 'SMEDA', role: 'SME Outreach', details: 'Cluster Mapping & Promotion' },
    { name: 'FBR', role: 'Tax Integration', details: 'API Sandbox Access' },
    { name: 'FPCCI-KP', role: 'Vendor Network', details: 'Market Access & Empanelment' }
  ];

  return (
    <div className="project-team-page">
      <h1>Project Team & Implementation</h1>
      
      <div className="team-section mt-6">
        <h2>Core Technical Team</h2>
        <div className="team-grid mt-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="card team-card">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="institution">{member.institution}</p>
              <div className="expertise-tags mt-2">
                {member.expertise.map((skill, index) => (
                  <span key={index} className="expertise-tag">{skill}</span>
                ))}
              </div>
              <p className="contact mt-2">📞 {member.contact}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="industry-section mt-8">
        <h2>Industry Support</h2>
        <div className="support-grid mt-4">
          {industrySupport.map((partner, index) => (
            <div key={index} className="card support-card">
              <h3>{partner.name}</h3>
              <p className="role">{partner.role}</p>
              <p className="details">{partner.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="requirements-section mt-8 card">
        <h2>Support Required</h2>
        <ul className="requirements-list">
          <li>Dedicated KPITB technical liaison officer</li>
          <li>FBR/KPRA API documentation & sandbox access</li>
          <li>Bank of Khyber developer portal access</li>
          <li>Training venues for Digital Implementation Consultants</li>
          <li>Data Protection Agreement templates</li>
        </ul>
      </div>
    </div>
  );
}