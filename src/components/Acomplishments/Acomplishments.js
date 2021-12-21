import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Years of Professional Development Experience'},
  { number: 65000, text: 'Users and customers served', },
  { number: 5, text: 'Years of Coding', },
  { number: 10, text: 'Completed individual and collaborative projects', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <br />
    <br />
    <SectionTitle>
      Stats
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.number}+
            <BoxText>{card.text}</BoxText>
          </BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
