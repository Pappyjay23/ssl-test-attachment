import styled from "styled-components";

export const BillingContainer = styled.div`
	display: flex;
	height: 100vh;
	max-width: 1200px;
	margin: 0 auto;
`;
export const BillsSection = styled.div`
	width: 100%;
	padding: 2rem;

	@media screen and (min-width: 1024px) {
		width: 70%;
	}

    @media screen and (max-width: 425px) {
        padding: 1rem 15px;
    }
`;
export const BillsContainer = styled.div`
	width: 100%;

	@media screen and (min-width: 1024px) {
		width: 70%;
	}
`;

export const BillsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

export const CardsContainer = styled.div``

export const PaymentBtn = styled.a`
	padding: .8rem 2rem;
	background-color: #7275f6;
	border-radius: 30px;
	color: #fff;
	font-size: 70%;
	cursor: pointer;
    display: flex;
	transition: all 0.3s ease;
    
	:hover {
        background-color: #595fdc;
	}
    @media screen and (max-width: 425px) {
        padding: .8rem 1rem;
        font-size: 60%;
    }
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const BSectionTitle = styled.p`
	
`;
export const PaymentSection = styled.div`
	background-color: #d9d9d9;
	padding: 2rem;
	padding-bottom: 5rem;
	width: 30%;
	display: none;

	@media screen and (min-width: 1024px) {
		display: flex;
	}
`;
export const PaymentContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90%;
	@media screen and (min-width: 1024px) {
		max-height: 650px;
	}
`;
export const HeaderGroup = styled.div``;
export const HeaderTitle = styled.p`
	color: #222ac3;
	font-weight: 700;
	filter: drop-shadow(1px 1px 1px #454545);
`;
export const HeaderDesc = styled.p`
	font-size: 80%;
`;
export const PaymentGroup = styled.div``;
export const PaymentTitle = styled.p`
	font-size: 1.5rem;
`;
export const PaymentPrice = styled.p`
	font-weight: 700;
	filter: drop-shadow(1px 1px 1px #454545);
	font-size: 1.3rem;
`;
export const PaymentSubTitle = styled.p`
	color: #a2a2a2;
	font-size: 80%;
`;
export const ButtonGroup = styled.div``;
export const Button = styled.a`
	padding: 1rem 3rem;
	background-color: #7275f6;
	border-radius: 30px;
	color: #fff;
	font-size: 80%;
	cursor: pointer;
	transition: all 0.3s ease;

	:hover {
		background-color: #595fdc;
	}
`;
