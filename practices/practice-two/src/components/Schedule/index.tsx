import { memo } from 'react';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';
import { scheduleImg } from '@constants/images';

// Define the props for the Schedule component
interface ScheduleProps {
  onDemoSchedule: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Schedule = memo(({ onDemoSchedule }: ScheduleProps): JSX.Element => {
  return (
    <section className="schedule">
      <div className="schedule-container-content">
        <div className="schedule-typography">
          <Text 
            size="xl"
            text="Keeping it all together"
          />
          <Text 
            size="md"
            text="Just invite your team, Solo does all the heavy-lifting."
          />
          <div className="btn-container">
            <Button
              label="Schedule a demo"
              onClick={onDemoSchedule}
              variant="secondary"
            />
          </div>
        </div>
        <picture className="schedule-image">
          <source
            srcSet={`${scheduleImg.desktop.img2x} 2x, ${scheduleImg.desktop.img}`}
            media="(min-width: 1120px)"
          />
          <source
            srcSet={`${scheduleImg.tablet.img2x} 2x, ${scheduleImg.tablet.img}`}
            media="(min-width: 768px)"
          />
          <Image
            srcSet={`${scheduleImg.mobile.img2x} 2x`}
            imageSrc={scheduleImg.mobile.img}
            size={{
              height: 428,
              width: 667,
            }}
            altText="Schedule"
          />
        </picture>
      </div>
      <div className="schedule-container-label-value">
        <div className="schedule-label-value">
          <p className="schedule-label">100<sup className="schedule-label-sup">+</sup></p>
          <p className="schedule-value">Countries supported</p>
        </div>
        <div className="schedule-label-value">
          <p className="schedule-label">28<sup className="schedule-label-sub">m</sup></p>
          <p className="schedule-value">Downloads on App Store</p>
        </div>
        <div className="schedule-label-value">
          <p className="schedule-label">16<sup className="schedule-label-sub">m</sup></p>
          <p className="schedule-value">Verified Users</p>
        </div>
      </div>
    </section>
  )
});
