/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {PageTitle} from '../../../supporting/layout/core'
import {ListsWidget5,} from '../../../supporting/partials/widgets'

type eachEle = {
    atTime: string,
    details: string,
    txLink: string,
    blockHeight: string,
    from: string,
    evmHash: string,
}


type Props = {
    theEvents: eachEle[]
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

    const [alerts, setAlerts] = useState<eachEle[]>([]);

    useEffect(() => {
        const doStuff = async() => {

            await delay(30000);

            setAlerts(alerts => [...alerts, {
                    atTime: "03:33",
                    details: "Athena L2 transactions we're rolled up and posted to FEVM L1 at transaction:",
                    txLink: "https://explorer.glif.io/tx/bafy2bzacebbu4qh6rr2qq2tynf3vk6nbdodo6oamjffo2ivuvbd2wodqurc5s/?network=wallabynet",
                    blockHeight: "7149",
                    from: "t410fym6znsacjgjmtf5oqibelrft5hpgd6aru5ni2py",
                    evmHash: "0x434e40fe8c75086a7869775579a11b86ef380c494aed22b4a847ab3870a445d9",

                }])

            await delay(1000);

            setAlerts(alerts => [...alerts, {
                atTime: "03:34",
                details: "Athena L2 transactions we're rolled up and posted to FEVM L1 at transaction:",
                txLink: "https://explorer.glif.io/tx/bafy2bzacea6xztxe2qjetfru3a4hat67e2han3mtn322gc2xyvjpbo5koo6pm/?network=wallabynet",
                blockHeight: "7152",
                from: "t410fym6znsacjgjmtf5oqibelrft5hpgd6aru5ni2py",
                evmHash: "0x3d7ccee4d412499634d838704fdf268e06ed936ef5a30b57c552f0bbaa73bcf6",

            }])


            await delay(1000);


            setAlerts(alerts => [...alerts, {
                atTime: "03:35",
                details: "Athena L2 transactions we're rolled up and posted to FEVM L1 at transaction:",
                txLink: "https://explorer.glif.io/tx/bafy2bzaceaztuzj5auxjppc2fwqfcvdpqs26lczbts54mdqmutn6fadlicrne/?network=wallabynet",
                blockHeight: "7154",
                from: "t410fym6znsacjgjmtf5oqibelrft5hpgd6aru5ni2py",
                evmHash: "0x333a653d052e97bc5a2da051546f84b5e58b219cbbc60e0ca4dbe2806b40a2d2",

            }])

            await delay(60000);


            setAlerts(alerts => [...alerts, {
                atTime: "03:36",
                details: "Athena L2 transactions we're rolled up and posted to FEVM L1 at transaction:",
                txLink: "https://explorer.glif.io/tx/bafy2bzacead47eh7swgyjiohmkqldvxlkdn56vtcaie7lhgzr7xod34etvmkc/?network=wallabynet",
                blockHeight: "7156",
                from: "t410fym6znsacjgjmtf5oqibelrft5hpgd6aru5ni2py",
                evmHash: "0x07cf90ff958d84a1c762a0b1d6eb50dbdf56620209f59cd98feee1ef849d58a1",

            }])
        }

        doStuff()
    }, []);

    return (
        <>
            <PageTitle breadcrumbs={[]}>{"Transactions"}</PageTitle>
            <DashboardPage theEvents={alerts} />
        </>
    )
}

export {DashboardWrapper}
