import { useLocation } from "react-router"

export const PolicyClaimScreen = () => {
    const location = useLocation();
    return  <>
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
                            <input type="file"></input>
                        </td>
                        </tr>
                        <tr>
                       
                        <td>
                            <input type="checkbox"/>Agree to terms and conditions
                        </td>
                        </tr>
                    </tbody>
                    <br/>
                    <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <button className="ui button">Submit</button>
                        <button className="ui button" onClick={ () => navigate('/user/policy/claim',{state:{policy:location.state.policy}})}>Cancel</button>
                    </section>
                <br/><br/>
                </table>
    </>
}