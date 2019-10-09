import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions} from 'react-native'
import {getImageFromApi} from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class FilmVuItem extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            positionLeft: new Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount() {
        Animated.spring(
            this.state.positionLeft,
            {
                toValue: 0
            }
        ).start()
    }


    render() {
        const {film, displayDetailForFilm} = this.props
        return (
            <FadeIn>
                <TouchableOpacity
                    onPress={() => displayDetailForFilm(film.id)}>
                    <View style={{ flex: 1,flexDirection: 'row' ,justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1}}>
                            <Image
                                style={styles.image}
                                source={{uri: getImageFromApi(film.poster_path)}}
                            />
                        </View>
                        <View style={{ flex: 2}}>
                            <Text>{film.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
