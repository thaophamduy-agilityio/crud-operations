// Libs
import { memo } from 'react';

// Components
import { Text } from '@components/common/Text';

// Types
import { Testimony } from '@interface/testimonial';

// Icons
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Define the props for the Navigation component
interface TestimonialProps {
  testimonials: Testimony[];
}

/**
 * Primary UI component for user interaction
 */
export const Testimonial = memo(({
  testimonials = [
    {
      "id": "1",
      "desc": "Solo makes life easier to me. With Solo you can organize your work and life in seconds. 5 stars!!!",
      "ratingNumber": 5,
      "author": "Jaida Barton",
      "title": "Visual Designer at UI8"
    },
    {
      "id": "2",
      "desc": "Solo keeps things simple, the best apps of the year I've ever used. I’ sure that the upcoming updates will be more complete.",
      "ratingNumber": 5,
      "author": "Jedidiah Cassin",
      "title": "via. Google Play"
    },
    {
      "id": "3",
      "desc": " I used to have a hard time figuring out how to organize online meetings, Solo helped me to find a great solution!",
      "ratingNumber": 5,
      "author": "Fae Schumm",
      "title": "via. Apple Store"
    },
  ]
}: TestimonialProps): JSX.Element => {
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
