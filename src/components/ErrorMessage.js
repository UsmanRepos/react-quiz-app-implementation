import React from 'react'

const ErrorMessage = ({children}) => {
    return (
        <div 
            style={{
                fontFamily: "TimesNewRoman",
                fontSize:'large',
                color:"crimson",
                alignSelf: "center",
                paddingBottom: 5,
            }}
        >
            {children}
        </div>
    )
}

export default ErrorMessage
