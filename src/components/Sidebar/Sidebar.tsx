"use client"
import { motion } from "framer-motion"
import styles from "./Sidebar.module.css";
import Image from "next/image";
import Twitter from "@/../public/icon/Twitter.svg";
import Github from "@/../public/icon/Github.svg"
import Email from "../../../public/icon/Email.svg";
import profile  from "@/../public/img/profile.png";
import Phone from "@/../public/icon/Phone.svg";
import Location from "@/../public/icon/Location.svg"
import Link from "next/link";



export default function Sidebar(){
    const personalInformation =
    [
        {
            icon:Email,
            title: "Correo",
            information: "alexpabloanibal@gmail.com",
        },
        {
            icon: Phone,
            title: "Numero de Teléfono",
            information: "(502) 45542562"
        },
        {
            icon: Location,
            title: "Direccion",
            information: "San Andres Semetabaj, Sololá, Guatemala"
        }
    ]
    return (
        <div className={styles.wrapper}>
            
            <div className={styles.wrapper_information}>
                <div className={styles.wrapper_profile}>
                    <div className={styles.wrapper_img}>
                        <Image priority src={profile} alt="profile" placeholder="blur"/>
                    </div>
                    <h1 >Alex Pablo</h1>
                    <div className={styles.wrapperJobouter}>
                        <div className={styles.wrapperJobinner}>
                            <h3 className={styles.titleJob}>Desarrollador web</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.divisionBar}>
                </div>

                
                {personalInformation.map((element, index) => (
                    <div key={index} className={styles.card}>

                        <motion.div 
                        animate={{
                            scale:[1,1.3,1.3,1,1],
                            rotate: [0,0,90,0,0],
                            borderRadius: ["20%", "20%", "50%", "50%", "30%"],
                        }} 
                        className={styles.container_iconWrapper}>
                            <div className={styles.container_icon}>
                                <Image priority className={styles.imgIcon} src={element.icon} alt="Email"  width={20}/>
                            </div>
                        </motion.div>

                        <div className={styles.cardInfo}>
                            <p className={styles.titleInfo}>{element?.title}</p>
                            <p className={styles.info}>{element?.information}</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className={styles.wrapper_socialmedia}>
                <Link href="https://github.com/Alex-Pablo">
                    <Image priority src={Github} alt="Github" width={20}/>
                </Link>

                <Link href="https://x.com/AlexP4blo">
                    <Image priority src={Twitter} alt="Twitter" width={20}/>
                </Link>
            </div>
        </div>
    )
}