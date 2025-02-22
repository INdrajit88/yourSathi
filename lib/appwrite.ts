import {Client} from "react-native-appwrite";
export const config={
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectiD:process.env.EXPO_PUBLIC_APPWRITE_PROJECT,
    platform: 'com.ari.yourSathi'
}
export const Client = new Client();
clientInformation