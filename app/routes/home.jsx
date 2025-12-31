import React, { useState, useEffect } from 'react';
import { Code, Trophy, Briefcase, BookOpen, Zap, Terminal, Star, Github, Linkedin, Mail, Coffee } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'Curriculum Vitae: Muhammad Abubakar';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const experiences = [
    {
      title: 'President',
      company: 'Pakathon',
      period: 'January 2025 – Present',
      description: 'Leading organizational initiatives and strategic development',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Model United Nations Coach',
      company: 'Lahore Grammar School',
      period: 'August 2024 – Present',
      description: 'Pedagogical instruction in international relations and diplomatic discourse',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Co-Chief Executive Officer',
      company: 'Inkdrop',
      period: 'March 2024 – January 2025',
      description: 'Executive leadership and operational management',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: 'Lead Programmer',
      company: 'Broken Cookie Studios',
      period: 'August 2020 – January 2021',
      description: 'Software architecture and computational implementation',
      icon: <Code className="w-5 h-5" />
    }
  ];

  const skills = [
    { name: 'Unity & C# Development', level: 95, category: 'Technical Proficiency' },
    { name: 'Game Systems Architecture', level: 90, category: 'Technical Proficiency' },
    { name: 'Rhetoric & Oratory', level: 85, category: 'Cognitive Sciences' },
    { name: 'Organizational Leadership', level: 90, category: 'Cognitive Sciences' },
    { name: 'Analytical Problem-Solving', level: 88, category: 'Cognitive Sciences' },
    { name: 'Classical Arabic Linguistics', level: 85, category: 'Linguistics' }
  ];

  const achievements = [
    { text: 'Valedictorian, Class of 2024', category: 'Academic Distinction' },
    { text: 'Full Academic Scholarship (Merit-Based)', category: 'Academic Distinction' },
    { text: 'PMMC Gold Medal Recipient', category: 'Academic Distinction' },
    { text: 'All-Pakistan Debate Tournament Semi-Finalist', category: 'Oratory Excellence' },
    { text: 'Hafiz-e-Quran (Complete Quranic Memorization)', category: 'Religious Studies' },
    { text: 'Vice President, Information Technology Society', category: 'Leadership' },
    { text: 'Founder, Robotics Club', category: 'Leadership' },
    { text: 'Deputy Head Boy', category: 'Leadership' }
  ];

  const NavButton = ({ section, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center gap-2 px-5 py-2.5 transition-all ${
        activeSection === section
          ? 'text-white underline underline-offset-8 decoration-2'
          : 'text-gray-400 hover:text-white'
      }`}
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-white/20 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg text-white tracking-wide" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Muhammad Abubakar
          </div>
          <div className="flex gap-1">
            <NavButton section="home" icon={Terminal} label="Overview" />
            <NavButton section="experience" icon={Briefcase} label="Experience" />
            <NavButton section="skills" icon={Code} label="Competencies" />
            <NavButton section="achievements" icon={Trophy} label="Distinctions" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          {activeSection === 'home' && (
            <div className="space-y-12 animate-fade-in">
              {/* Header */}
              <div className="border border-white/20 p-10">
                <div className="text-center mb-8">
                  <p className="text-sm uppercase tracking-widest text-white/70 mb-6" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                    {terminalText}<span className="animate-pulse">|</span>
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="flex-shrink-0">
                    <img 
                      src="/avatar.jpeg"
                      alt="Muhammad Abubakar"
                      className="w-40 h-40 border-2 border-white object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div>
                      <h1 className="text-6xl md:text-7xl text-center md:text-left mb-4 text-white" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>
                        Muhammad Abubakar
                      </h1>
                      <p className="text-xl text-white/80 italic text-center md:text-left border-t border-white/20 pt-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                        Computational Sciences • Cognitive Research • Islamic Scholarship
                      </p>
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-white/90 leading-relaxed text-justify" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        An interdisciplinary scholar pursuing concurrent studies in computational sciences and traditional Islamic scholarship. Currently undertaking A-Level coursework in mathematics, physics, and computer science whilst simultaneously completing dual Master's degrees in Islamic Sciences and Classical Arabic Language—demonstrating a commitment to synthesizing technical expertise with humanistic inquiry.
                      </p>
                    </div>
                    
                    <div className="flex gap-4 justify-center md:justify-start pt-4 border-t border-white/20">
                      <a href="https://www.linkedin.com/in/muhammad-abubakar-300939312/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/40 hover:bg-white/10 transition-all">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a href="https://github.com/devplotlib" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/40 hover:bg-white/10 transition-all">
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a href="mailto:mailabubakar04@gmail.com" className="p-3 border border-white/40 hover:bg-white/10 transition-all">
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Metrics */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-white/20 p-8">
                  <h3 className="text-2xl mb-6 text-white border-b border-white/20 pb-3" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>
                    Academic Profile
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 border border-white/10">
                      <div className="text-5xl text-white mb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>10</div>
                      <div className="text-sm text-white/70" style={{ fontFamily: '"Times New Roman", Times, serif' }}>A* & A Grades</div>
                    </div>
                    <div className="text-center p-4 border border-white/10">
                      <div className="text-5xl text-white mb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>5</div>
                      <div className="text-sm text-white/70" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Languages</div>
                    </div>
                    <div className="text-center p-4 border border-white/10">
                      <div className="text-5xl text-white mb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>4</div>
                      <div className="text-sm text-white/70" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Leadership Roles</div>
                    </div>
                    <div className="text-center p-4 border border-white/10">
                      <div className="text-5xl text-white mb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>2</div>
                      <div className="text-sm text-white/70" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Master's Degrees</div>
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 p-8">
                  <h3 className="text-2xl mb-6 text-white border-b border-white/20 pb-3" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>
                    Research Interests
                  </h3>
                  <ul className="space-y-4 text-white/90" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '1.05rem' }}>
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">•</span>
                      <span>Cognitive architectures in game systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">•</span>
                      <span>Computational linguistics and natural language processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">•</span>
                      <span>Rhetoric and persuasion in diplomatic contexts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">•</span>
                      <span>Classical Islamic epistemology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="space-y-10 animate-fade-in">
              <h2 className="text-5xl mb-10 text-white border-b border-white/20 pb-4" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border border-white/20 p-8 hover:border-white/40 transition-all"
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 border border-white/30 text-white">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl text-white mb-2" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>{exp.title}</h3>
                        <p className="text-white/90 mb-2 text-lg" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{exp.company}</p>
                        <p className="text-sm text-white/60 italic mb-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{exp.period}</p>
                        <p className="text-white/80 leading-relaxed text-justify" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '1.05rem', lineHeight: '1.7' }}>{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="space-y-10 animate-fade-in">
              <h2 className="text-5xl mb-10 text-white border-b border-white/20 pb-4" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>
                Core Competencies
              </h2>
              
              {['Technical Proficiency', 'Cognitive Sciences', 'Linguistics'].map(category => (
                <div key={category} className="mb-10">
                  <h3 className="text-3xl mb-6 text-white" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400', fontStyle: 'italic' }}>
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {skills.filter(s => s.category === category).map((skill, index) => (
                      <div key={index} className="border border-white/20 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-white text-lg" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{skill.name}</span>
                          <span className="text-white text-sm" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 h-0.5">
                          <div
                            className="bg-white h-0.5 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border border-white/20 p-8 mt-10">
                <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>Technical Proficiencies</h3>
                <div className="flex flex-wrap gap-4">
                  {['Unity Engine', 'C# Programming', 'React Framework', 'Python', 'Game Design Theory', 'Robotics', 'Diplomatic Protocol'].map((tech, i) => (
                    <span key={i} className="px-5 py-2 border border-white/30 text-white hover:bg-white/10 transition-all" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <div className="space-y-10 animate-fade-in">
              <h2 className="text-5xl mb-10 text-white border-b border-white/20 pb-4" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>
                Honors & Distinctions
              </h2>
              
              {['Academic Distinction', 'Oratory Excellence', 'Religious Studies', 'Leadership'].map(category => (
                <div key={category} className="mb-10">
                  <h3 className="text-3xl mb-6 text-white" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400', fontStyle: 'italic' }}>
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {achievements.filter(a => a.category === category).map((achievement, index) => (
                      <div
                        key={index}
                        className="border border-white/20 p-6 hover:border-white/40 transition-all"
                      >
                        <p className="text-white flex items-start gap-3" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '1.05rem' }}>
                          <span className="text-white mt-1">•</span>
                          <span>{achievement.text}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border border-white/20 p-10 mt-10">
                <h3 className="text-3xl mb-8 text-white border-b border-white/20 pb-4" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>
                  Educational Background
                </h3>
                <div className="space-y-8">
                  <div className="border-l-2 border-white pl-8">
                    <h4 className="text-2xl text-white mb-3" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>Lahore Grammar School</h4>
                    <p className="text-white/90 mb-2 leading-relaxed" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '1.05rem' }}>
                      Advanced Level Examinations: Mathematics, Further Mathematics, Physics, Computer Science
                    </p>
                    <p className="text-sm text-white/60 italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>August 2024 – May 2026</p>
                  </div>
                  <div className="border-l-2 border-white pl-8">
                    <h4 className="text-2xl text-white mb-3" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: '400' }}>Anwaar e Madinah</h4>
                    <p className="text-white/90 mb-2 leading-relaxed" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '1.05rem' }}>
                      Master of Arts in Islamic Sciences • Master of Arts in Classical Arabic Language
                    </p>
                    <p className="text-sm text-white/60 italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>2020 – 2028</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/20 mt-20 py-10 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center text-white/70">
          <p className="mb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            © 2025 Muhammad Abubakar. All rights reserved.
          </p>
          <p className="text-sm text-white/50 italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Computational Sciences • Cognitive Research • Islamic Scholarship
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;