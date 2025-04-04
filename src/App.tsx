import { FC } from "react";
import Header from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Section } from "./GlobalStyle";
import { TaskList } from "./components/TaskList/TaskList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <Sidebar />
          <Section>
            <TaskList />
          </Section>
        </Wrapper>
      </main>
    </>
  );
};

export default App;
