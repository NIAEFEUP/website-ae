import { Bus, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import type { BusScheduleEntry } from "@/types/bus";

interface BusScheduleProps {
  schedules: BusScheduleEntry[];
  activeBuses: string[]; // busIds that are currently live
  selectedBusId: string | null;
  onScheduleClick: (busId: string | null) => void;
}

const routeLabels: Record<string, { label: string; color: string; short: string }> = {
  'HSJ-EX': { label: 'Hospital São João → Exponor', color: '#0063EC', short: 'HSJ → Expo' },
  'BXP-EX': { label: 'Baixa do Porto → Exponor', color: '#9D2F21', short: 'BXP → Expo' },
  'EX-HSJ': { label: 'Exponor → Hospital São João', color: '#0063EC', short: 'Expo → HSJ' },
  'EX-BXP': { label: 'Exponor → Baixa do Porto', color: '#9D2F21', short: 'Expo → BXP' },
};

const BusSchedule = ({ schedules, activeBuses, selectedBusId, onScheduleClick }: BusScheduleProps) => {
  const [expandedRoutes, setExpandedRoutes] = useState<Set<string>>(new Set([]));

  // Group schedules by route
  const schedulesByRoute = schedules.reduce((acc, schedule) => {
    if (!acc[schedule.route]) {
      acc[schedule.route] = [];
    }
    acc[schedule.route].push(schedule);
    return acc;
  }, {} as Record<string, BusScheduleEntry[]>);

  // Sort schedules by departure time within each route, starting the "day" at 22:00
  const timeToOffset = (time: string, startHour = 22) => {
    const [h, m] = time.split(':').map(Number);
    const minutes = (Number.isFinite(h) && Number.isFinite(m)) ? h * 60 + m : 0;
    const start = startHour * 60;
    return (minutes - start + 24 * 60) % (24 * 60);
  };

  Object.keys(schedulesByRoute).forEach(route => {
    schedulesByRoute[route].sort((a, b) => timeToOffset(a.departureTime) - timeToOffset(b.departureTime));
  });

  const toggleRoute = (route: string) => {
    const newExpanded = new Set(expandedRoutes);
    if (newExpanded.has(route)) {
      newExpanded.delete(route);
    } else {
      newExpanded.add(route);
    }
    setExpandedRoutes(newExpanded);
  };

  const isNow = (departureTime: string, arrivalTime: string | null) => {
    // Converts "HH:mm" to minutes since midnight
    const toMinutes = (t: string) => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    };

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const depMinutes = toMinutes(departureTime);
    const arrMinutes = toMinutes(arrivalTime || calculateArrival(departureTime));

    if (arrMinutes >= depMinutes) {
      // Trip does NOT cross midnight
      return currentMinutes >= depMinutes && currentMinutes <= arrMinutes;
    } else {
      // Trip crosses midnight
      return currentMinutes >= depMinutes || currentMinutes <= arrMinutes;
    }
  };

  const calculateArrival = (departure: string): string => {
    const [hours, minutes] = departure.split(':').map(Number);
    const arrivalMinutes = minutes + 30;
    const arrivalHours = hours + Math.floor(arrivalMinutes / 60);
    return `${String(arrivalHours % 24).padStart(2, '0')}:${String(arrivalMinutes % 60).padStart(2, '0')}`;
  };

  // Normalize active buses to strings for reliable comparisons
  const activeBusSet = new Set(activeBuses.map((id) => String(id)));

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div
        className="px-4 py-3 sm:px-6"
        style={{
          background: 'linear-gradient(to right, #0063EC, #9D2F21)'
        }}
      >
        <div className="flex items-center gap-2 text-white">
          <Clock className="w-5 h-5" />
          <h2 className="text-lg font-bold">Horários dos Autocarros</h2>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 bg-gray-50 border-b">
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: '#0063EC' }}>
            {schedulesByRoute['HSJ-EX']?.length || 0}
          </div>
          <div className="text-xs text-gray-600">HSJ → Expo</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: '#9D2F21' }}>
            {schedulesByRoute['BXP-EX']?.length || 0}
          </div>
          <div className="text-xs text-gray-600">BXP → Expo</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: '#0063EC' }}>
            {schedulesByRoute['EX-HSJ']?.length || 0}
          </div>
          <div className="text-xs text-gray-600">Expo → HSJ</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: '#9D2F21' }}>
            {schedulesByRoute['EX-BXP']?.length || 0}
          </div>
          <div className="text-xs text-gray-600">Expo → BXP</div>
        </div>
      </div>

      {/* Schedule by route */}
      <div className="divide-y">
        {Object.entries(schedulesByRoute).map(([route, entries]) => {
          const routeInfo = routeLabels[route];
          if (!routeInfo) return null;
          const isExpanded = expandedRoutes.has(route);

          return (
            <div key={route} className="bg-white">
              {/* Route header */}
              <button
                onClick={() => toggleRoute(route)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-1 h-12 rounded-full"
                    style={{ backgroundColor: routeInfo.color }}
                  />
                  <div className="text-left">
                    <div className="font-semibold text-sm sm:text-base">
                      <span className="hidden sm:inline">{routeInfo.label}</span>
                      <span className="sm:hidden">{routeInfo.short}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {entries.length} {entries.length === 1 ? 'partida' : 'partidas'}
                    </div>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* Schedule entries */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-2">
                  {entries.map((entry) => {
                    // safe normalization: ensure busId is a string or null
                    const busId = entry.bus?.busId != null ? String(entry.bus.busId) : null;
                    const isLive = busId !== null && activeBusSet.has(busId);
                    const isSelected = busId !== null && String(selectedBusId) === busId;
                    const isCurrent = isNow(entry.departureTime, entry.arrivalTime);
                    const arrival = entry.arrivalTime || calculateArrival(entry.departureTime);

                    return (
                      <button
                        key={entry.id}
                        onClick={() => busId && onScheduleClick(isSelected ? null : busId)}
                        disabled={!isLive}
                        className={`
                          w-full p-3 rounded-lg border-2 text-left transition-all
                          ${isSelected
                            ? 'border-yellow-400 bg-yellow-50 shadow-md'
                            : isLive
                              ? 'border-gray-200 hover:border-gray-300 hover:shadow cursor-pointer'
                              : 'border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed'
                          }
                          ${isCurrent && isLive ? 'ring-2 ring-green-500 ring-opacity-50' : ''}
                        `}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="flex-shrink-0">
                              <Bus
                                className="w-5 h-5"
                                style={{ color: isLive ? routeInfo.color : '#9ca3af' }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm truncate">
                                {entry.bus?.name || 'Sem autocarro atribuído'}
                              </div>
                              <div className="text-xs text-gray-500 flex items-center gap-2">
                                <Clock className="w-3 h-3" />
                                <span>{entry.departureTime} → {arrival}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-end gap-1">
                            {isLive && (
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="hidden sm:inline">Ativo</span>
                              </span>
                            )}
                            {isCurrent && isLive && (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                Em curso
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {schedules.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>Nenhum horário disponível</p>
        </div>
      )}
    </div>
  );
};

export default BusSchedule;