import * as React from 'react';
import { useState } from 'react';
import useForm from 'react-hook-form';

import { Form, Button, Segment, Confirm } from 'semantic-ui-react';

const Component: React.FC<{}> = props => {
    const { register, handleSubmit, errors } = useForm();
    const [open, setOpen] = useState(false);
    const onSubmit = () => {
        console.log("form's been submitted");
    };

    const onDeleteAccount = () => {
        console.log("delete account");
    }

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field inline>
                    {/* <label>Delete Account</label>
                    <div className="ui fitted toggle checkbox">
                        <input type="checkbox" className="hidden" readOnly tabIndex={0} />
                        <label></label>
                    </div> */}
                    
                    <Button type="submit" color="green" fluid>
                        Save
                    </Button>

                </Form.Field>
            </Form>
            <Segment color='red'>
                <Button type="submit" color="red" fluid onClick={() => setOpen(true)}>
                    Delete Account
                </Button>
            </Segment>
            <Confirm
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={onDeleteAccount}
            />
        </React.Fragment>
    );
}

const Account = Component;

export { Account };