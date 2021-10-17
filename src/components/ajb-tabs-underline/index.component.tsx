import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';

const AjbTabsUnderline: React.FC<i.TabsUnderline> = ({ keys, tabs, tabActive, handleSetActive }) => {
  return (
    <s.TabsUnderline>
      <div className="TabsUnderline__heading">
        <ul>
          {
            keys.map((key, index) => {
              const tab = tabs[key];
              const isActive = key === tabActive;
              return (
                <s.TabControlItem
                  key={index}
                  isActive={isActive}
                  onClick={() => handleSetActive(tabActive, key)}
                >
                  {tab.label}
                </s.TabControlItem>
              )
            })
          }
        </ul>
      </div>
      <s.TabContent>
        {tabs[tabActive].content}
      </s.TabContent>
    </s.TabsUnderline>
  );
}

export default AjbTabsUnderline;