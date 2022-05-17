import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    background: blue;
    float: right;
    cursor: pointer;
    &:hover {
        color: #eee;
        background: darkblue;
    }
    &:active {
        color: #ddd;
        background: #333;
    }
    &:disabled {
        color: #fff;
        background: lightblue;
        cursor: not-allowed;
    }
`;

const SubmitButton = ({ loading }) => {
    return loading ? (
        <Button type="submit" disabled>
            Loading...
        </Button>
    ) : (
        <Button type="submit">Submit</Button>
    );
};

export default SubmitButton;
