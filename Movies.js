import {Text} from 'react-native';
import {View} from 'react-native';
import {Image} from 'react-native';
import React from 'react';
const movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];
class Movies extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.title}
        </Text>
        <Text>{this.props.year}</Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}
const MovieList = (props) => {
  return MOVIES_DATA.map((title) => {
    return (
      <Movies title={title.title} year={title.year} poster={title.poster} />
    );
  });
};
export {MovieList};
