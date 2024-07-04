"use client";
import { motion } from "framer-motion"
import styles from "./resumen.module.css";
import Image from "next/image";
import EducationIcon from "@/../public/icon/Education.svg";
import workIcon from "@/../public/icon/Work.svg";
import codeIcon from "@/../public/icon/Code.svg"

export default function Resumen() {
  const listEducations = [
    {
      school: "Universidad UMG - Ingeniería en sistemas",
      year: "2020-2025",
      description: "",
    },
    {
      school: "Platzi - cursos programación",
      year: "2023-2023",
      description: "",
    },
    {
      school: "Udemy - Cursos programacion",
      year: "2024-2024",
      description: "",
    },
    {
      school: "UVG - cursos de ingles",
      year: "2017-2019",
      description: "",
    },
    {
      school: "Colegio CISS - Diseño grafico",
      year: "2018-2019",
      description: "",
    },
  ];

  const listExperiences = [
    {
      position: "Desarrollador",
      year: "2024-2024",
      description:
        "DIGITAL SOLUTIONS 324 España Barcelona. Contribuí al desarrollo de una aplicación de gestión y control de cámaras de seguridad,  utilizando .NET Visual Basic y WPF",
    },
  ];

  const listSkills = [
    {
        title: "Lenguajes de programación:",
        skills: ["C#", "JavaScript", "Visual Basic"]
    },
    {
        title: "Frameworks y Librerías:",
        skills: ["Angular", "NextJs", ".Net"]
    },
    {
      title:"Bases de Datos",
      skills: ["SQL Server", "Oracle"]
    },
    {
      title: "Servicios en la Nuber",
      skills: ["Azure", "AWS"]
    },
    {
      title:"Metodologías de Trabajo",
      skills: ["Agile", "Scrum"]
    },
    {
      title: "Control de Versiones",
      skills:["Git"]
    },
    {
      title:"Desarrollo Web",
      skills: ["HTML", "CSS"]
    },
    {
      title: "Diseño y Prototipado",
      skills:["Figma", "Balsamiq Wireframes"]
    }

  ]
  return (
    <div className={styles.wrapperResume}>
      <div>
        <div className={styles.wrapperTitleInfo}>
          <motion.div 
            animate={{
            scale:[1,1.5,1.5,1,1],
            rotate: [0,0,90,0,0],
            borderRadius: ["20%", "20%", "50%", "50%", "30%"],
          }} 
          className={styles.container_iconWrapper}>
            <div className={styles.container_icon}>
              <Image
                priority
                className={styles.imgIcon}
                src={EducationIcon}
                alt="Email"
                width={20}
              />
            </div>
          </motion.div>

          <p>Educación</p>
        </div>

        <div className={styles.containerEducations}>
          <div className={styles.wrapperLine}>
            <div className={styles.line}></div>
          </div>

          <div className={styles.wrapperListEduactions}>
            {listEducations.map((edu, index) => (
              <div key={index} className={styles.wrapperTitleInfo}>
                <div className={styles.wrapperPoint}>
                  <div className={styles.point}></div>
                </div>
                <div>
                  <p className={styles.school}>{edu?.school}</p>
                  <p className={styles.year}>{edu?.year}</p>
                  <p className={styles.description}>{edu?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.wrapperTitleInfo}>
          <motion.div
          animate={{
            scale:[1,1.5,1.5,1,1],
            rotate: [0,0,90,0,0],
            borderRadius: ["20%", "20%", "50%", "50%", "30%"],
          }} 
          className={styles.container_iconWrapper}>
            <div className={styles.container_icon}>
              <Image
                priority
                className={styles.imgIcon}
                src={workIcon}
                alt="Work"
                width={20}
              />
            </div>
          </motion.div>

          <p>Experiencia</p>
        </div>

        <div className={styles.containerEducations}>
          <div className={styles.wrapperLine}>
            <div className={styles.line}></div>
          </div>

          <div className={styles.wrapperListEduactions}>
            {listExperiences.map((edu, index) => (
              <div key={index} className={styles.wrapperTitleInfo}>
                <div className={styles.wrapperPoint}>
                  <div className={styles.point}></div>
                </div>
                <div>
                  <p className={styles.school}>{edu?.position}</p>
                  <p className={styles.year}>{edu?.year}</p>
                  <p className={styles.description}>{edu?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className={styles.wrapperTitleInfo}>
          <motion.div 
          animate={{
            scale:[1,1.5,1.5,1,1],
            rotate: [0,0,90,0,0],
            borderRadius: ["20%", "20%", "50%", "50%", "30%"],
          }} 
          className={styles.container_iconWrapper}>
            <div className={styles.container_icon}>
              <Image
                priority
                className={styles.imgIcon}
                src={codeIcon}
                alt="Code"
                width={20}
              />
            </div>
          </motion.div>
          
          <p>Habilidades técnicas</p>
        </div>

        <div className={styles.containerSkills}>
            <div  className={styles.wrapperOutSkill}>
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={styles.wrapperInnerSkill}>

                    {
                        listSkills.map((info, i) =>(
                            <div  key={i}>
                                <p className={styles.description}>{info?.title}</p>
                                <div className={styles.wrapperSkills}>
                                    {
                                        info.skills.map((skill,index)=>(
                                            <p className={`${styles.year}`} key={index}>{skill}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
      </div>


    </div>
  );
}
