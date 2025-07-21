const DropDown = ({filter,setFilter}) => {
    return (
        <div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>

        </div>
    )
}

export default DropDown;
