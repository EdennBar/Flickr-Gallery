import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ApiService from "./ApiService";
import Gallery from './Gallery';
import CustomePagination from './CustomePagination';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 310,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    minWidth: 275,

    p: {
        "& > *": {
            marginTop: theme.spacing(2),
            justifyContent: "center",
            display: 'flex'
        }
    }
}));

const Galleries = ({ onClick }) => {
    const classes = useStyles();
    let history = useHistory();
    const [page, setPage] = useState(1)
    const [galleries, setGalleries] = useState([])
    useEffect(async () => {
        const galleries = await ApiService.getImages(page);
        var photos = galleries.photos.photo;
        setGalleries(photos)
    }, [page]);



    return (

        <div>
            <Grid container
                spacing={2}
                justifyContent= "center"
                item xs={12}
            >
                {galleries.map((gallery) => {

                    return (
                        <Grid item xs={4} item md={3} item lg={2}>
                            <Card className={classes.root}>
                                <div onClick={() => { history.push("/image"); onClick(gallery) }}>
                                <Gallery
                                key={gallery.id}
                                id={gallery.id}
                                image={gallery.url_s}
                                photo={gallery}
                                />
                                </div>
                            </Card>
                        </Grid>
                    )
                }
                )}
                <Grid item xs={12}>
                    <CustomePagination className={classes.p} setPage={setPage} color="primary"></CustomePagination>
                </Grid>
            </Grid>


        </div>


    );

}

export default Galleries;