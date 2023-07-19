# button-component

![localhost_6006__path=_docs_button--docs](https://github.com/ItsMeIshan/button-component/assets/65131563/75df76ec-9864-4122-be4a-5c8c24a2b20d)

![localhost_6006__path=_docs_button--docs (1)](https://github.com/ItsMeIshan/button-component/assets/65131563/05fc1357-9100-418a-9951-ca77591e5df2)


## How I worked on this project

My goal was to build a reusable Button Component that can be used consistently in a web app and use best practices with `React.js` and `Storybook` for building this project.

- Took inspiration from [devchallenges.io](https://devchallenges.io/) Button Component Project. Tried building a `<Button />` component out of it.
- Implemented a Button component and set it up with Storybook.
- Created docs for the component usage with different props.
  
## Component Usage
- 3 types of Button Component are supported *default, outline & text*. We can change the button type from `variant` Prop.
- There are other props like changing the color of button with the help of `color` prop it has 4 options to be used *default, primary, secondary & danger*.
- `size` Prop for changing different size of buttons which has different options such as `sm`, `md` & `lg`.
- a `disabled` prop which accepts boolean value to show a disabled button state.
- button component can accept icons through two props `startIcon` or `endIcon` different props but both props cannot be passed together. These props have 5 options for now *search, local_grocery_store, delete, airplay & book*.
- for more information have look at [docs](https://button-component-storybook.netlify.app/?path=/docs/button--docs)

## If I had more time I would change this
- additional props for hover animations, adjust Icon size, etc.
- Add unit tests.

## Available Scripts
- After Installing all the node modules with the command in the project home directory: `npm ci`
In the project directory, you can run: `npm run storybook`
