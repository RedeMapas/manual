import React from 'react';
import Image from 'next/image';

import LogoInstitucional from './img/SNC+PNAB+MinC+Gov.png';

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <hr className="border-blue-900 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p className="text-left text-md mt-5 dark:text-white text-blue-900">
        Manual de usuário do <strong>Cult Editais</strong> — plataforma do Ministério da Cultura (MinC) para publicação e gestão de editais da Política Nacional Aldir Blanc por estados e municípios brasileiros.
      </p>
      <footer className="flex justify-center px-6 pt-5">
        <Image src={LogoInstitucional} alt="SNC + PNAB + MinC + Governo Federal" className="h-20 w-auto object-contain" />
      </footer>
    </div>
  );
};

export default Footer;
