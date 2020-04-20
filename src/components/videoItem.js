// import React from 'react';

// import { Grid, Paper, Typography } from '@material-ui/core';

// const VideoItem = ({ video, onVideoSelect }) =>{
//     return(
//     <Grid item xs={12}>
//         <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick= {() => onVideoSelect(video)}>
//             <img style={{ marginRight: '10px'}} alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
//             <Typography variant='title'>
//                 <b>{video.snippet.title}</b>
//             </Typography>
//         </Paper>
//     </Grid>
//     )
// }
// export default VideoItem;


import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) =>{
    return(
    <Grid container xs={12} justify="center" alignItems="center">
        <Grid item xs={12} >
             <Paper style={{ alignItems: 'center', cursor: 'pointer'}} onClick= {() => onVideoSelect(video)}>
                <img style={{ marginBottom: '10px', alignItems: 'center', width: '100%', height: '190px'}} alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
            </Paper>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: '30px'}}>
                <Typography variant='title' style={{ marginBottom: '10px'}}>
                <b>{video.snippet.title}</b>
                </Typography>
        </Grid>
    </Grid>
    )
}
export default VideoItem;


