import React from 'react';
import { View, Text } from 'react-native';
import { placeHolderString } from '../../utils/constant';
import styles from './styles';

const LoadMorePagination = () => {
    return (
        <View>
            <Text style={styles.txtLoadMore}>{placeHolderString.LOAD_MORE}</Text>
        </View>
    );
}

export default LoadMorePagination;
