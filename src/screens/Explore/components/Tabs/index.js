import styled from 'styled-components';
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs';

const Tabs = styled(UnstyledTabs)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})`
  flex-grow: 1;
  list-style: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 40px;
  position: relative;
  color: ${({ theme }) => theme.palette.secondary.light};
  outline: none;
  transition: all ease 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.sizes.smalldesktop}px) {
    margin-left: 20px;
  }
  & > img {
    margin-right: 12px;
  }
  &:first-child {
    margin-left: 0;
  }
  &.selected {
    color: ${({ theme }) => theme.palette.primary.dark};
    border-bottom: none;
    & > img {
      filter: grayscale(100%) brightness(0%);
    }
    &:before {
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: -10px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.background.lineardark},
        ${({ theme }) => theme.palette.background.linearlight}
      );
      box-shadow: 0 3px 8px 0px ${({ theme }) => theme.palette.boxshadow.main};
    }
  }

  &.disabled {
    color: #99a5b8;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(UnstyledTabPanel).attrs({
  selectedClassName: 'selected',
})`
  display: none;
  width: 100%;
  flex-direction: column;
  &.selected {
    display: flex;
    flex: 1;
  }
`;

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';

export { Tab, TabList, Tabs, TabPanel };
