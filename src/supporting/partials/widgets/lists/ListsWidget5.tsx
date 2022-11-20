/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'

type Props = {
    className: string,
    theEvents: string[]
}

const ListsWidget5: React.FC<Props> = ({className, theEvents}) => {

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header align-items-center border-0 mt-4'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='fw-bold mb-2 text-dark'>Live Activity</span>
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
                                {/* begin::Label */}
                                <div className='timeline-label fw-bold text-gray-800 fs-6'>14:37</div>
                                {/* end::Label */}
                                {/* begin::Badge */}
                                <div className='timeline-badge'>
                                    <i className='fa fa-genderless text-danger fs-1'></i>
                                </div>
                                {/* end::Badge */}
                                {/* begin::Desc */}
                                <div className='timeline-content fw-bold text-gray-800 ps-3'>
                                    {ele}
                                    <a href='#' className='text-primary'>
                                        USD 700
                                    </a>
                                    . to ESL
                                </div>
                                {/* end::Desc */}
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
