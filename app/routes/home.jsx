import React, { useState, useEffect } from 'react';
import { Code, Trophy, Briefcase, BookOpen, Zap, Terminal, Star, Github, Linkedin, Mail, Coffee } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'whoami > Muhammad Abubakar';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const experiences = [
    {
      title: 'President',
      company: 'Pakathon',
      period: 'Jan 2025 - Present',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'MUN Coach',
      company: 'Lahore Grammar School',
      period: 'Aug 2024 - Present',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Co-Chief Executive Officer',
      company: 'Inkdrop',
      period: 'Mar 2024 - Jan 2025',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Lead Programmer',
      company: 'Broken Cookie Studios',
      period: 'Aug 2020 - Jan 2021',
      icon: <Code className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const skills = [
    { name: 'Unity & C#', level: 95, icon: '[GAME]' },
    { name: 'Game Development', level: 90, icon: '[DEV]' },
    { name: 'Public Speaking', level: 85, icon: '[TALK]' },
    { name: 'Leadership', level: 90, icon: '[LEAD]' },
    { name: 'Problem Solving', level: 88, icon: '[SOLVE]' },
    { name: 'Arabic', level: 85, icon: '[LANG]' }
  ];

  const achievements = [
    '[AWARD] Valedictorian \'24',
    '[SCHOLARSHIP] 100% Scholarship (Academic Excellence)',
    '[MEDAL] PMMC Gold Medal',
    '[DEBATE] All-Pakistan Debate Semi-Finalist',
    '[QURAN] Hafiz-e-Quran',
    '[POSITION] VP IT Society',
    '[FOUNDER] Founder Robotics Club',
    '[LEADERSHIP] Deputy Head Boy'
  ];

  const NavButton = ({ section, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center gap-2 px-4 py-2 rounded font-mono transition-all ${
        activeSection === section
          ? 'bg-green-500 text-black font-bold'
          : 'bg-gray-900 text-green-400 hover:bg-gray-800 border border-green-500/30'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Space Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-green-500/30 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold font-mono text-green-400">
            &gt; MA.dev_
          </div>
          <div className="flex gap-2">
            <NavButton section="home" icon={Terminal} label="Home" />
            <NavButton section="experience" icon={Briefcase} label="Experience" />
            <NavButton section="skills" icon={Code} label="Skills" />
            <NavButton section="achievements" icon={Trophy} label="Achievements" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          {activeSection === 'home' && (
            <div className="space-y-8 animate-fade-in">
              {/* Terminal Header */}
              <div className="bg-gray-900 rounded border border-green-500/30 p-6 font-mono shadow-lg shadow-green-500/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-gray-500 text-sm">bash</span>
                </div>
                <div className="text-green-400">
                  $ {terminalText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              {/* Main Intro with Avatar */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-start gap-6">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-25 group-hover:opacity-75 transition"></div>
                      <img 
                        src="/avatar.jpeg"
                        alt="Muhammad Abubakar"
                        className="relative w-32 h-32 rounded-full border-2 border-green-500 object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
                    </div>
                    <div>
                      <h1 className="text-5xl md:text-6xl font-bold font-mono">
                        Muhammad
                        <br />
                        <span className="text-green-400">
                          Abubakar
                        </span>
                      </h1>
                    </div>
                  </div>
                  
                  <p className="text-xl text-green-400 font-mono">
                    &gt; Code. Lead. Inspire. Repeat.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    A unique blend of tech wizardry and spiritual depth. Currently mastering A-Levels while simultaneously pursuing dual Master's degrees in Islamic Sciences and Arabic. Because why choose one passion when you can excel at all?
                  </p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com/in/muhammad-abubakar" className="p-3 bg-gray-900 rounded border border-green-500/30 hover:bg-green-500/10 hover:border-green-500 transition-all">
                      <Linkedin className="w-5 h-5 text-green-400" />
                    </a>
                    <a href="https://github.com" className="p-3 bg-gray-900 rounded border border-green-500/30 hover:bg-green-500/10 hover:border-green-500 transition-all">
                      <Github className="w-5 h-5 text-green-400" />
                    </a>
                    <a href="mailto:contact@example.com" className="p-3 bg-gray-900 rounded border border-green-500/30 hover:bg-green-500/10 hover:border-green-500 transition-all">
                      <Mail className="w-5 h-5 text-green-400" />
                    </a>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="bg-gray-900 rounded border border-green-500/30 p-6 space-y-4 shadow-lg shadow-green-500/10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-mono text-green-400">
                    <Star className="w-5 h-5" />
                    system.stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/50 p-4 rounded border border-green-500/20">
                      <div className="text-3xl font-bold text-green-400 font-mono">10</div>
                      <div className="text-sm text-gray-400">A*s & A's</div>
                    </div>
                    <div className="bg-black/50 p-4 rounded border border-green-500/20">
                      <div className="text-3xl font-bold text-green-400 font-mono">5</div>
                      <div className="text-sm text-gray-400">Languages</div>
                    </div>
                    <div className="bg-black/50 p-4 rounded border border-green-500/20">
                      <div className="text-3xl font-bold text-green-400 font-mono">4</div>
                      <div className="text-sm text-gray-400">Leadership Roles</div>
                    </div>
                    <div className="bg-black/50 p-4 rounded border border-green-500/20">
                      <div className="text-3xl font-bold text-green-400 font-mono">∞</div>
                      <div className="text-sm text-gray-400">Coffee Cups</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-green-500/20">
                    <p className="text-sm text-gray-400 font-mono flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-green-400" />
                      <Star className="w-4 h-4 text-green-400" />
                      Leading Pakathon & coaching diplomats
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-mono text-green-400">&gt; experience.log</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded border border-green-500/30 p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded bg-green-500/10 border border-green-500/30 text-green-400">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-green-400">{exp.title}</h3>
                        <p className="text-gray-300">{exp.company}</p>
                        <p className="text-sm text-gray-500 mt-1 font-mono">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-mono text-green-400">&gt; skills --list</h2>
              <div className="grid gap-6">
                {skills.map((skill, index) => {
                  let Icon = Star;
                  switch (skill.icon) {
                    case '[GAME]':
                    case '[DEV]':
                      Icon = Code;
                      break;
                    case '[TALK]':
                      Icon = Star;
                      break;
                    case '[LEAD]':
                      Icon = Star;
                      break;
                    case '[SOLVE]':
                      Icon = Zap;
                      break;
                    case '[LANG]':
                      Icon = BookOpen;
                      break;
                    default:
                      Icon = Star;
                  }

                  return (
                    <div key={index} className="bg-gray-900 rounded border border-green-500/30 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-green-400" />
                          <span className="font-semibold font-mono">{skill.name}</span>
                        </div>
                        <span className="text-green-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 border border-green-500/20">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all duration-1000 shadow-lg shadow-green-500/50"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div> 

              <div className="bg-gray-900 rounded border border-green-500/30 p-6 mt-8">
                <h3 className="text-xl font-bold mb-4 font-mono text-green-400">$ echo $TECH_STACK</h3>
                <div className="flex flex-wrap gap-3">
                  {['Unity', 'C#', 'React', 'Python', 'Game Design', 'Robotics', 'MUN'].map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-black rounded font-mono text-sm border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 font-mono text-green-400">&gt; awards.json</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const match = achievement.match(/^\[([A-Z]+)\]\s*(.*)$/);
                  let Icon = Star;
                  let text = achievement;
                  if (match) {
                    const tag = match[1];
                    text = match[2];
                    switch (tag) {
                      case 'AWARD':
                        Icon = Trophy;
                        break;
                      case 'SCHOLARSHIP':
                        Icon = BookOpen;
                        break;
                      case 'MEDAL':
                        Icon = Star;
                        break;
                      case 'DEBATE':
                        Icon = Star;
                        break;
                      case 'QURAN':
                        Icon = BookOpen;
                        break;
                      case 'POSITION':
                        Icon = Briefcase;
                        break;
                      case 'FOUNDER':
                        Icon = Zap;
                        break;
                      case 'LEADERSHIP':
                        Icon = Star;
                        break;
                      default:
                        Icon = Star;
                    }
                  }

                  return (
                    <div
                      key={index}
                      className="bg-gray-900 rounded border border-green-500/30 p-4 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all transform hover:scale-105"
                    >
                      <p className="text-lg font-mono flex items-center gap-2">
                        <Icon className="w-4 h-4 text-green-400" />
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gray-900 rounded border border-green-500/30 p-8 mt-8">
                <h3 className="text-2xl font-bold mb-4 font-mono text-green-400">$ cat education.txt</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-400">Lahore Grammar School</h4>
                    <p className="text-gray-300">A Levels: Math, Further Math, Physics, Computer Science</p>
                    <p className="text-sm text-gray-500 font-mono">Aug 2024 - May 2026</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-400">Anwaar e Madinah</h4>
                    <p className="text-gray-300">MA Islamic Sciences & MA Arabic Language</p>
                    <p className="text-sm text-gray-500 font-mono">2020 - 2028</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-green-500/30 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p className="mb-2 font-mono">Built with <span className="text-green-400 inline-block align-text-bottom"><Code className="inline w-4 h-4" /></span> by Muhammad Abubakar</p>
          <p className="text-sm font-mono text-green-400">&gt; Code. Lead. Inspire. Repeat._</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        /* Starfield Animation */
        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 60px 70px, #fff, transparent),
            radial-gradient(1px 1px at 50px 50px, #ddd, transparent),
            radial-gradient(1px 1px at 130px 80px, #fff, transparent),
            radial-gradient(2px 2px at 90px 10px, #eee, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: stars-move 100s linear infinite;
          opacity: 0.3;
        }
        
        .stars2 {
          background-image: 
            radial-gradient(1px 1px at 40px 60px, #fff, transparent),
            radial-gradient(1px 1px at 110px 90px, #ddd, transparent),
            radial-gradient(1px 1px at 150px 30px, #eee, transparent);
          background-repeat: repeat;
          background-size: 250px 250px;
          animation: stars-move 150s linear infinite;
          opacity: 0.2;
        }
        
        .stars3 {
          background-image: 
            radial-gradient(1px 1px at 75px 125px, #22c55e, transparent),
            radial-gradient(1px 1px at 180px 25px, #22c55e, transparent),
            radial-gradient(1px 1px at 250px 200px, #22c55e, transparent);
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: stars-move 200s linear infinite;
          opacity: 0.15;
        }
        
        @keyframes stars-move {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;