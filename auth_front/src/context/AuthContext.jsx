import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'  // Importando useNavigate
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    let token = localStorage.getItem('authTokens')

    const [authTokens, setAuthTokens] = useState(()=> token ? JSON.parse(token) : null)
    const [user, setUser] = useState(()=> token ? jwtDecode(JSON.parse(token).access) : null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()  // Usando useNavigate en lugar de useHistory

    let loginUser = async (e) => {
        e.preventDefault()
        // console.log("Form Submitted")
        // console.log(e.target.email.value)
        // console.log(e.target.password.value)
        // console.log(JSON.stringify({'email' : e.target.email.value, 'password': e.target.password.value }))
        let response = await fetch('http://localhost:8000/auth/jwt/create/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email' : e.target.email.value, 'password': e.target.password.value })
        })
        let data = await response.json() // espera a que la promesa se resuelva y obtén el JSON

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/') 
        }else{
            alert("Error")
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login') 
    }

    let updateUser = async () => {
        console.log("Updating User")
        // console.log(authTokens.refresh)
        let response = await fetch('http://localhost:8000/auth/jwt/refresh/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'refresh' : authTokens?.refresh })
        })
        let data = await response.json() 
        // console.log(data)
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser
    }

    useEffect(() => {
        if(loading){
            updateUser()
        }

        let fourMinutes = 60000 * 4
        let interval = setInterval(() => {
            if(authTokens){
                updateUser()
            }
        }
        , fourMinutes);
        return ()=> {
            clearInterval(interval)
        }
        
    }, [authTokens, loading])
    
    return (
        // { user, setUser }
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
    }

export { AuthProvider, AuthContext }