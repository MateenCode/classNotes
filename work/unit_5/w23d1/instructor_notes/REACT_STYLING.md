[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Styling

## Objectives

By the end of this, developers should be able to:

- Compare and contrast the four ways that styling is done in React
- Use objects to add dynamic inline styles
- Identify the ES6 tagged template literal syntax
- Use styled components and polished to create a simple component

## Preparation

1. Fork and clone this repository. [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1. Create a new branch, `training`, for your work.
1. Checkout to the `training` branch.
1. Install dependencies with `npm install`.

Why would styling be different in React?

It's not really.  We can still use the method that we've used in the past: add our styles in a separate CSS (or Sass file) and add it to our page manually or by leveraging some tools to automatically bundle it into our page.

With that in mind, you might be asking the perennial question: _why fix it if it ain't broke_?

## Motivation for Change

Back in 2014, [Christopher Chedeau (@vjeux)](https://twitter.com/Vjeux), a frontend dev at Facebook, and now, co-creator of React Native and Prettier, introduced us to the challenges of working with CSS at scale:

1. **Global Namespacing:** Best practices say don't use global namespacing! So, why do we use them in CSS?
1. **Dependencies:** CSS files can be too big when consolidated into a single file.  Code-splitting is how we solve this in JS. In CSS, dependencies are not clear making it hard statically analyze it. :disappointed:
1. **Dead Code Elimination:**  We have all sorts of tools that help with _tree shaking_ and dead code elimination in JS.  Since JS is statically analyzable, we can determine which bits are really being used. In CSS, not so much...
1. **Minification:** Minification and perhaps more importantly, _uglification_, is really hard since we often do things like add/remove CSS classes using JS.  When both are handled by the same tooling the process is more reliable.
1. **Sharing Constants:** Sharing values between JS and CSS is a nightmare at scale, and can be a headache even on small projects during maintenance phases.  Trying to keep multiple values in sync goes against the principles of writing DRY code!
1. **Non-deterministic Resolution:**  Because of the nature of CSS specifity rules and cascade, your results can vary greatly depending on the order in which the bundler combines files.  Managing all of this is largely left to the developers to determine the correct order.  Further, testing can be difficult, expensive and unreliable.
1. **Isolation:** How do we handle one-off styling?  What will the consequences be of making a "small  tweak" to a base component?  There's no real way to know what the implications will be in the short or long term.  Even more challenging is that there's not really a way to write linter rules to prevent devs from making these kind of changes.

### Five Years Later

Today, because of the evolution of our frameworks, toolchains and even the changes in developer roles in many organization, many of these problems can surface even when we're not working at scale.

Additionally, and importantly, components are meant to be **self-contained** and **reusable**.  They can't live up to their potential if they have dependencies built in!

Controlling behaviors internally is what the promise of components offers.  When our CSS _behaviors_ are an integrated part of our code, we can use `props` and `state` to thoroughly control the view in a declarative fashion, versus the imperative way we do it with jQuery  (for example) by swapping out classes.  This can take some time to get used to, but once you do, you never want to go back!

Fortunately, lots of techniques, frameworks, tooling and other open source projects have been built an popularized to fill the gaps.  Four popular ways that you'll likely encounter are:

## CSS Stylesheet

Out of the box, create-react-app supports importing CSS files directly into our components.  The GA react-template(s) supports also importing scss files.  This gives us the ability to have **something akin to** local scoping of our styles, while still being able to access all features of the CSS specification plus the ability to use Sass functionality.

We can also still _sort of_ have access to dynamically styled components by adding and removing classes.

#### Benefits

:white_check_mark: Familiarity

:white_check_mark: Limited access to `props` and `state`

:white_check_mark: Component level styles stay with the component

#### Drawbacks

:x: **All the reasons above!**

## Inline Styling

The term "separation of concerns" is a design principle in CS that refers to separating programs into distinct sections to make it modular.  Under SoC, it's logical that since our CSS, HTML and JS all do different jobs, they should be separate and independent of one another, and for many years the web dev community preached this approach (vociferously :smiley:).  As a result, [inline styles were considered bad practice](https://stackoverflow.com/questions/2612483/whats-so-bad-about-in-line-css).

Inline styles, particularly in the context of components, make a lot of sense though and follow the principle of [LoD](https://en.wikipedia.org/wiki/Law_of_Demeter), which says: _what goes together should stay together_, and it does solve some of the problems that external CSS files create.

### Example

```js
import React from 'react'
import theme from './theme.css.js'

const styles = {
  backgroundColor: theme.primaryColor,
  color: theme.textColor
}

const InlineStyleExample = ({ show }) => (
  <div style={show ? styles : { display: 'none' }}>Inline Styles!</div>
)

export default InlineStyleExample

```

Using inline styles this way requires no special tooling or knowledge beyond how to work with plain old Javascript objects (POJOs).

#### Benefits

:white_check_mark: No special tools and takes advantage of existing toolchain

:white_check_mark: Access to `props` and `state`

:white_check_mark: Component level styles stay with the component

:white_check_mark: Locally scoped with access to external values

:white_check_mark: Statically analyzable (more testable, tree shakeable, lintable, etc.)

#### Drawbacks

:x: Limited support of CSS specification (no animations, pseudo-classes, pseudo-elements, etc.)

:x: Easy overrides (can be good or bad, but are hard to prevent)

:x: Hard to read

:x: Hard to document and maintain

## CSS Modules

CSS Modules was one of the first tools developed in response to the lack of local scoping in CSS.  There was a proposal for local scoping but it's been abandoned.  It didn't solve all of the problems of pure CSS, but it did solve some.

It's creators very specifically designed it to be lightweight and not try to be everything to everyone. It really only supports a handful of features.  One helpful addition is [_composable CSS declarations_](https://github.com/css-modules/css-modules#composition). It's fairly easy to pick up if you know CSS.

The basic premise is that the css classes are converted using a preprocessor into unique names in order to create local scoping.  While additional tooling is needed to handle the processing of the files, create-react-app includes this tooling by default (albeit with limited functionality).  As a result, this is supported in GA templates.

### Example

```css
/* component/styles.css */
:local(.container) {
  margin: 1rem auto;
  position: relative;
}

```

> Note: The `:local()` syntax is strictly required by create-react-app.  CSS Modules is locally scoped by default.

```js
//  component/component.js
import React from 'react'
import styles from './styles.css'

const CSSModulesExample = () => (
  <div className={styles.container}>Hello World!
  </div>
)

export default
```

#### Benefits

:white_check_mark: True locally scoped CSS

:white_check_mark: Limited access to `props` and `state`

:white_check_mark: Component level styles stay with the component

:white_check_mark: Access to full CSS specification including support of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for variable support

:white_check_mark: Fabulous error messages :wink:

#### Drawbacks

:x: Syntax is wierd

:x: No Sass like features except `composes`

:x: Special tooling required and not supported by JS tooling

## CSS in JS

CSS-in-JS is supported in various forms through many open source projects.  One of the most popular and advanced is [Styled Components](https://www.styled-components.com/).

Styled Components does a great job of taking advantage of a feature in JS called a _Tagged Template Literal_ that was introduced in ES6. Essentially, the weird syntax seen below is just calling a function with the ` `` ` (backticks) substituting for `()` (parens). :scream:

### Example
First install styled components with:

```bash
npm install --save styled-components
```
Then use it...

```js
import React from 'react'
import styled from 'styled-components'

const ClickItButton = styled.button`
  background: transparent;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  ${props => props.primary ? css`
      background: deeppink;
      color: white;
    ` :  css`
      background: deeppink;
      color: white;
    `
  };
`

const myComponent = (props) => (
  <div>
    <ClickItButton primary>
      Click it if you like it!
    </ClickItButton>
  </div>
)

export default myComponent
```

#### Benefits

:white_check_mark: True locally scoped CSS

:white_check_mark: Full access to `props` and `state`

:white_check_mark: Component level styles stay with the component

:white_check_mark: Access to full CSS specification including support of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for variable support

:white_check_mark: Statically analyzable!

:white_check_mark: Sass-like features (such as nesting) and much more if you add [Polished](https://polished.js.org/)

#### Drawbacks

:x: Syntax is wierd

:x: npm package required

:x: It's totally addictive :joy:

## Additional Resources

- [4 Ways to Style React Components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)
- [React: CSS in JS | The motivation behind the movement](https://speakerdeck.com/vjeux/react-css-in-js)
- [Building a reusable Component System with React.js and styled-components](https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c)
- [CSS-in-JS Libraries](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
