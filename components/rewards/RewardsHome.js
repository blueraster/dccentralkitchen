import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Body } from '../BaseComponents';
/**
 * @prop
 * */

function RewardsHome({ transactions, user }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text> {`Welcome, ${user.name}`}</Text>
        <Body>{user.points} total points </Body>
        <Text style={styles.getStartedText}>
          {' '}
          {`${1000 -
            (parseInt(user.points) % 1000)} points to your next reward`}
        </Text>
      </View>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Your transaction history:</Text>
        {transactions.splice(0, 3).map(transaction => {
          return (
            <View key={transaction.id}>
              <Body style={styles.codeHighlightText}>
                Date: {transaction.Date}
              </Body>
              <Body style={styles.codeHighlightText}>
                Points Redeemed: {transaction['Points Rewarded']}
              </Body>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 150,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  navigationFilename: {
    marginTop: 5
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingVertical: 20
  }
});

export default React.memo(RewardsHome);