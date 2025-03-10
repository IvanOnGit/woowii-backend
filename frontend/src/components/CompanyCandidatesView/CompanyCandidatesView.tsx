import { useState } from "react";
import { ChevronDown, ChevronUp, MoreVertical, Briefcase, GraduationCap, Folder } from "lucide-react";
import { 
  FirstMenuAsideItem, 
  MenuAside,
  SecondDropdownContainer,
  SecondDropdownButton,
  SecondDropdownList,
  SecondDropdownItem,
  Separator,
  MainContent, 
  CandidateCard, 
  CandidateHeader,
  CandidateName,
  MoreOptions,
  SkillsContainer,
  SkillTag,
  CandidateInfo,
  DropdownMenu,
  DropdownItem
} from "./styles";
import { useNavigate } from "react-router-dom";

export default function CompanyCandidatesView() {
  const [dropdowns, setDropdowns] = useState({
    technicalSkills: false,
  });

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  
  const toggleMenu = (id: number) => {
    setOpenDropdownId(prevId => (prevId === id ? null : id));
  };
    
  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({ 
      ...prev, 
      [dropdown]: !prev[dropdown] 
    }));
  };

  const candidates = [
    { 
      id: 1, 
      name: "Luciana Ferreira", 
      skills: ["Vue.js", "JavaScript", "Tailwind"], 
      experience: "4 years of experience", 
      degree: "B.S in Information Systems", 
      lastProject: "Real Estate Platform" 
    },
    { 
      id: 2, 
      name: "Andrés Castro", 
      skills: ["React", "Redux", "TypeScript"], 
      experience: "6 years of experience", 
      degree: "M.S in Computer Science", 
      lastProject: "Healthcare Management System" 
    },
    { 
      id: 3, 
      name: "Fernanda Lopes", 
      skills: ["Angular", "RxJS", "SCSS"], 
      experience: "5 years of experience", 
      degree: "B.S in Software Engineering", 
      lastProject: "Inventory Tracking App" 
    },
    { 
      id: 4, 
      name: "Javier Morales", 
      skills: ["Node.js", "Express", "MongoDB"], 
      experience: "7 years of experience", 
      degree: "M.S in Information Technology", 
      lastProject: "CRM System" 
    },
    { 
      id: 5, 
      name: "Camila Rodríguez", 
      skills: ["Python", "Django", "PostgreSQL"], 
      experience: "4 years of experience", 
      degree: "B.S in Computer Science", 
      lastProject: "E-Learning Platform" 
    },
    { 
      id: 6, 
      name: "Diego Fernández", 
      skills: ["React Native", "JavaScript", "Firebase"], 
      experience: "3 years of experience", 
      degree: "B.S in Software Development", 
      lastProject: "Mobile Banking App" 
    },
    { 
      id: 7, 
      name: "Laura Méndez", 
      skills: ["PHP", "Laravel", "MySQL"], 
      experience: "6 years of experience", 
      degree: "M.S in Web Development", 
      lastProject: "Online Booking System" 
    },
    { 
      id: 8, 
      name: "Mateo Silva", 
      skills: ["Java", "Spring Boot", "Kafka"], 
      experience: "5 years of experience", 
      degree: "B.S in Computer Engineering", 
      lastProject: "Supply Chain Optimization Tool" 
    },
    { 
      id: 9, 
      name: "Isabela Ruiz", 
      skills: ["Flutter", "Dart", "GraphQL"], 
      experience: "3 years of experience", 
      degree: "B.S in Mobile Computing", 
      lastProject: "Fitness Tracking App" 
    }
  ];
  
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/CompanyCandidatesViewContact");
  };

  return (
    <>
      {/* Menú Lateral */}
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/WhiteLogo.png" alt="Avatar" /> 
        </FirstMenuAsideItem>

        <h1>Filtrar por</h1>
        <Separator />

        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => toggleDropdown("technicalSkills")}>
            Herramientas técnicas {dropdowns.technicalSkills ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {dropdowns.technicalSkills && (
            <SecondDropdownList>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">JavaScript</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">.Net</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Data Science</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Python</label>
              </SecondDropdownItem>
            </SecondDropdownList>
          )}
          
          <SecondDropdownButton onClick={() => toggleDropdown("technicalSkills")}>
           Habilidades blandas {dropdowns.technicalSkills ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {dropdowns.technicalSkills && (
            <SecondDropdownList>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Autogestión</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Liderazgo</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Gestión del tiempo</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">flexibilidad</label>
              </SecondDropdownItem>
            </SecondDropdownList>
          )}
          
          <SecondDropdownButton onClick={() => toggleDropdown("technicalSkills")}>
            Experiencia previa {dropdowns.technicalSkills ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {dropdowns.technicalSkills && (
            <SecondDropdownList>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Junior</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Semi Senior</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Senior</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">1 año de experiencia</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">2 años de experiencia</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">3 años de experiencia</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">4 años de experiencia</label>
              </SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>

        <Separator />
      </MenuAside>

      {/* Contenedor Principal */}
      <MainContent>
      {candidates.map(candidate => (
        <CandidateCard key={candidate.id}>
          <CandidateHeader>
            <CandidateName>{candidate.name}</CandidateName>
            <MoreOptions onClick={() => toggleMenu(candidate.id)}>
              <MoreVertical />
            </MoreOptions>
            {openDropdownId === candidate.id && (
              <DropdownMenu>
                <DropdownItem onClick={handleContinueClick}>Contactar</DropdownItem>
              </DropdownMenu>
            )}
          </CandidateHeader>

          <SkillsContainer>
            {candidate.skills.map(skill => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </SkillsContainer>

          <CandidateInfo>
            <p><Briefcase size={18} /> {candidate.experience}</p>
            <p><GraduationCap size={18} /> {candidate.degree}</p>
            <p><Folder size={18} /> Last Project: {candidate.lastProject}</p>
          </CandidateInfo>
        </CandidateCard>
      ))}
    </MainContent>
    </>
  );
}