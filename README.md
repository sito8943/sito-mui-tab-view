# Sito MUI ComplexTable

Tables display sets of data. They can be fully customized.

### How to use it?

```
//* testing with these data
const columns = [
    { id: "id", width: "90px", align: "left", label: "Id", padding: "normal" },
    {
        id: "name",
        width: "150px",
        align: "left",
        label: "Name",
        padding: "normal",
    },
];

const rows = [
    { id: 1, name: "Sito" },
    { id: 2, name: "Carlos" },
];
```

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
import SitoMUITabView from "sito-mui-complex-table";

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

| Name                          | Type                                                                                                                                      | Default                                                                                                                 | Description                                                                                              |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| id                            | string                                                                                                                                    |                                                                                                                         | html identifier                                                                                          |
| name                          | string                                                                                                                                    |                                                                                                                         | html name                                                                                                |
| className                     | string                                                                                                                                    |                                                                                                                         | css class name                                                                                           |
| textForNSelected              | string                                                                                                                                    | "selected"                                                                                                              | text to show when n elements are selected                                                                |
| textForOneSelected            | string                                                                                                                                    | "selected"                                                                                                              | text to show when an elements is selected                                                                |
| textForEmptyField             | string                                                                                                                                    | "empty"                                                                                                                 | text to show when a field is empty                                                                       |
| textForPagination             | string                                                                                                                                    | "Rows per page"                                                                                                         | text to show in pagination section                                                                       |
| sortFunction                  | function                                                                                                                                  | stableSort(array: list of rows, order: "asc" / "desc", orderBy: attribute to order by, emptyField: text of empty field) | function to sort rows. Note: it should returns a sorted array                                            |
| singleSelectFunctions         | Array<{icon: ReactNode, func: function (selected: Array<number>: selected id), tooltip: string}>                                          |                                                                                                                         | available functions when a row is selected                                                               |
| multipleSelectFunctions       | Array<{icon: ReactNode, func: function (selected: Array<number>: selected id), tooltip: string}>                                          |                                                                                                                         | available functions when n rows are selected                                                             |
| columns                       | Array<{id: number, width: [string, number], align: ["left", "center", "right"], label: string, padding: ["checkbox", "none", "normal"] }> |                                                                                                                         | columns for the table                                                                                    |
| rows                          | Array<{labels from columns}>                                                                                                              |                                                                                                                         | rows for the table                                                                                       |
| currentPage                   | number                                                                                                                                    | 0                                                                                                                       | current page of pagination                                                                               |
| componentForPaginationActions | ReactNode                                                                                                                                 | [TablePaginationActions](https://mui.com/material-ui/react-table/#custom-pagination-actions)                            | current page of pagination                                                                               |
| rowsPerPage                   | Array<number>                                                                                                                             | [5,10,25]                                                                                                               | available rows per page                                                                                  |
| handleChangePage              | function (event, newPage)                                                                                                                 |                                                                                                                         | function to trigger when the page of pagination changes                                                  |
| handleChangeRowsPerPage       | function (event)                                                                                                                          |                                                                                                                         | function to trigger when the prows per page change                                                       |
| sx                            | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object                                                                   |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles.                  |
| tabsContainerSx               | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object                                                                   |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for tabs row.     |
| toolbarSx                     | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object                                                                   |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for each tab.     |
| tableContainerSx              | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object                                                                   |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for each content. |
| paginationSx                  | Array<func<br>\| object<br><br>\| bool><br><br>\| func<br><br>\| object                                                                   |                                                                                                                         | The system prop that allows defining system overrides as well as additional CSS styles for each content. |

🙌 Good luck out there my friend 🙌
