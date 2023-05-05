import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainStackNavi,ChtStackNavi} from './StackNavi'


const Tab = createBottomTabNavigator();

function BottomTabNavi({navigation}){

  const name = navigation
  console.log('aaa : ' + name);

 
  return (
    <Tab.Navigator
      screenOptions={
        {headerShown:false}
      }
    >

      {/* 홈 / 좋아요 / 게시물 작성 / 검색 / 프로필 */}
      <Tab.Screen name="Home" component={MainStackNavi}  />
      <Tab.Screen name="Chatting" component={ChtStackNavi} />


    </Tab.Navigator>
  )
}

export default BottomTabNavi;


