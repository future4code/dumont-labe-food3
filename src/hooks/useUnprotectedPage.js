import {useEffect} from "react"
import {useHistory} from "react-router-dom"

function useUnProtectedPage(){
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            history.push("/feed")
        }
    })

}
export default useUnProtectedPage