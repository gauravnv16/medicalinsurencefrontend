import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../API";


export const FileUploadScreen = () => {
    const params = useParams();
    const [type,setType] = useState('')
    const [url,setUrl] = useState('');
    const onFileUpload = (e) => {
        const fromData = new FormData();
        fromData.append("file",e.target.files[0]);
        console.log(e.target.files[0])

        axios.post(
            'https://v2.convertapi.com/convert/jpg/to/png?Secret=jcRHHv8pjM2btAR7&StoreFile=true',
            fromData).then((data) => {

            setUrl(data.data.Files[0].Url)
                // http://localhost:8000/api/user/90343109-306a-4596-a471-7275034f0ece/upload?pic=https:%2F%2Fv2.convertapi.com%2Fd%2Fsul4wk22pphu9rtszs2f1oi8dpvldu6u%2FIMG-20211010-WA0002.png
        })
      };
    
    const SelectHandler = () => {
        const heading = document.getElementById("type").value;
        setType(heading)
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${API_URL}api/user/file`,
            params: {pic:e.target.ProfilePic.value,type:"pic",id:params.id}
        });
    }
      
    return <>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>{type}</h1>
        <form onSubmit={ SubmitHandler } style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <select name="type" id="type" onChange={SelectHandler}>
                <option value="pic">Profile Pic</option>
                <option value="proof">Proof Pic</option>
            </select>
            <input type="text" name="ProfilePic" defaultValue={ 'https://v2.convertapi.com/d/xv979560jizv7q4vd0ttblx64g0bbtn1/gaurav%20-%20Copy.png' } style={{display:"none"}}/>
            <input type="file"  onChange={ onFileUpload }></input>
            <br/>
            <button className="ui button" >Upload</button>
        </form>
        <h1>View Uploaded file</h1>
        <img src={ url } alt=""/>
    </div>
    </>
}