import { useSelector } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"

export const ProfileScreen = () => {
    const User = useSelector(state=>state.SignedUser)
    const navigate = useNavigate();
    if(User.Name != '')
    return (
        <div style={{minWidth:"300px"}}>
            <hr style={{border:"none",borderBottom:"90px solid #ddd"}}/>
            <section className="top_stats">
                <div className="profile_pic">
                    <img src={(User.Pic != '')? User.Pic:"https://images.unsplash.com/photo-1668894231649-4f9634cf2c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} alt="profilePic"></img>
                </div>
                <div className="profile_heading">
                    <h1>{User.Name} <i className="check circle icon"></i></h1>
                    <p>applicant</p>
                </div>
            </section>
            <section className="profileContent">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <table className="ui celled striped table" style={{width:"400px",padding:"10px"}}>
                    <thead>
                        <tr><th colSpan="3">
                        Details
                        </th>
                    </tr></thead>
                    <tbody>
                    <tr>
                        <td className="collapsing">
                            <i className="lock icon"></i> Id no
                        </td>
                        <td>{User.Id}</td>
                        </tr>
                        <tr>
                        <td className="collapsing">
                            <i className="phone icon"></i> Phone no
                        </td>
                        <td>{User.Phone_no}</td>
                        </tr>
                        <tr>
                        <td>
                            <i className="envelope icon"></i> email
                        </td>
                        <td>{User.Email}</td>
                        </tr>
                        <tr>
                        <td>
                            <i className="book icon"></i> Address
                        </td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quibusdam.</td>
                        </tr>
                        <tr>
                        <td>
                            <i className="file icon"></i> Policy
                        </td>
                        <td><button className="ui button" onClick={() => { navigate("/user/policy",{state:{user:User}})}}>View</button></td>
                        </tr>
                        <tr>
                        <td>
                            <i className="folder icon"></i> Files
                        </td>
                        <td><button className="ui button"  onClick={() => {navigate("/user/files",{state:{user:User}})}}>View</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            </section>
            <br/>
            <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button className="ui button" onClick={() => navigate(`/user/${User.Id}/edit`)}><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <a href="/" className="ui button" ><i className="fa-solid fa-right-from-bracket"></i> LogOut</a>
            </section>
            <br/><br/><br/><br/><br/>
        </div>
    )
    else 
    return <Navigate to={"/user/"+User.Id+"/edit"}></Navigate>
}