import React from 'react';
import styled from 'styled-components';
import Prompt from './Prompt';
import SubmitButton from './SubmitButton';

const Form = styled.form`
    margin: 20px 0;
`;

const PromptForm = ({ value, onChange, onSubmit, loading, error }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Prompt
                name="prompt"
                label="Enter Prompt"
                value={value}
                onChange={onChange}
                error={error}
                required={true}
                disabled={loading}
            />
            <SubmitButton loading={loading} />
        </Form>
    );
};

export default PromptForm;
