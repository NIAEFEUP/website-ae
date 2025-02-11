import React from 'react';

interface TableData {
  label: string;
  value: string;
  classification: string;
}

const SportHistoryTable: React.FC<{ data: TableData[] }> = ({ data }) => {
  return (
    <table className="min-w-full mt-4 mb-4 text-left text-sm border-separate border-spacing-0">
      <thead>
        <tr>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Competição</th>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Modalidade</th>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Classificação</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">{item.label}</td>
            <td className="px-4 py-2 border-r border-gray-300 dark:border-gray-600">{item.value}</td>
            <td className="px-4 py-2">{item.classification}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SportHistoryTable;
