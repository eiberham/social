import * as React from 'react';
import { useState } from 'react';
import './styles.scss';

import { Grid, Menu, Segment } from 'semantic-ui-react';

const Panel: React.FC<{}> = props => {
    const [active, setActive] = useState('events');

    const handleItemClick = (e, {name}) => {
        setActive(name);
    }

    return (
        <React.Fragment>
            <section className="panel">
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name='events'
                                active={active === 'events'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name='pics'
                                active={active === 'pics'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name='companies'
                                active={active === 'companies'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name='settings'
                                active={active === 'settings'}
                                onClick={handleItemClick}
                            />
                        </Menu>
                        
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        <Segment>
                            This is an stretched grid column. This segment will always match the
                            tab height
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </React.Fragment>
    )
};

export { Panel };

