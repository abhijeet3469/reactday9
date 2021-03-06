import React, {useState, useContext, createContext} from 'react'



const abc = createContext();

export default function UseContext() {

    function Component1(){
        const [user] = useState("Jesse Hall");
        return(
            <>
                <abc.Provider value={user}>
                <h1>{`Hello ${user}`}</h1>
                <Component2 user={user}/>
                </abc.Provider>
            </>
        );
    }

    function Component2(){
        return(
            <>
                <h1>Component 2</h1>
                <Component3/>
            </>
        );
    }

    function Component3(){
        return(
            <>
                <h1>Component 3</h1>
                <Component4/>
            </>
        );
    }

    function Component4(){
        return(
            <>
                <h1>Component 4</h1>
                <Component5/>
            </>
        );
    }

    function Component5({user}){
        const abc = useContext(user);
        return(
            <>
                <h1>Component 5</h1>
                <h2>{`Hello ${user}`}</h2>
            </>
        );
    }
    return (
        <div><Component1/></div>
    )
}