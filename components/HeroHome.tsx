export default function Example() {
  return (
    <div>
      <div className="mx-auto max-w-7xl p-6">
        <div className="relative isolate overflow-hidden bg-cover sm:bg-top lg:bg-bottom bg-[url(/img/bg-home-hero.png)]  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto py-16 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            <strong>Mapas</strong>
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Um jeito descomplicado de começar com o software mais utilizado pela cultura brasileira.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/docs/usuarios/intro"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Introdução (5min)
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
