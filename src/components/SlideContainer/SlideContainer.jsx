import React from 'react'
//investigar data-current data-previous y data-next
const SlideContainer = ( imageObject ) => {
    return (
        <div className="slide" data-current>
            <div className="slide__inner">
                <div className="slide--image__wrapper">
                    <img className="slide--image" src="https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg" alt="Image 1" />
                </div>
            </div>
        </div>
    )
}

export default SlideContainer