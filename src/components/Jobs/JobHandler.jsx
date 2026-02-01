import styles from "./JobHandler.module.css"
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function JobHandler({setActiveJobHandler}){

    const ALL_TECH = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Angular",
        "Svelte",
        "Redux",
        "Zustand",
        "MobX",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Chakra UI",
        "Sass",
        "Less",
        "Node.js",
        "Express.js",
        "NestJS",
        "Python",
        "Django",
        "FastAPI",
        "Flask",
        "Java",
        "Spring",
        "Spring Boot",
        "C#",
        ".NET",
        "PHP",
        "Laravel",
        "Symfony",
        "Go",
        "Gin",
        "Rust",
        "Ruby",
        "Ruby on Rails",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Firebase",
        "Supabase",
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "AWS",
        "Azure",
        "Google Cloud",
        "Vercel",
        "Netlify",
        "Nginx",
        "CI/CD",
        "GitHub Actions",
        "GitLab CI",
        "React Native",
        "Expo",
        "Flutter",
        "Dart",
        "Swift",
        "Kotlin",
        "Jest",
        "Vitest",
        "Cypress",
        "Playwright",
        "Mocha",
        "Chai",
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Webpack",
        "Vite",
        "Babel",
        "ESLint",
        "Prettier",
        "Figma",
        "Storybook",
        "REST API",
        "GraphQL",
        "WebSockets"
      ];
  const [selectedTech, setSelectedTech] = useState([]);
  const [techInput, setTechInput] = useState("");
  const [filteredTech, setFilteredTech] = useState([]);

   const handleTechChange = (e) => {
    const value = e.target.value;
    setTechInput(value);

    if (value === "") {
      setFilteredTech([]);
      return;
    }

    const filtered = ALL_TECH.filter(
      (tech) =>
        tech.toLowerCase().includes(value.toLowerCase()) &&
        !selectedTech.includes(tech)
    );
    setFilteredTech(filtered);
  };


  const addTech = (tech) => {
    setSelectedTech([...selectedTech, tech]);
    setTechInput("");
    setFilteredTech([]);
  };


  const removeTech = (tech) => {
    setSelectedTech(selectedTech.filter((t) => t !== tech));
  };

  const addTechFromInput = () => {
    if (!techInput.trim()) return;
  
    const matchedTech = ALL_TECH.find(
      tech => tech.toLowerCase() === techInput.toLowerCase()
    );
  
    const techToAdd = matchedTech || techInput;
  
    if (selectedTech.includes(techToAdd)) return;
  
    setSelectedTech([...selectedTech, techToAdd]);
    setTechInput("");
    setFilteredTech([]);
  };

  

    return(
        <div className={styles.jobHandlerWindow}>
            <div className={styles.jobHandlerWidget}>
                <div className={styles.jobHandlerWidgetHeader}>
                    <p className={styles.jobHandlerWidgetTitle}>Create New Job Offer</p>
                    <button className={styles.closeBtn} onClick={()=>setActiveJobHandler(false)}><RxCross2/></button>
                </div>
                <div className={styles.jobHandlerWidgetBody}>
                    <form className={styles.jobHandlerWidgetForm}>
                        <div className={styles.formGroup}>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input id="jobTitle" type="text" placeholder="e.g. Frontend Developer" />
                        </div>

                        <div className={styles.formGroup}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Describe the responsibilities..." rows="8" />
                        </div>

                        <div className={styles.experienceSection}>
                        <label>Required Experience</label>
                        <div className={styles.radioGroup}>
                            {[
                            { id: "exp-0-1", label: "0-1 year", value: "0-1" },
                            { id: "exp-1-2", label: "1-2 years", value: "1-2" },
                            { id: "exp-2-3", label: "2-3 years", value: "2-3" },
                            { id: "exp-3-5", label: "3-5 years", value: "3-5" },
                            { id: "exp-5-", label: "from 5 years", value: "5-" },
                            ].map((item) => (
                            <div key={item.id} className={styles.radioOption}>
                                <input 
                                type="radio" 
                                id={item.id} 
                                name="experience" 
                                value={item.value} 
                                />
                                <label htmlFor={item.id}>{item.label}</label>
                            </div>
                            ))}
                        </div>
                        </div>

                        <div className={styles.formGroup}>
                        <label htmlFor="hourlyRate">Hourly Rate ($)</label>
                        <input id="hourlyRate" type="number" placeholder="40" />
                        </div>

                        <div className={styles.formGroup}>
              <label>Required Technologies</label>

              <div className={styles.selectedTechList}>
                {selectedTech.map((tech) => (
                  <div key={tech} className={styles.techItem}>
                    {tech}
                    <RxCross2 onClick={() => removeTech(tech)} className={styles.removeTech} />
                  </div>
                ))}
              </div>

        
              <input
                id="technologies"
                type="text"
                placeholder="Type to add tech..."
                value={techInput}
                onChange={handleTechChange}
                autoComplete="off"
              />  
               {filteredTech.length > 0 && (
                <div className={styles.suggestions}>
                  {filteredTech.map((tech) => (
                    <div key={tech} className={styles.suggestionItem} onClick={() => addTech(tech)}>
                      {tech}
                    </div>
                  ))}
                  
                </div>
                
              )}
              
                <button type="button"className={styles.addTechBtn}onClick={addTechFromInput}>Add</button>
            </div>
                        <button type="submit" className={styles.submitBtn}>Create Job</button>
                    </form>
                    </div>
            </div>
        </div>
    )
}

// title;
// description;
// requiredExperience;
// hourlyRate;
// List<Technology> RequiredTechnologies;


