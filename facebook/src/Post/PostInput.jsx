import './Post.css'


function PostInput(prop) {
  const  profileimg=prop.profileimg
  const placeholder=prop.placeholder


  function onChange(event) {
    prop.onChange(event.target.value)
  }
  return (
    <>
            <div className='createpost-content'>
                <img src={profileimg} />
                <input type="text" placeholder={placeholder} onChange={onChange} value={prop.input} />
            </div>


    </>
  )
}

export default PostInput
