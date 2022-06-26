import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { themeParser } from "../utils";
import Loader from "./Loader";

const Layout = (props: any) => {
  const { children } = props;
  const [parsedTheme, setTheme] = useState(createTheme({}));
  const [isLoading, setIsLoading] = useState(true);

  const getRemoteTheme = () => {
    setIsLoading(true);
    axios
      .get("https://api.jsonbin.io/b/628769e0402a5b380204770b", {
        headers: {
          "secret-key":
            "$2b$10$cVRmVhKSVGnNdo1dDBk64OuI7a5bk3vWxKngHq8ykpYOb8t9duSZy",
        },
      })
      .then((res) => {
        console.log(res);
        const recievedTheme = themeParser(res.data.values.test);
        setTheme(recievedTheme);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        alert("Failed to get data from server");
        console.log(e);
      });
  };

  useEffect(() => {
    getRemoteTheme();
  }, [setTheme]);

  return (
    <ThemeProvider theme={parsedTheme}>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <div>{children}</div>
      )}
    </ThemeProvider>
  );
};

export default Layout;
