import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError();
    console.log(err)
    return (
        <div> 
            <h1>oopsss!!!!!!!!!!!!!</h1>
            <h2>Something went wrong please wait!!!!!!!!!!!!!!</h2>
            <h3>{err.data}</h3>
            <p>..................................................................</p>
            <h1>{err.status} :{err.statusText} </h1>
        </div>
    )
}

export default Error