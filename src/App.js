import { useState } from "react";

// prop types
import PropTypes from "prop-types";

// @mui components
import { Tabs, Tab, Box } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const TabView = (props) => {
  const {
    content,
    tabs,
    value,
    onChange,
    tabsAtTop,
    tabsAtBottom,
    sx,
    tabsContainerSx,
    contentSx,
  } = props;

  const [localTab, setLocalTab] = useState(0);

  const localOnChange = (event, newTab) => setLocalTab(newTab);

  return (
    <Box sx={{ width: "100%", ...sx }}>
      {tabsAtTop && (
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", ...tabsContainerSx }}
        >
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={value || localTab}
            onChange={onChange || localOnChange}
          >
            {tabs.map((item, i) => (
              <Tab component="a" href={`#${item}`} key={item} label={item} />
            ))}
          </Tabs>
        </Box>
      )}
      {content.map((item, i) => (
        <TabPanel key={`tc${i}`} value={value || localTab} index={i}>
          {item}
        </TabPanel>
      ))}
      {tabsAtBottom && (
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", ...tabsContainerSx }}
        >
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={value}
            onChange={onChange}
            sx={{ ...contentSx }}
          >
            {tabs.map((item, i) => (
              <Tab component="a" href={`#${item}`} key={item} label={item} />
            ))}
          </Tabs>
        </Box>
      )}
    </Box>
  );
};

TabView.defaultProps = {
  tabsAtTop: true,
  tabsAtBottom: false,
  onChange: undefined,
  value: 0,
  sx: {},
  tabsContainerSx: {},
  contentSx: {},
};

TabView.propTypes = {
  tabsAtTop: PropTypes.bool,
  tabsAtBottom: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
  sx: PropTypes.object,
  tabsContainerSx: PropTypes.object,
  contentSx: PropTypes.object,
};

export default TabView;
