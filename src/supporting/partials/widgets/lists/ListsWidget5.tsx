/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type eachEle = {
    atTime: string,
    details: string,
    txLink: string,
    blockHeight: string,
    from: string,
    evmHash: string,
}

type Props = {
    className: string,
    theEvents: eachEle[]
}

const ListsWidget5: React.FC<Props> = ({className, theEvents}) => {

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header align-items-center border-0 mt-4'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='fw-bold mb-2 text-dark'>Reading from <u>t410fym6znsacjgjmtf5oqibelrft5hpgd6aru5ni2py</u></span>
                </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body pt-5'>
                {/* begin::Timeline */}
                <div className='timeline-label'>

                    {theEvents.map(function(ele, idx) {
                        return (
                            <div className='timeline-item'>
                                <div className='timeline-label fw-bold text-gray-800 fs-6'>{ele.atTime}</div>
                                <div className='timeline-badge'>
                                    <i className='fa fa-genderless text-danger fs-1'></i>
                                </div>
                                <div className='timeline-content fw-bold text-gray-800 ps-3'>
                                    {ele.details}&nbsp;
                                    <a href={ele.txLink} target="_blank" className='text-primary'>
                                        Wallaby Tx Link
                                    </a>
                                    <br/>
                                    <br/>
                                    <u>Block Height:</u> {ele.blockHeight}<br/>
                                    <u>EVM Hash:</u> {ele.evmHash}<br/>
                                    <u>From:</u> {ele.from}
                                </div>
                            </div>
                        )
                    })}

                </div>
                {/* end::Timeline */}
            </div>
            {/* end: Card Body */}
        </div>
    )
}

export {ListsWidget5}
