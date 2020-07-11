import AsyncStorage from '@react-native-community/async-storage'


const Helpers = {

  test : (val) =>{
    console.log('I m helper func test with value' , val)
  },


  removeKey : async (key , callBack) =>{
    try {
      await AsyncStorage.removeItem(key , callBack)

    } catch (error) {
      alert('Something Went wrong TryAgain')
    }
  } ,


  getToken : async (key) =>{
    try {
      const token = await AsyncStorage.getItem(key)
      if(token !== null){
        console.log('Helper Get Token >>>>>')
        return token
      }
      else{
        return false
      }
    } catch (error) {
        alert('Token not available...')
    }
  } , 

  getGreet : (name) =>{
    let hour = new Date().getHours()
    console.log('Hour is >>' , hour)
    switch(true){
        case (hour >= 1 && hour <12):
            return `Good Morning! ${name}`
        case (hour >= 12 && hour<17):
            return `Good Afternoon! ${name}`
        case (hour >= 17 && hour <= 24):
            return `Good Evening! ${name}`
        default:
            return `Good Evening! ${name}`
    } 
  } ,

}


export default Helpers;