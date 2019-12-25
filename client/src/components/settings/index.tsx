import * as React from 'react';
import { Tab } from 'semantic-ui-react';
import './styles.scss';

const panes = [
  { menuItem: 'Account', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Appearance', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Other', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const Component: React.FC<{}> = props => {
    return (
        <section className="settings">
            <Tab panes={panes} />
        </section>
    );
}

const Settings = Component;

export { Settings };