import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { getRecords } from '../apis/api'
import { IRecord } from '../interfaces/IRecord'

type Props = {}

const RecordingScreen = (props: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getRecords();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient
      colors={['#C4E4F4', 'rgba(196, 228, 244, 0)']}
      locations={[0.2279, 0.72]}
      style={styles.container}
    >
      <View style={{ paddingLeft: 10, paddingTop: 10,paddingBottom:10 }}>
                <Image
                    source={require('./../assets/imgs/logo.png')}
                    style={{ width: 152, height: 120 }}
                />
            </View>
      <View style={{ width: 350, height: 570, backgroundColor: "#FFFFFF", alignSelf: 'center', borderRadius: 30 }}>
        <Text style={{ alignSelf: 'center', fontFamily: "THSarabunBold", fontSize: 36, color: "#000000", paddingTop: 20 }}>ประวัติการใช้งานรถ</Text>
        <ScrollView>
          {data.map((item: IRecord) => (
            <View key={item._id} style={{ width: 300, height: 150, backgroundColor: '#EDF5FA', marginVertical: 10, alignSelf: 'center', borderRadius: 30, borderColor: '#90D6FA', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: "THSarabunBold", fontSize: 30, color: "#000000", marginLeft: 10, marginRight: 40 }}>เปิดรถ</Text>
                <View style={{ width: 180, alignItems: 'center' }}>
                  <Text style={{ fontFamily: "THSarabunBold", fontSize: 23, color: "#000000", textAlign: 'center' }}>{item.startTime}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: "THSarabunBold", fontSize: 30, color: "#000000", marginLeft: 10, marginRight: 40 }}>ปิดรถ</Text>
                <View style={{ width: 180, alignItems: 'center' }}>
                  <Text style={{ fontFamily: "THSarabunBold", fontSize: 23, color: "#000000", textAlign: 'center' }}>{item.endTime ? item.endTime : 'ยังไม่ดับรถ'}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

export default RecordingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 152,
    height: 101,
  },
});