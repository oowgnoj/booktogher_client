import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IUserInfo } from "./Types";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    boxShadow: "none"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

interface IProps {
  user: IUserInfo;
  handleActive: (e: React.MouseEvent) => void;
}

const UserCard: React.FC<IProps> = ({ user, handleActive }: IProps) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <img
          src={
            user.image === null
              ? "https://cdn2.iconfinder.com/data/icons/bussiness-management-supersolid/24/add_add_contact_create_new_person_user_add_friend-512.png"
              : user.image
          }
          style={{
            borderRadius: "50%",
            width: "75px",
            height: "75px",
            marginRight: "10px",
            display: "inline-block"
          }}
        />

        <Typography
          variant="h5"
          component="h2"
          style={{ display: "inline-block", marginLeft: "15px" }}
        >
          {"   "}
          {user.name}
          <EditIcon style={{ marginLeft: "50px" }} onClick={handleActive} />
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          style={{ marginTop: "25px" }}
        >
          {user.profile === "" ? (
            <p>유저 프로필을 입력해주세요. </p>
          ) : (
            <p style={{ fontStyle: "italic" }}>{user.profile} </p>
          )}{" "}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
