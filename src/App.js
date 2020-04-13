import React from 'react';
import { Grid } from '@material-ui/core';


import { VideoDetail, SearchBar, VideoList} from './components';
// import VideoList from './components/VideoList';
// import SearchBar from './components/SearchBar';

import youtube from './api/youtube';


class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null,
    }

 
   componentDidMount (){
        this.handleSubmit('hi, world')
    }  /*при первоначальной загрузке появляется видео */ 

    onVideoSelect = (video) => {
            this.setState({ selectedVideo: video })
    }

    handleSubmit = async (searchTerm) => {
            const response = await youtube.get('search', {
              params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAft42SG3aLWg_Q3m9xNIiMBO-mVORl7nA',
                q: searchTerm,
                }
            });
           this.setState ({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    render(){
        const { selectedVideo, videos } = this.state; /**деструктуризация чтобы проще читался компонент Videodetail */
        return(
           <Grid justify='center' container spacing={10}>
               <Grid item xs={12}>
                   <Grid container spacing={10}>
                       <Grid item xs={12}>
                      <SearchBar onFormSubmit={this.handleSubmit}/>
                       </Grid>
                       <Grid item xs={8}>
                       <VideoDetail video={selectedVideo}/>
                       </Grid>
                       <Grid item xs={4}>
                      <VideoList videos={videos}
                                onVideoSelect={this.onVideoSelect}/>
                       </Grid>
                   </Grid>
               </Grid>
           </Grid>
        )
    }
}
export default App;
