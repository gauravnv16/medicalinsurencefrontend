import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../../../API";

export const ProfileEditScreen = () => {
    const [User,setUsers] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(API_URL+'api/user/'+params.id).then((data) => {
            setUsers(data.data[0]);
        });
    });

    const SubmitHandler = (e) => {
        e.preventDefault();

        const Uobj = {};
        console.log(e.target.Name.value)
        if(e.target.Name.value !== '')
            Uobj['Name'] = e.target.Name.value;

        if(e.target.Phone_No.value !== '')
            Uobj['Phone_no'] = e.target.Phone_No.value;

        if(e.target.email.value !== '')
            Uobj['Email'] = e.target.email.value;
            
        if(e.target.Address.value !== '')
            Uobj['Address'] = e.target.Address.value;      
        axios({
                headers: { 
                    'content-type': 'application/json'
                },
                method: 'post',
                url: `${API_URL}api/user/${params.id}/update`,
                params: Uobj
        });
        navigate('/user/profile')
    }

    return (
        <form style={{minWidth:"300px"}} onSubmit={ SubmitHandler }>
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
                        <input className="input" name="Name" id="Name" defaultValue={User.Name}></input>
                        </tr>
                        <tr>
                        <td className="collapsing">
                            <i className="phone icon"></i> Phone no
                        </td>
                        <input className="input" name="Phone_No" id="Phone_No" defaultValue={User.Phone_no}></input>
                        </tr>
                        <tr>
                        <td>
                            <i className="envelope icon"></i> email
                        </td>
                        <input className="input" name="email" id="email" value={User.Email}></input>
                        </tr>
                        <tr>
                        <td>
                            <i className="book icon"></i> Address
                        </td>
                       <td><input className="input" name="Address" id="Address" defaultValue={User.Address}></input></td>
                        </tr>
                        <tr>
                        <td>
                            <i className="file icon"></i> Policy
                        </td>
                        <td><button className="ui button" onClick={() => navigate("/user/policy",{state:{user:User}})}>View</button></td>
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
        </form>
    )
}