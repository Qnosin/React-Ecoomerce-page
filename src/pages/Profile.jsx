import {useParams} from 'react-router-dom';
import anonPicture from '../image/no-picture.jpg';
function Profile() {
    //url state
    const {name} = useParams();
     if(localStorage.getItem('image') === 'null'){
       localStorage.setItem('image', anonPicture)
     }
  return (
    <>
    <article className='Profile__container'>
        <img alt='profile pic' src={localStorage.getItem('image')}></img>
        <div className='information'>
            <p>{localStorage.getItem('name')}</p>
        </div>
    </article>
    </>
  )
}

export default Profile