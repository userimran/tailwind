import { Avatar, Divider, List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { userData } from "./userdata";
const Login = () => {

  const userDatas = userData.users
  // console.log("userdta==========>", userDatas)
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex justify-center items-center " >
          <div className="container border-2 border-indigo-600 ... rounded-lg ">
            <div className="p-6 bg-sky-500">
              <p className="text-center italic font-serif text-4xl ">Select An Account</p>
            </div>
            <Divider />
            {
              userDatas.map((ele) => (
                <NavLink to={`/profile/${ele.id}`}>
                  <List>
                    <ListItem><Avatar alt="Remy Sharp" src={ele.profilepicture} /> &nbsp;{ele.name}</ListItem>
                    <Divider />
                  </List>
                </NavLink>

              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Login;