import Header from "./Components/Header";
import styled from "styled-components";
import Search from "./Components/Search";
import LastReleases from "./Components/LastReleases";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Search />
      <LastReleases />
    </StyledApp>
  );
}

export default App;
