import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../../API";

export const ProfileEditScreen = () => {
    const [User,setUsers] = useState({});
    const params = useParams();

    useEffect(() => {
        axios.get(API_URL+'api/user/'+params.id).then((data) => {
            setUsers(data.data[0]);
        });
    });

    return (
        <div style={{minWidth:"300px"}}>
            <hr style={{border:"none",borderBottom:"90px solid #ddd"}}/>
            <h1 style={{textAlign:"center"}}>Update</h1>
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
                        <input className="input" name="Phone_No" id="Name" value={User.Phone_no}></input>
                        </tr>
                        <tr>
                        <td>
                            <i className="envelope icon"></i> email
                        </td>
                        <input className="input" name="email" id="Name" value={User.Email}></input>
                        </tr>
                        <tr>
                        <td>
                            <i className="book icon"></i> Address
                        </td>
                       <td><input className="input" name="Name" id="" value={User.Address}></input></td>
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
                        <td><Link to={"/user/"+User.Id+"/files/upload"}>Upload</Link></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            </section>
            <br/>
            <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button className="ui button">Update</button>

            </section>
            <br/><br/><br/><br/><br/>
        </div>
    )
}