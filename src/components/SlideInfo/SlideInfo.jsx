import React from 'react'

const SlideInfo = (contentObject) => {
    return (
        <div className="slide-info" data-current>
            <div className="slide-info__inner">
                <div className="slide-info--text__wrapper">
                    <div data-title className="slide-info--text">
                        <span>Highlands</span>
                    </div>
                    <div data-subtitle className="slide-info--text">
                        <span>Scotland</span>
                    </div>
                    <div data-description className="slide-info--text">
                        <span>The mountains are calling</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideInfo