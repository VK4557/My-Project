import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const expireTime= 5;
const storeCache= async (key,value) => {
    try {
        const item= {
            value,
            timeStamp: Date.now()
        }
        await AsyncStorage.setItem(key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}

const isExpired= (item) =>{
    const now= moment(Date.now());
    const storedTime= item.timeStamp;
    return now.diff(storedTime,'minute') > 5
}
const getCache= async (key) => {
    try {
        const value= await AsyncStorage.getItem(key);
        const item= JSON.parse(value);
        if(!item) return null;
        if(isExpired(item)) {
            await AsyncStorage.removeItem(key);
            return null;
        }

    } catch (error) {
        console.log(error);
    }
    return item;
}


export default {
    storeCache,
    getCache
}