//import { addDecorator } from '@storybook/react' // 없어졌나봄...
import { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
//import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'
import * as NextImage from 'next/image'
import { fn } from '@storybook/test';
import React from 'react';


const parameters = {
  //  e recommend removing the argTypesRegex and assigning explicit action with the fn function from @storybook/test instead:
  //  https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
  // actions: { argTypesRegex: '^on[A-Z].*' }, 대신 아래줄 
  args: { onClick: fn() },
  controls: {
    matchers: {
      color: /(background|color)$/i,
        date: /Date$/i,
    }
  }
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
  /* 동작... 안하는 것 같아유..
  withThemeFromJSXProvider({
    themes: { theme },
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  })
  */
];

const preview: Preview = {
  parameters: parameters,
  decorators: decorators,
};
export default preview;


// Theme 적용
/* 책. 근데 안됨~
// '"@storybook/react"' has no exported member named 'addDecorator'. Did you mean 'Decorator'?
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
  ))

// Cannot redefine property: default
// The component failed to render properly, likely due to a configuration issue in Storybook. Here are some common causes and how you can address them:
// next/image 교체
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  ),
})
*/


/** as-is
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
 */