export function Task({title, type, disable}) {
    return (
        <div className="task">
            <p>{title}</p>
            <select>
                <option value={type}>{type}</option>
                <option value={disable}>{disable}</option>
            </select>
        </div>
    )
}