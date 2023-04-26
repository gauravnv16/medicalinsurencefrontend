import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../../../API";

export const AdminScreen = () =>{
    const [users,SetUsers] = useState([]);
    const [arr,setArr] = useState(users);
    const navigate = useNavigate();
    const User = useSelector(state => state.SignedUser)

    useEffect(() => {
        axios.get(API_URL+'api/users').then((data) => {
            SetUsers(data.data);
            setArr(data.data)
        });
    },[])

    const Search = (e) => {
        const val = document.getElementById("search").value;
        if(val != ''){
            const res = users.filter((x) => {
                return x.Username.toLowerCase().includes(val.toLowerCase());
            })
            
            if(res.length !== 0) setArr(res);
        } else{
            setArr(users);
        }

    }
   if(User.isAdmin){
    return (
        <>
        <div style={{display:"flex",justifyContent:"center",marginBottom:"20px"}}>
           <div>
           <h1>Approval Required</h1>
            <div className="ui action input">
                <input type="text" placeholder="Search..." id="search" onChange={ Search }/>
                <button className="ui button">Search</button>
            </div>
           </div>
        </div>
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
        
        <div className="ui cards" style={{width:"300px"}}>
            {
                arr.map((user) => {
                    if(!user.isAdmin && !user.isApproved && user.ApprovalType!= '')
                    return (
                        <div class="card">
                            <div class="content">
                            <img class="right floated mini ui image" src={'https://avatars.dicebear.com/api/micah/'+user.Id+'.svg'}/>
                            <div class="header">
                                {user.Username}
                            </div>
                            <div class="meta">
                                applicant
                            </div>
                            <div class="description">
                                {user.Name} requested permission for {user.ApprovalType}
                            </div>
                            </div>
                            <div class="extra content">
                            <div class="ui two buttons">
                                <button  onClick={() => {navigate("/user/admin/" + user.Id + "/view",{state:{user:user}})}} class="ui basic black button">View</button>
                                <div class="ui  red button">Decline</div>
                            </div>
                            </div>
                        </div>
                    )
                    
                })
            }
        </div>
        </div>

        </>
    )
   } else {
    <Navigate to="/" ></Navigate>
   }
} 
