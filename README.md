# Sito Mui TabView

Component with dynamics tabs super flexible

### How to use it?

```
import SitoMUITabView from "sito-mui-tab-view";

function App() {
    return {
        <SitoMUITabView
            tabs={["Hola", "Adiós"]}
            content={[<div>Hola</div>, <div>Adiós</div>]}
        />
    }
}

```

You can change the name of the tab view, if you don't like its name 😂

```
import SitoMUITabView as TabView from "sito-mui-tab-view";

function App() {
    return {
        <TabView
            tabs={["Hola", "Adiós"]}
            content={[<div>Hola</div>, <div>Adiós</div>]}
        />
    }
}

```

You can add your css rules, like `sx` prop for [styled-component](https://emotion.sh/docs/introduction), `style` prop like inline css styles and classNames from your css files

```
import SitoMUITabView from "sito-mui-tab-view";

function App() {
    return {
        <SitoMUITabView
            sx={{ width: "350px", height: "350px" }}
            tabs={["Hola", "Adiós"]}
            content={[<div>Hola</div>, <div>Adiós</div>]}
        />
    }
}

```

## Props

| Name            | Type                                                                    | Default   | Description                                                                                              |
| --------------- | ----------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------- |
| id              | string                                                                  |           | html identifier                                                                                          |
| name            | string                                                                  |           | html name                                                                                                |
| className       | string                                                                  |           | css class name                                                                                           |
| color           | string                                                                  | "primary" | color for the indicator and text of the tabs                                                             |
| tabsAtTop       | boolean                                                                 | true      | show tabs row at top                                                                                     |
| tabsAtBottom    | boolean                                                                 | false     | show tabs row at bottom                                                                                  |
| content         | Array<node>                                                             | []        | array of node children                                                                                   |
| tabs            | Array<string>                                                           | []        | array of labels of tabs                                                                                  |
| value           | number                                                                  |           | current tab                                                                                              |
| onChange        | func (event, newTab)                                                    |           | tab event handler when change the current tab                                                            |
| sx              | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |           | The system prop that allows defining system overrides as well as additional CSS styles.                  |
| tabsContainerSx | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |           | The system prop that allows defining system overrides as well as additional CSS styles for tabs row.     |
| tabsSx          | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |           | The system prop that allows defining system overrides as well as additional CSS styles for each tab.     |
| contentSx       | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |           | The system prop that allows defining system overrides as well as additional CSS styles for each content. |
| style           | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |           | inline css                                                                                               |

🙌 Good luck out there my friend 🙌
