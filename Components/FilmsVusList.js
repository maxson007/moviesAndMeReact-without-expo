import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmVuItem from './FilmVuItem'
import { connect } from 'react-redux'

class FilmsVusList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film " + idFilm)
        this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
    }

    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.props.films}
                extraData={this.props.favoritesFilm}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <FilmVuItem
                        film={item}
                        isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false} // Bonus pour différencier les films déjà présent dans notre state global et qui n'ont donc pas besoin d'être récupérés depuis l'API
                        displayDetailForFilm={this._displayDetailForFilm}
                    />
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
})

const mapStateToProps = state => {
    return {
        favoritesFilm: state.toggleFavorite.favoritesFilm,
        filmsVus:state.toggleFilmsVus.filmsVus
    }
}

export default connect(mapStateToProps)(FilmsVusList)
