import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";
import { IUserInfo, NumbookRead } from "../shared/Types";
import { montlyNumFinishedBook } from "../shared/InitialStates";

interface IProps {
  User: IUserInfo;
}

interface IState {
  montlyStat: NumbookRead[];
}
export default class Chart extends PureComponent<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      montlyStat: montlyNumFinishedBook
    };
  }
  public modifyData(user: IUserInfo): void {
    let newStat = [...this.state.montlyStat];
    for (const endBook of user.finished) {
      let index: string | number = endBook.end.slice(5, 7);
      index = Number(index) - 1;
      newStat[index].numOf++;
    }
    this.setState({ montlyStat: newStat });
  }
  public componentDidMount(): void {
    this.modifyData(this.props.User);
  }

  render() {
    return (
      <div style={{ display: "block", margin: "auto" }}>
        <LineChart width={500} height={200} data={this.state.montlyStat}>
          <Line
            type="monotone"
            dataKey="numOf"
            stroke="rgb(121, 144, 168)"
            strokeWidth={2}
          />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
