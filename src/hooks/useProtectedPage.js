import {useEffect} from "react"
import {useHistory} from "react-router-dom"

function useProtectedPage(){
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            history.push("/login")
        }
    })

}
export default useProtectedPage