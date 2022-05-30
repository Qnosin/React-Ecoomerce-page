import {useParams} from 'react-router-dom';
function Profile() {
    //url state
    const {name} = useParams();
  return (
    <>
    <article className='Profile__container'>
        <img alt='profile pic' src={localStorage.getItem('image')}></img>
        <div className='information'>
            <p>{localStorage.getItem('email')}</p>
            <p>{name}</p>
        </div>
    </article>
    </>
  )
}

export default Profile