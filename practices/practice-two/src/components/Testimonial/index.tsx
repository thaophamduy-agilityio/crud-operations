// Libs
import { memo } from 'react';
import isEqual from "react-fast-compare";

// Components
import { Text } from '@components/common/Text';

// Icons
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Mocks
import { testimonialMock } from '@mocks/';

/**
 * Primary UI component for user interaction
 */
const ListTestimonial = (): JSX.Element => {
  return (
    <section className="testimonial">
      <div className="testimonial-title">
        <Text
          size="xl"
          text="What people are saying"
        />
      </div>
      <ul className="testimonial-list">
        {testimonialMock.map((testimonial) => (
          <li key={testimonial.id} id={`testimonial-${testimonial.id}`} className="testimonial-item">
            <Text
              size="lg"
              text={testimonial.desc}
            />
            <div className={`star-${testimonial.ratingNumber}`}></div>
            <div className="testimonial-author">
              {testimonial.author}
            </div>
            <Text
              size="md"
              text={testimonial.title}
            />
          </li>
        ))}
      </ul>
      <div className="testimonial-icon">
        <BsArrowLeft className="testimonial-icon-pre disabled" />
        <BsArrowRight className="testimonial-icon-next" />
      </div>
    </section>
  )
};

export const Testimonial = memo(ListTestimonial, isEqual);
