import { useContext } from "react"
import { UserContext } from "../../context/userContext"

export const Dashboard = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h1>Hi {user.name}! The Best Javascript Developer</h1>)}
    </div>
  )
}
