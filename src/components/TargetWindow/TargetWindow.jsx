import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StudentPage from "../StudentPage/StudentPage";
import CompanyPage from "../CompanyPage/CompanyPage";
import Admin from "../Admin/Admin";
import AdminPage from "../AdminPage/AdminPage";

const TargetScreen=({props})=>{
    const {varName}=props.pagename;

    function A(){
        
        if(varName==='StudentPage'){
            return <StudentPage/>
        }
        else if(varName==="CompanyPage"){

            return <CompanyPage/>
        }
        else{
            return <AdminPage/>
        }
    }

    useEffect(()=>{
        A()
    },[])
};
export default TargetScreen;