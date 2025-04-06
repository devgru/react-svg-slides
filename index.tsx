import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Appear,
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  Link,
  ListItem,
  Progress,
  Slide,
  SlideLayout,
  SpectacleLogo,
  SpectacleThemeOverrides,
  Text,
  UnorderedList,
} from 'spectacle';

const image = (url: string) => new URL(`./images/${url}`, import.meta.url).href;
const bgImage = (url: string) => `url(${image(url)})`;
const theme: SpectacleThemeOverrides = {
  size: {
    width: 1200,
    height: 800,
  },
  colors: {
    primary: 'white',
    secondary: 'white',
    tertiary: 'color(display-p3 0.1 0 0.15)',
  },
  fonts: {
    text: 'Geist, sans-serif',
    header: 'Geist, sans-serif',
  },
  fontSizes: {
    h1: '130pt',
    h2: '84pt',
    h3: '42pt',
  },
  space: [4, 8, 16],
};

const template = (
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

const transition = {
  from: {},
  enter: {},
  leave: {},
};

const Presentation = () => (
  <Deck template={template} transition={transition} theme={theme}>
    <SlideLayout.Full>
      <Text fontSize="h3">
        <br />
      </Text>
      <Heading>React × SVG</Heading>
      <Text fontSize="h3" textAlign="center">
        <br />
        <p>Dima Semyushkin</p>
        April 2025, React Helsinki
      </Text>
    </SlideLayout.Full>
    <SlideLayout.Center>
      <Text>clicker testing slide</Text>
    </SlideLayout.Center>
    <SlideLayout.FullBleedImage
      src={image('million.jpg')}
      alt=""
    ></SlideLayout.FullBleedImage>
    <SlideLayout.FullBleedImage
      src={image('million2.jpg')}
      alt=""
    ></SlideLayout.FullBleedImage>
    <Slide>
      <Heading fontSize="h3">Introduction</Heading>
      <FlexBox>
        <video
          src={image('skybonds.mp4')}
          width={1100}
          autoPlay={true}
          controls={true}
        />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Introduction</Heading>
      <FlexBox>
        <video
          src={image('kelp.mp4')}
          width={1100}
          autoPlay={true}
          controls={true}
        />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">Motivation</Heading>
      <Text>
        <br />
      </Text>
      <Text>
        <br />
      </Text>
      <Appear>
        <Text textAlign="center">I wonder what is possible with SVG</Text>
      </Appear>
      <Appear>
        <Text textAlign="center">↓</Text>
        <Text textAlign="center">
          SVG can augment HTML elements to improve UX
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading fontSize="h2">Knowledge iceberg</Heading>
      <FlexBox>
        <Image src={image('iceberg.jpg')} width="45%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">Knowledge iceberg</Heading>
      <FlexBox>
        <Image src={image('iceberg.jpg')} width="93%" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">SVG looks familiar</Heading>
      <FlexBox>
        <FlexBox>
          <Image
            src={image('sample.png')}
            width="80%"
            style={{
              mixBlendMode: 'lighten',
            }}
          />
        </FlexBox>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">SVG looks familiar</Heading>
      <FlexBox>
        <UnorderedList>
          <Appear>
            <ListItem>XML-based markup language</ListItem>
          </Appear>
          <Appear>
            <ListItem>document hierarchy</ListItem>
          </Appear>
          <Appear>
            <ListItem>event model</ListItem>
          </Appear>
          <Appear>
            <ListItem>CSS support</ListItem>
          </Appear>
          <Appear>
            <ListItem>ID attribute</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">Basic shapes</Heading>
      <FlexBox>
        <Image
          src={image('shapes.png')}
          width="50%"
          style={{
            mixBlendMode: 'lighten',
          }}
        />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">&lt;path&gt;</Heading>
      <FlexBox>
        <Image
          src={image('path.svg')}
          width="50%"
          style={{
            mixBlendMode: 'lighten',
          }}
        />
        <Image
          src={image('path-sample.png')}
          width="70%"
          style={{
            mixBlendMode: 'lighten',
          }}
        />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">&lt;path&gt; API</Heading>
      <FlexBox>
        <Text textAlign="center">
          <br />
          <code>element.getTotalLength()</code>
          <br />
          <br />
          &
          <br />
          <br />
          <code>element.getPointAtLength()</code>
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">Text rendering</Heading>
      <FlexBox>
        <svg width="470" height="120">
          <text y={100} fontSize={100} fill="white">
            Fill
          </text>
          <text
            x={200}
            y={100}
            fontSize={100}
            stroke="white"
            fill="transparent"
          >
            Stroke
          </text>
        </svg>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">Transformations</Heading>
      <FlexBox>
        <Image
          src={image('transform.jpg')}
          width="40%"
          style={{
            mixBlendMode: 'lighten',
          }}
        />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">Color blending</Heading>
      <FlexBox>
        <Image src={image('star-screen.svg')} width="280" />
        <Image src={image('star-multiply.svg')} width="280" />
        <Image src={image('star-hard-light.svg')} width="280" />
        <Image src={image('star-soft-light.svg')} width="280" />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">Masking & clipping</Heading>
      <FlexBox>
        <UnorderedList>
          <ListItem>
            <Link href="http://css.yoksel.ru/svg-masks/">Masks</Link>
          </ListItem>
          <ListItem>
            <Link href="http://css.yoksel.ru/animated-svg-mask/">
              Animated masks
            </Link>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Features</Heading>
      <Heading fontSize="h2">Filters</Heading>
      <FlexBox>
        <UnorderedList>
          <ListItem>
            <Link href="https://yoksel.github.io/svg-filters/#/presets/">
              Playground
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://yoksel.github.io/svg-gradient-map/#/">
              Gradient map
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://boisterous-kringle-af2833.netlify.app/">
              Demo
            </Link>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">More nuances</Heading>
      <FlexBox>
        <UnorderedList>
          <Appear>
            <ListItem>
              no <code>z-index</code>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>subpixel sizes</ListItem>
          </Appear>
          <Appear>
            <ListItem>wide-gamut colors are supported</ListItem>
          </Appear>
          <Appear>
            <ListItem>SMIL animations</ListItem>
          </Appear>
          <Appear>
            <ListItem>&lt;foreignObject&gt;</ListItem>
          </Appear>
          <Appear>
            <ListItem>&lt;textPath&gt;</ListItem>
          </Appear>
          <Appear>
            <ListItem>&lt;marker&gt; for arrows</ListItem>
          </Appear>
          <Appear>
            <ListItem>&lt;switch&gt; for localization</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">Caveats</Heading>
      <FlexBox>
        <UnorderedList>
          <Appear>
            <ListItem>Weird spec state</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              SMIL animations
              <Appear>
                <span> are not universally supported</span>
              </Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Inconsistent browser support</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">SVG in React apps</Heading>
      <Heading fontSize="h2">It's all DOM</Heading>
      <FlexBox>
        <Image
          src={image('elements.png')}
          width="75%"
          style={{
            mixBlendMode: 'lighten',
          }}
        />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">SVG in React apps</Heading>
      <FlexBox>
        <UnorderedList>
          <Appear>
            <ListItem>TypeScript-friendly;</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <code>ref</code>s works as usual;
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>UX augmentation tool;</ListItem>
          </Appear>
          <Appear>
            <ListItem>synergises with animation libraries;</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h2">Application ideas</Heading>
      <FlexBox>
        <UnorderedList>
          <Appear>
            <ListItem>Use filters and masks to add texture</ListItem>
          </Appear>
          <Appear>
            <ListItem>Apply as background</ListItem>
          </Appear>
          <Appear>
            <ListItem>Use for spinners</ListItem>
          </Appear>
          <Appear>
            <ListItem>Use &lt;textPath&gt;</ListItem>
          </Appear>
          <Appear>
            <ListItem>Use to get 'out of the box'</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <SlideLayout.Center backgroundColor="black">
      <FlexBox>
        <Image src={image('more.png')} width="100%" />
      </FlexBox>
    </SlideLayout.Center>
    <Slide>
      <Heading>Extra links</Heading>
      <FlexBox>
        <UnorderedList>
          <ListItem>
            <Link href="https://white-nights.datalaboratory.ru/">
              SPB Marathon
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://unique-squirrel-5829fb.netlify.app/">
              Text along path menu
            </Link>
            (<Link href="https://bolt.new/~/sb1-h34z8e4u">Bolt</Link>)
          </ListItem>
          <ListItem>
            <Link href="https://www.fancycomponents.dev/docs/components/text/text-along-path/">
              Text along path component
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://boisterous-kringle-af2833.netlify.app/">
              iframe with filters
            </Link>
            (<Link href="https://bolt.new/~/sb1-htxevwhw">Bolt</Link>)
          </ListItem>
          <ListItem>
            <Link href="https://danielimmke.github.io/noisy-shapes/">
              noisy shapes
            </Link>
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            <Link href="https://codepen.io/kevin-carlos-grajeda-a/pen/VYwBrYL/">
              glowing text example
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://codepen.io/Valgo/pen/PowZaNY">
              morphing text
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_animation_with_SMIL">
              SMIL animations
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://upload.wikimedia.org/wikipedia/commons/b/ba/Toy_train_SMIL.svg">
              Toy train animation
            </Link>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <SlideLayout.Center>
      <Heading>Thanks!</Heading>
      <FlexBox>
        <Appear>
          <FlexBox flexDirection="column">
            <Text>Slides</Text>
            <img src={image('qr-slides.svg')} width="60%" />
          </FlexBox>
        </Appear>
        <Appear>
          <FlexBox flexDirection="column">
            <Text>Layered Layouts </Text>
            <img src={image('qr-lay-lay.svg')} width="60%" />
          </FlexBox>
        </Appear>
      </FlexBox>
    </SlideLayout.Center>
    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Made with </Heading>
        <SpectacleLogo size={300} />
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);
