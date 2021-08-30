import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/selector/selectors";
import { logOut } from "../../redux/slices/auth";

import Button from "@material-ui/core/Button";

function UserMenu() {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();

  return (
    <div>
      <span style={{ marginRight: "30px", fontSize: "16px" }}>
        Добро пожаловать, {userName}
      </span>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => dispatch(logOut())}
      >
        Выйти
      </Button>
    </div>
  );
}

export default UserMenu;
