import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import dataStudentChart from '../../data/dataStudentChart'

const StudentLine = () => {
    const [data, setData] = useState([]);

    
  
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
        // type: 'timeCat',
        tickCount: 5,
        },
        smooth: true,
    };

    return <Line {...config} />;
};

export default StudentLine
