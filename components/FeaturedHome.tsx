import Image from 'next/image';

import imgAgents from './img/home/agents.svg';
import imgManagers from './img/home/managers.svg';
import imgDevelopers from './img/home/developers.svg';

const roles = [
  {
    title: 'Agentes Artísticos',
    image: imgAgents,
    alt: 'Pessoa dançando com o sol ao fundo',
    description:
      'Pessoas que desejam divulgar a agenda de seus circuitos artísticos, eventos e outras oportunidades.',
    link: '/docs/usuarios/intro',
    linkText: 'Saiba mais',
    bgColor: 'bg-blue-900',
    textColor: 'text-white',
    roundedClass: 'lg:rounded-l-[2rem]',
  },
  {
    title: 'Gestores',
    image: imgManagers,
    alt: 'Pintora criando em tela com pincéis',
    description:
      'Coordenação do processo de editais e iniciativas, publicação dos resultados e monitoramento da execução de editais.',
    link: '/docs/gestores/intro',
    linkText: 'Saiba mais',
    bgColor: 'bg-blue-900',
    textColor: 'text-white',
    roundedClass: 'lg:rounded-l-[2rem]',
  },
  {
    title: 'Desenvolvedores',
    image: imgDevelopers,
    alt: 'Equipe trabalhando com tecnologia e engrenagens',
    description:
      'Pessoa responsável por manter a infraestrutura e dar manutenção nas tecnologias digitais utilizadas pela Rede das Artes.',
    link: '/docs/devs',
    linkText: 'Saiba mais',
    bgColor: 'bg-blue-900',
    textColor: 'text-white',
    roundedClass: 'lg:rounded-r-[2rem] max-lg:rounded-b-[2rem]',
  },
];

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="grid px-6 gap-4 lg:grid-cols-3">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full lg:row-span-2 ${role.roundedClass || ''}`}
            >
              <div className={`absolute inset-px rounded-lg ${role.roundedClass || ''}`}></div>

              <div
                className={`relative flex flex-col flex-grow overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${role.roundedClass || ''}`}
              >
                <div className="p-10 text-center">
                  <Image className="mx-auto" alt={role.alt} src={role.image} />
                  <h3 className="mt-10 mb-5 text-2xl font-bold">{role.title}</h3>
                  <p className="my-5 max-w-lg text-sm leading-6 mx-auto">{role.description}</p>
                  <a
                    href={role.link}
                    className={`inline-block rounded-md m-1 px-3.5 py-2.5 text-sm font-semibold shadow-xs 
                                focus-visible:outline-2 focus-visible:outline-offset-2 
                                ${role.bgColor} ${role.textColor} hover:opacity-90`}
                  >
                    {role.linkText}
                  </a>
                </div>
              </div>

              <div
                className={`pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 ${role.roundedClass || ''}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
