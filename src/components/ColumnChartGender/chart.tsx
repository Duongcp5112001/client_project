import React from 'react';
import { Bar } from '@ant-design/plots';
import DataColumn from '../../data/dataGenderColumn';

const GenderColumn = () => {
    const config = {
        data: DataColumn,
        xField: "count",
        yField: "gender",
        seriesField: "gender",
      };
      return <Bar {...config} />;
};

export default GenderColumn