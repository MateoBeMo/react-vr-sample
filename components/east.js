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
                                        layoutOrigin: [0.7, 0.7],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [19, 6, 8] }, { rotateY: -90 }],
                                    }}>
                                    This way is too lush, you'll find it hard to walk
                        </Text>
                            </View>
                        )
                        : (
                            <Image
                                source={asset('east.png')}
                                style={{
                                    position: 'absolute',
                                    width: 3,
                                    height: 3,
                                    layoutOrigin: [0.7, 0.7],
                                    transform: [{ translate: [19, 6, 8] }, { rotateY: -90 }],
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