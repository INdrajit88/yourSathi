import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {
    const handleLogin = () => {
        console.log('sign in')
    };
    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
            <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
            <View className='px-10'>
                <Text className='text-base text-center uppercase font-rubik text-black-200'>
                    Welcome to Your Sathi
                </Text>
                <Text className='text-3xl text-center mt-2 font-rubikBold text-black-300'>
                    It's not your fault it's our society that has failed {"\n"}
                    <Text className='text-primary-300'>- Your Sathi</Text>
                </Text>
                <Text className='text-center text-black-200 mt-12 text-lg'>
                    Login to Your Sathi with google
                </Text>
                <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                    <View className='flex flex-row justify-center items-center'>
                    <Image source={icons.google} 
                    className='w-6 h-6'
                    resizeMode='contain'
                    />
                    <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Sign in with Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
