"use client"

import Image from "next/image";
import { Icon } from "@iconify/react";
import { ReactNode, useState } from "react";
import Link from "next/link";
import {data} from "./data"
import { motion } from "framer-motion";
import { ContactForm } from "./Formdevis";





type boutonprops = {
    className?: string,
    children?: ReactNode
}


export function ContactCard({className, children}: boutonprops) {
    return (
        <>
      
        <div className={` flex text-[24px] px-5 py-[16px] bg-white/20 border border-white/80 rounded-[8px] ${className}`}>
            {children}
            </div>
        
        </>
    )
}


export function Bouton({className, children}: boutonprops) {
    return (
        <>
      
        <div className={` flex flex-row gap-[10px] items-center text-[24px] px-5 py-[16px] bg-accent rounded-[8px] ${className}`}>
            {children}
            </div>
        
        </>
    )
}

export function SecondBouton({className, children}: boutonprops) {
    return (
        <>
      
        <div className={` flex flex-row gap-[10px]  text-[16px] px-5 py-[12px]  border-[1px] border-accent rounded-[8px] justify-center items-center ${className}`}>
            {children}
            </div>
        
        </>
    )
}

export function Section({className, children}: boutonprops) {

    return (
        <>
        <section className={`px-8 lg:px-24 py-8 flex flex-col gap-6 ${className}`}>
            {children}

        </section>
        
        </>
    )

}



export function Footer() {

    return (
        <footer className=" bg-accent w-full xl:min-h-75 text-white flex flex-col   items-center justify-center gap-16 py-16 px-8 lg:px-24 xl:items-start  ">
            
            <div className="flex flex-col gap-16  xl:flex-row justify-center ">
             <Image src={data.logo.image} width={265} height={266} alt={data.logo.alt} className="w-fit h-auto drop-shadow-[4px] drop-shadow-accent/10 rounded-xl blur-xl" />
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:h-full ">
                 <div className="text-white font-semibold text-2xl flex flex-col gap-6 text-center">
                     <p className="text-white text-[32px]">Navigation</p>
                      <a href="#accueil">Accueil</a>
                       <a href="#service">Nos services</a> <a href="#contact">Contact</a>
                        </div>
                         <div className="bg-second/50 w-full h-px lg:h-65 lg:w-0.5  "></div> 
                        <div className="text-white font-semibold text-2xl flex flex-col gap-6 text-center"> 
                            <p className="text-white text-[32px]">Contact</p>
                            <a href={`tel:${data.numero}`}> 
                            <div className="flex gap-2.5 items-center justify-center">
                                 <Icon icon="material-symbols:call" width="28" height="28" />
                         <span>{data.numero}</span>
                          </div>
                            </a>
            <a href={`mailto:${data.email}`}>
                           <div className="flex gap-2.5 items-center justify-center"> 
                            <Icon icon="material-symbols:mail" width="28" height="28" /> 
              <span>{data.email}</span> 
              </div>
              </a>
              </div> 
              </div> 
              </div>
            <div className="self-center text-center flex flex-col lg:flex-row gap-6">
                <a>{`Copyright © ${data.entreprise}. touts droits réservés.`}</a>
                <Link href="/mentions-legales">Mentions légales</Link>
                <Link href="/conditions-generales-services">Condition générales services</Link>
                
            </div>
            
            <p className="self-end text-[20px] drop-shadow-2xl drop-shadow-white ">cree et propulse par l'agence  <a className="font-extrabold text-violet-600" href="https://webprestige.fr" target="_blank">WebPrestige</a></p>
              </footer>
    )
}

export function Header() {

    const [burger, setBurger] = useState<boolean>(false)

    return (
     <>
     <nav>
     <div className="col-span-full w-full fixed lg:px-[96px] px-8 py-2 lg:py-0  top-0 left-0 z-50  flex flex-row items-center justify-between drop-shadow-black/10 drop-shadow-lg bg-white ">
    <div className="flex flex-row gap-4 justify-center items-center">
         <Image src={data.logo.image} width={89} height={79} alt={data.logo.alt} className="w-20 h-auto lg:w-24 drop-shadow-[4px] drop-shadow-accent/10 rounded-xl blur-xl" />
        <p className={`hidden lg:flex text-2xl text-black font-extrabold   `}>{data.entreprise}</p>
    </div>
            <div className="hidden lg:flex flex-row gap-8 text-[16px]  ">
                <Link href="#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Accueil <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#description"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">A Propos <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#service"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Nos Services <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#temoignages"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Temoignages <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Contact <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
            </div>


            <div className="hidden lg:flex flex-row gap-[16px] justify-center items-center  ">
                
                <a className="flex flex-row justify-center items-center gap-[10px]" href={`tel:${data.numero}`}>
                
                <Icon icon='material-symbols:call' width={24} height={24} className="text-accent"/>
                <p className="font-semibold  text-accent text-[20px]  ">{data.numero}</p>
                
                </a>
                
               
            </div>
            
        <button onClick={() => setBurger(true)} className="lg:hidden"> <Icon icon="qlementine-icons:menu-burger-16" className={ `${ !burger ? 'opacity-100': 'opacity-0'}  lg:hidden w-[44px] h-11 text-accent`} /></button>
        
     </div>

     {burger && <div className=" fixed top-0 left-0  inset h-screen z-30 w-screen flex flex-col justify-center items-center px-8 py-8 bg-black/85 text-white">
                <div className=" self-end justify-self-start flex flex-row items-end "><button onClick={() => setBurger(false)}><Icon icon="akar-icons:cross" className="relative   w-[44px] h-11 text-second " /></button></div>
                 <div className=" row-start-1 mt-20 ml-10 col-span-full text-center items-center flex flex-col gap-8 text-[24px] font-semibold ">
                <Link href="#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Accueil <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#nos services"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>nos services <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Contact <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                
            </div>

                </div>
        
        }
        </nav>
     </>

    )
}

export function Hero() {

    return (
        <>
         <div id="accueil">
            <Section className="my-24 lg:px-[96px] text-center lg:grid lg:grid-cols-12 lg:my-32   ">
                <div className=" lg:flex lg:flex-col lg:col-span-5 lg:text-start lg:gap-6 lg:items-start lg:mt-[30px]">
            <h1 className="font-extrabold text-black text-[48px] lg:text-[64px]">{data.titreh1}</h1>
            <p className="font-semibold text-[24px]">{data.soustitrehero}</p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                <Link href={`tel:${data.entreprise}`}><Bouton>
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold text-white ">Appeler Maintenant</p>
                </Bouton>
                </Link> 
                <Link href="#contact">
                <SecondBouton ><Icon icon='material-symbols:mail' width={24} height={24} className="text-accent"/>
                <p className=" text-[16px] font-semibold text-accent ">Obtenir un devis gratuit</p></SecondBouton>
                </Link>
            </div>
                </div>

            <div className="relative mt-10 lg:col-start-8 lg:col-span-5 lg:flex lg:justify-center ">
                <Image src={data.imagehero.image} width={610} height={471} alt={data.imagehero.alt} className="w-full h-auto lg:w-full xl:h-[500px] object-cover drop-shadow-[4px] drop-shadow-accent/10 rounded-2xl drop-shadow-xl drop-shadow-black/25" />
                <div className="flex flex-row gap-8 py-6 px-8 absolute bottom-0 left-0 right-0 lg:w-[70%] bg-white h-auto drop-shadow-xl drop-shadow-black/25 rounded-[16px] justify-center text-center">
                    <div className="flex flex-col justify-center gap-4">
                        <p className="text-accent text-[32px] font-extrabold">{`${data.projetnombre}+`}</p>
                        <p className="text-[20px]">projets realises</p>
                    </div>

            <div className="w-0.5 h-[80px] self-center bg-text"></div>
             <div className="flex flex-col justify-center gap-4">
                        <p className="text-accent text-[32px] font-extrabold">{`${data.satisfaction}%`}</p>
                        <p className="text-[20px]">Satisfaction Clients</p>
                    </div>
                </div>
            </div>
           
          

            </Section>
        </div>

        </>
    )
}

export function About() {


    const proves = [
       {
        icon: "solar:medal-ribbon-broken",
        title: "Expertise Reconnue",
        desc: "Artisans qualifiés avec des certifications professionnelles"
       },
       {
        icon: "mingcute:time-line",
        title: "reactivite",
        desc: "Interventions rapides et respect des délais garantis"
       },
       {
        icon: "ic:baseline-people",
        title: "equipes qualifies",
        desc: "des professionnels passionnés et experimentés a votre service"
       },
       {
        icon: "material-symbols:shield-outline",
        title: "garanties",
        desc: "Assurances décennales et garanties sur tous nos services"
       },



    ]

    function Certif({ proof }: { proof: { icon: string; title: string; desc: string } }) {

        return (
            <>
            
            
            <div className="flex flex-row gap-[10px] items-start">
                    <div className=" h-fit bg-second text-accent flex flex-row p-5 rounded-xl">
                     <Icon icon={proof.icon} width="28" height="28" /> 
                    </div>
                    <div className="flex flex-col gap-[10px] ">
                        <p className="text-black font-semibold text-[20px]">
                            {proof.title}
                        </p>
                        <p className="font-semibold text-[20px]">{proof.desc}</p>
                    </div>
                 </div>
            </>
        )
    }



    return (
        <>
        
        
        <div id="description">
            <Section className="lg:flex lg:flex-row lg:justify-around bg-fond1">
                
                 <Image src={data.imagedesc.image} width={540} height={829} alt={data.imagedesc.alt} className="w-full h-auto lg:col-start-1 lg:w-[540px]  object-cover drop-shadow-[4px] drop-shadow-accent/10 rounded-2xl drop-shadow-xl drop-shadow-black/25" />
                 <div className="flex flex-col lg:w-[30%] gap-[48px]">
                 <h2 className="text-[32px]  text-black font-extrabold text-center">{data.titreh2}</h2>
                 <p className="text-[20px]">{data.description}</p>
                 <div className="flex flex-col gap-[24px]">
                    {proves.map((a, index) => <Certif proof={a} key={index} />)}
                 </div>
                 </div>
                 
            </Section>
        </div>
        
        </>
    )
}

export function Service() {
    return (
        <>
        <div id="service">
        <Section  className="w-full h-fit flex flex-col gap-[48px]  bg-fond2 ">
            <div className=" mx-auto py-[15px] px-[20px] w-fit h-fit bg-second text-accent flex flex-col p-5 rounded-4xl">
                    <p className="font-extrabold text-xl rounded-4xl "> Nos Services </p>
                    </div>
            <h2 className="text-[48px] text-black font-extrabold text-center  ">Une gamme complete de prestation</h2>
            <p className="font-semibold text-2xl text-center">de la planification a la realisation, nous maitrisons touts les aspects de notre metier</p>
            <div className="flex flex-col gap-[24px] items-center w-full lg:grid lg:grid-cols-12  lg:col-span-full">
            {data.services.map((a, index) => { return (
                <div  key={index} className="w-full p-8 h-full lg:col-span-4 lg:row-span-1  bg-white text-[24px] font-bold border border-text flex flex-col rounded-[12px] "><div className="flex flex-col gap-8 items-start">
                    <div className=" h-fit bg-second text-accent flex flex-col p-5 rounded-xl">
                     <Icon icon={a.icon} width="28" height="28" /> 
                    </div>
                    <div className="flex flex-col gap-[10px] ">
                        <p className="text-black font-semibold text-[20px]">
                            {a.titre}
                        </p>
                        <p className="font-semibold text-[20px]">{a.description}</p>
                    </div>
                 </div></div>
                 ) })}
            </div>
            


        </Section>
        </div>
        </>
    )
}

export function Temoignage() {

    return (
        <>
        <div id="temoignages">
            <Section className="bg-fond2 flex flex-col gap-[48px]">
                
            <div className=" mx-auto py-[15px] px-[20px] w-fit h-fit bg-second text-accent flex flex-col p-5 rounded-4xl">
                    <p className="font-extrabold text-xl rounded-4xl "> Nos Temoignages </p>
                    </div>
            <h2 className="text-[48px] text-black font-extrabold text-center  ">Ils nous font Confiance</h2>
            <p className="font-semibold text-2xl text-center">La satisfaction de nos clients est notre plus belle recompense, decouvrez leurs avis sur nos prestations</p>
            <div className="flex flex-col gap-[24px] items-center w-full lg:grid lg:grid-cols-12  lg:col-span-full">
                {data.avis.map((a, index) => { return (
                <div  key={index} className="w-full p-8 lg:h-full lg:col-span-4 lg:row-span-1  bg-white text-[24px] font-bold border border-text flex flex-col rounded-[12px] justify-start "><div className="flex flex-col gap-8 items-start">
                    <div className=" h-fit text-yellow-300 flex flex-row ">
                     <Icon icon="material-symbols:star" width="24" height="24" />
                     <Icon icon="material-symbols:star" width="24" height="24" /> 
                     <Icon icon="material-symbols:star" width="24" height="24" /> 
                     <Icon icon="material-symbols:star" width="24" height="24" /> 
                     <Icon icon="material-symbols:star" width="24" height="24" /> 
                    </div>
                    <div className="flex flex-col gap-[10px] ">
                        <p className=" text-[20px]">
                            {`"${a.commentaire}"`}
                        </p>
                        <p className="font-semibold text-black text-[20px]">{a.nom}</p>
                    </div>
                 </div></div>
                 ) })}
            </div>
            </Section>
         </div>


        </>
    )
}


export function Contact() {
    return (
        <>
        <div id="contact">
        <Section  className="relative grid grid-cols-12  w-full h-auto  p-[32px] z-30 bg-accent text-white  ">
            
     

     
            
            <motion.div initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
     className="row-start-1 lg:row-start-6 col-span-full w-full justify-center items-center flex flex-col gap-[48px]  z-80">
                <div className="flex flex-col gap-[16px] text-center">
                    <h2 className="font-extrabold text-[32px]">Pret a demarrer votre projet ?</h2>
                    <p className="font-semibold text-[24px]">Contactez nous des aujourd’hui pour un devis gratuit et sans engagement. Notre equipe est a votre disposition pour etudier votre projet et vous proposer les meilleures solutions adapte a vos besoins</p>
            </div>
            <div className="flex flex-col gap-[24px] lg:flex-row ">
                <a href={`tel:${data.numero}`}>
                <ContactCard className="justify-center flex-col gap-6 items-center lg:w-[394px]">
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" font-semibold  ">Telephone</p>
                <p>{data.numero} </p>
                </ContactCard>
                </a>
                
                <a href={`mailto:${data.email}`} className="">
                    <ContactCard className="justify-center items-center flex-col gap-6 lg:w-[394px]">
                    <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                    <p>email</p>
                     <p>{data.email}</p>
                     </ContactCard>
                </a>
                
            
            </div>

            <div className="flex flex-col w-full gap-[16px] justify-center items-center">
                <ContactForm  />
              {/* <ContactForm /> */ }
            </div>
            </motion.div>

        </Section>
        </div>
        </>
    )
}


