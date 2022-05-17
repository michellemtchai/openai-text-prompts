import React from 'react';
import styled, { css } from 'styled-components';

const sharedStyles = css`
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
`;
const Header = styled.header`
    ${sharedStyles}
`;
const Main = styled.main`
    ${sharedStyles}
`;

const Layout = ({ title, children }) => {
    return (
        <>
            <Header>
                <h1>{title}</h1>
            </Header>
            <Main>
                <article>{children}</article>
            </Main>
        </>
    );
};

export default Layout;
