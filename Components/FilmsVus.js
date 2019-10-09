import React from 'react'
import { StyleSheet, View } from 'react-native'
import FilmVuList from './FilmsVusList';
import {connect} from 'react-redux';

class FilmsVus extends React.Component {

    render() {
        console.log(this.props)
        return (
            <View style={styles.main_container}>
                <FilmVuList
                    films={this.props.filmsVus}
                    navigation={this.props.navigation}
                    favoriteList={true}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});
const mapStateToProps = (state) => {
    return {
        filmsVus: state.toggleFilmsVus.filmsVus
    }
}

export default connect(mapStateToProps)(FilmsVus)
