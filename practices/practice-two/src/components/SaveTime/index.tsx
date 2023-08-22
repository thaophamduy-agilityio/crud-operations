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
export const ListSaveTime = memo(({
  saveTimes = [
    {
      id: "1",
      imageSrc: "/src/assets/images/save-time/save-time-simple-way.svg",
      title: "Use a simple way",
      desc: "We're a growing family of 382,081 designers and makers from around the world",
    },
    {
      id: "2",
      imageSrc: "/src/assets/images/save-time/save-time-productivity.svg",
      title: "A productivity platform",
      desc: "We're a growing family of 382,081 designers and makers from around the world",
    },
    {
      id: "3",
      imageSrc: "/src/assets/images/save-time/save-time.svg",
      title: "Save your time",
      desc: "We're a growing family of 382,081 designers and makers from around the world",
    },
  ]
}: SaveTimeFeatureProps): JSX.Element => {
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
