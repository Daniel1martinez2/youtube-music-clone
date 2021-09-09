import {ProfileProps} from '../../App/Interfaces';
 
const Profile: React.FC<ProfileProps> = props => {
  const {picture} = props;
  return(
    <img className="header__profile-picture" src={picture} alt="your profile" />
  )
}
export default Profile