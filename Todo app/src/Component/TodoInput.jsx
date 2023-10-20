import PropTypes from 'prop-types'


function TodoInput (props){
    const todo = props.todo
    const setTodo = props.setTodo
    const addTodo = props.addTodo
    return(
        <>
        <div className="input-wrapper">
            <input type="text" placeholder="Creat your todo" name="Todo" value={todo} onChange={
                (e) => {
                    setTodo(e.target.value);
            }}/>
            <button className="add-button" onClick={addTodo}>
                Add
            </button>

        </div>
        </>
    )

}

TodoInput.propTypes = {
    todo: PropTypes.string,
    setTodo:PropTypes.func,
    addTodo:PropTypes.string,
}
export default TodoInput