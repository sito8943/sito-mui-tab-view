# Sito MUI ComplexTable

Tables display sets of data. They can be fully customized.

### How to use it?

```
import SitoMUIComplexTable from "sito-mui-complex-table";

function App() {
    return {
        <ComplexTable columns={columns} rows={rows} />
    }
}

```

You can change the name of the complex table, if you don't like its name 😂

```
import SitoMUIComplexTable as ComplexTable from "sito-mui-complex-table";

function App() {
    return {
        <ComplexTable columns={columns} rows={rows} />
    }
}

```

You can add your css rules, like `sx` prop for [styled-component](https://emotion.sh/docs/introduction), `style` prop like inline css styles and classNames from your css files

```
import SitoMUITabView from "sito-mui-tab-view";

function App() {
    return {
        <ComplexTable
            sx={{ width: "350px", height: "350px" }}
            columns={columns}
            rows={rows}
        />
    }
}

```

## Props

| Name               | Type                                                                    | Default                                                                                                                 | Description                                                                                              |
| ------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| id                 | string                                                                  |                                                                                                                         | html identifier                                                                                          |
| name               | string                                                                  |                                                                                                                         | html name                                                                                                |
| className          | string                                                                  |                                                                                                                         | css class name                                                                                           |
| textForNSelected   | string                                                                  |                                                                                                                         | text to show when n elements are selected                                                                |
| textForOneSelected | string                                                                  |                                                                                                                         | text to show when an elements is selected                                                                |
| textForEmptyField  | string                                                                  |                                                                                                                         | text to show when a field is empty                                                                       |
| textForPagination  | string                                                                  |                                                                                                                         | text to show in pagination section                                                                       |
| sortFunction       | function                                                                | stableSort(array: list of rows, order: "asc" / "desc", orderBy: attribute to order by, emptyField: text of empty field) | function to sort rows. Note: it should returns a sorted array                                            |
| sx                 | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles.                  |
| tabsContainerSx    | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for tabs row.     |
| toolbarSx          | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for each tab.     |
| tableContainerSx   | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for each content. |
| paginationSx       | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for each content. |

🙌 Good luck out there my friend 🙌
