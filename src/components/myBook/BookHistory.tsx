import React, { ReactElement, PureComponent } from "react";
import { IUserInfo } from "../shared/Types";
import Modal from "./Modal";
import BarChart from "./Barchart";

interface IProps {
  User: IUserInfo;
}
const BookStats: React.FC<IProps> = ({ User }: IProps): ReactElement => {
  const userBookGoal: number = User.numBooksGoal;

  return (
    <div>
      <div>
        <h3 style={{ display: "inline-block" }}>
          {User.finished.length} / {userBookGoal}{" "}
        </h3>
        <progress
          id="js-progressbar"
          className="uk-progress"
          value={User.finished.length}
          max={userBookGoal}
          style={{
            width: "50%",
            verticalAlign: "middle",
            color: "white",
            display: "inline-block"
          }}
        />
        <Modal style={{ display: "inline-block" }} />
      </div>

      <div style={{ display: "block", margin: "auto" }}>
        <BarChart User={User} />
      </div>
    </div>
  );
};

export default BookStats;

// const monthTickFormatter = (tick) => {
//   const date = new Date(tick);

//   return date.getMonth() + 1;
// };

// const renderQuarterTick = (tickProps) => {
//   const { x, y, payload } = tickProps;
//   const { value, offset } = payload;
//   const date = new Date(value);
//   const month = date.getMonth();
//   const quarterNo = Math.floor(month / 3) + 1;
//   const isMidMonth = month % 3 === 1;

//   if (month % 3 === 1) {
//     return <text x={x + offset} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
//   }

//   const isLast = month === 11;

//   if (month % 3 === 0 || isLast) {
//     const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

//     return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
//   }
//   return null;
// };
// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

//   render() {
//     return (
//       <BarChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
//         <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       </BarChart>
//     );
//   }
// }
