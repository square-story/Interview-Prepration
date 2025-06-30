import { useState } from "react"

const DropList = () => {
    const [country, setCountry] = useState('')
    const [states, setStates] = useState<string[]>([])
    interface CountryData {
        country: string;
        states: string[];
    }

    const data: CountryData[] = [
        {
            country: "india",
            states: ["kerala", "Karnataka"]
        },
        {
            country: "Bangladesh",
            states: ["Dhaka", "Banagi"]
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(e.target.value);
        const selectedStates = data.find((item: CountryData) => item.country === e.target.value);
        setStates(selectedStates ? selectedStates.states : []);
    };
    return (
        <>
            <label>Choose a Country:</label>

            <select onChange={handleChange}>
                {data.map((item, index) => (
                    <option value={item.country} key={index}>{item.country}</option>
                ))}
            </select>
            {country && (
                <>
                    <label>Choose a States:</label>
                    <select>
                        {states.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))}
                    </select>
                </>
            )}
        </>
    )
}

export default DropList