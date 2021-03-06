import { styled } from '@mui/material';

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2)};
`

export const ItemList = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(5)};

    // Mobile
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(2)};
        margin-bottom: ${({ theme }) => theme.spacing(10)};
    }
`

export const Photo = styled('img')`
    width: 100%;
`

export const Information = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
`

export const Name = styled('h2')`
    font-family: 'Poppins', sans-serif; 
    margin: 0;
`

export const Description = styled('p')`
    font-family: 'Poppins', sans-serif; 
    margin: 0;
    word-break: break-word;
`
