
import React, { useContext } from "react";
import PhotoContext from './PhotoContext';
import Grid from '@material-ui/core/Grid';
const DisplayImage = () => {
    const photo = useContext(PhotoContext);
    return (
        <div>
           
            <Grid item xs={12}>
                <img src={photo.url_s}></img>
                </Grid>
                <Grid item xs={12}>
                {photo?.owner}
                </Grid>
                <Grid item xs={12}>
                {photo?.title}
                </Grid>
            
        </div>
    );
}

export default DisplayImage;