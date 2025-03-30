import React from "react";

interface TableData {
  label: string;
  value: string;
  classification: string;
}

const SportHistoryTable: React.FC<{ data: TableData[] }> = ({ data }) => {
  return (
    <table className="table-fixed mt-4 mb-4 text-left text-sm border-separate border-spacing-0">
      <thead>
        <tr>
          <th className="px-1 md:px-4 py-2 font-medium border-b border-gray-300 dark:border-gray-600">
            Competição
          </th>
          <th className="px-1 md:px-4 py-2 font-medium border-b border-gray-300 dark:border-gray-600">
            Modalidade
          </th>
          <th className="px-1 md:px-4 py-2 font-medium border-b border-gray-300 dark:border-gray-600">
            Classificação
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const isFirstLabel = index === 0 || item.label !== data[index - 1].label;
          const isLastOfLabel = index === data.length - 1 || item.label !== data[index + 1].label;

          return (
            <React.Fragment key={index}>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <td className="px-1 md:px-4 py-2 border-r border-gray-300 dark:border-gray-600">
                  {isFirstLabel ? <span className="font-semibold">{item.label}</span> : ""}
                </td>
                <td className="px-1 md:px-4 py-2 border-r border-gray-300 dark:border-gray-600">
                  {item.value}
                </td>
                <td className="px-1 md:px-4 py-2">{item.classification}</td>
              </tr>
              {isLastOfLabel && index !== data.length - 1 && (
                <tr>
                  <td colSpan={3} className="border-t border-gray-300 dark:border-gray-600"></td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default SportHistoryTable;
