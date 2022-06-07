import {Container} from "@mui/material";
import Modals from "./modals/Modals";
import TableContent from "./TableContent";


function App() {
  return (
      <Container maxWidth="lg">
          <section className="main-table">
              <Modals />
              <div className="main-table_content">
                  <TableContent/>
              </div>
          </section>
      </Container>
  );
}

export default App;
