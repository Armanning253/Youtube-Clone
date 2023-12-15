import React from 'react';

// --------- COMPONENTS -------------- //
import VideoConsole from "./pages/videoConsole/VideoConsole.page";
import Search from "./components/search/Search.component";
import { Routes, Route } from "react-router-dom";

// ---------- API ------------ //
import youtube from "./api/youtube";

// ------------ STYLES ---------- //
import './App.css';
class App extends React.Component {

  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const result = await youtube.get('/search', {
      params: {
        q: term,
      }
    })
    this.setState({ videos: result.data.items })
    console.log(result.data.items)
  }

  render() {
    return (

      <div className="App" >

        <Search onTermSubmit={this.onTermSubmit} />
        <Routes>
          <Route path="/youtube-clone" element={<VideoConsole videos={this.state.videos} />
          }>
          </Route>
        </Routes>



      </div >
    );
  }

}

export default App;
