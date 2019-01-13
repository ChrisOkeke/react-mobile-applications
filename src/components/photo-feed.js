import React, { Component } from 'react';
import { ScrollView, Text, } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';

export default class PhotoFeed extends Component {
  state = { photos: [{ username: 'dummy' }] };

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/PacktPublishing/Learning-React-Native-Development/master/Section%204/4.2/instagram/db.json')
      .then(response => {
        console.log(response.data["photos"]);
        this.setState({ photos: response.data["photos"] });
      });
  }

  getPhotos() {
    return this.state.photos.map(_photo => {
      console.log(_photo.id);
      return (
        
        <PhotoSection key={_photo.id } photo={_photo} />
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.getPhotos()}
      </ScrollView>
    );
  }
}