import React from 'react'

type AppProps = {
    habits: string[]
}


const Main: React.FC<AppProps> = ({habits}) => {
    console.log(habits)
    return(
        <>
       <h1>Habits</h1>
        </>
    )
}

export default Main;