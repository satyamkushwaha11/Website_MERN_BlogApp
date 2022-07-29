import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Image from "../Images/Image";

function PostViewCard() {
  return (
    <div className="card mx-3 p-3 d-flex  flex-row">
      <div className="col-9 ">
        <Stack direction="row" spacing={2} className="ml-2">
          <Avatar
            alt="Remy Sharp"
            src="/icons/facebook.png"
            sx={{ width: 35, height: 35 }}
          />
          <h4 className="my-auto ">Harry kumar singh</h4>
        </Stack>
        {/* <hr className="mt-4" /> */}
        <br />
        <div className="font-bold">
          <h2>
            first postasddsfdsafasdfdsafasdds dsadfasd asdfasdfh dsfasdfadsfasd
            f
          </h2>
        </div>
        <hr />
        <div className="d-flex  justify-content-beetwen">
          <div className="d-flex">
            <div className="mr-3 fntSz-14"> 27-may</div>
            <div className="mr-3 fntSz-14"> like </div>
            <div className="mr-3 fntSz-14">tags</div>
          </div>
          <div className="">
            <div className="mr-3 fntSz-14">share</div>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src="/nature.jpg"
          alt="Remy Sharp"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
}

export default PostViewCard;
