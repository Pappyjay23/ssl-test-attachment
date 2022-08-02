import React from "react";
import Card from "../../components/Card/Card";
import { CardData } from "../../data/CardData";
import {
	BillingContainer,
	BillsContainer,
	BillsHeader,
	BillsSection,
	BSectionTitle,
	Button,
	ButtonGroup,
	CardsContainer,
	HeaderDesc,
	HeaderGroup,
	HeaderTitle,
	PaymentBtn,
	PaymentContainer,
	PaymentGroup,
	PaymentPrice,
	PaymentSection,
	PaymentSubTitle,
	PaymentTitle,
} from "./Billing.styled";

const Billing = () => {
	return (
		<>
			<BillingContainer>
				<BillsSection>
					<BillsContainer>
						<BillsHeader>
							<BSectionTitle>Billing & Accounts</BSectionTitle>
							<PaymentBtn>Make Payment</PaymentBtn>
						</BillsHeader>
						<CardsContainer>
							{CardData.map((data, index) => (
								<Card
									key={index}
									tagName={data.tagName}
									ctitle={data.ctitle}
									cdesc={data.cdesc}
									cpricedesc={data.cpricedesc}
									csubprice={data.csubprice}
									cprice={data.cprice}
								/>
							))}
						</CardsContainer>
					</BillsContainer>
				</BillsSection>
				<PaymentSection>
					<PaymentContainer>
						<HeaderGroup>
							<HeaderTitle>CloudletHR</HeaderTitle>
							<HeaderDesc>
								Industry tested number one software solution for modern human
								resourcec providers over the world.
							</HeaderDesc>
						</HeaderGroup>
						<PaymentGroup>
							<PaymentTitle>Paying</PaymentTitle>
							<PaymentPrice>N 40, 000 NGN</PaymentPrice>
							<PaymentSubTitle>for 300 employees</PaymentSubTitle>
						</PaymentGroup>
						<ButtonGroup>
							<Button>Make Payment</Button>
						</ButtonGroup>
					</PaymentContainer>
				</PaymentSection>
			</BillingContainer>
		</>
	);
};

export default Billing;
