import React from 'react'
import ComponentB from './ComponentB'

export const Context = React.createContext()

function CompnentA() {

    return (
        <Context.Provider value={"Entri"}>
            CompnentA
            <ComponentB />
        </Context.Provider>
    )
}

export default CompnentA