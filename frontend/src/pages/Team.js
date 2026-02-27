import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import { ChevronDown, ChevronUp, User, Target, Lightbulb, Award } from 'lucide-react';

const teamMembers = [
  {
    id: 'lucas',
    name: 'Lucas Ansel',
    role: 'Digital Strategy & Industrial Web Architecture',
    description: 'Specializes in digital strategy applied to industrial contexts. Lucas architects web ecosystems that function as decision support systems, not marketing tools. His approach combines deep understanding of industrial decision-making with modern digital infrastructure.',
    decisionScope: 'Digital infrastructure strategy, website architecture, content systems, decision pathway optimization.',
    contribution: 'System architecture design, decision-grade website frameworks, industrial content strategy, measurement protocols.',
    expertise: ['Industrial web architecture', 'Decision support systems', 'Content strategy for B2B', 'Conversion optimization', 'Analytics & measurement']
  },
  {
    id: 'ayoub',
    name: 'Ayoub Bouzalmad',
    role: 'Technical Implementation & Data Systems',
    description: 'Brings technical depth to industrial digital projects. Ayoub ensures that strategic concepts translate into robust, scalable implementations. His focus is on data integrity, system reliability, and technical excellence.',
    decisionScope: 'Technical architecture, data systems, implementation quality, system integration.',
    contribution: 'Backend development, data pipeline design, API architecture, quality assurance, technical documentation.',
    expertise: ['Full-stack development', 'Data engineering', 'System integration', 'Technical documentation', 'Quality assurance']
  },
  {
    id: 'david',
    name: 'David Ansel',
    role: 'Industrial Operations & Strategic Advisory',
    description: 'Decades of experience in industrial operations provide the foundation for strategic credibility. David bridges the gap between digital capabilities and real-world industrial constraints, ensuring solutions are grounded in operational reality.',
    decisionScope: 'Industrial operations, strategic positioning, stakeholder alignment, operational feasibility.',
    contribution: 'Operational insight, industry credibility, strategic validation, stakeholder communication, risk assessment.',
    expertise: ['Industrial operations', 'Strategic advisory', 'Stakeholder management', 'Risk assessment', 'Business development']
  }
];

const TeamMemberCard = ({ member, isExpanded, onToggle }) => {
  return (
    <div className="team-card" data-testid={`team-card-${member.id}`}>
      <div 
        className="team-card-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      >
        <div className="team-avatar">
          <User size={32} />
        </div>
        <div className="team-info">
          <h3 className="team-name">{member.name}</h3>
          <p className="team-role">{member.role}</p>
        </div>
        <div className="team-expand-icon">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="team-card-content" data-testid={`team-details-${member.id}`}>
          <div className="team-section">
            <div className="team-section-header">
              <User size={16} className="team-section-icon" />
              <h4 className="team-section-title">Description</h4>
            </div>
            <p className="team-section-text">{member.description}</p>
          </div>
          
          <div className="team-section">
            <div className="team-section-header">
              <Target size={16} className="team-section-icon" />
              <h4 className="team-section-title">Decision Scope</h4>
            </div>
            <p className="team-section-text">{member.decisionScope}</p>
          </div>
          
          <div className="team-section">
            <div className="team-section-header">
              <Lightbulb size={16} className="team-section-icon" />
              <h4 className="team-section-title">Contribution</h4>
            </div>
            <p className="team-section-text">{member.contribution}</p>
          </div>
          
          <div className="team-section">
            <div className="team-section-header">
              <Award size={16} className="team-section-icon" />
              <h4 className="team-section-title">Core Expertise</h4>
            </div>
            <ul className="team-expertise-list">
              {member.expertise.map((skill, index) => (
                <li key={index} className="team-expertise-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Team = () => {
  const { t } = useTranslation();
  const [expandedMember, setExpandedMember] = useState(null);

  const handleToggle = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <div className="page-container" data-testid="team-page">
      <div className="page-header">
        <h1 className="page-title">{t('team.title')}</h1>
        <p className="page-subtitle">{t('team.subtitle')}</p>
      </div>

      <DataPanel className="mb-6">
        <p className="intro-text">{t('team.intro')}</p>
      </DataPanel>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            isExpanded={expandedMember === member.id}
            onToggle={() => handleToggle(member.id)}
          />
        ))}
      </div>

      <DataPanel title={t('team.collectiveApproach')} className="mt-6">
        <p className="reading-text">{t('team.approachText')}</p>
      </DataPanel>
    </div>
  );
};

export default Team;
