import { Avatar, Divider } from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "./userdata";
import { useParams } from 'react-router-dom';

const Profile = () => {
  const userDatas = userData.users
  console.log("userdta==========>", userDatas)
  const { id } = useParams()
  // alert(id)

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

            <div className="flex flex-row justify-evenly ">
              <div className="py-1.5">
                <Avatar alt="Remy Sharp" src={ele.profilepicture} sx={{ width: 80, height: 80 }} />
                <p className=" py-1.5 ">Name : {ele.name}</p>
                <p className=" py-1.5 ">UserName : {ele.username}</p>
                <p className="py-1.5">Email : {ele.email}</p>
                <p className="py-1.5">Phone : {ele.phone}</p>
                <p className="py-1.5">website : {ele.website}</p>
                <Divider />
                <p className="py-1.5 text-center">Company</p>
                <p className="py-1.5">Name: {ele.company.name}</p>
                <p className="py-1.5">Catch Pharse: {ele.company.catchPhrase}</p>

              </div>
              <div className="">
                <p className="py-1.5">Addrsss : {ele.address.street}</p>
                <p className="py-1.5">Street :{ele.address.suite}</p>
                <p className="py-1.5">City :{ele.address.city} </p>
                <p className="py-1.5">Zipcode : {ele.address.zipcode}</p>
                <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28032.76268375464!2d77.224753!3d28.5668998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1673935328276!5m2!1sen!2sin" style={{ width: "500px", height: "300px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
          </>
        ))
      }
    </>
  )
}

export default Profile;