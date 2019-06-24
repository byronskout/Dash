
import React from 'react';
import axios from 'axios';

class Instagram extends React.Component {
    state = {
        images: [],
    };

    componentDidMount() {
        let token = 'ff317d6909084b13b04e0fe0e31aeb2a';
        let num_photos = 2;


        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                console.log(res.data.data[0].images);
                    this.setState({ images: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return(
            <div className="instafeed">
                { this.state.images.map((image) => {
                    return <img src={image.images.thumbnail.url} />
                })}
            </div>
        )
    }
}

export default Instagram;
