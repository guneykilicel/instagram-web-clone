import { getUserInfo } from "firebase.js"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "./components/header"

export default function Profile() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)
    const {username} = useParams() //kullanıcı adını çekiyor url deki
    const navigate = useNavigate()

    useEffect(()=>{
        getUserInfo(username)
            .then((user)=>{
                setUser(user)
            })
            .catch((err)=>{
                navigate('/',{replace:true})
            })
    }, [])

    return (
        <div>
            <Header user={user} />
            profile Page = {username}
        </div>
    )
}