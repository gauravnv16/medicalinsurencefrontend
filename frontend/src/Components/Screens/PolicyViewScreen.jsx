import { Link, useLocation, useNavigate } from "react-router-dom"

export const PolicyViewScreen= () =>{
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div style={{minWidth:"300px"}}>
            <hr style={{border:"none",borderBottom:"90px solid #ddd"}}/>
            <section className="top_stats">
                <div className="profile_pic" style={{background:"grey",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <i className="file icon" style={{fontSize:"30px",position:"relative",left:"5px",top:"5px"}}></i>
                </div>
                <div className="profile_heading">
                    <h1>{location.state.policy}</h1>
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
                            <i className="book icon"></i> Description
                        </td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio mollitia sit harum ipsa dolorum atque possimus sed inventore consectetur unde accusantium, deserunt saepe dolore assumenda recusandae ex laborum placeat voluptatibus iure quam, libero tenetur. Sed id mollitia natus nesciunt praesentium quos alias, suscipit culpa non atque cum consequuntur deserunt voluptatem nihil impedit laborum quod aut repellendus, at maiores pariatur numquam veritatis, aliquam perspiciatis. Rem debitis vitae deserunt atque est eligendi placeat assumenda enim nulla? Excepturi, in provident. Corporis dolorum dolorem quam laudantium itaque, molestias praesentium id excepturi nobis architecto voluptate quasi quisquam maiores sapiente recusandae laboriosam quae reprehenderit, ratione aliquam.</td>
                        </tr>
                        <tr>
                        <td className="collapsing">
                            <i className="dollar icon"></i> cost
                        </td>
                        <td>50</td>
                        </tr>
                        <tr>
                        <td className="collapsing">
                            <i className="list icon"></i> calims
                        </td>
                        <td>
                            <ol style={{padding:"10px"}}>
                                <li>Claimable Once a year</li>
                                <li>Updation yearly</li>
                            </ol>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </section>
            <br/>
            <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button className="ui button" onClick={ () => navigate('/user/policy/claim',{state:{policy:location.state.policy,user:location.state.user}})}>Claim</button>
                <button className="ui button">withdraw</button>
            </section>
            <br/><br/><br/><br/><br/>
        </div>
    )
}