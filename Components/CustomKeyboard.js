import {View, Text, Pressable, ScrollView, StyleSheet, SafeAreaView} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useState} from "react";


export default function CustomKeyboard() {

    const [cost, setCost] = useState([])
    const [costDisplay, setCostDisplay] = useState(null)

    const onPressFunction = (value) => {
        console.log(cost)
        if(value !== "back"){
            console.log("pressed", value)
            if (cost.length<=3){
                const costList = cost
                costList.push(value)
                setCost(costList)
                setCostDisplay(costList.join(''))
            }
        }else{
            const costList = cost
            costList.pop()
            setCost(costList)
            setCostDisplay(costList.join(''))
        }

    }

    const onPressSuggestion = (value) =>{
        console.log(value)
        const costList = []
        costList.push(value)
        setCost(costList)
        setCostDisplay(costList.join(''))
    }

    const numbers = [
        {
            id: 1,
            value: 1
        },
        {
            id: 2,
            value: 2
        },
        {
            id: 3,
            value: 3
        },
        {
            id: 4,
            value: 4
        },
        {
            id: 5,
            value: 5
        },
        {
            id: 6,
            value: 6
        },
        {
            id: 7,
            value: 7
        },
        {
            id: 8,
            value: 8
        },
        {
            id: 9,
            value: 9
        },
        {
            id: 10,
            value: ","
        },
        {
            id: 11,
            value: "0"
        },
        {
            id: 12,
            value: "back"
        },
    ];


    const numberSuggestion = [
        {
            id: 1,
            value: 2,
            best: false
        },
        {
            id: 2,
            value: 4,
            best: true
        },
        {
            id: 3,
            value: 6,
            best: false
        },
        {
            id: 4,
            value: 10,
            best: false
        },
    ]


    const Card = ({id, value}) => {
        console.log(value)
        return (

            <Pressable style={styles.card} onPress={() => onPressFunction(value)}>
                {value !== "back" ?
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>{value}</Text>

                    :
                    <MaterialCommunityIcons name="backspace-outline" size={24} color="black"/>

                }
            </Pressable>
        );
    };
    return (

        <SafeAreaView>
            <View style={{flexDirection: "column", height: "100%"}}>
                <View style={{height: "40%", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    {cost.length === 0 ?
                        <>
                            <Text style={{fontSize: 70}}>-</Text>
                            <Text style={{fontSize: 70}}>-</Text>
                        </>

                    :
                        <Text style={{fontSize: 70}}>{costDisplay}€</Text>
                    }

                </View>
                <View style={{height: "20%"}}>
                    <View style={{height: "100%"}}>
                        <View style={{height: '50%', justifyContent: "center", alignItems: "center"}}>
                            <Pressable style={{
                                backgroundColor: "black",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 15,
                                width: "85%",
                                height: 50
                            }}>
                                <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>Validate</Text>
                            </Pressable>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            height: "50%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            {numberSuggestion.map((suggestion) => {
                                return (
                                    <View style={{
                                        width: "25%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "60%"
                                    }}>
                                        <Pressable
                                            onPress={()=>onPressSuggestion(suggestion.value)}

                                            style={{
                                            borderStyle: "solid",
                                            borderColor: "black",
                                            backgroundColor: suggestion.best ? "yellow" : "white",
                                            width: "60%",
                                            borderRadius: 15,
                                            height: "100%",
                                            borderWidth: 2,
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <Text style={{fontWeight: "bold", fontSize: 15}}>{suggestion.value}€</Text>
                                        </Pressable>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                </View>
                <View style={{height: "40%", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <ScrollView
                        scrollEnabled={false}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            // height:"100%",
                        }}
                    >
                        {numbers.map((item, index) => {
                            return (
                                <View style={{width: '33.33%', flexDirection: "row"}}>
                                    <Card key={index} id={item.id} value={item.value}/>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>

            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: '#dedede',
        borderRadius: 10,
        height: 50,
        flex: 1,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
});
