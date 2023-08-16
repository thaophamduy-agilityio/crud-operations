import { memo } from 'react';
import { Text } from '@components/common/Text';
import { Button } from '@components/common/Button';
import { Image } from '@components/common/Image';
import { historyImg } from '@constants/images';

// Define the props for the History component
interface HistoryProps {
  onHistory: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const History = memo(({ onHistory }: HistoryProps): JSX.Element => {
  return (
    <section className="history">
      <picture className="history-image">
        <source
          srcSet={`${historyImg.desktop.img2x} 2x, ${historyImg.desktop.img}`}
          media="(min-width: 1120px)"
        />
        <source
          srcSet={`${historyImg.tablet.img2x} 2x, ${historyImg.tablet.img}`}
          media="(min-width: 768px)"
        />
        <Image
          srcSet={`${historyImg.mobile.img2x} 2x`}
          imageSrc={historyImg.mobile.img}
          size={{
            height: 302,
            width: 424,
          }}
          altText="History"
        />
      </picture>
      <div className="history-typography">
        <p className="history-title">Easily find what you’re looking for</p>
        <Text 
          size="xl"
          text="History you can see & search"
        />
        <Text 
          size="md"
          text="We're a growing family of 382,081 designers and makers from around the world"
        />
        <div className="btn-container">
          <Button
            label="Learn more"
            onClick={onHistory}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  )
});
