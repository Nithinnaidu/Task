import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fetchPeople } from '../../redux/actions/peopleActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DashboardView extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super()
        this.state = {
            projectNameToDisplay: ''
        }
    }

    componentDidMount = () => {
        this.props.fetchPeople();
    }

    render() {
        let contents = this.props.randomPeople.people
        var jsonData = contents.user
        return (
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <StatusBar backgroundColor='#009387' barStyle="light-content" />
                        {/* Header */}
                        <View style={styles.header}>
                            <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
                                <Text style={{ fontSize: 20, color: 'white', }}>
                                    Dashboard
                                </Text>
                            </View>
                        </View>
                        <View>
                            <ScrollView>
                                {
                                    <View>
                                        <ScrollView>
                                            <ScrollView>
                                                <ScrollView horizontal={true}>
                                                    <View style={{ alignItems: 'center', paddingLeft: 5 }} >
                                                        <View style={{ paddingTop: 10, paddingLeft: 5, width: '100%' }}>
                                                            <View style={styles.rowViewHeader}>
                                                                <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                    <Text style={{ fontWeight: 'bold' }}>
                                                                        ID
                                                                </Text>
                                                                </View>
                                                                {jsonData.map((columnData, index) =>
                                                                    <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {columnData.id}
                                                                        </Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                            <View style={styles.rowViewHeader}>
                                                                <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                    <Text style={{ fontWeight: 'bold' }}>
                                                                        NAME
                                                                    </Text>
                                                                </View>
                                                                {jsonData.map((columnData, index) =>
                                                                    <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {columnData.name}
                                                                        </Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                            <View style={styles.rowViewHeader}>
                                                                <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                    <Text style={{ fontWeight: 'bold' }}>
                                                                        AGE
                                                                    </Text>
                                                                </View>
                                                                {jsonData.map((columnData, index) =>
                                                                    <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {columnData.age}
                                                                        </Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                            <View style={styles.rowViewHeader}>
                                                                <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                    <Text style={{ fontWeight: 'bold' }}>
                                                                        GENDER
                                                                    </Text>
                                                                </View>
                                                                {jsonData.map((columnData, index) =>
                                                                    <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {columnData.gender}
                                                                        </Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                            <View style={styles.rowViewHeader}>
                                                                <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                    <Text style={{ fontWeight: 'bold' }}>
                                                                        EMAIL
                                                                    </Text>
                                                                </View>
                                                                {jsonData.map((columnData, index) =>
                                                                    <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {columnData.email}
                                                                        </Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                            <View style={styles.rowViewHeader}>
                                                                <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                    <Text style={{ fontWeight: 'bold' }}>
                                                                        PHONE NO:
                                                                    </Text>
                                                                </View>
                                                                {jsonData.map((columnData, index) =>
                                                                    <View style={{ borderWidth: 0.65, borderColor: '#009387', width: '14%', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {columnData.phoneNo}
                                                                        </Text>
                                                                    </View>
                                                                )}
                                                            </View>
                                                        </View>
                                                    </View>
                                                </ScrollView>
                                            </ScrollView>
                                        </ScrollView>
                                    </View>
                                }
                            </ScrollView>
                        </View >
                    </View>
                </SafeAreaView>
            </SafeAreaProvider >
        );
    }
}

DashboardView.PropTypes = {
    fetchPeople: PropTypes.func.isRequired,
    randomPeople: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    rowViewHeader: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: '#FFFFFF',
    },
    header: {
        height: 52,
        backgroundColor: '#009387',
    },
    cardView: {
        paddingVertical: 7.5
    },
    textViewStyles: {
        position: 'absolute',
        left: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    cardViewNameStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 55,
        marginRight: 30
    },
    cardNameStyles: {
        fontSize: 14.5
    },
    imageStyles: {
        width: 28,
        height: 29
    }
});

const mapStateToProps = state => {
    return {
        randomPeople: state
    };
}

export default connect(mapStateToProps, { fetchPeople })(DashboardView);
