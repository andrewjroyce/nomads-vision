import React from 'react';
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes
} from 'spectacle';

const FormidableLogo = '../public/image1.jpg';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: '#343748',
    secondary: '#e72f23'
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%">
        <Image src="../public/image1.jpg" size={300} />
        <Heading margin="0px" fontSize="h2">
        Toronto Nomads RFC
        <br/>
        Strategic Development Plan
        </Heading>
      </FlexBox>
      <UnorderedList>
        <ListItem style={{listStyleType: 'none', color: 'white'}}>Plan created by Jessica Wong, Director Women’s Rugby and</ListItem>
        <ListItem style={{listStyleType: 'none', color: 'white'}}>Ian Wood (Prosci, PMP), Director Sponsorship and Fundraising </ListItem>
        <ListItem style={{listStyleType: 'none', color: 'white'}}>Slides by Andrew Royce</ListItem>
      </UnorderedList>
      <Notes>
        You can put notes in here
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading  padding="0px" fontSize="110px">
          Club consultation
        </Heading>
        <Image padding="0px 0px 40px" src="../public/image7.jpg" size={700} />
      </FlexBox>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(../public/future2.jpg)"
      backgroundOpacity={0.4}
    >
      <Heading>The future</Heading>
      <UnorderedList>
        <ListItem color="white">
          <CodeSpan>Vision Statement</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>Mission Statement</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>Capture aspirations and spirit of the Club</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>Provide insight</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>Clear themes emerged</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>New organization structure to support the plan</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column" justifyContent="space-around">
        <Heading  padding="0px" fontSize="110px">
          Timeframe
        </Heading>
        <Image padding="0px 0px 40px" src="../public/image2.jpg" size={700} />
      </FlexBox>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(../public/nomads.jpg)"
      backgroundOpacity={0.5}
    >
      <Heading>Background of club</Heading>
      <UnorderedList>
        <ListItem color="white">
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(../public/image6.png)"
      backgroundOpacity={0.4}
    >
      <Heading>Current State</Heading>
      <UnorderedList>
        <ListItem color="white">
          <CodeSpan>Player satisfaction, average Score: 86% </CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>Following year Nomads registration: 83%</CodeSpan>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>What is your favourite part of Nomads Rugby?</CodeSpan>
          <ListItem color="white">
          Club Culture: 59%
          </ListItem>
          <ListItem color="white">
            Rugby 27%
          </ListItem>
        </ListItem>
        <ListItem color="white">
          <CodeSpan>96% Sponsor Satisfaction Rating </CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text textAlign="left"  color="secondary">Strength</Text>
        </Box>
        <Box backgroundColor="primary">
          <Text textAlign="left"  color="secondary">Weakness</Text>
        </Box>
        <Box backgroundColor="primary">
          <Text textAlign="left" color="secondary">Opportunity</Text>
        </Box>
        <Box backgroundColor="primary">
          <Text textAlign="left"  color="secondary">Threat</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr 1fr 1fr"
        alignItems="start"
        justifyContent="center"
        gridRowGap={1}
      >
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Inclusive club with strong history of being welcome to new players</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Perception as social club, not seen as competitive at some levels</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Improve level of rugby competition across all levels </Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Lack of influence within Rugby Ontario, Rugby Canada</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Passionate membership, willing to contribute and highly engaged</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Limited cohesion between junior and senior clubs</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Coach development and recruitment</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Province-wide reduction in quality of club rugby and rugby registration numbers</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Strong social presence</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Ad-hoc communication strategy leaves gaps</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Better development of younger players</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Reliance on sponsors for operating capital</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Good location</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Volunteer burnout, lack of succession plan</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Continued professionalization of club administration</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Potential uncertainty from loss of owned training grounds</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Year-round rugby programming</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Not enough alumni engagement </Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Increased engagement with alumni, lots of resources within that group</Text>
        <Text padding="6px 3px 0px 6px" margin="0px" fontSize="24px" textAlign="left" color="white">Increasing concern over concussions </Text>s
      </Grid>
    </Slide>
    <Slide>
      <Heading>6 Key issues, the club...</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Is perceptieved as a social club</ListItem>
        </Appear>
        <Appear>
          <ListItem>Is run as siloed divisions with limited interaction between teams</ListItem>
        </Appear>
        <Appear>
          <ListItem>Is unable to influence with Rugby Ontario and Rugby Canada
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Needs to offer a more inclusive and safe environment</ListItem>
        </Appear>
        <Appear>
          <ListItem>Needs to better promote what it offers through improved marketing</ListItem>
        </Appear>
        <Appear>
          <ListItem>
          Has Untapped resources from the skills and experience of the Club Alumni
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <Grid gridTemplateRows="1fr 3fr 2fr" gridRowGap={15} >
      <Text textAlign="center" color="secondary">Moving Forward</Text>
        <Box backgroundColor="primary">
          <Grid gridTemplateColumns="1fr 5fr" gridColumnGap={0} >
            <Text textAlign="left" color="secondary">Mission</Text>
            <Text textAlign="left" color="secondary">Nomads Rugby provides quality rugby experience to our members and community. Grounded in our strong history and continuous growth we provide a welcoming, inclusive, and competitive "One Club" rugby enivorment in Toronto</Text>
          </Grid>
        </Box>
        <Box style={{maxHeight: "150px"}} backgroundColor="primary">
        <Grid gridTemplateColumns="1fr 5fr" gridColumnGap={0} >
          <Text textAlign="left" color="secondary">Vision</Text>
          <Text textAlign="left" color="secondary">To be a respected and successful rugby club with a reputation for providing exceptional programs and player development</Text>
        </Grid>
        </Box>
      </Grid>
    </Slide>
    <Slide>
    <Text textAlign="center" color="secondary">Values</Text>
        <Grid gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
          <Text textAlign="center"  color="secondary">Integrity</Text>
          </Box>
          <Box backgroundColor="primary">
            <Text textAlign="center"  color="secondary">Inclusivity</Text>
          </Box>
          <Box backgroundColor="primary">
            <Text textAlign="center"  color="secondary">Passion</Text>
          </Box>
              <Box backgroundColor="primary">
            <Text textAlign="center"  color="secondary">Respect</Text>
          </Box>
          <Box backgroundColor="primary">
            <Text textAlign="center"  color="secondary">Solidarity</Text>
          </Box>
          <Box backgroundColor="primary">
            <Text textAlign="center"  color="secondary">Discipline</Text>
          </Box>
        </Grid>
        </Slide>
    <Slide>
      <FlexBox>
        <Text color="secondary">Club Organizational Themes</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text textAlign="center"  color="secondary">Organizational</Text>
        </Box>
        <Box backgroundColor="primary">
          <Text textAlign="center"  color="secondary">Social and Cultural</Text>
        </Box>
        <Box backgroundColor="primary">
          <Text textAlign="center" color="secondary">Rugby Development</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        <Text textAlign="center" color="white">Strength</Text>
        <Text textAlign="center" color="white">Weakness</Text>
        <Text textAlign="center" color="white">Opportunity</Text>
        <Text textAlign="center" color="white">Threat</Text>
        <Text textAlign="center" color="white">Opportunity</Text>
        <Text textAlign="center" color="white">Threat</Text>
        <Text textAlign="center" color="white">Threat</Text>
      </Grid>
    </Slide>
    <SlideFragments />
    <Slide>
      <Heading>Board restructuring</Heading>
    </Slide>
    <Slide>
      <Heading>4 new roles</Heading>
      <OrderedList>
        <Appear>
          <ListItem>1!</ListItem>
        </Appear>
        <Appear>
          <ListItem>2</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            3! <CodeSpan>stepIndex</CodeSpan>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            3! <CodeSpan>stepIndex</CodeSpan>
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Club goals</Heading>
      <OrderedList>
        <Appear>
          <ListItem>1!</ListItem>
        </Appear>
        <Appear>
          <ListItem>2</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            3! <CodeSpan>stepIndex</CodeSpan>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            3! <CodeSpan>stepIndex</CodeSpan>
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Rubgy Development - 1 year goals</Heading>
      <OrderedList>
        <ListItem>Junior rugby recruitment plan: increase membership by defined percentage</ListItem>
        <ListItem>Consider response to concussion awareness</ListItem>
        <ListItem>To have a full complement of junior teams</ListItem>
        <ListItem>Strategy to partner with external rugby organizations </ListItem>
        <ListItem>Identify Director of RD or club Technical Director</ListItem>
        <ListItem>Jr. Rugby to achieve defined standings</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Rubgy Development - 1 year goals</Heading>
      <OrderedList>
        <ListItem>Sr. Men to achieve defined standing </ListItem>
        <ListItem>Sr. Women to achieve defined standing</ListItem>
        <ListItem>Formalize a platform for coaches across the club to share resources</ListItem>
        <ListItem>Sr. Women's program to have Head Coach + Assistant Coach position filled</ListItem>
        <ListItem>Sr. Men to have required coaching positions filled</ListItem>
        <ListItem>Establishment of a Junior to Senior Nomads pipeline</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Rubgy Development - 2 year goals</Heading>
      <OrderedList>
        <ListItem>      Sr. Women recruitment plan: increase membership by defined percentage </ListItem>
        <ListItem>Sr. Men recruitment plan: increase membership by defined percentage </ListItem>
        <ListItem>Increase school outreach – have coaches in defined number of schools </ListItem>
        <ListItem>Sr. Women's program to have Head Coach + Assistant Coach position filled</ListItem>
        <ListItem>Establishment of a Junior to Senior Nomads pathway (must include social and playing)</ListItem>
        <ListItem>Define financial support program for high-performance players </ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Rubgy Development - 2 year goals</Heading>
      <OrderedList>
        <ListItem>Jr. Rugby to achieve defined standings  </ListItem>
        <ListItem>Sr. Men to achieve defined standing  </ListItem>
        <ListItem>Sr. Women to achieve defined standing</ListItem>
        <ListItem>Establish a coach development plan</ListItem>
        <ListItem>Required number of coaches coaching at colleges/universities</ListItem>
        <ListItem>Increase number of junior members transitioning up by defined percentage </ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Rubgy Development - 3 year goals</Heading>
      <OrderedList>
        <ListItem>Junior rugby recruitment plan: increase membership by defined percentage</ListItem>
        <ListItem>Sr. Men to win championship by defined year</ListItem>
        <ListItem>Sr. Women to win championship by defined year</ListItem>
        <ListItem>Jr. Rugby to achieve defined standings </ListItem>
        <ListItem>Defined number of players playing representative rugby</ListItem>
        <ListItem>Secure long-term home pitch and social facility</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Cultural and Social - 1 year goals</Heading>
      <OrderedList>
        <ListItem>Defined number of club-wide events (must include junior, senior, and social/alumni engagement)</ListItem>
        <ListItem>1 alumni-specific event</ListItem>
        <ListItem>Establish engagement strategy for overseas alumni</ListItem>
        <ListItem>1 community outreach event (ex. Intro to rugby, charitable, TBD)</ListItem>
        <ListItem>Decide on token of appreciation for social memberships</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Cultural and Social - 2 year goals</Heading>
      <OrderedList>
        <ListItem>Grow social membership registrations to defined target from alumni</ListItem>
        <ListItem>1 women's specific alumni event</ListItem>
        <ListItem>Establish engagement strategy for overseas alumni</ListItem>
        <ListItem>Re-establish "old-mads": 35+ men's team with at least 1 game per year</ListItem>
        <ListItem>Equity working group goals - TBD</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Cultural and Social - 3 year goals</Heading>
      <OrderedList>
        <ListItem>Grow social membership registrations to defined target</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Organization and Management - 1 year goals</Heading>
      <OrderedList>
        <ListItem>Club development plan to be completed and adopted by February 2021 </ListItem>
        <ListItem>Redefine organizational structure: continued focus on Rugby Development and Operational Efficiency</ListItem>
        <ListItem>Establish action plans and implement accountability structure </ListItem>
        <ListItem>Implement Development Plan  change management procedure</ListItem>
        <ListItem>Assess combining Nomads into one team on registration system</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Organization and Management - 1 year goals</Heading>
      <OrderedList>
        <ListItem>Definition of communication channels and appropriate content for each, including junior parents</ListItem>
        <ListItem>Approve Code of Conduct </ListItem>
        <ListItem>RO/RC engagement goal – TBD </ListItem>
        <ListItem>Complete by-law review/Board job description review</ListItem>
        <ListItem>Implement new financial planning, project planning, and accountability process </ListItem>
        <ListItem>Finalize sponsorship package</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Organization and Management - 2 year goals</Heading>
      <OrderedList>
        <ListItem>      Establish unified membership database (including alumni)</ListItem>
        <ListItem>Better defined communication procedures </ListItem>
        <ListItem>Develop analytics for membership database </ListItem>
        <ListItem>Work with RO/RC to improve registration process</ListItem>
        <ListItem>RO/RC engagement goal – TBD</ListItem>
        <ListItem>Fill all Board seats</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Organization and Management - 2 year goals</Heading>
      <OrderedList>
        <ListItem>Review of "No Player Left Behind" </ListItem>
        <ListItem>Establishment of legacy donation program</ListItem>
        <ListItem>Sign defined number of new sponsors for targeted financial goal</ListItem>
        <ListItem>Work with RO/RC to improve registration process</ListItem>
        <ListItem>Establish system of volunteer accountability (ex. Scholarship, volunteer points, etc.)</ListItem>
        <ListItem>Defined target of internal club referees registered</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading>Organization and Management - 3 year goals</Heading>
        <OrderedList>
        <ListItem>      Defined number of Board members at RO/RC</ListItem>
        <ListItem>Establishment of legacy donation program</ListItem>
        <ListItem>Paid position for operations/logistics manager</ListItem>
        <ListItem>Annual alumni donations to exceed defined target</ListItem>
        <ListItem>Be fully financially sustainable/eliminate reliance on sponsors </ListItem>
      </OrderedList>
    </Slide>
      <Slide>
        <Heading>Action review process</Heading>
      </Slide>
      <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div>
      <Slide>
        <Heading>Conclusions</Heading>
      </Slide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
