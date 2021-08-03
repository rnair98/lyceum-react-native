import React from 'react'

//import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
//import StarRateIcon from "@material-ui/icons/StarRate";
import DoneIcon from "@material-ui/icons/Done";
//import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "../src/styling/Buttons.css";

const Buttons = () => {
    return (
        <div className="swipeButtons">
            {/* <IconButton>
                <ReplayIcon className="swipeButtons__repeat" fontSize="small" />
            </IconButton> */}
            <IconButton>
                <CloseIcon className="swipeButtons__close" fontSize="medium" />
            </IconButton>
            {/* <IconButton>
                <StarRateIcon className="swipeButtons__star" fontSize="small" />
            </IconButton> */}
            <IconButton>
                <DoneIcon className="swipeButtons__fave" fontSize="medium" />
            </IconButton>
            {/* <IconButton>
                <FlashOnIcon className="swipeButtons__flash" fontSize="small" />
            </IconButton> */}
        </div>
    );
};

export default Buttons;