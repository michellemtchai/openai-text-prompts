import React from 'react';
import styled from 'styled-components';

const FieldSet = styled.fieldset`
    border: none;
    outline: none;
`;

const FieldError = styled.p`
    background: #faebd7;
    color: red;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-weight: bold;
`;

const StyledInput = styled.textarea`
    width: 100%;
    min-height: 100px;
    resize: none;
    padding: 10px;
`;

const Prompt = ({
    name,
    label,
    value,
    onChange,
    disabled,
    error,
    required,
}) => {
    const ariaLabel = `${name}Label`;
    const ariaDesc = `${name}Desc`;
    return (
        <FieldSet>
            {error && (
                <FieldError id={ariaDesc}>
                    <b>Error:</b> {error}
                </FieldError>
            )}
            <Label id={ariaLabel} htmlFor={name}>
                {label}:
            </Label>
            <StyledInput
                id={name}
                name={name}
                value={value}
                disabled={disabled}
                onChange={onChange}
                aria-label={label}
                aria-required={required}
                aria-labelledby={ariaLabel}
                aria-describedby={ariaDesc}
            />
        </FieldSet>
    );
};

export default Prompt;
