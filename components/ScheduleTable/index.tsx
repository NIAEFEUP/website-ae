import React from 'react';

const ScheduleTable = ({ data }: { data?: any[] }) => {
  const rows = Array.isArray(data) ? data : [];
  if (rows.length === 0) return null;
  const hasDay = rows.some(r => {
    const dayVal = r?.day ?? r?.label;
    return dayVal != null && String(dayVal).trim() !== "";
  });

  return hasDay ? (
    <table className="min-w-full mt-4 mb-4 text-left text-sm border-separate border-spacing-0">
      <thead>
        <tr>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Dia</th>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Horário</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const day = row?.day ?? row?.label ?? "";
          const hours = row?.hours ?? row?.value ?? "";
          return (
            <tr key={i}>
              <td className="px-4 py-2 border-r-2 border-gray-300 dark:border-gray-600">{day}</td>
              <td className="px-4 py-2">{hours}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <table className="min-w-full mt-4 mb-4 text-left text-sm border-separate border-spacing-0">
      <thead>
        <tr>
          <th className="px-4 py-2 font-medium border-b-2 border-gray-300 dark:border-gray-600">Horário</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const hours = row?.hours ?? row?.value ?? "";
          return (
            <tr key={i}>
              <td className="px-4 py-2">{hours}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ScheduleTable;