import * as React from "react";
import ButtonAppBar from "../components/app-bar";
import Zzz from "../components/zzz";
import Banner from "../components/banner";
import Background from "../components/background";
import Video from "../components/video";
import Display from "../components/display";
import Bar from "../components/bar";
import { Box } from "@mui/system/";

export interface IHomeProps {}

export interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {};
  }
  public render() {
    return (
      <Box
        className="App"
        flex={1}
        sx={{ width: "100vi", 

        background: "linear-gradient(to bottom, #1F2033 71%, #313248 100%)"

      }}
      >
        <ButtonAppBar />
        <Banner />

        <Background />
        <Bar />
        <Display />
        {/* <Box
          sx={{
            display: "flex",
            // height: "20vh",
            // width: "100%",
          }}
        ></Box> */}
      </Box>
    );
  }
}
