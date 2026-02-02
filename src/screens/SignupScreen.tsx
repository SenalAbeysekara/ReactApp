import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';

function SignupField() {
    return (
        <View>
            <View style={{
                height: 70, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 90
            }}>
                <TextInput placeholder="Name" placeholderTextColor="#000" />
            </View>

            <View style={{
                height: 70, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 10
            }}>
                <TextInput placeholder="Your Email" placeholderTextColor="#000" />
            </View>

            <View style={{
                height: 70, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 10
            }}>
                <TextInput placeholder="Password" placeholderTextColor="#000" />
            </View>
            <SignupButton />
            <BottomSection />
        </View>
    );
}

function SignupButton() {
    return (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{
                height: 70, flex: 1,
                justifyContent: 'center'
            }}>
                <Text style={{ color: '#000', fontSize: 25, marginLeft: 28, fontWeight: '900' }}>Sign Up</Text>
            </View>
            <View style={{
                height: 70, flex: 1, justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <View style={{
                    width: 50, height: 50, backgroundColor: '#327cf3', marginRight: 40,
                    borderRadius: 100, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Icon size={40} color='#fff' name='arrow-forward' type='ionicon' />
                </View>
            </View>
        </View>
    );
}

function BottomSection() {
    return (
        <View style={{ flexDirection: 'row', marginTop: 80, gap: 100, marginHorizontal: 16,justifyContent: 'flex-end' }}>
            
            <View style={{
                height: 40, width: 95, backgroundColor: '#000',
                justifyContent: 'center', alignItems: 'center', borderRadius: 20
            }}>
                <Text style={{ color: '#fff', fontSize: 13, fontWeight: '700' }}>Sign In</Text>
            </View>

        </View>
    );
}

const SignupScreen = () => {
    return (
        <View style={sty.container}>
            <Image
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                source={require('../../assets/img/bg.png')}
                resizeMode='cover' />

            <Text style={{
                fontSize: 45, color: '#fff', fontWeight: '600',
                marginTop: 100, marginLeft: 20
            }}>
                {`Create\nAccount`}
            </Text>
            <KeyboardAwareScrollView keyboardShouldPersistTaps='never'>
                <SignupField />
            </KeyboardAwareScrollView>
        </View>
    )
}

export default SignupScreen

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
})