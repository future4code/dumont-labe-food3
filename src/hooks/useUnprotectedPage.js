import {useEffect} from "react"
import {useHistory} from "react-router-dom"

function useUnprotectedPage(){
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            history.push("/feed")
        }
    })

}
export default useUnprotectedPage