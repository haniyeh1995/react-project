import PropTypes from 'prop-types'

function TodoList(props) {
    const list = props.list
    const remove = props.remove
    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    {list.map((entry, index) => (
                        <div className="todo" key={index}>
                            <li key={index}> {entry} </li>
                            <button className="delete-button" onClick={() => {remove(entry);}}>
                                Delete
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </>
    )

}

TodoList.propTypes = {
    list: PropTypes.string,
    remove:PropTypes.func,
}
export default TodoList

