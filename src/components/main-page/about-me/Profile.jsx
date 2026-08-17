import './Profile.css'
import {Window} from '../../General'

function Profile(){
  return (
    <Window className = "profile-container" classContentName="profile-content-container" title="Digital Me">
      <img className = "profile-image" src="/Images/doctor.png"/>
    </Window>
  );
}

export default Profile