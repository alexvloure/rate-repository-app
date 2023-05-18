import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';
import { FontWeightType } from '../types';
import { Repository } from '../types/repositoryModel';

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
});

const parseThousands = (value: number) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}: Repository) => {
  const statViewStyles = [styles.flexRow, styles.justifySpaceAround];
  return (
    <View style={statViewStyles}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stargazersCount)}
        </StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(reviewCount)}
        </StyledText>
        <StyledText align="center">Reviews</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {ratingAverage}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
