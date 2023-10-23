import React from 'react'; 
import StudentLine from "../../components/LineChartStudent/chart"
import TeacherLine from '../../components/LineChartTeacher/chart';
import MajorPie from '../../components/PieChartMajor/chart'
import GenderColumn from '../../components/ColumnChartGender/chart'
import './style.css'
  
const DashBoard = () => { 
  return ( 
    <div className='custom-dashboard'> 
      <div className='chart'>
        <div>
          <h4>Số lượng sinh viên theo học từng chuyên ngành</h4>
          <MajorPie />
        </div>
        <div>
          <h4>Số lượng sinh viên theo theo giới tính</h4>
          <GenderColumn />
        </div>
        <div>
          <h4>Số lượng sinh viên đang học tại trường</h4>
          <StudentLine />
        </div>
        <div>
          <h4>Số lượng giáo viên đang giảng dạy tại trường</h4>
          <TeacherLine />
        </div>
        
      </div>
    </div> 
  ); 
}; 
  
export default DashBoard;