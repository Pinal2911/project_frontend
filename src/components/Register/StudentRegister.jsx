import React from 'react'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
function StudentRegister() {
  
  const [sDate,setDate]=useState(new Date());

  return (
    
    <div className="bg-info">
     
   
<div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
      <div className="card-body p-5 text-center">
    {/* BASIC STUDENT INFO STRATS FROM HERE */}
        <h1 className="display-5 mb-5">STUDENT REGISTRATION</h1>
    
        <div className="form-outline mb-4">
          <input type="text" id="fname" className="form-control form-control-lg" />
          <label className="form-label" for="fname">FirstName</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="mname" className="form-control form-control-lg" />
          <label className="form-label" for="mname">MiddleName</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="lname" className="form-control form-control-lg" />
          <label className="form-label" for="lname">LastName</label>
        </div>


        <div className="form-outline mb-4">
          <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
          <label className="form-label" for="typeEmailX-2">Primary Email</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="email" id="alter_email" className="form-control form-control-lg" />
          <label className="form-label" for="alter_email">Alternate Email</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="no" className="form-control form-control-lg" />
          <label className="form-label" for="no">Mobile Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="no2" className="form-control form-control-lg" />
          <label className="form-label" for="no2">Alternate Mobile Number</label>
        </div>

        <div className="form-outline mb-4 d-flex justify-content-start align-items-start  ">
        <label className="form-label" for="">Date of Birth :</label>
        <DatePicker className=" d-flex form-control form-control-lg  " selected={sDate} onChange={(date) => setDate(date)}  style={{textAlign:'left'}}/>
        </div>

{/* GENDER SECTION */}
            <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
            <label className="form-label" for="">Gender : </label>
              <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1"> Male</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2"> Female</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"  />
            <label class="form-check-label" for="inlineRadio3"> Other</label>
          </div>     
        </div>
{/* ADDRESS SECTION */}
    <div className="form-outline mb-4">
          <input type="text" id="caddr" className="form-control form-control-lg" />
          <label className="form-label" for="cadrr">Current Address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="paddr" className="form-control form-control-lg" />
          <label className="form-label" for="cadrr">Permanent Address</label>
        </div>

{/* BRANCH SECTION */}
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Branch : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label class="form-check-label" for="inlineRadio1">CS</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label class="form-check-label" for="inlineRadio2">IT</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"  />
        <label class="form-check-label" for="inlineRadio3">ENTC</label>
      </div>     
    </div>
{/* DIVISION SECTION */}
    <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">BE Division : </label>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"  />
  <label class="form-check-label" for="inlineRadio3">3 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option4"  />
  <label class="form-check-label" for="inlineRadio4">4 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option5"  />
  <label class="form-check-label" for="inlineRadio5">5</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option6"  />
  <label class="form-check-label" for="inlineRadio6">6 </label>
</div>
</div>
<div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option7"  />
  <label class="form-check-label" for="inlineRadio7">7 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" value="option8"  />
  <label class="form-check-label" for="inlineRadio3">8 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" value="option9"  />
  <label class="form-check-label" for="inlineRadio3">9 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" value="option10"  />
  <label class="form-check-label" for="inlineRadio3">10 </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" value="option11"  />
  <label class="form-check-label" for="inlineRadio3">11 </label>
</div>
</div>

        <div className="form-outline mb-4">
          <input type="number" id="be_no" className="form-control form-control-lg" />
          <label className="form-label" for="be_no">BE Roll No</label>
        </div>

      
        <div className="form-outline mb-4">
          <input type="number" id="prn_number" className="form-control form-control-lg" />
          <label className="form-label" for="prn_number">University PRN Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="reg_number" className="form-control form-control-lg" />
          <label className="form-label" for="reg_number">PICT Registration Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="per10" className="form-control form-control-lg" />
          <label className="form-label" for="per10">10th Percentage</label>
        </div>
        {/* BOARD SECTION */}
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">Board : </label>
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ssc" value="option7"  />
  <label class="form-check-label" for="ssc">SSC </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="cbse" value="option8"  />
  <label class="form-check-label" for="cbse">CBSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="icse" id="inlineRadio9" value="option9"  />
  <label class="form-check-label" for="icse">ICSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="option10"  />
  <label class="form-check-label" for="other">Other </label>
</div>
</div>
</div>
{/* 10TH INFO */}

        <div className="form-outline mb-4">
          <input type="number" id="pass_year_10" className="form-control form-control-lg" />
          <label className="form-label" for="pass_year_10">Passing Year10th :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" id="gap_10" className="form-control form-control-lg" />
          <label className="form-label" for="gap_10">Educational Gap after 10th :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="gap_reason" className="form-control form-control-lg" />
          <label className="form-label" for="gap_reason">Gap Reason :</label>
        </div>


{/* 12TH INFO */}

        <div className="form-outline mb-4">
          <input type="number" id="per10" className="form-control form-control-lg" />
          <label className="form-label" for="per12">12th Percentage</label>
        </div>
        
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
    <label className="form-label" for="">Board : </label>
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ssc12" value="option7"  />
  <label class="form-check-label" for="ssc12">SSC </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="cbse12" value="option8"  />
  <label class="form-check-label" for="cbse12">CBSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="icse" id="icse12" value="option9"  />
  <label class="form-check-label" for="icse12">ICSE </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other12" value="option10"  />
  <label class="form-check-label" for="other12">Other </label>
</div>
</div>
</div>


        <div className="form-outline mb-4">
          <input type="number" id="pass_year_12" className="form-control form-control-lg" />
          <label className="form-label" for="pass_year_12">Passing Year12th :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" id="gap_12" className="form-control form-control-lg" />
          <label className="form-label" for="gap_12">Educational Gap after 12th :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="gap_reason_12" className="form-control form-control-lg" />
          <label className="form-label" for="gap_reason_12">Gap Reason :</label>
        </div>



{/* DIPLOMA INFO */}

        <div className="form-outline mb-4">
          <input type="number" id="dper" className="form-control form-control-lg" />
          <label className="form-label" for="dper">Diploma Percentage :</label>
        </div>
        
        <div className="form-outline mb-4">
          <input type="number" id="dip_year" className="form-control form-control-lg" />
          <label className="form-label" for="dip_year">Passing year :</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="number" id="gap_dip" className="form-control form-control-lg" />
          <label className="form-label" for="gap_dip">Educational Gap after Diploma :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="gap_reason_dip" className="form-control form-control-lg" />
          <label className="form-label" for="gap_reason_dip">Gap Reason :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="mh-cet" className="form-control form-control-lg" />
          <label className="form-label" for="mh-cet">MH-CET Percentile :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="jee_mains" className="form-control form-control-lg" />
          <label className="form-label" for="jee_mains">JEE Mains :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="clg_start_year" className="form-control form-control-lg" />
          <label className="form-label" for="clg_start_year">College Start Year :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="fe_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe_sgpa">FE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="fe2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe2_sgpa">FE 2st sem SGPA :</label>
        </div>


        <div className="form-outline mb-4">
          <input type="number" id="se_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="fe_sgpa">SE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="se2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="se2_sgpa">SE 2st sem SGPA :</label>
        </div>


        <div className="form-outline mb-4">
          <input type="number" id="te_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="te_sgpa">TE 1st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="te2_sgpa" className="form-control form-control-lg" />
          <label className="form-label" for="te2_sgpa">TE 2st sem SGPA :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="backlog" className="form-control form-control-lg" />
          <label className="form-label" for="backlog">Total active backlogs :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="passive_back" className="form-control form-control-lg" />
          <label className="form-label" for="passive_back">Passive Backlog :</label>
        </div>

      
        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Are you YD (Year Down) : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="option1" />
        <label class="form-check-label" for="yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="option2" />
        <label class="form-check-label" for="no">No</label>
      </div>
        
    </div>

    <div className="form-outline mb-4">
          <input type="text" id="adhar_number" className="form-control form-control-lg" />
          <label className="form-label" for="adhar_number">Adhar Number :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="pan_number" className="form-control form-control-lg" />
          <label className="form-label" for="pan_number">PAN Number :</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="passport_number" className="form-control form-control-lg" />
          <label className="form-label" for="passport_number">Passport Number :</label>
        </div>
{/* CITIZENSHIP INFO */}

        <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Citizenship : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="indian" value="option1" />
        <label class="form-check-label" for="indian">Indian</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="option2" />
        <label class="form-check-label" for="other">Other </label>
      </div>
        
    </div>

{/* EDUCATIONAL INFO */}
    <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">Higher Education : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ed_yes" value="option1" />
        <label class="form-check-label" for="ed_yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ed_no" value="option2" />
        <label class="form-check-label" for="ed_no">No</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="ed_maybe" value="option2" />
        <label class="form-check-label" for="ed_maybe">Maybe</label>
      </div>
    </div>

{/* AMCAT EXAM INFO */}
    <div className="form-outline mb-4 d-flex justify-content-start align-items-start ">
        <label className="form-label" for="">AMCAT EXAM : </label>
          <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="amcat_yes" value="option1" />
        <label class="form-check-label" for="amcat_yes">Yes</label>
      </div>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="amcat_no" value="option2" />
        <label class="form-check-label" for="amcat_no">No</label>
      </div>
{/* NOTE YOU HAVE TO ADD UPLOAD DOCUMENTS PART FROM EMAIL */}
{/* COORECT CSS OF THIS FORM AFTER BACKEND IMPLEMENTATION */}

     
    </div>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
        
       
      </div>
    </div>
  </div>
</div>
</div>

</div>
  )
}

export default StudentRegister