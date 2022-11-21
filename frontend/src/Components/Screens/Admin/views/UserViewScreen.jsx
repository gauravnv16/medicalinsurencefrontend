import { Link } from "react-router-dom"

export const UserViewScreen = () => {
    return (
        <div style={{minWidth:"300px"}}>
            <hr style={{border:"none",borderBottom:"90px solid #ddd"}}/>
            <section className="top_stats">
                <div className="profile_pic">
                    <img src="https://images.unsplash.com/photo-1668894231649-4f9634cf2c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="profilePic"></img>
                </div>
                <div className="profile_heading">
                    <h1>Ram <i className="check circle icon"></i></h1>
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
                        <td>9999999-333-bb--ccc</td>
                        </tr>
                        <tr>
                        <td className="collapsing">
                            <i className="phone icon"></i> Phone no
                        </td>
                        <td>9999999</td>
                        </tr>
                        <tr>
                        <td>
                            <i className="envelope icon"></i> email
                        </td>
                        <td>test@email.com</td>
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
                <button className="ui button"><i className="fa-solid fa-pen-to-square"></i> Approve</button>
                <button className="ui button"><i className="fa-solid fa-right-from-bracket"></i> Reject</button>
            </section>
            <br/><br/><br/><br/><br/>
        </div>
    )
}