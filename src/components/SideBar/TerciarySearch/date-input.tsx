interface DateInputProps {
    label: string;
    reference: string;
}

export const DateInput = ({ label, reference }: DateInputProps) => {
    return (
        <div className="sidebar-date-input">
            <label htmlFor={reference}>{label}</label>
            <input type="date" name="date" id={reference} />
        </div>
    );
};
