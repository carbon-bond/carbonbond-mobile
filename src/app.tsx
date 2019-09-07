import React from 'react';
import { View, Text, Button } from 'react-native';

import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// @ts-ignore
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

const _usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

function HotContent(props: NavigationScreenProps): JSX.Element {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>碳鍵熱門內容！</Text>
			<Button
				title="Go to Article"
				onPress={() => props.navigation.navigate('Article')}
			/>
		</View>
	);
};

function Board(props: NavigationScreenProps): JSX.Element {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>某個看板，應該包含許多文章</Text>
			<Button
				title="Go to Article"
				onPress={() => props.navigation.navigate('Article')}
			/>
		</View>
	);
}



function BoardList(props: NavigationScreenProps): JSX.Element {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>這頁應該包含我的最愛和熱目看板！</Text>
			<Button
				title="Go to Board"
				onPress={() => props.navigation.navigate('Board')}
			/>
		</View>
	);
}

const ForumContent = createStackNavigator({
	HotContent: HotContent,
	Board: Board,
}, {
	headerMode: 'none',
	initialRouteName: 'HotContent'
});

const ForumBody = createMaterialTopTabNavigator({
	ForumContent: ForumContent,
	BoardList: BoardList
}, {
	initialRouteName: 'ForumContent',
});

function Message(): JSX.Element {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>通知！</Text>
		</View>
	);
}

const TabNavigator = createBottomTabNavigator({
	ForumBody: ForumBody,
	Message: Message
}, {
	initialRouteName: 'ForumBody',
});

function Article(): JSX.Element {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>測試文章！</Text>
		</View>
	);
}

const AppNavigator = createStackNavigator({
	TabNavigator: TabNavigator,
	Article: Article
}, {
	headerMode: 'none',
	mode: 'modal',
	initialRouteName: 'TabNavigator'
});

export default createAppContainer(AppNavigator);