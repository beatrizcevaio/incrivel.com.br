import { NextSeo } from 'next-seo'

import Grid from '~/components/grid'
import Link from '~/components/link'
import ArrowLeftIcon from '~/icons/arrow-left.svg'
import ExclamationBeige from '~/icons/exclamation-beige.svg'
import Layout from '~/layouts/default'

const NotFoundPage = () => {
  return (
    <Layout>
      <NextSeo title="Página não encontrada" />
      <section className="relative w-full h-[600px] 2xl:h-[700px] overflow-hidden bg-green">
        <Grid className="container relative z-10 h-full">
          <Link
            href="/"
            className="group absolute top-0 lg:top-[68px] left-0 md:px-[70px] 1.5xl:px-0 py-4 lg:py-1 px-4 flex items-center bg-green-light lg:bg-transparent text-beige z-10 w-full lg:w-fit"
          >
            <ArrowLeftIcon className="w-3 h-3 group-hover:-translate-x-1 duration-300" />
            <span className="ml-[10px] text-base font-modern-condensed-medium font-semibold">
              Voltar para página inicial
            </span>
          </Link>
          <div className="relative col-span-full lg:col-start-2 lg:h-full flex items-end lg:items-center pb-10 lg:pb-0">
            <div className="w-full text-beige space-y-2 lg:max-w-[420px]">
              <h2 className="text-5xl lg:text-6xl font-modern-condensed-medium font-semibold">
                404 - Poxa! Não encontramos a página.
              </h2>
              <p>
                Revise o endereço da página que deseja acessar e tente
                novamente.
              </p>
            </div>
          </div>
        </Grid>
        <div className="absolute top-0 lg:-top-[100px] -right-10 lg:-right-[340px] 2xl:-right-[400px] w-[120%] lg:w-3/4 h-[288px] sm:h-[340px] lg:h-[900px] -rotate-[5deg] object-cover object-right max-w-none bg-green-light overflow-hidden">
          <ExclamationBeige className="absolute -top-20 lg:-top-20 2xl:top-0 left-1/2 -translate-x-1/2 max-w-[400px] lg:max-w-none lg:translate-x-0 lg:left-44 2xl:left-80 w-[142px] lg:w-[384px] h-[352px] lg:h-[700px] rotate-[5deg]" />
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
