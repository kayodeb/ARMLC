"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import { Button } from "@headlessui/react";
const navigation = [
  { name: "Nos engagements", href: "#engagement" },
  { name: "Pourquoi se protéger ?", href: "#pourquoi" },
  { name: "Bénéficies de l'asdhésion", href: "#bénéfices" },
  { name: "Rester informer", href: "#info" },
];

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  };


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-white overflow-hidden">
      <header className=" relative inset-x-0 top-0 z-10 bg-white">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 pb-4 lg:px-8 border-b-1 border-gray-200"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="logo ARMLC" src="/logo.svg" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-2 lg:flex-1 lg:justify-end">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img alt="logo ARMLC" src="/logo.svg" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className=" text-black size-8" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block  px-3 py-2 text-lg font-bold border-b-2 border-amber-400 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <section className="relative isolate lg:px-8">
        <div></div>
        <div className="flex flex-col-reverse sm:flex sm:flex-row justify-between pb-16 sm:pb-36 pt-20">
          <div className=" text-center sm:max-w-3xl max-w-xl ">
            <div className="p-6  sm:text-start">
              <h1 className="text-6xl mt-20 font-semibold   text-gray-900 max-md:text-4xl">
                Ensemble, protégeons nos lieux de culte
              </h1>
              <p className="mt-6 text-2xl font-ligth max-w-xl text-gray-900 sm:text-2xl">
                Notre mission est d'accompagner les lieux de culte musulmans en
                France dans une démarche proactive de gestion des risques (risk
                management), afin de garantir la sécurité des fidèles, la
                protections des biens et la cotinuité des activités cuturelles.
              </p>
            </div>
          </div>

          <div>
            <img alt="image de deux musulman" src="/muslim.png" className="-my-10" />
          </div>
          <div className="absolute rounded-full -right-[700px] overflow-x-auto    bg-yellow-50 w-10 h-5 p-[800px] max-sm:-right-[900px] max-sm:-top-[1350px]  -top-[1100px] -z-20">
            
          </div>
        </div>
      </section>

      <section id="engagement">
        <div className="flex  flex-col md:mt-20 justify-center pb-6 items-center">
          <h1 className="text-amber-300  text-3xl sm:text-5xl"> ARMLC </h1>
          <h6 className="text-black font-semibold text-center  text-2xl sm:text-xl mt-2">
            
            Association du Risk Management des Lieux de Culte
          </h6>
        </div>
        <div className="flex  flex-row mt-20 justify-center gap-x-12 items-center sm:gap-x-40">
          <div>
            <h4 className="text-black   font-semibold text-xl text-center ">
              
              Solidarité
            </h4>
            <p className="text-black  mt-2   w-46 sm:w-full sm:max-w-60 font-semibold sm:font-normal text-center sm:text-xl ">
              Se protéger, c'est aussi protéger les autres
            </p>
          </div>
          <div>
            <h4 className="text-black   font-semibold text-xl text-center">
              
              Indépendence
            </h4>
            <p className="text-black  mt-2   w-32 sm:w-full sm:max-w-60 font-semibold sm:font-normal text-center sm:text-xl  ">
              Aucune influence commercial
            </p>
          </div>
        </div>
        <div className="p-2">
          <img
            alt=" vague de couleur orange"
            src="/vague.svg"
            className=" sm:-mb-40 my-6  m-auto max-md:w-[1400px] max-sm:max-w-[400px]"
          />
        </div>

        <div className="flex sm:mt-32   w-full  justify-evenly ">
          <div>
            <h4 className="text-black   font-semibold text-xl text-center ">
              
              Prévention
            </h4>
            <p className="text-black  mt-2   w-32 sm:w-full sm:max-w-60 font-semibold sm:font-normal text-center  text-xs md:text-xl ">
              Anticiper les risques pour mieux les éviter
            </p>
          </div>
          <div>
            <h4 className="text-black   font-semibold text-xl text-center ">
              
              Transparence
            </h4>
            <p className="text-black  mt-2   w-32 sm:w-full sm:max-w-60 font-semibold sm:font-normal text-center  text-xs md:text-xl">
              Des actions claires pour des objectifs partagés
            </p>
          </div>
          <div>
            <h4 className="text-black   font-semibold text-xl text-center ">
              
              Responsabilité
            </h4>
            <p className="text-black  mt-2 w-32 sm:w-full sm:max-w-60 font-semibold sm:font-normal text-center  text-xs md:text-xl">
              Promouvoir une culture du risque au service du bien commun
            </p>
          </div>
        </div>
      </section>

      <section
        id="pourquoi"
        className="flex flex-col sm:flex-row justify-between md:p-24 bg-[#FEFFEF] mt-20"
      >
        <div className="flex flex-col">
          <h1 className="font-bold sm:text-4xl text-3xl text-center sm:text-start sm:max-w-[650px] text-black">
            Pourquoi parler de sécurité dans les lieux de culte ?
          </h1>
          <p className="text-black text-lg text-center sm:text-start sm:max-w-[450px]">
            Les lieux de culte musulmans, essentiels à la vie spirituelle, sont
            souvent ouverts et donc exposé à divers risques tels que les
            incendies, le vandalisme ou les accidents.
          </p>
          <p className="text-black text-lg text-center sm:text-start sm:max-w-[450px]">
            Le Risk Management permet d'anticiper, de se préparer, et de
            protéger ces lieux précieux.
          </p>
        </div>

        <div className="flex flex-col gap-y-3 justify-start items-center ">
          <div className="text-black font-semibold space-y-4">
            <div className="flex items-center sm:text-xl">
              <img src="/target.svg" alt="cicle" className="w-14 h-14" />
              <span className="ml-2">Identifier les risques</span>
            </div>
            <div className="flex items-center sm:text-xl">
              <img src="/target-people.svg" alt="cible des personne " className="w-12 h-12" />
              <span className="ml-2">Former les bénévoles</span>
            </div>
            <div className="flex items-center sm:text-xl">
              <img src="/super-target.svg" alt="cible" className="w-14 h-12" />
              <span className="ml-2">Agir en prévention</span>
            </div>
            <div className="flex items-center sm:text-xl">
              <img src="/ring.svg" alt="alerte" className="w-16 h-16" />
              <span className="ml-2">Réagir efficacement</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="bénéfices"
        className="flex  flex-col mt-20 justify-center sm:px-4 pb-2 "
      >
        <div className="  flex  flex-col mt-2 text-black justify-center pb-6  items-center">
          <h1 className="text-black font-bold  text-2xl sm:text-3xl text-center">
            Les avantages à réjoindre l'ARMLC
          </h1>
          <h6 className="text-black text-center max-w-[650px] sm:font-semibold mt-2 px-12 sm:px-0 text-lg mb-6 ">
            
            Rejoindre l'ARMLC, c'est bénéficier d'une couverture adaptée, de
            conseils pratiques et d'un réseau engagé .
          </h6>
        </div>
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 max-w-[900px] p-4 sm:gap-y-12 m-auto">
          <div className="  text-black flex items-center justify-start">
            <img src="/protect.svg" className="w-18" alt=" protection-logo" />

            <div>
              <div>
                <h1 className="font-bold text-xl text-black">
                  Assurance multirisque collective
                </h1>
                <p className="text-start text-lg">
                  spécialement conçue pour les lieux de culte musulmans
                </p>
              </div>
            </div>
          </div>
          <div className=" text-black flex items-center  gap-x-2  justify-start">
            <img src="/web-page.svg" className="w-18" alt="page-web-logo" />

            <div>
              <div>
                <h1 className="font-bold text-xl text-black">
                  Réseau d'entraide entre responsables
                </h1>
                <p className="text-start text-lg">
                  Echangez entre pairs, partagez vos expériences
                </p>
              </div>
            </div>
          </div>
          <div className=" text-black flex items-center gap-x-2 justify-start">
            <img src="/salutations.svg" className="w-18" alt="alutations" />

            <div>
              <div>
                <h1 className="font-bold text-xl text-black">
                  Accès à des réssources pratiques
                </h1>
                <p className="text-start text-lg">
                  Guides, vidéo, modèles utiles au quotidien
                </p>
              </div>
            </div>
          </div>
          <div className=" text-black flex items-center  gap-x-2  justify-start">
            <img src="/call.svg" className="w-18" alt="sms appel" />

            <div>
              <div>
                <h1 className="font-bold text-xl text-black">
                  Acompagnement personnalisé
                </h1>
                <p className="text-start text-lg">
                  Sécurité, obligations légales, conseils sur conseils sur
                  mésures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="flex flex-col p-2  md:p-8">
        <div className="text-black mt-16 py-6 font-semibold items-center rounded-t-lg bg-[#F6B417] text-xl sm:text-lg   text-center">
          
          Restez informé même sans adhérer
        </div>
        <div className="grid md:grid-cols-2  grid-rows-1 grid-cols-1    bg-[#FEFFEF]  ">
          <div className="flex  justify-center items-center  text-medium  sm:p-8 p-8 text-center">
            <p className="max-w-lg font-medium">
              Chaque mois, recevez des conseils concrets pour renforcer la
              sécurit& de vos lieux de culte musulmans, rester informé des
              obligations et réglèmentations en vigeur, et découvrir les actions
              menées par l'ARMLC.
            </p>
          </div>
         
            <form className="flex flex-col gap-y-4 justify-center px-6 sm:py-16 pb-12 w-full md:max-w-lg  md:px-0 sm:px-24" onSubmit={handleSubmit}>
            <Input
              type="email"
              className="bg-white sm:p-4 p-6 text-ls"
              placeholder="Votre Prénom"
            />
            <Input
              type="email"
              className="bg-white sm:p-4 p-6 text-ls "
              placeholder="Votre nom"
            />
            <Input
              type="email"
              className="bg-white sm:p-4 p-6 text-ls"
              placeholder="Votre adresse e-mail"
            />
            <Button
              type="submit"
              className="bg-amber-400 rounded-lg h-10 text-ls text-white "
            >
              S'abonner
            </Button>
            </form>
          
        </div>
      </section>
      <footer className="flex flex-col p-6   sm:p-20 mb-0 justify-center  bg-[#FEFCD3] ">
        <div className="flex sm:flex-row  flex-col border-b-2 border-gray-500 w-full pb-12 justify-around">
          <img alt="logo ARMLC" src="/logo.png" className="h-10 w-32" />
          <div className=" flex-1 flex justify-evenly  gap-4 max-md:grid grid-cols-2">
            <div className=" flex flex-col gap-y-2">
              <h1 className=" font-bold  text-lg">Ressources</h1>
              <nav>
                <ul className=" flex flex-col font-sans gap-y-2">
                  <li>MCB Mosque Safefety Guide</li>
                  <li>OnMosque</li>
                  <li> Risk Assessment Guidance.url</li>
                  <li>Risk Assessment Simpty</li>
                  <li>Mosque Insurance</li>
                  <li>Risque Management Policy</li>
                </ul>
              </nav>
            </div>
            <div className=" flex flex-col gap-y-6">
              <h1 className=" font-bold  text-lg ">Contact</h1>
              <nav>
                <ul>
                  <li>Email</li>
                  <li className="mb-4">contact@gmail.fr</li>
                  <li> Téléphone</li>
                  <li>01 00 00 00 00 </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className=" flex pt-12 font-bold sm:font-semibold items-center justify-center">
          <p>ARMLC ©2025-Association loi 1901</p>
        </div>
      </footer>
    </div>
  );
}
