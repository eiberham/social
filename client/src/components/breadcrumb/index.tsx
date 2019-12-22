import * as React from 'react';
import { Breadcrumb as Crumb } from 'semantic-ui-react';

const Component: React.FC<{}> = props => {
    const sections = null;
    return (
        <Crumb icon='right angle' sections={sections} />
    );
}

const Breadcrumb = Component;

export { Breadcrumb };