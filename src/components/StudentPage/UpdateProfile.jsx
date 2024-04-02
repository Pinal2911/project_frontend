import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

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
            <input class="form-check-input" type="radio" name="option1" id="inlineRadio1" value={student.gender} checked={student.gender === 'option1'}  onChange={handleInputChange}/>
            <label class="form-check-label" for="inlineRadio1"> Male</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="option2" id="inlineRadio2" value={student.gender} checked={student.gender=== 'option2'} onChange={handleInputChange} />
            <label class="form-check-label" for="inlineRadio2"> Female</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="option3" id="inlineRadio3" value={student.gender} checked={student.gender=== 'option3'} onChange={handleInputChange} />
            <label class="form-check-label" for="inlineRadio3"> Other</label>
          </div>     
        </div>
{/* ADDRESS SECTION
    {/* <div className="form-outline mb-4">
          <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} id="caddr" className="form-control form-control-lg" />
          <label className="form-label" for="cadrr">Current Address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" value={permAddr} onChange={(e)=> setPermAddr(e.target.value)} id="paddr" className="form-control form-control-lg" />
          <label className="form-label" for="cadrr">Permanent Address</label>
        </div> */}

{/* BRANCH SECTION */}
        {/* <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Branch : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"  checked={branch=== 'option1'}onChange={(e)=> setBranch(e.target.value)}/>
        <label class="form-check-label" for="inlineRadio1">CS</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"checked={branch=== 'option2'}  onChange={(e)=> setBranch(e.target.value)}/>
        <label class="form-check-label" for="inlineRadio2">IT</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" checked={branch=== 'option3'} onChange={(e)=> setBranch(e.target.value)} />
        <label class="form-check-label" for="inlineRadio3">ENTC</label>
      </div>     
    </div>
{/* DIVISION SECTION */}
    {/* <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">BE Division : </label>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked={division=== 'option1'} onChange={(e)=> setDivision(e.target.value)}/>
  <label class="form-check-label" for="inlineRadio1">1</label>
</div> */} 
{/* 
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked={division=== 'option2'} onChange={(e)=> setDivision(e.target.value)}/>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div> */} 

{/* <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" checked={division=== 'option3'} onChange={(e)=> setDivision(e.target.value)} />
  <label class="form-check-label" for="inlineRadio3">3 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4"  checked={division=== 'option4'} onChange={(e)=> setDivision(e.target.value)} />
  <label class="form-check-label" for="inlineRadio4">4 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option5" checked={division=== 'option5'} onChange={(e)=> setDivision(e.target.value)} />
  <label class="form-check-label" for="inlineRadio5">5</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option6"  checked={division=== 'option6'} onChange={(e)=> setDivision(e.target.value)} />
  <label class="form-check-label" for="inlineRadio6">6 </label>
</div>
</div>
<div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option7"  checked={division=== 'option7'} onChange={(e)=> setDivision(e.target.value)}/>
  <label class="form-check-label" for="inlineRadio7">7 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8" checked={division=== 'option8'} onChange={(e)=> setDivision(e.target.value)} />
  <label class="form-check-label" for="inlineRadio3">8 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option9"  checked={division=== 'option9'} onChange={(e)=> setDivision(e.target.value)}/>
  <label class="form-check-label" for="inlineRadio3">9 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option10" checked={division=== 'option10'} onChange={(e)=> setDivision(e.target.value)} />
  <label class="form-check-label" for="inlineRadio3">10 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" value="option11"  checked={division=== 'option11'} onChange={(e)=> setDivision(e.target.value)}/>
  <label class="form-check-label" for="inlineRadio3">11 </label>
</div>
</div>

        <div className="form-outline mb-4">
          <input value={rollno} onChange={(e) => setRollNo(e.target.value)} type="number" id="be_no" className="form-control form-control-lg" />
          <label className="form-label" for="be_no">BE Roll No</label>
        </div>

      
        <div className="form-outline mb-4">
          <input type="number" value={prnNumber} onChange={(e) =>setPrnNumber(e.target.value)} id="prn_number" className="form-control form-control-lg" />
          <label className="form-label" for="prn_number">University PRN Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={pictNumber} onChange={(e) =>setPictNumber(e.target.value)} id="reg_number" className="form-control form-control-lg" />
          <label className="form-label" for="reg_number">PICT Registration Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={sscPer} onChange={(e)=> setSscPer(e.target.value)} id="per10" className="form-control form-control-lg" />
          <label className="form-label" for="per10">10th Percentage</label>
        </div>
        {/* BOARD SECTION */}
        {/* <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">Board : </label>
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ssc" value="option7" checked={board=== 'option7'} onChange={(e)=> setBoard(e.target.value)}/>
  <label class="form-check-label" for="ssc">SSC </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="cbse" value="option8"  checked={board=== 'option8'} onChange={(e)=> setBoard(e.target.value)}/>
  <label class="form-check-label" for="cbse">CBSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="icse" id="inlineRadio9" value="option9"   checked={board=== 'option9'} onChange={(e)=> setBoard(e.target.value)}/>
  <label class="form-check-label" for="icse">ICSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="option10" checked={board=== 'option10'}  onChange={(e)=> setBoard(e.target.value)} />
  <label class="form-check-label" for="other">Other </label>
</div>
</div>
</div> */}
{/* 10TH INFO */}

        {/* <div className="form-outline mb-4">
          <input type="number" value={sscYear} onChange={(e)=>setSscYear(e.target.value)} id="pass_year_10" className="form-control form-control-lg" />
          <label className="form-label" for="pass_year_10">Passing Year10th :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" value={sscGap} onChange={(e)=>setSscGap(e.target.value)} id="gap_10" className="form-control form-control-lg" />
          <label className="form-label" for="gap_10">Educational Gap after 10th :</label>
        </div> */}

      


{/* 12TH INFO */}

        {/* <div className="form-outline mb-4">
          <input type="number" id="per10" className="form-control form-control-lg" />
          <label className="form-label" for="per12">12th Percentage</label>
        </div>
        
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">Board : </label>
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ssc12" value="option7"  checked={hscBoard=== 'option7'}  onChange={(e)=>setHscBoard(e.target.value)}/>
  <label class="form-check-label" for="ssc12">SSC </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="cbse12" value="option8"  checked={hscBoard=== 'option8'} onChange={(e)=>setHscBoard(e.target.value)}/>
  <label class="form-check-label" for="cbse12">CBSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="icse" id="icse12" value="option9" checked={hscBoard=== 'option9'} onChange={(e) => setHscBoard(e.target.value)} />
  <label class="form-check-label" for="icse12">ICSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other12" value="option10" checked={hscBoard=== 'option10'}  onChange={(e) => setHscBoard(e.target.value)}/>
  <label class="form-check-label" for="other12">Other </label>
</div>
</div>
</div> */}

{/* 
        <div className="form-outline mb-4">
          <input type="number" value={hscYear} onChange={(e) => setHscYear(e.target.value)} id="pass_year_12" className="form-control form-control-lg" />
          <label className="form-label" for="pass_year_12">Passing Year12th :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" id="gap_12" value={hscGap} onChange={(e) =>setHscGap(e.target.value)} className="form-control form-control-lg" />
          <label className="form-label" for="gap_12">Educational Gap after 12th :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="gap_reason_12" className="form-control form-control-lg" />
          <label className="form-label" for="gap_reason_12">Gap Reason :</label>
        </div> */}



{/* DIPLOMA INFO */}

        {/* <div className="form-outline mb-4">
          <input type="number" id="dper" value={diplomaPer} onChange={(e)=>setDiplomaPer(e.target.value)} className="form-control form-control-lg" />
          <label className="form-label" for="dper">Diploma Percentage :</label>
        </div>
        
        <div className="form-outline mb-4">
          <input type="number" id="dip_year" value={diplomaYear} onChange={(e)=>setDipolmaYear(e.target.value)} className="form-control form-control-lg" />
          <label className="form-label" for="dip_year">Passing year :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" value={diplomaGap} onChange={(e)=>setDiplomaGap(e.target.value)} id="gap_dip" className="form-control form-control-lg" />
          <label className="form-label" for="gap_dip">Educational Gap after Diploma :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="gap_reason_dip" className="form-control form-control-lg" />
          <label className="form-label" for="gap_reason_dip">Gap Reason :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={mhCetPer} onChange={(e)=>setMhCetPer(e.target.value)} id="mh-cet" className="form-control form-control-lg" />
          <label className="form-label" for="mh-cet">MH-CET Percentile :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={jeeMains} onChange={(e) =>setJeeMains(e.target.value)} id="jee_mains" className="form-control form-control-lg" />
          <label className="form-label" for="jee_mains">JEE Mains :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={startYear} onChange={(e) => setStartYear(e.target.value)} id="clg_start_year" className="form-control form-control-lg" />
          <label className="form-label" for="clg_start_year">College Start Year :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={fe1SGPA} onChange={(e) =>setfe1SGPA(e.target.value) } id="fe_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe_sgpa">FE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number"value={fe2SGPA} onChange={(e) =>setfe2SGPA(e.target.value)} id="fe2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe2_sgpa">FE 2st sem SGPA :</label>
        </div>


        <div className="form-outline mb-4">
          <input type="number" value={se1SGPA} onChange={(e)=>setse1SGPA(e.target.value)} id="se_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe_sgpa">SE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number"   value={se2SGPA} onChange={(e)=>setse2SGPA(e.target.value)} id="se2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="se2_sgpa">SE 2st sem SGPA :</label>
        </div> */} 

{/* 
        <div className="form-outline mb-4">
          <input type="number" value={te1SGPA} onChange={(e) =>sette1SGPA(e.target.value)} id="te_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="te_sgpa">TE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" value={te2SGPA} onChange={(e) =>sette2SGPA(e.target.value)} id="te2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="te2_sgpa">TE 2st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="backlog" value={backlogs} onChange={(e)=>setBacklogs(e.target.value)} className="form-control form-control-lg" />
          <label className="form-label" for="backlog">Total active backlogs :</label>
        </div>

       
      
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Are you YD (Year Down) : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="option1" checked={yd==='option1'} onChange={(e)=>setYd(e.target.value)}/>
        <label class="form-check-label" for="yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="option2" checked={yd==='option2'} onChange={(e)=>setYd(e.target.value)}/>
        <label class="form-check-label" for="no">No</label>
      </div>
        
    </div>

    <div className="form-outline mb-4">
          <input type="text" id="adhar_number" className="form-control form-control-lg" value={adhar} onChange={(e)=>setAdhar(e.target.value)}/>
          <label className="form-label" for="adhar_number">Adhar Number :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="pan_number" className="form-control form-control-lg" value={pan} onChange={(e)=>setPan(e.target.value)} />
          <label className="form-label" for="pan_number">PAN Number :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="passport_number" className="form-control form-control-lg" value={passport} onChange={(e)=>setPassport(e.target.value)} />
          <label className="form-label" for="passport_number">Passport Number :</label> */}
        {/* </div>  */}
{/* CITIZENSHIP INFO */}
{/* 
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Citizenship : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="indian" value="option1" checked={citizenship==='option1'} onChange={(e)=>setCitizenship(e.target.value)}/>
        <label class="form-check-label" for="indian">Indian</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="option2" checked={citizenship==='option2'} onChange={(e)=>setCitizenship(e.target.value)}/>
        <label class="form-check-label" for="other">Other </label>
      </div>
        
    </div> */}

{/* EDUCATIONAL INFO */}
    {/* <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Higher Education : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ed_yes" value="option1"  checked={higherEducation==='option1'} onChange={(e)=>setHigherEd(e.target.value)}/>
        <label class="form-check-label" for="ed_yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ed_no" value="option2" checked={higherEducation==='option2'} onChange={(e)=>setHigherEd(e.target.value)}/>
        <label class="form-check-label" for="ed_no">No</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ed_maybe" value="option3" checked={higherEducation==='option3'} onChange={(e)=>setHigherEd(e.target.value)}/>
        <label class="form-check-label" for="ed_maybe">Maybe</label>
      </div>
    </div> */}

{/* AMCAT EXAM INFO */}
    {/* <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">AMCAT EXAM : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="amcat_yes" value="option1" checked={amcat==='option1'} onChange={(e)=>setAmcat(e.target.value)}/>
        <label class="form-check-label" for="amcat_yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="amcat_no" value="option2" checked={amcat==='option2'} onChange={(e)=>setAmcat(e.target.value)}/>
        <label class="form-check-label" for="amcat_no">No</label>
      </div> */}
{/* NOTE YOU HAVE TO ADD UPLOAD DOCUMENTS PART FROM EMAIL */}
{/* COORECT CSS OF THIS FORM AFTER BACKEND IMPLEMENTATION */}

     
    </div>
        <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
        
       
      </div>
    </div>
  </div>
</div>
</div>

// </div>
  )
}

export default UpProfile