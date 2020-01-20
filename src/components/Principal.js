import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Contatos from './Contatos';
import Conversas from './Conversas';

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Conversas' },
    { key: 'second', title: 'Contatos' },
  ]);

  _renderHeader = props => <TabBarMenu { ...props } />;

  const renderScene = SceneMap({
    first: Conversas,
    second: Contatos,
  }); 

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={_renderHeader}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});