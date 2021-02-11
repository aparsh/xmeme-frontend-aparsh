import React from 'react';
import FormComponent from "../components/formComponent";
import MemeList from "../components/memeList";
import config from "../config";
import Banner from "../components/bannerComponent";

class postComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      memes: []
    };
    this.fetchMemes = this.fetchMemes.bind(this);
  }

  addMeme = (meme) => {
    let memeList = this.state.memes;
    memeList.unshift(meme);
    this.setState({memes:memeList});
  }
  
 
  

  fetchMemes = () => {
    fetch(config.SERVER_URL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            memes: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.fetchMemes();
  }

  render() {
    const { error, isLoaded, memes } = this.state;
    return (
      <div>
        <Banner/>
        <FormComponent addMeme={this.addMeme}/>
        <MemeList error={error} isLoaded={isLoaded} memes={memes}/>
      </div>
    );
  }
}
export default postComponent;