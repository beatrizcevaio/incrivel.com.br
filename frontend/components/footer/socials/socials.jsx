import React from 'react'

import SocialIconSelector from '~/components/footer/socials/social-icon-selector'

const Socials = (socials) => {
  return (
    <section className="bg-beige h-[6.25rem] lg:h-[3.75rem]">
      <div className="container w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4">
        <p className="w-full lg:w-fit text-base text-gray-dark font-lato-regular text-center">
          Acompanhe as nossas redes sociais
        </p>
        {socials && (
          <ul className="w-full lg:w-fit flex items-center justify-center gap-4">
            {socials.socialLinks?.map((item, index) => (
              <li key={`link-${index}`}>
                <a
                  className="hover:opacity-75 duration-200"
                  href={item.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIconSelector socialMedia={item.socialSelect} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Socials
