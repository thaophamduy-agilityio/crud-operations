// Libs
import type { JSX } from "react";

const StudentHeaderTitle = (): JSX.Element =>
  <div className="list-students">
    <div className="student-header">
      <div className="student-header-avatar">
        &nbsp;    
      </div>
      <div className="student-header-name">Name</div>
      <div className="student-header-email">Email</div>
      <div className="student-header-phone">Phone</div>
      <div className="student-header-enroll-number">Enroll Number</div>
      <div className="student-header-date-admission">Date of Admission</div>            
      <div className="student-header-edit">
        &nbsp;
      </div>         
      <div className="student-header-delete">
        &nbsp;
      </div>
    </div>
  </div>

export default StudentHeaderTitle;