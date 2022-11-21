import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

export const FilesScreen = () => {
    const files = [
        "Photo",
        "Proof"
    ]

    const types = [
        "Pic",
        "Proof"
    ]
    
    const [arr,setArr] = useState(types);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.user['Pic'])
    const Search = () => {
        let e = document.getElementById("search");

        if(e.value !== 'none'){
            const res = files.filter((item) => {
                return item.toLowerCase().includes(e.value.toLowerCase());
            });

            if(res.length !== 0) setArr(res);
            else setArr(["Nothing found.."])
        } else {
            setArr(types)
        }
    }
    return (
        <div className="container">
            <div style={{ marginTop:"50px" }}>
            <h1>Files</h1>
            <div className="ui action input">
            <input type="text" placeholder="Search..." id="search" onChange={ Search }/>
            <button className="ui button">Search</button>
            </div>
            <table className="ui very basic celled table">
            <thead>
                <tr><th>Files</th>
                <th>options</th>
            </tr></thead>
            <tbody>
                {
                    arr.map((policy) => {
                        if(policy != "Nothing found..")
                        return <tr key={policy}>
                                    <td>
                                        <h4 className="ui image header" >
                                        <i className="file icon"></i>
                                        <div className="content" style={{backgroundColor:"white",color:"black"}}>
                                            {policy}
                                            <div className="sub header">
                                        </div>
                                        </div>
                                    </h4></td>
                                    <td>
                                        <button onClick={ () => {navigate("/user/files/view",{state:{file:location.state.user[policy]}})}} className="ui button">View</button>
                                    </td>
                                </tr>
                        else {
                            return <tr key={policy}>
                            <td>
                                <h4 className="ui image header" >
                                <i className="file icon"></i>
                                <div className="content" style={{backgroundColor:"white",color:"black"}}>
                                    {policy}
                                </div>
                            </h4></td>
                        </tr>
                        }
                    })
                }
            </tbody>
            </table>
 
            </div>
        </div>
    )
}