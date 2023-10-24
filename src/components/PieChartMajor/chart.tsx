import React from 'react';
import { Pie } from '@ant-design/plots';
import DataMajorPie from '../../data/dataMajorPie'

const MajorPie = () => {
    const config = {
      appendPadding: 10,
      data: DataMajorPie,
      angleField: 'count',
      colorField: 'major',
      radius: 0.9,
      label: {
        type: 'inner',
        offset: '-30%',
        content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: 'center',
        },
      },
      interactions: [
        {
          type: 'element-active',
        },
      ],
    };
    return <Pie {...config} />;
};

export default MajorPie