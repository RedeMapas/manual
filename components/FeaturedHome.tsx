import Image from 'next/image';

import imgMountain from "./img/home/undraw_mountain.svg";
import imgReact from "./img/home/undraw_react.svg";
import imgTree from "./img/home/undraw_tree.svg";

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {/* <h2 className="text-center text-base/7 font-semibold">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">
          Everything you need to deploy your app
        </p> */}
        <div className="grid  px-6 gap-4 lg:grid-cols-3 lg:grid-rows-1">
          <div className="relative lg:row-span-2 h-auto lg:h-[420px]">
            <div className="absolute inset-px rounded-lg lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <Image className="w-auto h-36 mx-auto" alt="Montanhas" src={imgMountain} />
                <h3 className="mt-10 mb-5 text-2xl font-bold">
                  Público Final
                </h3>
                <p className="my-5 max-w-lg text-sm/6  max-lg:text-center">
                  Cidadão comum gostaria de ter opções para conhecer melhor a agenda de eventos, as oportunidades, os espaços e agentes culturais.
                </p>
                <a
                  href="/docs/usuarios/intro"
                  className="rounded-md bg-blue-900 m-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                  Saiba mais
                </a>
              </div>
              {/* <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw]   shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div> */}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative lg:row-span-2 h-auto lg:h-[420px]">
            <div className="absolute inset-px rounded-lg"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <Image className="w-auto h-36 mx-auto" alt="Montanhas" src={imgTree} />
                <h3 className="mt-10 mb-5 text-2xl font-bold">
                  Gestores
                </h3>
                <p className="my-5 max-w-lg text-sm/6  max-lg:text-center">
                  Coordenação do processo de editais e projetos, publicação dos resultados e monitoramento da execução de editais.
                </p>
                <a
                  href="#"
                  className="rounded-md bg-gray-300 m-1 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Em Breve
                </a>

              </div>
              {/* <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw]   shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div> */}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>

          <div className="relative lg:row-span-2 h-auto lg:h-[420px]">
            <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <Image className="w-auto h-36 mx-auto" alt="Montanhas" src={imgReact} />
                <h3 className="mt-10 mb-5 text-2xl font-bold">
                  Desenvolvedores
                </h3>
                <p className="my-5 max-w-lg text-sm/6  max-lg:text-center">
                  Pessoa responsável por manter a infraestrutura e dar manutenção nas tecnologias digitais utilizadas pelas secretarias de cultura.
                </p>
                <a
                  href="/docs/devs"
                  className="rounded-md bg-blue-900 m-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                >
                  Saiba mais
                </a>

              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
