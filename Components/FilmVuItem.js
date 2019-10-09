import React from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight, Animated, Dimensions, ScrollView} from 'react-native';
import {getImageFromApi} from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'
import moment from 'moment'

class FilmVuItem extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            positionLeft: new Animated.Value(Dimensions.get('window').width),
            isOnLongPress: false
        }
        this._onLongPressButton=this._onLongPressButton.bind(this)
    }

    componentDidMount() {
        Animated.spring(
            this.state.positionLeft,
            {
                toValue: 0
            }
        ).start()
    }

    _onLongPressButton() {
        this.setState({ isOnLongPress: !this.state.isOnLongPress });
    }

    _displayTextOnlongPress(film) {
        if(this.state.isOnLongPress)
            return (<Text>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>);
        return (<Text>{film.title}</Text>);
    }

    render() {
        const {film, displayDetailForFilm} = this.props
        return (
            <FadeIn>
                <TouchableHighlight
                    onPress={() => displayDetailForFilm(film.id)}
                    onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={{ flex: 1,flexDirection: 'row' ,justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1}}>
                            <Image
                                style={styles.image}
                                source={{uri: getImageFromApi(film.poster_path)}}
                            />
                        </View>
                        <View style={{ flex: 2}}>
                            {this._displayTextOnlongPress(film)}
                        </View>
                    </View>
                </TouchableHighlight>
            </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 120/2
    }
})

export default FilmVuItem
