// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import { Image } from '@components/common/Image';

// Mocks
import { saveTimeMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */
const SaveTime = (): JSX.Element => {
  return (
    <ul className="save-time-list">
      {saveTimeMock.map((saveTime) => (
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
};

export const ListSaveTime = memo(SaveTime, isEqual);
