import { CoreValue } from '@interface/core-value';
import { memo } from 'react';
import { Image } from '@components/common/Image';

// Define the props for the Core Value component
interface CoreValueProps {
  values: CoreValue[];
}

/**
 * Primary UI component for user interaction
 */
export const ListCoreValue = memo(({
  values = [
    {
      id: "1",
      imageSrc: "/src/assets/images/core-value/core-value-protect.svg",
      title: "Protect Your Data",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
    {
      id: "2",
      imageSrc: "/src/assets/images/core-value/core-value-search.svg",
      title: "Super Smart Search",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
    {
      id: "3",
      imageSrc: "/src/assets/images/core-value/core-value-control.svg",
      title: "Control everything in one place",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
    {
      id: "4",
      imageSrc: "/src/assets/images/core-value/core-value-work-together.svg",
      title: "Work better together",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
    {
      id: "5",
      imageSrc: "/src/assets/images/core-value/core-value-support.svg",
      title: "24/7 Live Customer Support",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
    {
      id: "6",
      imageSrc: "/src/assets/images/core-value/core-value-project-management.svg",
      title: "Project Management",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
    {
      id: "7",
      imageSrc: "/src/assets/images/core-value/core-value-work-flow.svg",
      title: "Workflow builder",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
    {
      id: "8",
      imageSrc: "/src/assets/images/core-value/core-value-team.svg",
      title: "Bring your team in channels",
      desc: "4,729 curated design resources to energize your creative workflow",
    },
  ]
}: CoreValueProps): JSX.Element => {
  return (
    <section className="core-value">
      <ul className="core-value-list">
        {values.map((value) => (
          <li key={value.id} id={`core-value-${value.id}`} className="core-value-item">
            <picture className="core-value-list-image">
              <Image
                imageSrc={value.imageSrc}
                size={{
                  height: 48,
                  width: 48,
                }}
                altText="Amazing value"
              />
            </picture>
            <div className="core-value-list-content">
              <p className="core-value-list-title">{value.title}</p>
              <p className="core-value-list-divider">&nbsp;</p>
              <p className="core-value-list-desc">{value.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
});
