/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {Navbar} from './Navbar'

export function HeaderWrapper() {
  const {config, classes} = useLayout()
  if (!config.app?.header?.display) {
    return null
  }

  return (
    <div id='kt_app_header' className='app-header'>
      <div
        id='kt_app_header_container'
        className={clsx(
          'app-container flex-lg-grow-1',
          classes.headerContainer.join(' '),
          config.app?.header?.default?.containerClass
        )}
      >
        {config.app.sidebar?.display && (
          <>
              <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
                  <Link to='/dashboard' className='d-lg-none'>
                      <img alt='Logo' src='./assets/media/logos/default-small.svg' className='h-30px' />
                  </Link>
              </div>
          </>
        )}
      </div>
    </div>
  )
}
