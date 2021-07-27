import React from 'react'

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./styling/Buttons.css";

const Buttons = () => {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon className="swipeButtons__repeat" fontSize="small" />
            </IconButton>
            <IconButton>
                <CloseIcon className="swipeButtons__close" fontSize="small" />
            </IconButton>
            <IconButton>
                <StarRateIcon className="swipeButtons__star" fontSize="small" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className="swipeButtons__fave" fontSize="small" />
            </IconButton>
            <IconButton>
                <FlashOnIcon className="swipeButtons__flash" fontSize="small" />
            </IconButton>
        </div>
    );
};

export default Buttons;