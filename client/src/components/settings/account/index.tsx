import * as React from 'react';
import { useState } from 'react';
import useForm from 'react-hook-form';

import { Form, Button, Segment, Confirm, Checkbox, Divider, Label } from 'semantic-ui-react';

const Component: React.FC<{}> = props => {
    const { register, handleSubmit, errors } = useForm();
    const [open, setOpen] = useState(false);
    const [changePassword, setChangePassword] = useState(false);

    const onSubmit = ({current, password, repeat}, e) => {
        console.log("form's been submitted: ", current, password, repeat);
    };

    const onDeleteAccount = () => {
        console.log("delete account");
    }

    return (
        <React.Fragment>
            <Checkbox 
                slider 
                label={{ children: 'Change Password' }}
                checked={changePassword}
                onChange={() => setChangePassword(!changePassword)}    
            />

            <Divider horizontal></Divider>

            {changePassword && ( 
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Field required>
                        <label>Current Password</label>
                        <input 
                            name="current" 
                            type="password" 
                            placeholder="Password"
                            ref={register({ required: true })} />
                            {errors.password && 'Password is required.'}
                    </Form.Field>

                    <Form.Field required>
                        <label>Desired Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Password"
                            ref={register({ required: true })} />
                            {errors.newpass && 'Password is required.'}
                    </Form.Field>

                    <Form.Field required>
                        <label>Repeat Password</label>
                        <input 
                            name="repeat" 
                            type="password" 
                            placeholder="Password"
                            ref={register({ required: true })} />
                            {errors.newpass && 'Password is required.'}
                    </Form.Field>

                    <Form.Field inline>
                        <Button type="submit" color="green" fluid>
                            Save
                        </Button>

                    </Form.Field>
                </Form>
            )}
            <Segment color='red' raised>
                <Label as='a' color='red' ribbon>
                    Danger Zone
                </Label>
                <Divider clearing />
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