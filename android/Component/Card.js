import React from 'react';
import {View, FlatList} from 'react-native';

import CardData from '../Component/CardData';
import ListItem from '../Component/ListItem';

function Card(){
    const renderItem=({item})=>
    <ListItem dp={item.dp}  name={item.name} text={item.text} time={item.time}/>

    return(
        <View>
            <FlatList
                            data={CardData}
                            renderItem={renderItem}
                            ItemSeparatorComponent={()=><View style={{marginBottom:1}}/>}

            />
            
        </View>
    )
}

export default Card;