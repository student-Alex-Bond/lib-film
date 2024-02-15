import "./App.css";
import poster from "./assets/poster.png";
import { useState } from "react";
import { Heading } from "./components/Heading/Heading";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { NavMenu } from "./layouts/NavMenu/NavMenu";
import { CardList } from "./layouts/CardList/CardList";
import { SignIn } from "./layouts/SingIn/SingIn";
import { UserContextProvider } from "./context/users.context";

function App() {
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleClick = () => {
    console.log("callback from button");
  };

  return (
    <>
      <UserContextProvider>
        <NavMenu />
        <SignIn />
        <Heading>Поиск</Heading>
        <Paragraph fs="16px">
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraph>
        <Input
          value={search}
          onCange={handleInput}
          isIcon={true}
          placeholder={"Введите название"}
        />
        <Button onClick={handleClick}>Искать</Button>
        <CardList poster={poster} filmName={"Black Widow"} rating={324} />
      </UserContextProvider>
    </>
  );
}

export default App;
