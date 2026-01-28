import React, { useState, useEffect } from 'react';
import { Code, Trophy, Briefcase, BookOpen, Zap, Terminal, Star, Github, Linkedin, Instagram, Mail, Coffee, Link } from 'lucide-react';




const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const [activityQuery, setActivityQuery] = useState('');
  const fullText = 'APPLICATION SUPPORTING MATERIALS: Muhammad Abubakar';

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

  const activities = [
    {
      title: 'Illusion of Mastery Project (Self-Directed)',
      company: 'Founder & Researcher',
      period: 'August 2025',
      icon: <BookOpen className="w-5 h-5" />,
      overview: "The Illusion of Mastery Project is a self-directed research effort examining mismatches between learner confidence and actual understanding in AI-assisted and human-guided instructional contexts. The project focuses on how misconceptions persist, particularly when learners appear fluent or confident, and how feedback timing and tool-mediated assistance shape transfer and error correction.",
      responsibilities: ["Designed and executed an independent research framework to study confidence–competence gaps in learning", "Constructed a longitudinal archive of anonymized learner errors drawn from both AI-assisted and human-guided instruction", "Tracked confidence indicators alongside performance to identify patterns of overconfidence, transfer failure, and misconception persistence", "Analyzed how feedback timing and perceived AI fluency influence learners’ willingness to revise incorrect mental models", "Refined analytical framing through design-review–style discussions with a senior software engineer"],
      scope: ["Multi-context dataset spanning repeated learner interactions over time", "Longitudinal analysis focused on error persistence rather than one-off performance"],
      evidence: [{
        label: "View GitHub repo (schema, anonymization protocol, coding framework, analytical notes, manuscript excerpts)",
        link: "https://github.com/devplotlib/illusion-of-mastery-dataset"
      }]
    },
    {
      title: 'Published Research',
      company: 'Journal of Applied Linguistics and TESOL (JALT)',
      period: 'November 2025',
      icon: <Briefcase className="w-5 h-5" />,
      overview: "This published research examines how AI-mediated learning environments shape learner confidence and understanding. Drawing on theories of productive struggle and desirable difficulty, the paper analyzes how fluent AI output and instant feedback can create a sense of cognitive ease that accelerates performance while weakening the processes required for durable learning.",
      responsibilities: ["Developed the central research question examining confidence–competence gaps in AI-assisted learning", "Conducted theoretical analysis connecting learning science, cognitive load, and AI-mediated instruction", "Analyzed how fluent output and shortcut explanations affect transfer, effort, and misconception persistence", "Authored the manuscript through iterative drafting and revision under academic mentorship"],
      scope: ["Peer-reviewed publication in an applied linguistics and TESOL journal", "Theoretical and analytical study grounded in existing learning science research"],
      evidence: [
        {
          label: "Published paper (Journal of Applied Linguistics and TESOL)",
          link: "/assets/JALT-290.pdf"
        },
        {
          label: "Abstract and citation information",
          link: "https://jalt.com.pk/index.php/jalt/article/view/1560"
        },
      ]
    },
    {
      title: 'Markaz-e-Tafakkur (Centre for Thought)',
      company: 'Founder',
      period: 'August 2022 - January 2024',
      icon: <Code className="w-5 h-5" />,
      overview: "Markaz-e-Tafakkur is a student-led civic education initiative designed to facilitate structured dialogue on contested social and ethical issues. The program emphasized disciplined disagreement, narrative framing, and sustained engagement over consensus, creating space for participants to articulate positions, test assumptions, and remain in conversation across ideological divides.",
      responsibilities: ["Designed the initiative’s discussion architecture, defining rules for turn-taking, challenge, and response", "Developed structured session formats to separate clarification from disagreement", "Moderated large-group discussions and enforced procedural fairness across viewpoints", "Organized participant recruitment, onboarding, and session logistics", "Led the production of a short student-led documentary synthesizing themes, participant narratives, and discussion outcomes"],
      scope: ["500+ student participants across multiple sessions", "Program conducted over sustained cycles rather than one-off events"],
      evidence: [
        {
          label: "Session outlines and facilitation guides",
          link: "#"
        },
        {
          label: "Session photographs",
          link: "#"
        },
        {
          label: "Documentary final cut",
          link: "https://youtu.be/EEy6vvzaiFg"
        }
      ]
        
    },
    {
      title: 'NASA Vitalis Project',
      company: 'Student Researcher (NLP & Scientific Text Analysis)',
      period: 'August 2024',
      icon: <Code className="w-5 h-5" />,
      overview: "This independent research project analyzes expert-written scientific texts from the NASA research database to model how domain knowledge is encoded, structured, and internally organized. The work contrasts expert knowledge representations with learner misconceptions studied in my Illusion of Mastery project, using expert literature as a high-density reference point for how understanding appears when it is well-formed rather than misperceived.",
      responsibilities: ["Selected and curated expert-authored scientific texts from the publicly available NASA research database", "Built NLP pipelines to process, segment, and analyze technical scientific language", "Mapped conceptual relationships and thematic structure across texts to model how expert knowledge is organized", "Conducted comparative analysis between expert knowledge structures and learner error patterns identified in parallel research"],
      scope: ["Corpus of 600+ expert-written scientific papers", "Focus on large-scale structural and conceptual analysis rather than single-text interpretation"],
      evidence: [
        {
          label: "Code excerpts and pipeline diagrams",
          link: "/assets/Code excerpts and pipeline diagrams.pdf"
        },
        {
          label: "Documentation of preprocessing and analysis methods",
          link: "/assets/Documentation of preprocessing and analysis methods.pdf"
        },
        {
          label: "Sample outputs illustrating concept mapping and structural patterns",
          link: "/assets/Sample_Outputs.pdf"
        }
      ]
    },
    {
      title: 'Founder & President',
      company: 'Pakathon × LGS JT IT Society',
      period: '2023 – Present',
      icon: <Zap className="w-5 h-5" />,
      overview: "Pakathon is a multi-year computer science education and hackathon initiative designed to introduce secondary-level students to foundational programming and computational thinking. The program combines scaffolded instruction, peer-led teaching, and project-based problem solving, with the goal of lowering entry barriers to technical learning in a school context where formal CS exposure is uneven.",
      responsibilities: ["Founded and led the initiative from conception to execution", "Authored a scaffolded modular introductory computer science curriculum, structured to move students from basic syntax and logic to applied problem-solving and projects", "Designed and implemented a peer-instructor model", "Planned and executed hackathon-style learning events to reinforce instruction through collaborative, time-bound project work"],
      scope: ["Reached 300+ students across multiple cohorts and academic years", "Trained 40+ peer instructors responsible for small-group teaching and mentorship", "Operated as a sustained, multi-year initiative rather than a one-off workshop or competition"],
      evidence: [{
          label: "Curriculum documents and lesson materials",
          link: "#"
        },
        {
          label: "Photographs from instructional sessions and hackathon events",
          link: "#"
        },
        {
          label: "Pakathon x Innoventions Event (Recommended Watch :P)",
          link: "https://youtu.be/uSPjZ6m45bM"
        }
      ]
    },
    {
      title: 'Launchpad',
      company: 'Co-Founder & Developer',
      period: 'November 2025',
      icon: <Code className="w-5 h-5" />,
      overview: "Launchpad is an AI-assisted decision-support and guidance tool designed to help students navigate college application requirements across regions and systems. The platform focuses on reducing informational and cognitive overload, particularly for students without access to private counseling, by organizing requirements, timelines, and choices rather than predicting admissions outcomes.",
      responsibilities: ["Co-designed the system architecture and user flow for a guidance-first admissions support tool", "Implemented AI-assisted features to organize application requirements, deadlines, and decision pathways across regions", "Explicitly constrained the system to avoid predictive or ranking-based admissions outputs", "Iterated on platform design based on user testing and hackathon feedback"],
      scope: ["Evaluated in competitive hackathon settings; ranked Top-5 globally and 1st nationally", "Covered application requirements across multiple regions and admissions systems (e.g., U.S., U.K., international pathways)", "Modeled application timelines, document dependencies, and decision points across divergent systems", "Designed with a primary focus on students without access to private college counseling"],
      evidence: [
        {
          label: "Try the web app",
          link: "https://launchpad-for-college.vercel.app/"
        },
        {
          label: "Platform demo video",
          link: "https://youtu.be/EkisuMDopUk"
        },
        {
          label: "Devpost link",
          link: "https://devpost.com/software/launchpad-7xkjwu"
        }
      ]
    },
    {
      title: 'National WSDC & MUN Circuits',
      company: 'National Debater, Chair & Coach (Paid)',
      period: 'August 2021 – Present',
      icon: <Code className="w-5 h-5" />,
      overview: "Sustained participation in national parliamentary debate and Model United Nations circuits as a competitor, adjudicator, chair, mentor, and paid coach. My involvement spans training, competitive preparation, and institutional governance, with a focus on argument construction, reasoning under time pressure, and procedural fairness.",
      responsibilities: ["Competed nationally in parliamentary debate and MUN conferences", "Served as a paid coach at one of the top school chains in the country, training students in argument structure, weighing, and strategic rebuttal", "Coached teams for competitive conferences, focusing on reasoning heuristics rather than scripted cases", "Chaired and adjudicated committees, managing procedure, moderation, and resolution drafting", "Mentored junior debaters through structured feedback and post-round analysis"],
      scope: ["Trained 50+ debaters across multiple institutions", "Coached teams to 10+ national titles and speaker awards", "Chaired or adjudicated 20+ conferences at varying levels", "Engagement spanning multiple debate formats (WSDC-style debate and MUN)"],
      evidence: [
        {
          label: "Appointment Letter",
          link: "/assets/Appointment Letter.pdf"
        }
      ]
    },
    {
      title: 'LGS Robotics Society',
      company: 'Founder & Lead Mentor',
      period: 'August 2022 - January 2024',
      icon: <Code className="w-5 h-5" />,
      overview: "The LGS Robotics Society is the school’s first engineering and robotics program, created to introduce students to embedded systems and project-based hardware development. The society emphasized hands-on learning through structured instruction and iterative build cycles rather than competition-only participation.",
      responsibilities: ["Founded the society and established its instructional and project structure", "Designed a scaffolded C++–Arduino curriculum for beginners with no prior programming experience", "Led weekly instructional sessions and supervised hands-on build work", "Mentored students through iterative project cycles, including debugging, testing, and refinement", "Coordinated equipment use, project timelines, and peer collaboration"],
      scope: ["Grew the society from 0 to 50+ active student members across cohorts", "Multi-week instructional cycles culminating in hardware projects", "Consistently winning in local robotics competitions"],
      evidence: [
        {
          label: "Curriculum outlines and lesson materials",
          link: "#"
        },
        {
          label: "Photographs of student-built projects",
          link: "#"
        },
        {
          label: "School acknowledgment",
          link: "/assets/ROBOTICS CERT.pdf"
        }
      ]
    },
    {
      title: 'Jamia Program',
      company: 'Degree Candidate (Arabic & Islamic Sciences)',
      period: 'Ongoing',
      icon: <Code className="w-5 h-5" />,
      overview: "The Jamia Program is a degree-granting, exam-based post-secondary course of study in Arabic and Islamic sciences, certified by Pakistan’s Higher Education Commission (HEC). The curriculum centers on classical Arabic, logic, Qur’anic exegesis (tafsir), and Islamic legal theory, assessed through formal, cumulative examinations comparable to undergraduate-level study.",
      responsibilities: ["Completed structured coursework and examinations in classical Arabic, logic, tafsir, and Islamic legal theory", "Conducted close textual analysis of primary sources, emphasizing precision in language, interpretation, and argumentation", "In parallel, designed and taught curricula in Qur’an and classical Arabic for independent students", "Coached learners in reading comprehension, grammatical analysis, and interpretive reasoning"],
      scope: ["Bachelor’s-level examinations completed (January 2026)", "24 advanced classical texts completed as part of the curriculum", "Taught 60+ students across five countries through parallel instructional work"],
      evidence: [
        {
          label: "Degree and Examination Documents",
          link: "#"
        },
        {
          label: "Reading list of completed texts",
          link: "#"
        },
        {
          label: "Teaching materials and curricula",
          link: "#"
        },
        {
          label: "Online class recordings",
          link: "#"
        }
      ]
    },
    {
      title: 'Deputy Head Boy',
      company: 'Lahore Grammar School (LGS)',
      period: 'August 2022 - May 2023',
      icon: <Code className="w-5 h-5" />,
      overview: "As Deputy Head Boy, I operated at the intersection of student governance, discipline, and dialogue. Beyond coordinating committees and events, the role involved managing conflict, translating student concerns into institutional processes, and designing mechanisms for resolving disagreement without escalation. I treated leadership less as representation and more as responsibility: creating structures that allowed issues to surface, be examined carefully, and be addressed with procedural fairness.",
      responsibilities: ["Served as second-in-command within the student leadership body, coordinating across multiple committees", "Oversaw the work of five student committees, setting agendas and monitoring execution", "Founded Nadwat-ul-Talaba, a dialogue-based mediation forum to address disciplinary and interpersonal disputes", "Worked with school administration to resolve student issues through structured discussion rather than punitive escalation", "Led planning and execution of major school events, including academic, cultural, and formal programs"],
      scope: ["Represented and coordinated across a student body of 1,000+ students", "Oversaw five standing committees", "Achieved a 45% reduction in disciplinary demerits through mediation-based intervention", "Organized and supervised 10+ large-scale school events"],
      evidence: [
        {
          label: "Appointment",
          link: "/assets/deputy.png"
        },
        {
          label: "Event programs and administrative acknowledgments",
          link: "#"
        }
      ]

    }
  ];

  const filteredActivities = activities.filter(exp => {
  const q = activityQuery.toLowerCase();
  return (
    exp.title.toLowerCase().includes(q) ||
    exp.company.toLowerCase().includes(q) ||
    (exp.overview && exp.overview.toLowerCase().includes(q))
  );
});

  const skills = [
    { name: 'Unity & C# Development', level: 95, category: 'Technical Proficiency' },
    { name: 'Game Systems Architecture', level: 90, category: 'Technical Proficiency' },
    { name: 'Rhetoric & Oratory', level: 85, category: 'Cognitive Sciences' },
    { name: 'Organizational Leadership', level: 90, category: 'Cognitive Sciences' },
    { name: 'Analytical Problem-Solving', level: 88, category: 'Cognitive Sciences' },
    { name: 'Classical Arabic Linguistics', level: 85, category: 'Linguistics' }
  ];

  const achievements = [
    { text: 'IMMC International Selection (Reserve), Pakistan Team', category: 'Academic Distinction'},
    { text: 'National Award-Winning Mathematical Modeling Paper', category: 'Academic Distinction'},
    { text: 'Valedictorian, Class of 2024', category: 'Academic Distinction' },
    { text: 'Full Academic Scholarship (Merit-Based)', category: 'Academic Distinction' },
    { text: 'Ranked Top-3 Nationally; All-Pakistan Debate Tournament Semi-Finalist', category: 'Oratory Excellence' },
    { text: "Commissioner’s Oratory Excellence Award; Advocacy on Girls’ Education & Cognitive Development", category: 'Oratory Excellence'},
    { text: "Student of the Year", category: "Academic Distinction" },
    { text: "Principal’s Honor Roll; Recognized For Outstanding Extracurricular and Academic Excellence", category: "Academic Distinction"},
    { text: "Deputy Head Boy", category: "Leadership"},
    { text: "Head Prefect (Student Council)", category: "Leadership"},
    { text: 'Vice President, Information Technology Society', category: 'Leadership' },
    { text: 'Founder, Robotics Club', category: 'Leadership' },
  ];

  const NavButton = ({ section, icon: Icon, label }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`group flex items-center gap-2 px-5 py-2.5 transition-colors rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 ${
        activeSection === section
          ? 'text-gray-900 bg-gray-100 font-medium underline underline-offset-8 decoration-2 decoration-gray-800'
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:underline hover:underline-offset-8 hover:decoration-gray-800'
      }`}
      style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}
    >
      <Icon className="w-4 h-4 text-gray-600 group-hover:text-gray-900" />
      <span className="hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#eef1f4', color: '#0f172a', fontFamily: '"Literata", "Times New Roman", Times, serif', fontSize: '16px', lineHeight: 1.7 }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#f3f4f6] border-b border-gray-300 shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg tracking-wide" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', color: '#1f2937', fontWeight: '500' }}>
            Muhammad Abubakar
          </div>
          <div className="flex gap-1">
            <NavButton section="home" icon={Terminal} label="Overview" />
            <NavButton section="Activities" icon={Briefcase} label="Activities" />
            {/* <NavButton section="skills" icon={Code} label="Competencies" /> */}
            <NavButton section="achievements" icon={Trophy} label="Honors" />
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
              <div className="border border-gray-300 p-10 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-center mb-8">
                  <p className="text-sm uppercase tracking-widest text-gray-600 mb-6" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>
                    {terminalText}<span className="animate-pulse">|</span>
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="flex-shrink-0">
                    <img 
                      src="/avatar.jpeg"
                      alt="Muhammad Abubakar"
                      className="w-40 h-40 border-2 border-gray-400 object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div>
                      <h1 className="text-6xl md:text-7xl text-center md:text-left mb-4 text-gray-900" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>
                        Muhammad Abubakar
                      </h1>
                      <p className="text-xl text-gray-800 text-center md:text-left border-t border-gray-200 pt-4" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>
                        Academic work and project documentation
                      </p>
                    </div>
                    
                    <div className="prose max-w-none">
                      <p className="text-gray-900 leading-relaxed text-justify" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontSize: '1rem', lineHeight: 1.7, maxWidth: '70ch', margin: '0 auto' }}>
This site documents academic, research, and organizational work referenced in my college applications. It includes project descriptions, timelines, and supporting materials.

I am currently completing A-Level coursework in mathematics, physics, and computer science, alongside advanced studies in Islamic sciences and classical Arabic. My work includes technical education initiatives, debate and civic education programs, and independent research projects.                       </p>
                    </div>
                    
                    <div className="flex gap-4 justify-center md:justify-start pt-4 border-t border-gray-200">
                      <a href="https://www.linkedin.com/in/muhammad-abubakar-300939312/" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 hover:bg-gray-100 transition-all">
                        <Linkedin className="w-5 h-5 text-gray-800" />
                      </a>
                      {/* <a href="https://instagram.com/_m_abubakar._" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-300 hover:bg-gray-100 transition-all">
                        <Instagram className="w-5 h-5 text-gray-800" />
                      </a> */}
                      <a href="mailto:mailabubakar04@gmail.com" className="p-3 border border-gray-300 hover:bg-gray-100 transition-all">
                        <Mail className="w-5 h-5 text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Metrics */}
              
              
                
                <div className="border border-gray-300 p-8 bg-gray-50 rounded-lg shadow-sm">
                  <h3 className="text-2xl mb-6 text-gray-900 border-b border-gray-200 pb-3" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>
Areas of Academic Interest                  </h3>
                  <ul className="space-y-4 text-gray-900" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontSize: '1.05rem' }}>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700 mt-1">•</span>
                      <span>How learners form, misjudge, and revise mental models in complex domains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700 mt-1">•</span>
                      <span>Language as a system: structure, ambiguity, interpretation, and use in human and machine contexts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700 mt-1">•</span>
                      <span>Instructional design and feedback timing in AI-mediated and human-guided learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700 mt-1">•</span>
                      <span>Computational approaches to modeling reasoning, knowledge representation, and learning processes</span>
                    </li>
                  </ul>
                </div>
              </div>
          )}

          {/* Activities Section */}
{activeSection === 'Activities' && (
  <div className="space-y-10 animate-fade-in">
    <h2
      className="text-5xl mb-10 text-gray-900 border-b border-gray-300 pb-4"
      style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}
    >
      Activities
    </h2>

    <div className="mb-8">
  <input
    type="text"
    placeholder="Search activities (e.g., research, Jamia, NLP)"
    value={activityQuery}
    onChange={(e) => setActivityQuery(e.target.value)}
    className="
      w-full
      border border-gray-300
      bg-white
      px-4 py-3
      text-gray-900
      placeholder-gray-500
      focus:outline-none
      focus:border-gray-500
    "
    style={{
      fontFamily: '"Literata", "Times New Roman", Times, serif'
    }}
  />
</div>

    <div className="space-y-8">
      {filteredActivities.map((exp, index) => (
        <div
          key={index}
          className={`bg-white border border-black/10 p-8 transition-all ${index % 2 === 0 ? 'bg-gray-50 rounded-lg shadow-sm hover:shadow' : ''} hover:border-gray-400`}
        >
          <div className="flex items-start gap-6">
            <div className="p-4 border border-gray-300 text-gray-800">
              {exp.icon}
            </div>

            <div className="flex-1">
              {/* Title */}
              <h3
                className="text-2xl text-gray-900 mb-1"
                style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}
              >
                {exp.title}
              </h3>

              <p
                className="text-gray-900 text-lg"
                style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}
              >
                {exp.company}
              </p>

              <p
                className="text-sm text-gray-500 italic mb-6"
                style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}
              >
                {exp.period}
              </p>

              {/* Overview */}
              {exp.overview && (
  <>
    <p className="text-gray-600 text-sm mb-1">overview</p>
    <p className="text-gray-900 mb-5 leading-relaxed">
      {exp.overview}
    </p>
  </>
)}


              {/* Responsibilities */}
              {Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 && (
  <>
    <p className="text-gray-600 text-sm mb-1">responsibilities</p>
    <ul className="list-disc list-inside text-gray-800 mb-5 space-y-1">
      {exp.responsibilities.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </>
)}


              {/* Scope & Scale */}
              {Array.isArray(exp.scope) && exp.scope.length > 0 && (
  <>
    <p className="text-gray-600 text-sm mb-1">scope & scale</p>
    <ul className="list-disc list-inside text-gray-800 mb-5 space-y-1">
      {exp.scope.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </>
)}

              {/* Evidence */}
              {Array.isArray(exp.evidence) && exp.evidence.length > 0 && (
  <>
    <p className="text-gray-600 text-sm mb-1">evidence</p>
    <ul className="list-disc list-inside text-gray-900 space-y-1">
      {exp.evidence.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
  <Link className="w-4 h-4 mt-1 text-gray-800 shrink-0" />
  <a
    href={item.link}
    className="font-semibold underline underline-offset-4 hover:text-gray-900 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {item.label}
  </a>
</li>

      ))}
    </ul>
  </>
)}

            </div>
          </div>
        </div>
      ))}
      {filteredActivities.length === 0 && (
  <p className="text-gray-600">
    No activities match your search.
  </p>
)}
    </div>
  </div>
)}


          {/* Skills Section
          {activeSection === 'skills' && (
            <div className="space-y-10 animate-fade-in">
              <h2 className="text-5xl mb-10 text-gray-900 border-b border-gray-200 pb-4" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>
                Core Competencies
              </h2>
              
              {['Technical Proficiency', 'Cognitive Sciences', 'Linguistics'].map(category => (
                <div key={category} className="mb-10">
                  <h3 className="text-3xl mb-6 text-gray-900" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400', fontStyle: 'italic' }}>
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {skills.filter(s => s.category === category).map((skill, index) => (
                      <div key={index} className="border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-800 text-lg" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>{skill.name}</span>
                          <span className="text-gray-700 text-sm" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-300 h-0.5">
                          <div
                            className="bg-gray-900 h-0.5 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border border-gray-300 p-8 mt-10 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-6 text-gray-900" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>Technical Proficiencies</h3>
                <div className="flex flex-wrap gap-4">
                  {['Unity Engine', 'C# Programming', 'React Framework', 'Python', 'Game Design Theory', 'Robotics', 'Diplomatic Protocol'].map((tech, i) => (
                    <span key={i} className="px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-200 transition-all" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )} */}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <div className="space-y-10 animate-fade-in">
              <h2 className="text-5xl mb-10 text-gray-900 border-b border-gray-200 pb-4" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>
                Honors & Distinctions
              </h2>
              
              {['Academic Distinction', 'Leadership', 'Oratory Excellence'].map(category => (
                  <div
                    key={category}
                    className="bg-white border border-black/10 rounded-lg p-8 mb-10"
                  >
                    {/* Subsection heading INSIDE the card */}
                    <h3
                      className="text-3xl mb-6 text-gray-900"
                      style={{
                        fontFamily: '"Literata", "Times New Roman", Times, serif',
                        fontWeight: '400',
                        fontStyle: 'italic'
                      }}
                    >
                      {category}
                    </h3>

                    {/* Achievements list */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements
                        .filter(a => a.category === category)
                        .map((achievement, index) => (
                          <div
                            key={index}
                            className="
  bg-[#f9fafb]
  border border-black/10
  rounded-md
  px-4 py-3
  transition-all duration-150
  hover:border-black/20
  hover:bg-white
  hover:-translate-y-[1px]
"
                          >
                            <p
                              className="text-gray-900 flex items-start gap-3"
                              style={{
                                fontFamily: '"Literata", "Times New Roman", Times, serif',
                                fontSize: '1.05rem'
                              }}
                            >
                              <span className="mt-1">•</span>
                              <span>{achievement.text}</span>
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}


              <div className="border border-gray-300 p-10 mt-10 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-3xl mb-8 text-gray-900 border-b border-gray-200 pb-4" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>
                  Educational Background
                </h3>
                <div className="space-y-8">
                  <div className="border-l-2 border-gray-200 pl-8">
                    <h4 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>Lahore Grammar School for Senior Boys</h4>
                    <p className="text-gray-800 mb-2 leading-relaxed" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontSize: '1.05rem' }}>
                      Advanced Level Subjects: Mathematics, Physics, Computer Science
                    </p>
                    <p className="text-sm text-gray-500 italic" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>August 2024 – May 2026</p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-8">
                    <h4 className="text-2xl text-gray-900 mb-3" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontWeight: '400' }}>Lahore Grammar School Shalimar Campus</h4>
                    <p className="text-gray-800 mb-2 leading-relaxed" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', fontSize: '1.05rem' }}>
                      O Level Subjects: English, Urdu, Mathematics, Additional Mathematics, Physics, Chemistry, Global Perspectives & Research, Islamiyat, Computer Science, Pakistan 
                    </p>
                    <p className="text-sm text-gray-500 italic" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>August 2008 – May 2024</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-gray-300 mt-20 py-10 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <p className="mb-2" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif', color: '#1f2937' }}>
            © 2025 Muhammad Abubakar. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 italic" style={{ fontFamily: '"Literata", "Times New Roman", Times, serif' }}>
            Cognitive Science • Linguistics • Computational Science
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,500;0,700;1,400&display=swap');

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