import DatePicker from "react-datepicker";

export default function DatePickerComponent({ currentDate, setDate, minDate = new Date() }) {
    return (
        <DatePicker 
            id="end_date"
            selected={currentDate}
            minDate={minDate}
            onChange={(date) => setDate(date!)}
            showTimeSelect
            dateFormat="dd/MM/yyyy HH:mm"
            timeFormat="HH:mm"
            className="border p-2 w-full rounded"
            required
        />
    )
}