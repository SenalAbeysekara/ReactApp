import { ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { use } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseinit';
import { useNavigation } from '@react-navigation/native';

function SignupField() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [Saving, setSaving] = React.useState(false);

    const nav: any = useNavigation();

    function saveUser() {

        setSaving(true);
        addDoc(collection(db, 'Users'), {
            name: name,
            email: email.toLocaleLowerCase(),
            password: password
        }).then(t=> {
            setSaving(false);
            Alert.alert('Message', 'Account Created Successfully');
            nav.navigate('Login');
        }).catch(err => {
            setSaving(false);
            Alert.alert('Error', 'Something went wrong');
        })
    }

    return (
        <View>
            <View style={{
                height: 55, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 110
            }}>
                <TextInput onChangeText={(v) => setName(v)} placeholder="Name" placeholderTextColor="#aaa" style={{ color: 'black', fontFamily: 'Poppins-Medium' }} />
            </View>

            <View style={{
                height: 55, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 10
            }}>
                <TextInput onChangeText={(v) => setEmail(v)} placeholder="Your Email" placeholderTextColor="#aaa" style={{ color: 'black', fontFamily: 'Poppins-Medium' }} />
            </View>

            <View style={{
                height: 55, backgroundColor: '#fff',
                borderRadius: 20, marginHorizontal: 20,
                justifyContent: 'center', paddingLeft: 20, marginTop: 10
            }}>
                <TextInput onChangeText={(v) => setPassword(v)} placeholder="Password" placeholderTextColor="#aaa" style={{ color: 'black', fontFamily: 'Poppins-Medium' }} secureTextEntry={true} />
            </View>
            <SignupButton saveUser={saveUser} saving={Saving} />
            <BottomSection />
        </View>
    );
}

function SignupButton(Props: any) {

    return (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{
                height: 70, flex: 1,
                justifyContent: 'center'
            }}>
                <Text style={{ color: 'white', fontSize: 25, marginLeft: 28, fontFamily: 'Poppins-Medium' }}>Sign Up</Text>
            </View>
            <View style={{
                height: 70, flex: 1, justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <TouchableOpacity activeOpacity={0.7} onPress={Props.saveUser}>
                    <View style={{
                        width: 45, height: 45, backgroundColor: '#327cf3', marginRight: 30,
                        borderRadius: 100, justifyContent: 'center', alignItems: 'center'
                    }}>
                        {
                            (Props.saving) ? <ActivityIndicator size={30} color='#fff' />
                                :
                                <Icon size={35} color='#fff' name='arrow-forward' type='ionicon' />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function BottomSection() {

    const nav = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => nav.goBack()} >
            <View style={{ flexDirection: 'row', marginTop: 145, justifyContent: 'flex-end', marginRight: 30 }}>
                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Poppins-Medium' }}>Sign In</Text>
            </View>
        </TouchableOpacity>
    );
}

const SignupScreen = () => {
    return (
        <View style={sty.container}>
            <Image
                style={{ width: '100%', height: '100%', position: 'absolute' }}
                source={require('../../assets/img/bg1.png')}
                resizeMode='cover' />

            <Text style={{
                fontSize: 45, color: '#fff', fontWeight: '600',
                marginTop: 100, marginLeft: 20, textAlign: 'center',
                fontFamily: "Lobster-Regular",
            }}>
                {`Create Account`}
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