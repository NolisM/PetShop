import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20%;
  flex-basis: 100%;
`;

const Span = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
`

const Paginacion = styled.div`
  justify-content: center;
  margin: 20px 0;
  align-items: center;
`;

const Button = styled.button`
    border: none;
    background: none;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    ${props => (
        props.currentPage === props.num
            ? `
        font-size: 22px;
        color: #0ACF83;
        `
            : ``
    )}
    &:hover {
        cursor: pointer;
        color: #0ACF83;
    }
`;


function Paged({ productsPerPage, products, paged, currentPage }) {
    const pageNumber = [];
    let i = 0;
    let rest = products;
    while (rest > 0) {
        rest -= productsPerPage;
        i++;
        pageNumber.push(i);
    }
    return (
        <Div products={products} productsPerPage={productsPerPage} currentPage={currentPage} lastPage={pageNumber[pageNumber.length - 1]}>
            <Paginacion>
                {pageNumber.length > 1 ? <Span> Pagina: </Span> : null}
                {pageNumber.length > 1 ? pageNumber.map(num => <Button currentPage={currentPage} num={num} key={num} onClick={() => paged(num)}>{num}</Button>)
                    :
                    null
                }
            </Paginacion>
        </Div>
    )
}
export default Paged;