import React, { Component } from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import ReactGA from 'react-ga'
// Other
import { version } from '../package'
import clsx from 'clsx'

if (global.document) {
  const info = [`Version: ${version}`]

  for (const message of info) {
    console.log(message)
  }
}

const suffix = 'Trading tools'

const MenuLink = withRouter(({ children, router, href, ...rest }) => {
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a
      href={href}
      className={clsx(
        router.pathname === href ? 'text-black' : 'text-gray-500',
        'px-2 hover:text-black transition-colors text-sm'
      )}
      onClick={handleClick}
      {...rest}>
      {children}
    </a>
  )
})

export default class Main extends Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        ReactGA.initialize('UA-141615653-1')
        window.GA_INITIALIZED = true
      }
      ReactGA.set({ page: window.location.pathname })
      ReactGA.pageview(window.location.pathname)
    }
  }

  render() {
    const {
      title,
      description = 'Tools and resources for traders not to get rekt.'
    } = this.props
    return (
      <div className='flex flex-col min-h-screen'>
        <Head>
          <title>{title ? `${title} — ${suffix}` : suffix}</title>
          <meta name='description' content={description} />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/static/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/static/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/static/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/static/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/static/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/static/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/static/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/static/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/static/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/static/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
          <link
            rel='shortcut icon'
            href='/static/favicon.ico'
            type='image/x-icon'
          />
          <link rel='icon' href='/static/favicon.ico' type='image/x-icon' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='twitter:site' content='@fewsats' />
          <meta name='twitter:creator' content='@fewsats' />
        </Head>

        <header className='px-4 border-b border-gray-200 w-full'>
          <div
            className='max-w-5xl mr-auto ml-auto flex items-center'
            style={{ height: '50px' }}>
            <div className='pr-2'>
              <a href='/'>
                <svg
                  style={{ height: '30px' }}
                  viewBox='0 0 100 100'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='50' cy='50' r='50' />
                </svg>
              </a>
            </div>
            <div>
              <MenuLink href={`${process.env.ASSET_PREFIX}/calculator`}>
                Calculator
              </MenuLink>
            </div>
          </div>
        </header>
        <main className='px-4 mt-5 pb-10 flex-1'>{this.props.children}</main>
        <footer className='w-full text-center border-t border-gray-100 p-4 bottom-0 bg-gray-100'>
          <div>:)</div>
        </footer>
      </div>
    )
  }
}
