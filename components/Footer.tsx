import React from 'react';
import Image from 'next/image';

// Import images
import Felicilab from './img/0-felicilab.png';
import Mutirao from './img/1-mutirao.png';
import LabDoFuturo from './img/2-lab-do-futuro-ufc.png';
import UFC from './img/3-ufc.png';
import RedeDasArtes from './img/4-rede-das-artes-funarte.png';
import Funarte from './img/5-funarte.png';
import MincGovernoFederal from './img/6-minc-governo-federal.png';

const Footer = () => {
  return (
    <footer className="grid grid-cols-1">
      <div className="grid grid-cols-4 gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 py-10">
        <Image src={Felicilab} alt="Felicilab" className="w-auto h-18 object-contain mx-auto" />
        <Image src={Mutirao} alt="Mutirão" className="w-auto h-18 mx-auto" />
        <Image src={LabDoFuturo} alt="Lab do Futuro UFC" className="w-auto h-24 object-contain mx-auto" />
        <Image src={UFC} alt="UFC" className="w-auto h-20 object-contain mx-auto" />
      </div>

      <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10">
        <Image src={RedeDasArtes} alt="Rede das Artes Funarte" className="w-48 h-auto object-contain mx-auto" />
        <Image src={Funarte} alt="Funarte" className="w-auto h-20 object-contain mx-auto" />
        <Image src={MincGovernoFederal} alt="MinC Governo Federal" className="w-auto h-20 object-contain mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
