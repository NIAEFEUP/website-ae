import DatePicker from "react-datepicker";

export default function DatePickerComponent({ currentDate, setDate, minDate = new Date() }) {
    // TODO(thePeras): Explore this datepicker instead:
    // https://shadcnui-expansions.typeart.cc/docs/datetime-picker
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