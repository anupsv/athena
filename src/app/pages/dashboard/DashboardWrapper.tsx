/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
    ListsWidget5,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>

    <div className='row g-5 gx-xxl-12'>
      <div className='col-xxl-11'>
        <ListsWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
        {/*<TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />*/}
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
