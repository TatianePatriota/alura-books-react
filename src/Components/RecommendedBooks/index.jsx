import styled from "styled-components";
import Title from "../Title";

const StyledRecommendationCard = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
  text-align: center;
`;

const StyledButtonRecommendation = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSubtitle = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const StyledDescription = styled.p`
  max-width: 300px;
`;

const StyledBookImage = styled.img`
  width: 150px;
`;

function RecommendedBooks({ title, subtitle, description, img }) {
  return (
    <StyledRecommendationCard>
      <div>
        <Title tamanhoFonte="16px" cor="#EB9B00" preenchimento="10px 0">
          {title}
        </Title>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <StyledDescription>{description}</StyledDescription>
      </div>
      <div>
        <StyledBookImage src={img} alt="Imagem do Livro" />
        <StyledButtonRecommendation>Saiba mais</StyledButtonRecommendation>
      </div>
    </StyledRecommendationCard>
  );
}

export default RecommendedBooks;
