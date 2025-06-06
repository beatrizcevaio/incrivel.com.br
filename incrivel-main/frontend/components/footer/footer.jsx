import React, { useContext } from 'react'
import Slider from 'react-slick'

import Cta from '~/components/cta'
import Socials from '~/components/footer/socials'
import Grid from '~/components/grid'
import Image from '~/components/image'
import Link from '~/components/link'
import Newsletter from '~/components/newsletter'
import GlobalContext from '~/contexts/global'
import ArrowIcon from '~/icons/arrow-right.svg'
import FrameIcon from '~/icons/frame.svg'
import FuturebrandIcon from '~/icons/futurebrand.svg'
import { getCurrentYear } from '~/utils/date'

const Footer = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const {
    state: {
      data: { options },
    },
  } = useContext(GlobalContext)

  const { footer, socials } = options

  return (
    <>
      <Socials {...socials} />
      <footer>
        <div className="bg-green">
          <Grid className="container py-10">
            <Slider
              className="footer-banners-slick hidden lg:block col-span-7 col-start-2"
              {...settings}
            >
              {footer?.selectedBanners &&
                footer.selectedBanners.map((footerBanner, index) => (
                  <div
                    className="!flex items-center h-full"
                    key={`footer-banner-${index}`}
                  >
                    <Link
                      href={footerBanner?.acf?.bannerLink?.url}
                      className="group !flex items-center h-fit min-h-[240px] !ml-5"
                    >
                      <div className="relative mr-5">
                        <FrameIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[246px] h-[200px]" />
                        <Image
                          className="relative w-[230px] h-[190px] object-contain z-10"
                          {...footerBanner.featuredMedia}
                        />
                      </div>
                      <div className="text-beige -rotate-[5deg] max-w-[312px] text-left">
                        <h3 className="font-modern-condensed-bold text-3xl">
                          {footerBanner.acf.title}
                        </h3>
                        {footerBanner.acf.hasDescription && (
                          <p className="text-base lg:max-w-[262px]">
                            {footerBanner.acf.description}
                          </p>
                        )}
                        <Cta
                          hasArrowIcon={true}
                          title={footerBanner?.acf?.bannerLink.title}
                          color="beige"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
            </Slider>
            <div className="col-span-full lg:col-span-3">
              <Newsletter />
            </div>
          </Grid>
        </div>
        <div className="bg-gray-dark">
          <Grid className="container px-8 py-4 lg:h-[50px]">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 h-full flex lg:justify-between flex-col lg:flex-row space-y-3 lg:space-y-0">
              <Link
                href="/politica-de-privacidade"
                className="group flex items-center text-beige font-modern-condensed-medium"
              >
                <span className="mr-[10px]">Política de privacidade</span>
                <ArrowIcon className="w-3 h-3 group-hover:translate-x-2 duration-300" />
              </Link>
              <p className="text-white text-sm lg:flex lg:items-center">
                &copy; {getCurrentYear()} Todos os direitos reservados. Site by
                <Link
                  className="text-brown-light font-barlow-bold hover:opacity-70"
                  href="https://futurebrand.com.br"
                  target="_blank"
                >
                  <FuturebrandIcon className="w-[82px] ml-1" />
                </Link>
              </p>
            </div>
          </Grid>
        </div>
      </footer>
    </>
  )
}

export default Footer
