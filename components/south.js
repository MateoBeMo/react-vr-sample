import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class West extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingWestText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingWestText) {
            this.setState({ displayingWestText: true })

        } else {
            this.setState({ displayingWestText: false })
        }
    }

    render() {
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingWestText === true ?
                        (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 0.7,
                                        fontWeight: '400',
                                        layoutOrigin: [0, 0],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [-10, 0, 18] }, { rotateY: 180 }],
                                    }}>
                                    Are you sure to come back to home ?
                        </Text>
                            </View>
                        )
                        : (
                            <Image
                                source={asset('south.png')}
                                style={{
                                    position: 'absolute',
                                    width: 3,
                                    height: 3,
                                    layoutOrigin: [0, 0],
                                    transform: [{ translate: [-10, 0, 18] }, { rotateY: 180 }],
                                }}
                            />
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = West