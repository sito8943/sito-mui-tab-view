# Sito Container

Super flexible container, very similar to @mui's Box, but defaults to flex

### How to use it?

```
import SitoContainer from "sito-container";

function App() {
    return {
        <SitoContainer>
            Hola Mundo
        </SitoContainer>
    }
}

```

You can change the name of the container, if you don't like its name 😂

```
import SitoContainer as Container from "sito-container";

function App() {
    return {
        <Container>
            Hola Mundo
        </Container>
    }
}

```

You can add your css rules, like `sx` prop for [styled-component](https://emotion.sh/docs/introduction), `style` prop like inline css styles and classNames from your css files

```
import SitoContainer as Container from "sito-container";

function App() {
    return {
        <Container sx={{ width: "350px", height: "350px" }}>
            Hola Mundo
        </Container>
    }
}

```

## Props

| Name           | Type                                                                    | Default | Description                                                                                                                                                            |     |
| -------------- | ----------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| id             | string                                                                  |         | html identifier                                                                                                                                                        |     |
| name           | string                                                                  |         | html name                                                                                                                                                              |     |
| className      | string                                                                  |         | css class name                                                                                                                                                         |     |
| display        | string                                                                  | "flex"  | The CSS display property specifies whether an element is treated as a block or inline element and the layout used by its children, such as flow layout, grid, or flex. |     |
| flexDirection  | string                                                                  | "row"   | The flex-direction CSS property specifies how to place flex objects in the flex container by defining the main axis and direction (normal or upside down).             |     |
| alignItems     | string                                                                  | "left"  | The align-items CSS property sets the value align-self on all direct descendants of a group.                                                                           |     |
| justifyContent | string                                                                  | "left"  | The justify-content CSS property defines how the browser allocates space between and around flex items, along the main axis of their container.                        |     |
| children       | node                                                                    |         | node children                                                                                                                                                          |     |
| fullWidth      | bool                                                                    | false   | if on, width will be set to "100%", otherwise "inherit"                                                                                                                |     |
| extraProps     | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |         | extra props like: onClick, onMouseEnter, etc                                                                                                                           |     |
| sx             | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |         | The system prop that allows defining system overrides as well as additional CSS styles. See the sx page for more details.                                              |     |
| style          | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |         | inline css                                                                                                                                                             |     |


🙌 Good luck out there my friend 🙌
