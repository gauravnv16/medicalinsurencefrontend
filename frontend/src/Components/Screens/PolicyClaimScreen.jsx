import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router"
import { API_URL } from "../../../API";

export const PolicyClaimScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [url,setUrl] = useState('');
    console.log(location.state)

    const onFileUpload = (e) => {
        const fromData = new FormData();
        fromData.append("file",e.target.files[0]);
        console.log(e.target.files[0])
        console.log("file uploaded")
        axios.post(
            'https://v2.convertapi.com/convert/jpg/to/png?Secret=jcRHHv8pjM2btAR7&StoreFile=true',
            fromData).then((data) => {

            setUrl(data.data.Files[0].Url)
            console.log(url);
        })
      };

      const SubmitHandler = (e) => {
        e.preventDefault();
        axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${API_URL}api/user/file`,
            params: {pic:e.target.ProfilePic.value,type:"ProofPic",id:location.state.user.Id}
        });
        navigate('/');
    }

    return  (<div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <form onSubmit={ SubmitHandler }>
            <h1 style={{textAlign:"center"}}>Policy Claim</h1>
            <h4 style={{textAlign:"center"}}>{location.state.policy}</h4>
            <table className="ui celled striped table" style={{width:"400px",padding:"10px"}}>
                <thead>
                    <tr>
                        <th colSpan="3">
                            Details
                        </th>
                        </tr></thead>
                            <tbody>
                            <tr>
                                <td className="collapsing">
                                    <i className="book icon"></i> Terms & Conditions
                                </td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio mollitia sit harum ipsa dolorum atque possimus sed inventore consectetur unde accusantium, deserunt saepe dolore assumenda recusandae ex laborum placeat voluptatibus iure quam, libero tenetur. Sed id mollitia natus nesciunt praesentium quos alias, suscipit culpa non atque cum consequuntur deserunt voluptatem nihil impedit laborum quod aut repellendus, at maiores pariatur numquam veritatis, aliquam perspiciatis. Rem debitis vitae deserunt atque est eligendi placeat assumenda enim nulla? Excepturi, in provident. Corporis dolorum dolorem quam laudantium itaque, molestias praesentium id excepturi nobis architecto voluptate quasi quisquam maiores sapiente recusandae laboriosam quae reprehenderit, ratione aliquam.</td>
                                </tr>
                                <tr>
                                <td className="collapsing">
                                    <i className="file icon"></i> Upload Document
                                </td>
                                <td>
                                    <input type="text" name="ProfilePic" value={url} style={{display:"none"}}></input>
                                    <input type="file" name="document" onChange={ onFileUpload }></input>
                                </td>
                                </tr>
                                <tr>
                            
                                <td>
                                    <input type="checkbox"/>Agree to terms and conditions
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <br/>
                            <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <button className="ui button">Submit</button>
                                <button className="ui button" onClick={ () => navigate('/user/policy',{state:{policy:location.state.policy}})}>Cancel</button>
                            </section>
                        <br/><br/>
                    </form>
                </div>
    </div>)
}