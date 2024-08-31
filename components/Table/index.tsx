import React from 'react';

const ScheduleTable = ({ data }) => {
  return (
    <table className="min-w-full mt-4 mb-4 text-left text-sm border-separate border-spacing-0">
      <thead>
        <tr>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Dia</th>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Horário</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border-r-2 border-gray-300 dark:border-gray-600">{row.label}</td>
            <td className="px-4 py-2">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
