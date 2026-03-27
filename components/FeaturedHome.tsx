import Image from 'next/image';

import iconProponente from './img/home/icon-proponente.svg';
import iconGestor from './img/home/icon-gestor.svg';

const roles = [
  {
    title: 'Proponentes',
    image: iconProponente,
    alt: 'Ícone de agente cultural proponente',
    description:
      'Agentes culturais, artistas e produtores que desejam se inscrever em editais da Política Nacional Aldir Blanc e gerenciar suas propostas.',
    link: '/docs/proponente/intro',
    linkText: 'Saiba mais',
    bgColor: 'bg-blue-900',
    textColor: 'text-white',
    roundedClass: 'lg:rounded-l-[2rem]',
  },
  {
    title: 'Gestores do Ente Federativo',
    image: iconGestor,
    alt: 'Ícone de gestor do ente federativo',
    description:
      'Servidores de secretarias de cultura estaduais e municipais que publicam editais, avaliam inscrições e acompanham a execução dos projetos selecionados.',
    link: '/docs/gestor/intro',
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
