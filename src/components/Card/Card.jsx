import React from "react";
import {
	CardContainer,
	CardContent,
	CardImage,
	CardTag,
	ContentDesc,
	ContentPrice,
	ContentPriceDesc,
	ContentSubPrice,
	ContentTitle,
	ImageTagContainer,
} from "./Card.styled";
import CardImg from "../../assets/images/fam-illustration.png";

const Card = ({ tagName, ctitle, cdesc, cpricedesc, csubprice, cprice }) => {
	return (
		<>
			<CardContainer>
				<ImageTagContainer>
					<CardImage src={CardImg} />
					<CardTag>{tagName}</CardTag>
				</ImageTagContainer>
				<CardContent>
					<ContentTitle>{ctitle}</ContentTitle>
					<ContentDesc>{cdesc}</ContentDesc>
					<ContentPriceDesc>{cpricedesc}</ContentPriceDesc>
					<ContentPrice>
						<ContentSubPrice>{csubprice}</ContentSubPrice>
						{cprice}
					</ContentPrice>
				</CardContent>
			</CardContainer>
		</>
	);
};

export default Card;
