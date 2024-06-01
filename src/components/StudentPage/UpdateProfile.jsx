import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {Message,toaster} from 'rsuite'
const UpProfile =()=> {


 const [student,setStudent]=useState({
  id:'',
  fname:'',
  email:'',
  mname:'',
  password:'',
  lname:'',
  alterEmail:'',
  number:'',
  alterNumber:'',
  dob:'',
  gender:'',
  address:'',
      permAddress:'',
      branch:'',
      division:'',
      rollno:'',
      prnNumber:'',
      pictNumber:'',
      sscPer:'',
      board:'',
      sscYear:'',
      sscGap:'',
       hscPer:'',
      hscBoard:'',
      hscYear:'',
      hscGap:'',
      diplomaPer:'',
      diplomaYear:'',
      diplomaGap:'',
      mhCetPer:'',
      jeeMains:'',
      startYear:'',
      fe1SGPA:'',
      fe2SGPA:'',
      se1SGPA:'',
      se2SGPA:'',
      te1SGPA:'',
      te2SGPA:'',
      backlogs:'',
      yd:'',
      adhar:'',
      pan:'',
      passport:'',
      citizenship:'',
      higherEducation:'',
      amcat:''
 });

 const handleInputChange = (event) => {
  const { name, value } = event.target;
  setStudent({ ...student, [name]: value });
};

 const handleSubmit=async(event)=>{
  event.preventDefault();
  try{
    const response=await axios.put(`http://localhost:8080/api/student/placement/editStudentProfile/${student.id}`,student)
    console.log(response)
    toaster.push(
      <Message showIcon type="success" duration={5000}>
        Applied!
      </Message>
      
    );
  }catch(error){
    console.log(error)
  }
 };

  return (
    
    <div className="bg-info">
     
   
<div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
      <div className="card-body p-5 text-center">
    {/* BASIC STUDENT INFO STRATS FROM HERE */}
        <h1 className="display-5 mb-5">STUDENT DETAILS UPDATE</h1>
        
        <div className="form-outline mb-4">
          <input type="text" name="id" value={student.id} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Id</label>
        </div>
        
        <div className="form-outline mb-4">
          <input type="text" name="fname" value={student.fname} onChange={handleInputChange} id="fname" className="form-control form-control-lg" />
          <label className="form-label" for="fname">FirstName</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" name="mname" value={student.mname} onChange={handleInputChange} id="mname" className="form-control form-control-lg" />
          <label className="form-label" for="mname">MiddleName</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text"name="lname" value={student.lname}  onChange={handleInputChange} id="lname" className="form-control form-control-lg" />
          <label className="form-label" for="lname">LastName</label>
        </div>


        <div className="form-outline mb-4">
          <input type="password" name="password" value={student.password} onChange={handleInputChange} id="password" className="form-control form-control-lg" />
          <label className="form-label" for="password">Password</label>
        </div>


        <div className="form-outline mb-4">
          <input type="email"  name="email" value={student.email}  onChange={handleInputChange} id="typeEmailX-2" className="form-control form-control-lg" />
          <label className="form-label" for="typeEmailX-2">Primary Email</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="email" name="alterEmail" value={student.alterEmail} onChange={handleInputChange} id="alter_email" className="form-control form-control-lg" />
          <label className="form-label" for="alter_email">Alternate Email</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" name="number" value={student.number} onChange={handleInputChange} id="no" className="form-control form-control-lg" />
          <label className="form-label" for="no">Mobile Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number"  name="alterNumber" onChange={handleInputChange} value={student.alterNumber} id="no2" className="form-control form-control-lg" />
          <label className="form-label" for="no2">Alternate Mobile Number</label>
        </div>

        <div className="form-outline mb-4 d-flex justify-content-start align-items-start  ">
        <label className="form-label" for="">Date of Birth :</label>
        <DatePicker className=" d-flex form-control form-control-lg  " name="dob" value={student.dob}  onChange={handleInputChange} style={{textAlign:'left'}}/>
        </div>

{/* GENDER SECTION */}
            <div className="form-outline mb-4 d-flex justify-content-start align-items-start "> 
            <label className="form-label" for="">Gender : </label>
              <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" checked={student.gender === 'male'}  onChange={handleInputChange}/>
            <label class="form-check-label" for="inlineRadio1"> Male</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" checked={student.gender=== 'female'} onChange={handleInputChange} />
            <label class="form-check-label" for="inlineRadio2"> Female</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="inlineRadio3" value="other" checked={student.gender=== 'other'} onChange={handleInputChange} />
            <label class="form-check-label" for="inlineRadio3"> Other</label>
          </div>     
        </div>
ADDRESS SECTION
    <div className="form-outline mb-4">
          <input type="text" name="address" value={student.address} onChange={handleInputChange} id="caddr" className="form-control form-control-lg" />
          <label className="form-label" for="cadrr">Current Address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" name="permAddress" value={student.permAddress} onChange={handleInputChange} id="paddr" className="form-control form-control-lg" />
          <label className="form-label" for="cadrr">Permanent Address</label>
        </div>

BRANCH SECTION
         <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Branch : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="branch" id="inlineRadio1" value="CS"  checked={student.branch=== 'CS'} onChange={handleInputChange}/>
        <label class="form-check-label" for="inlineRadio1">CS</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="branch" id="inlineRadio2" value="IT"checked={student.branch=== 'IT'}  onChange={handleInputChange}/>
        <label class="form-check-label" for="inlineRadio2">IT</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="branch" id="inlineRadio3" value="ENTC" checked={student.branch=== 'ENTC'} onChange={handleInputChange} />
        <label class="form-check-label" for="inlineRadio3">ENTC</label>
      </div>     
    </div>
DIVISION SECTION
     <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">BE Division : </label>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio1" value="BE1" checked={student.division=== 'BE1'} onChange={handleInputChange}/>
  <label class="form-check-label" for="inlineRadio1">1</label>
</div> 

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio2" value="BE2" checked={student.division=== 'BE2'} onChange={handleInputChange}/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div> 

 <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio3" value="BE3" checked={student.division=== 'BE3'} onChange={handleInputChange} />
  <label class="form-check-label" for="inlineRadio3">3 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio3" value="BE4"  checked={student.division=== 'BE4'} onChange={handleInputChange}/>
  <label class="form-check-label" for="inlineRadio4">4 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio3" value="BE5" checked={student.division=== 'BE5'} onChange={handleInputChange} />
  <label class="form-check-label" for="inlineRadio5">5</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio3" value="BE6"  checked={student.division=== 'BE6'} onChange={handleInputChange}/>
  <label class="form-check-label" for="inlineRadio6">6 </label>
</div>
</div>
<div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio3" value="BE7"  checked={student.division=== 'BE7'} onChange={handleInputChange}/>
  <label class="form-check-label" for="inlineRadio7">7 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio8" value="BE8" checked={student.division=== 'BE8'} onChange={handleInputChange} />
  <label class="form-check-label" for="inlineRadio3">8 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio9" value="BE9"  checked={student.division=== 'BE9'} onChange={handleInputChange}/>
  <label class="form-check-label" for="inlineRadio3">9 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio10" value="BE10" checked={student.division=== 'BE10'}  onChange={handleInputChange} />
  <label class="form-check-label" for="inlineRadio3">10 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="division" id="inlineRadio11" value="BE11"  checked={student.division=== 'BE11'} onChange={handleInputChange}/>
  <label class="form-check-label" for="inlineRadio3">11 </label>
</div>
</div>

        <div className="form-outline mb-4">
          <input value={student.rollno} name="rollno" onChange={handleInputChange} type="number" id="be_no" className="form-control form-control-lg" />
          <label className="form-label" for="be_no">BE Roll No</label>
        </div>

      
        <div className="form-outline mb-4">
          <input type="number" name="prnNumber" value={student.prnNumber} onChange={handleInputChange} id="prn_number" className="form-control form-control-lg" />
          <label className="form-label" for="prn_number">University PRN Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" name="pictNumber"value={student.pictNumber} onChange={handleInputChange} id="reg_number" className="form-control form-control-lg" />
          <label className="form-label" for="reg_number">PICT Registration Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" name="sscPer" value={student.sscPer} onChange={handleInputChange} id="per10" className="form-control form-control-lg" />
          <label className="form-label" for="per10">10th Percentage</label>
        </div>
        {/* BOARD SECTION */}
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">Board : </label>
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="board" id="ssc" value="SSC" checked={student.board=== 'SSC'} onChange={handleInputChange}/>
  <label class="form-check-label" for="ssc">SSC </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="board" id="cbse" value="CBSE"  checked={student.board=== 'CBSE'} onChange={handleInputChange}/>
  <label class="form-check-label" for="cbse">CBSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="board" id="inlineRadio9" value="ICSE"   checked={student.board=== 'ICSE'} onChange={handleInputChange}/>
  <label class="form-check-label" for="icse">ICSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="board" id="other" value="other" checked={student.board=== 'other'}  onChange={handleInputChange} />
  <label class="form-check-label" for="other">Other </label>
</div>
</div>
</div>
{/* 10TH INFO */}

         <div className="form-outline mb-4">
          <input type="number" name="sscYear" value={student.sscYear} onChange={handleInputChange} id="pass_year_10" className="form-control form-control-lg" />
          <label className="form-label" for="pass_year_10">Passing Year10th :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" name="sscGap" value={student.sscGap} onChange={handleInputChange} id="gap_10" className="form-control form-control-lg" />
          <label className="form-label" for="gap_10">Educational Gap after 10th :</label>
        </div> 

      


{/* 12TH INFO */}

         <div className="form-outline mb-4">
          <input type="number" id="per10" name="hscPer" value={student.hscPer} onChange={handleInputChange}className="form-control form-control-lg" />
          <label className="form-label" for="per12">12th Percentage</label>
        </div>
        
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">Board : </label>
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="hscBoard" id="ssc12" value="HSC"  checked={student.hscBoard=== 'HSC'}  onChange={handleInputChange}/>
  <label class="form-check-label" for="ssc12">HSC </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="hscBoard" id="cbse12" value="CBSE"  checked={student.hscBoard=== 'CBSE'} onChange={handleInputChange}/>
  <label class="form-check-label" for="cbse12">CBSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="hscBoard" id="icse12" value="ICSE" checked={student.hscBoard=== 'ICSE'} onChange={handleInputChange}/>
  <label class="form-check-label" for="icse12">ICSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="hscBoard" id="other12" value="other" checked={student.hscBoard=== 'other'} onChange={handleInputChange}/>
  <label class="form-check-label" for="other12">Other </label>
</div>
</div>
</div> 

 
        <div className="form-outline mb-4">
          <input type="number" name="hscYear" value={student.hscYear} onChange={handleInputChange} id="pass_year_12" className="form-control form-control-lg" />
          <label className="form-label" for="pass_year_12">Passing Year12th :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" name="hscGap" value={student.hscGap} onChange={handleInputChange} className="form-control form-control-lg" />
          <label className="form-label" for="gap_12">Educational Gap after 12th :</label>
        </div>

        {/* <div className="form-outline mb-4">
          <input type="text" id="gap_reason_12" className="form-control form-control-lg" />
          <label className="form-label" for="gap_reason_12">Gap Reason :</label>
        </div>  */}



{/* DIPLOMA INFO */}

         <div className="form-outline mb-4">
          <input type="number" id="dper" value={student.diplomaPer} onChange={handleInputChange} name="diplomaPer" className="form-control form-control-lg" />
          <label className="form-label" for="dper">Diploma Percentage :</label>
        </div>
        
        <div className="form-outline mb-4">
          <input type="number" id="dip_year" value={student.diplomaYear} onChange={handleInputChange} name="diplomaYear" className="form-control form-control-lg" />
          <label className="form-label" for="dip_year">Passing year :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" value={student.diplomaGap} onChange={handleInputChange} name="diplomaGap" id="gap_dip" className="form-control form-control-lg" />
          <label className="form-label" for="gap_dip">Educational Gap after Diploma :</label>
        </div>

        {/* <div className="form-outline mb-4">
          <input type="text" id="gap_reason_dip" className="form-control form-control-lg" />
          <label className="form-label" for="gap_reason_dip">Gap Reason :</label>
        </div> */}

        <div className="form-outline mb-4">
          <input type="number" value={student.mhCetPer} onChange={handleInputChange} name="mhCetPer" id="mh-cet" className="form-control form-control-lg" />
          <label className="form-label" for="mh-cet">MH-CET Percentile :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={student.jeeMains} onChange={handleInputChange} name="jeeMains" id="jee_mains" className="form-control form-control-lg" />
          <label className="form-label" for="jee_mains">JEE Mains :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={student.startYear} name="startYear" onChange={handleInputChange} id="clg_start_year" className="form-control form-control-lg" />
          <label className="form-label" for="clg_start_year">College Start Year :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={student.fe1SGPA} onChange={handleInputChange} name="fe1SGPA" id="fe_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe_sgpa">FE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number"value={student.fe2SGPA} onChange={handleInputChange} name="fe2SGPA" id="fe2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe2_sgpa">FE 2st sem SGPA :</label>
        </div>


        <div className="form-outline mb-4">
          <input type="number" value={student.se1SGPA} onChange={handleInputChange} name="se1SGPA" id="se_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe_sgpa">SE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number"   value={student.se2SGPA} onChange={handleInputChange} name="se2SGPA" id="se2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="se2_sgpa">SE 2st sem SGPA :</label>
        </div> 


        <div className="form-outline mb-4">
          <input type="number" name="te1SGPA" value={student.te1SGPA} onChange={handleInputChange} id="te_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="te_sgpa">TE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" name="te2SGPA" value={student.te2SGPA} onChange={handleInputChange} id="te2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="te2_sgpa">TE 2st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="backlog" name="backlogs" value={student.backlogs} onChange={handleInputChange} className="form-control form-control-lg" />
          <label className="form-label" for="backlog">Total active backlogs :</label>
        </div>

       
      
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Are you YD (Year Down) : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="yd" id="yes" value="True" checked={student.yd==='True'} onChange={handleInputChange}/>
        <label class="form-check-label" for="yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="yd" id="no" value="False" checked={student.yd==='False'} onChange={handleInputChange}/>
        <label class="form-check-label" for="no">No</label>
      </div>
        
    </div>

    <div className="form-outline mb-4">
          <input type="text" id="adhar_number" className="form-control form-control-lg" name="adhar" value={student.adhar} onChange={handleInputChange}/>
          <label className="form-label" for="adhar_number">Adhar Number :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="pan_number" className="form-control form-control-lg" value={student.pan} onChange={handleInputChange} name="pan" />
          <label className="form-label" for="pan_number">PAN Number :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="passport_number" className="form-control form-control-lg" value={student.passport} onChange={handleInputChange} name="passport" />
          <label className="form-label" for="passport_number">Passport Number :</label> 
         </div>  
{/* CITIZENSHIP INFO */}
 
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Citizenship : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="citizenship" id="indian" value="indian" checked={student.citizenship==='indian'} onChange={handleInputChange}/>
        <label class="form-check-label" for="indian">Indian</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="citizenship" id="other" value="other" checked={student.citizenship==='other'} onChange={handleInputChange}/>
        <label class="form-check-label" for="other">Other </label>
      </div>
        
    </div> 

{/* EDUCATIONAL INFO */}
     <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Higher Education : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="higherEducation" id="ed_yes" value="True"  checked={student.higherEducation==='True'} onChange={handleInputChange}/>
        <label class="form-check-label" for="ed_yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="higherEducation" id="ed_no" value="False" checked={student.higherEducation==='False'} onChange={handleInputChange}/>
        <label class="form-check-label" for="ed_no">No</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="higherEducation" id="ed_maybe" value="False" checked={student.higherEducation==='False'} onChange={handleInputChange}/>
        <label class="form-check-label" for="ed_maybe">Maybe</label>
      </div>
    </div> 

{/* AMCAT EXAM INFO */}
     <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">AMCAT EXAM : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="amcat" onChange={handleInputChange} id="amcat_yes" value="True" checked={student.amcat==='True'} />
        <label class="form-check-label" for="amcat_yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="amcat" onChange={handleInputChange} id="amcat_no" value="False" checked={student.amcat==='False'} />
        <label class="form-check-label" for="amcat_no">No</label>
      </div>
{/* NOTE YOU HAVE TO ADD UPLOAD DOCUMENTS PART FROM EMAIL */}
{/* COORECT CSS OF THIS FORM AFTER BACKEND IMPLEMENTATION */}

     
    </div>
        <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Update</button>
        
       
      </div>
    </div>
  </div>
</div>
</div>

// </div>
  )
}

export default UpProfile