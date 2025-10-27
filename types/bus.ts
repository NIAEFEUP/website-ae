export type BusLocation = {
  busId: string;
  lat: number;
  lon: number;
  timestamp: string;
};

export type BusAccount = {
  busId: number;
  name: string;
  line: string;
};

export type BusScheduleEntry = {
  id: string;
  bus: {
    busId: string;
    name: string;
  } | null;
  route: string;
  departureTime: string;
  arrivalTime: string | null;
};

export type EnrichedBusData = {
  busId: string;
  lat: number;
  lon: number;
  timestamp: string;
  line?: string;
  name?: string;
}