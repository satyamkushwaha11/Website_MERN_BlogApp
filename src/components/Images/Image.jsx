import React from 'react'



/**
 * @description use this component to render image
 * @author satyam_kushwaha
 * @date 02/05/2022
 * @param src: image url
 * @param alt?: image alt description
 */
const Image = ({
    src,
    width,
    height,
    alt,
    className,
    style,
    onClick,
    placeholder=""
}) => {
    return (
        <React.Fragment>
            <img 
                src={src} 
                width={width || 'auto'}
                height={height || 'height'}
                alt={alt || "Image" }
                className={className}
                style={style}
                onClick={onClick}
                onError={(e)=>e.target.src=placeholder}
                />
        </React.Fragment>
    )
}

export default Image
