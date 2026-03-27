export default function Example() {
  return (
    <div>
      <div className="mx-auto max-w-7xl p-6">
        <div className="relative isolate overflow-hidden bg-cover sm:bg-top lg:bg-bottom bg-[url(/img/bg-home-hero.png)]  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto py-16 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance !text-gray-900 sm:text-4xl">
            <strong>Cult Editais</strong>
            </h2>
            <p className="mt-6 text-lg/8 text-pretty !text-gray-700">
            Plataforma do Ministério da Cultura para publicação e gestão de editais da Política Nacional Aldir Blanc em estados e municípios de todo o Brasil.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/docs/proponente/intro"
                className="rounded-md !bg-gray-900 px-3.5 py-2.5 text-sm font-semibold !text-white shadow-xs hover:!bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Introdução
              </a>
              {/* <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          {/* <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
