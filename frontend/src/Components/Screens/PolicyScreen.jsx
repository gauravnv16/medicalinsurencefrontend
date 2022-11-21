import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";

export const PolicySceen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const policies = [
        "Policy 1",
        "Policy 2"
    ]
    const [arr,setArr] = useState(policies);
    console.log(location.state)
    const Search = () => {
        let e = document.getElementById("search");

        if(e.value !== 'none'){
            const res = policies.filter((item) => {
                return item.toLowerCase().includes(e.value.toLowerCase());
            });

            if(res.length !== 0) setArr(res);
            else setArr(["Nothing found.."])
        } else {
            setArr(policies)
        }
    }
    return (
        <div className="container">
            <div style={{ marginTop:"50px" }}>
            <h1>Policy</h1>
            <div className="ui action input">
            <input type="text" placeholder="Search..." id="search" onChange={ Search }/>
            <button className="ui button">Search</button>
            </div>
            <table className="ui very basic celled table">
            <thead>
                <tr><th>Policies</th>
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
                                            <div className="sub header">Human Resources
                                        </div>
                                        </div>
                                    </h4></td>
                                    <td>
                                        <button onClick={ () => navigate("/user/policy/view",{state:{policy:policy,user:location.state.user}}) } className="ui button">View</button>
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