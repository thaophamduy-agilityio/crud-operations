// Libs
import { useState } from 'react';

// Components
import { Panel } from '@components/';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h3>Accordion Example</h3>
      <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
      <Panel title="Homenaje a la Neurocirugía by Marta Colvin Andrade" isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
      Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.
      </Panel>
    </>
  );
}

export default Accordion;