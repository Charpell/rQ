import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Button from "./primary/Button";
import Block from "./primary/Block";
import Text from "./primary/Text";
import ImageIcon from "./primary/ImageIcon";

import { COLORS, SIZES } from "../utils/theme";
import { FlatList } from "react-native-gesture-handler";

const TabedView = props => {
  /*
  *
  *
  * - Usage
  * <TabedView views={views} initialView={0} />
  *
  * - Example
  * import {TabedView} from '../components'
  * import TabedView from './TabedView';
  * import Button from './primary/Button';

   * const App = () => {
   * const views = [
   *   {
   *     id: 0,
   *     label: "first view",
   *     activeIcon: '',
   *     inactiveIcon: '',
   *     viewContent: <Block> <Text>Some Content</Text></Block>
   *   },
   *   {
   *     id: 1,
   *     label: "second view",
   *      activeIcon: '',
   *     inactiveIcon: '',
   *     viewContent: <Block> <Text>Some Content</Text></Block>
   *   },
   *   {
   *     id: 2,
   *     label: "third view",
   *      activeIcon: [],
   *     inactiveIcon: [],
   *     viewContent: <Block> <Text>Some Content</Text></Block>
   *   }
   * ]
   *
   *
   * return (
   * <TabedView views={views} initialView={0} scroll={false} />
   * )
   *
   * }
   *
   * - Props
   *   * views: an array of objects representing all the view in the tabbed view
   *   * initailView: a value for the initial View, defaults to 0
   *   * scroll: this sets the viewpager props scrollEnabled to enable swiping to switch views
   *
   */
  const { views, initialView, scroll } = props;
  const initialViewProp = (initialView && initialView) || 0; // use initialView of 0
  const [activeView, setActiveView] = useState(initialViewProp); // state of activetab initialized to initialView

  const renderTab = ({ item }) => (
    <Button
      key={item.id}
      primary={item.id === activeView}
      white={item.id !== activeView}
      flex={0}
      width={100}
      height={64}
      shadow
      radius={7}
      center
      middle
      paddingVertical
      paddingHorizontal
      marginRight={SIZES.base}
      onPress={() => handleViewSelected(item.id)}
    >
      <Block row center middle>
        {renderIcon(item)}
      </Block>
      <Text
        spacing={0.1}
        center
        sfregular
        size={SIZES.small}
        height={12}
        white={item.id === activeView}
        tertiary={item.id !== activeView}
      >
        {item.label}
      </Text>
    </Button>
  );

  let TabedViewRef = null;
  let TabsListRef = null;
  const handleViewSelected = viewId => {
    setActiveView(viewId);
    TabedViewRef.setPage(viewId);
  };
  const handleScroll = position => {
    setActiveView(position);
  };
  const iconType = iconField => {
    return Array.isArray(iconField) ? "array" : "regular";
  };
  const renderIcon = viewItem => {
    let isActive = viewItem.id === activeView;
    if (isActive) {
      if (iconType(viewItem.activeIcon) === "array")
        return viewItem.activeIcon.map((icon, index) => {
          return <ImageIcon key={index} name={icon} />;
        });
      if (iconType(viewItem.activeIcon) === "regular")
        return <ImageIcon name={viewItem.activeIcon} />;
    } else {
      if (iconType(viewItem.inactiveIcon) === "array")
        return viewItem.inactiveIcon.map((icon, index) => {
          return <ImageIcon key={index} name={icon} />;
        });
      if (iconType(viewItem.inactiveIcon) === "regular")
        return <ImageIcon name={viewItem.inactiveIcon} />;
    }
  };
  return (
    <Block>
      <Block
        center
        flex={0}
        middle
        paddingVertical={SIZES.base}
        paddingHorizontal={SIZES.base}
        spacing="around"
      >
        <FlatList
          ref={ref => TabsListRef = ref}
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainerStyle}
          horizontal
          data={views}
          keyExtractor={(item, index) =>
            `tab-item-id-${item.id}-list-item-${index}`
          }
          renderItem={renderTab}
        />
      </Block>
      <ViewPager
        orientation="horizontal"
        style={{ flex: 1 }}
        initialPage={initialViewProp}
        pageMargin={0}
        scrollEnabled={(scroll && scroll) || false}
        showPageIndicator={false}
        ref={ref => {
          TabedViewRef = ref;
        }}
        onPageSelected={e => {
          const position = e.nativeEvent.position;
          handleScroll(position);
        }}
      >
        {views.map(view => (
          <Block key={view.id} flex={1} center middle>
            {view.viewContent()}
          </Block>
        ))}
      </ViewPager>
    </Block>
  );
};

const styles = StyleSheet.create({
  tabsContainerStyle: {
  }
});

export default TabedView;
