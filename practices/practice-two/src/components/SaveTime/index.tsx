import { SaveTime } from '@interface/save-time';
import { memo } from 'react';
import { Image } from '@components/common/Image';

// Define the props for the Save Time Feature component
interface SaveTimeFeatureProps {
  saveTimes: SaveTime[];
}

/**
 * Primary UI component for user interaction
 */
export const ListSaveTime = memo(({ saveTimes }: SaveTimeFeatureProps): JSX.Element => {
  return (
    <ul className="save-time-list">
      {saveTimes.map((saveTime) => (
        <li key={saveTime.id} id={`save-time-${saveTime.id}`} className="save-time-item">
          <picture className="save-time-list-image">
            <Image
              imageSrc={saveTime.imageSrc}
              size={{
                height: 40,
                width: 40,
              }}
              altText="Amazing save time"
            />
          </picture>
          <div className="save-time-list-content">
            <p className="save-time-list-title">{saveTime.title}</p>
            <p className="save-time-list-desc">{saveTime.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  )
});
