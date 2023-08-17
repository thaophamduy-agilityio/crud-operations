import { Testimony } from '@interface/testimonial';
import { Text } from '@components/common/Text';
import { memo } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Define the props for the Navigation component
interface TestimonialProps {
  testimonials: Testimony[];
}

/**
 * Primary UI component for user interaction
 */
export const Testimonial = memo(({ testimonials }: TestimonialProps): JSX.Element => {
  return (
    <section className="testimonial">
      <div className="testimonial-title">
        <Text
          size="xl"
          text="What people are saying"
        />
      </div>
      <ul className="testimonial-list">
        {testimonials.map((testimonial) => (
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
});
