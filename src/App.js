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
      id={`tabpanel-${index}`}
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
    color,
    content,
    tabs,
    value,
    onChange,
    tabsAtTop,
    tabsAtBottom,
    sx,
    tabsContainerSx,
    tabsSx,
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
            textColor={color}
            indicatorColor={color}
            value={value || localTab}
            onChange={onChange || localOnChange}
            sx={{ ...tabsSx }}
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
  color: "primary",
  tabsAtTop: true,
  tabsAtBottom: false,
  onChange: undefined,
  value: 0,
  sx: {},
  tabsContainerSx: {},
  tabsSx: {},
  contentSx: {},
};

TabView.propTypes = {
  color: PropTypes.string,
  tabsAtTop: PropTypes.bool,
  tabsAtBottom: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
  sx: PropTypes.object,
  tabsContainerSx: PropTypes.object,
  tabsSx: PropTypes.object,
  contentSx: PropTypes.object,
};

export default TabView;
