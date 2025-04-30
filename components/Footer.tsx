import React from 'react';
import Image from 'next/image';

// Import light and dark images
import FelicilabLight from './img/light-felicilab.png';
import FelicilabDark from './img/dark-felicilab.png';
import MutiraoLight from './img/light-mutirao.png';
import MutiraoDark from './img/dark-mutirao.png';
import LabDoFuturoLight from './img/light-lab-do-futuro-ufc.png';
import LabDoFuturoDark from './img/dark-lab-do-futuro-ufc.png';
import UFCLight from './img/light-ufc.png';
import UFCDark from './img/dark-ufc.png';
import RedeDasArtesLight from './img/light-rede-das-artes-funarte.png';
import RedeDasArtesDark from './img/dark-rede-das-artes-funarte.png';
import FunarteLight from './img/light-funarte.png';
import FunarteDark from './img/dark-funarte.png';
import MincGovernoFederalLight from './img/light-minc-governo-federal.png';
import MincGovernoFederalDark from './img/dark-minc-governo-federal.png';

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <hr className="border-blue-900 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p className="text-left text-md mt-5 dark:text-white text-blue-900">
        Esse material é fruto do Programa de Difusão Nacional - Funarte Redes das Artes, realizado pelo Laboratório do Futuro (entidade vinculada à Universidade Federal do Ceará) no ano de 2025.
      </p>
      <footer className="grid md:grid-cols-2 sm:grid-cols-1 px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 pt-5">
          <div className="relative">
            <Image src={FelicilabLight} alt="Felicilab" className="w-auto h-18 object-contain mx-auto block dark:hidden" />
            <Image src={FelicilabDark} alt="Felicilab" className="w-auto h-18 object-contain mx-auto hidden dark:block" />
          </div>
          <div className="relative">
            <Image src={MutiraoLight} alt="Mutirão" className="w-auto py-5 h-max-18 mx-auto block dark:hidden" />
            <Image src={MutiraoDark} alt="Mutirão" className="w-auto py-5 h-max-18 mx-auto hidden dark:block" />
          </div>
          <div className="relative">
            <Image src={LabDoFuturoLight} alt="Lab do Futuro UFC" className="w-auto h-24 object-contain mx-auto block dark:hidden" />
            <Image src={LabDoFuturoDark} alt="Lab do Futuro UFC" className="w-auto h-24 object-contain mx-auto hidden dark:block" />
          </div>
          <div className="relative">
            <Image src={UFCLight} alt="UFC" className="w-auto h-20 object-contain mx-auto block dark:hidden" />
            <Image src={UFCDark} alt="UFC" className="w-auto h-20 object-contain mx-auto hidden dark:block" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pt-5">
          <div className="relative">
            <Image src={RedeDasArtesLight} alt="Rede das Artes Funarte" className="w-auto h-15 pt-3 object-contain mx-auto block dark:hidden" />
            <Image src={RedeDasArtesDark} alt="Rede das Artes Funarte" className="w-auto h-15 pt-3 object-contain mx-auto hidden dark:block" />
          </div>
          <div className="relative">
            <Image src={FunarteLight} alt="Funarte" className="w-auto h-20 object-contain mx-auto block dark:hidden" />
            <Image src={FunarteDark} alt="Funarte" className="w-auto h-20 object-contain mx-auto hidden dark:block" />
          </div>
          <div className="relative">
            <Image src={MincGovernoFederalLight} alt="MinC Governo Federal" className="w-auto h-20 object-contain mx-auto block dark:hidden" />
            <Image src={MincGovernoFederalDark} alt="MinC Governo Federal" className="w-auto h-20 object-contain mx-auto hidden dark:block" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
