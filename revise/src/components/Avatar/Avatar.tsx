// Helpers
import { getImageUrl } from '@helpers/';

// Define the props for the Avatar
interface AvatarProps {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
}

const Avatar = ({ person, size }: AvatarProps): JSX.Element => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;