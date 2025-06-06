import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import Search from '~/components/header/search'
import Link from '~/components/link'
import GlobalContext from '~/contexts/global'
import useOutsideClick from '~/helpers/use-click-outside'
import ArrowIcon from '~/icons/arrow.svg'
import ArrowDown from '~/icons/arrow-down.svg'
import LogoIcon from '~/icons/logo.svg'
import SearchIcon from '~/icons/search.svg'

import styles from './header.module.css'

const Header = () => {
  const {
    state: {
      data: { menus },
    },
  } = useContext(GlobalContext)

  const router = useRouter()
  const [active, setActive] = useState(false)
  const [search, setSearch] = useState(false)
  const [indexActive, setIndexActive] = useState(-1)

  useEffect(() => {
    setActive(false)
    setSearch(false)
  }, [])

  function handleClick() {
    setActive(!active)
  }

  const reference = useOutsideClick(() => {
    setIndexActive(-1)
    setSearch(false)
  })

  useEffect(() => {
    setActive(false)
    setIndexActive(-1)
  }, [router.asPath])

  const handleDropDown = (index) => {
    setIndexActive(index === indexActive ? -1 : index)
  }

  return (
    <>
      <header className="fixed top-0 left-0 bg-white flex items-center w-full h-[50px] lg:h-[70px] z-50">
        <div className="relative container lg:grid lg:grid-cols-12 gap-x-4 flex w-fit h-full">
          <div className="lg:col-span-2 2xl:col-span-3 w-fit h-full flex items-center">
            <h1 className={styles.title}>
              <Link className="w-fit block" href="/">
                <LogoIcon className="w-[124px] lg:w-[156px] h-[40px] lg:h-[50px]" />
              </Link>
            </h1>
          </div>
          <div className="absolute top-0 right-0 h-full flex items-center lg:hidden">
            <button
              className={classNames(
                'flex items-center justify-center w-12 h-12 hover:bg-beige',
                {
                  'bg-beige': search,
                }
              )}
              onClick={() => setSearch(true)}
            >
              <SearchIcon className="w-[21px] h-[21px]" />
            </button>
            <button
              onClick={handleClick}
              className={classNames(
                'hamburger hamburger--elastic w-[60px] !bg-green h-full',
                {
                  'is-active': active,
                }
              )}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <nav
            className={classNames(
              'fixed left-0 lg:static flex-grow lg:flex-grow-0 w-full h-[calc(100vh-50px)] lg:h-full flex flex-col lg:flex-row lg:items-center justify-end lg:col-span-10 2xl:col-span-9 lg:col-start-3 2xl:col-start-4 duration-300',
              {
                'top-[50px]': active,
                'top-[100vh]': !active,
              }
            )}
          >
            {menus.headercontent?.length && (
              <ul className="lg:h-full flex flex-col bg-white lg:flex-row lg:pr-3 lg:space-x-2  pt-6 lg:pt-0">
                {menus.headercontent.map((item, index) => (
                  <li
                    className="lg:relative h-16 lg:h-full"
                    key={`header-menu-${index}`}
                  >
                    {item.children.length > 0 ? (
                      <>
                        <button
                          className={classNames(
                            'relative group w-full h-full flex items-center text-xl lg:text-base text-gray-dark font-modern-condensed-medium font-semibold px-[34px] md:px-[70px] lg:px-2 hover:bg-green duration-300 hover:text-beige',
                            {
                              'bg-green-light text-beige':
                                indexActive === index,
                            }
                          )}
                          ref={reference}
                          onClick={() => handleDropDown(index)}
                        >
                          <ArrowDown
                            className={classNames(
                              'absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-300',
                              { 'opacity-100': indexActive === index }
                            )}
                          />
                          <span
                            className={classNames(
                              'duration-300 lg:group-hover:-translate-y-2',
                              {
                                '-translate-y-2 text-beige':
                                  indexActive === index,
                              }
                            )}
                          >
                            {item.title}
                          </span>
                          <ArrowIcon className="lg:hidden w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-2" />
                        </button>
                        <ul
                          className={classNames(
                            'absolute bottom-0 lg:-bottom-16 bg-beige w-full lg:w-[200px] h-[calc(100vh-50px)] lg:h-fit z-10',
                            {
                              'left-0 block opacity-100': indexActive === index,
                              'hidden opacity-0': indexActive !== index,
                            }
                          )}
                        >
                          {item.children.map((child, index) => (
                            <li className="w-full h-16" key={`child-${index}`}>
                              <Link
                                className="group w-full h-full hover:bg-green px-[34px] md:px-[70px] lg:px-2 font-modern-condensed-medium font-semibold text-xl lg:text-base flex items-center text-gray-dark hover:text-beige"
                                href={child.url}
                              >
                                <span>{child.title}</span>
                                <ArrowIcon className="w-4 h-4 ml-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        className={classNames(
                          'group h-full flex items-center text-xl lg:text-base text-gray-dark font-modern-condensed-medium font-semibold px-[34px] md:px-[70px] lg:px-2 hover:bg-green duration-300',
                          {
                            'bg-green':
                              router.asPath === item.url ||
                              router.asPath.match(item.url),
                          }
                        )}
                        href={item.url}
                      >
                        <span
                          className={classNames(
                            'duration-300 lg:group-hover:-translate-y-2 group-hover:text-beige',
                            {
                              'lg:-translate-y-2 text-beige':
                                router.asPath === item.url ||
                                router.asPath.match(item.url),
                            }
                          )}
                        >
                          {item.title}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
                <li className=" hidden h-full lg:flex items-center">
                  <button
                    className={classNames(
                      'flex items-center justify-center w-12 h-12 rounded hover:bg-beige',
                      {
                        'bg-beige': search,
                      }
                    )}
                    onClick={() => {
                      setSearch(true)
                    }}
                  >
                    <SearchIcon className="w-[21px] h-[21px]" />
                  </button>
                </li>
              </ul>
            )}
            {menus.headerinstitutional?.length && (
              <ul className="relative green-list flex-1 lg:flex-none flex flex-col lg:flex-row lg:items-center bg-green lg:h-full lg:pl-3 lg:space-x-2">
                {menus.headerinstitutional.map((item, index) => (
                  <li className="h-16 lg:h-full" key={`header-menu-${index}`}>
                    <Link
                      className={classNames(
                        'group h-full flex items-center text-xl lg:text-base text-beige font-modern-condensed-medium font-semibold px-[34px] md:px-[70px] lg:px-2 lg:hover:bg-green-light duration-300 lg:hover:text-gray-dark',
                        {
                          'lg:bg-green-light text-gray-dark':
                            router.asPath === item.url ||
                            router.asPath.match(item.url),
                        }
                      )}
                      href={item.url}
                    >
                      <span
                        className={classNames(
                          'duration-300 lg:group-hover:-translate-y-2',
                          {
                            'lg:-translate-y-2':
                              router.asPath === item.url ||
                              router.asPath.match(item.url),
                          }
                        )}
                      >
                        {item.title}
                      </span>
                      <ArrowIcon className="opacity-0 lg:hidden w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      </header>
      <Search search={search} setSearch={setSearch} reference={reference} />
    </>
  )
}

export default Header
