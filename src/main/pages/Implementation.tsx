export default function Implementation() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Platform Development',
      duration: 'Months 1-9',
      activities: [
        'Web Portal & Mobile App Development',
        'KPITB Data Center Setup',
        'Software Vendor Empanelment'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Pilot Launch',
      duration: 'Months 10-18',
      activities: [
        '300 SMEs Onboarding',
        'Regulatory Sandbox Implementation',
        'Bank Integration Testing'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Provincial Scale-up',
      duration: 'Months 19-30',
      activities: [
        '1,200 Additional SMEs',
        'Full Banking Integration',
        'Tax System Integration'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Sustainability',
      duration: 'Months 31-36',
      activities: [
        'Impact Evaluation',
        'Transition to Commercial Model',
        'Knowledge Transfer'
      ]
    }
  ];

  return (
    <div className="implementation-page">
      <h1>Implementation Roadmap</h1>
      <p className="subtitle">36-Month Strategic Plan for SME Digital Transformation</p>

      <div className="timeline mt-8">
        {phases.map((phase) => (
          <div key={phase.phase} className="timeline-phase card">
            <div className="phase-header">
              <div className="phase-number">{phase.phase}</div>
              <h3>{phase.title}</h3>
              <span className="duration">{phase.duration}</span>
            </div>
            <ul className="activities-list">
              {phase.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="metrics-section mt-8">
        <h2>Key Performance Indicators</h2>
        <div className="metrics-grid mt-4">
          <div className="metric-card card">
            <div className="metric-value">1,500+</div>
            <div className="metric-label">SMEs Digitized</div>
          </div>
          <div className="metric-card card">
            <div className="metric-value">300+</div>
            <div className="metric-label">Loan Applications</div>
          </div>
          <div className="metric-card card">
            <div className="metric-value">25%</div>
            <div className="metric-label">Inventory Reduction</div>
          </div>
          <div className="metric-card card">
            <div className="metric-value">PKR 450M</div>
            <div className="metric-label">Annual Tax Impact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
