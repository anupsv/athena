/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {PageTitle} from '../../../supporting/layout/core'
import {ListsWidget5,} from '../../../supporting/partials/widgets'

type Props = {
    theEvents: string[]
}

const DashboardPage: FC<Props> = ({theEvents}) => (

    <>
        <div className='row g-5 gx-xxl-12'>
            <div className='col-xxl-11'>
                <ListsWidget5 theEvents={theEvents} className='card-xxl-stretch mb-5 mb-xxl-8'/>
            </div>
        </div>
    </>
)

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const DashboardWrapper: FC = () => {

    const [alerts, setAlerts] = useState<string[]>([]);

    useEffect(() => {
        const doStuff = async() => {

            if (alerts.length < 1){
                setAlerts(alerts => [...alerts, "This is new"])
                await delay(3000);
                setAlerts(alerts => [...alerts, "This is new 2"])
            }
        }

        doStuff()
    });

    return (
        <>
            <PageTitle breadcrumbs={[]}>{"Transactions"}</PageTitle>
            <DashboardPage theEvents={alerts} />
        </>
    )
}

export {DashboardWrapper}
