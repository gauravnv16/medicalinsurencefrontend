export const FilesViewScreen = () => {
    return (
        <div style={{minWidth:"300px"}}>
            <hr style={{border:"none",borderBottom:"90px solid #ddd"}}/>
            <section className="top_stats">
                <div className="profile_pic" style={{background:"grey",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <i className="file icon" style={{fontSize:"30px",position:"relative",left:"5px",top:"5px"}}></i>
                </div>
                <div className="profile_heading">
                    <h1>Approval Required </h1>
                    <p>type</p>
                </div>
            </section>
            <section className="profileContent">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <table className="ui celled striped table" style={{width:"400px",padding:"10px"}}>
                    <thead>
                        <tr><th colSpan="3">
                        Proof type
                        </th>
                    </tr></thead>
                    <tbody>
                    <tr>
                        <td className="collapsing">
                            <i className="file icon"></i> image
                        </td>
                        <td>..</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </section>
            <br/>
            <br/><br/><br/><br/><br/>
        </div>
    )
}