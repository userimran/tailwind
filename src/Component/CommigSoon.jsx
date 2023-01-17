import { Avatar, Divider } from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "./userdata";
import { useParams } from 'react-router-dom';
const CommigSoon = () => {

  const userDatas = userData.users

  const { id } = useParams()

  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogOut = () => {
    navigate("/")
  }
  return (
    <>

      {
        userDatas.filter((e) => e.id == id).map(ele => (
          <>
            <div className="flex justify-between mx-12">
              <div className="italic font-serif text-4xl"><p>Profile</p></div>
              <div className=""><Avatar alt="Remy Sharp" src={ele.profilepicture} id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} />{ele.name}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={() => { LogOut(); handleClose() }}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
            <Divider />
            <div className="flex flex justify-center items-center">
              <div className="comming_soon">
                <p className="font-serif text-8xl  italic py-1.5"> Comming_soon </p>
              </div>
            </div>

          </>
        ))


      }




    </>
  )
}

export default CommigSoon