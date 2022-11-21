import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const ProfileEditScreen = () => {
    const User = useSelector(state=>state.SignedUser)
    return (
        <div style={{minWidth:"300px"}}>
            <hr style={{border:"none",borderBottom:"90px solid #ddd"}}/>
            <h1>Update</h1>
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
                            <i className="lock icon"></i> Name
                        </td>
                        <input className="input" name="Name" id="Name" value={User.Name}></input>
                        </tr>
                        <tr>
                        <td className="collapsing">
                            <i className="phone icon"></i> Phone no
                        </td>
                        <input className="input" name="Name" id="Name" value={User.Phone_No}></input>
                        </tr>
                        <tr>
                        <td>
                            <i className="envelope icon"></i> email
                        </td>
                        <input className="input" name="Name" id="Name" value={User.Email}></input>
                        </tr>
                        <tr>
                        <td>
                            <i className="book icon"></i> Address
                        </td>
                       <td><input className="input" name="Name" id="Name" value={User.Address}></input></td>
                        </tr>
                        <tr>
                        <td>
                            <i className="file icon"></i> Policy
                        </td>
                        <td><Link to="/user/policy">View</Link></td>
                        </tr>
                        <tr>
                        <td>
                            <i className="folder icon"></i> Files
                        </td>
                        <td><Link to="/user/files">View</Link></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            </section>
            <br/>
            <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button className="ui button"><i className="fa-solid fa-pen-to-square"></i> Edit</button>
                <button className="ui button"><i className="fa-solid fa-right-from-bracket"></i> LogOut</button>
            </section>
            <br/><br/><br/><br/><br/>
        </div>
    )
}