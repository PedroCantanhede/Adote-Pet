import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
    height: 7.188rem;
    background-color: #f6f6f6;
    padding: ${({ theme }) => theme.spacing(2) };

    div {
        height: 100%;
        max-width: 60.625rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2) };
    }

    a {
        font-size: 0.9rem;
    }
`;

export const Logo = styled('img')`
    width: 8rem;
`;

export const LinksContainer = styled('nav')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2) };
    flex-wrap: wrap;
    justify-content: flex-end;
`;