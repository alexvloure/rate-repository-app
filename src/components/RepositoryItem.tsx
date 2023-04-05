import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
import { RepositoryItemProps } from '../types/repositoryModel';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}: RepositoryItemProps) => (
  <View
    style={{
      flexDirection: 'row',
      paddingBottom: 2,
    }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold">{fullName}</StyledText>
      <StyledText color="secondary">{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (repo: RepositoryItemProps) => (
  <View key={repo.id} style={styles.container}>
    <RepositoryItemHeader {...repo} />
    <RepositoryStats {...repo} />
  </View>
);

export default RepositoryItem;
