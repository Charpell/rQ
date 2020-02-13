import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Button from "./primary/Button";
import Block from "./primary/Block";
import Text from "./primary/Text";
import ImageIcon from "./primary/ImageIcon";

import { COLORS, SIZES } from "../utils/theme";

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
  let TabedViewRef = null;
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
        return viewItem.activeIcon.map(icon => { return <ImageIcon name={icon} /> });
      if (iconType(viewItem.activeIcon) === "regular")
        return <ImageIcon name={viewItem.activeIcon} />;
    } else {
      if (iconType(viewItem.inactiveIcon) === "array")
        return viewItem.inactiveIcon.map(icon => {
          return <ImageIcon name={icon} />;
        });
      if (iconType(viewItem.inactiveIcon) === "regular")
        return <ImageIcon name={viewItem.inactiveIcon} />;
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Block row center flex={0} middle paddingVertical={SIZES.padding} space="around">
        {views.map(view => (
          <Button
            key={view.id}
            primary={view.id === activeView}
            white={view.id !== activeView}
            flex={views.length * 0.1}
            height={SIZES.base * 8}
            shadow
            radius={7}
            center
            middle
            paddingVertical
            paddingHorizontal
            onPress={() => handleViewSelected(view.id)}
          >
            <Block row center middle>
              {renderIcon(view)}
            </Block>
            <Text
              small
              spacing={1}
              center
              sfregular
              white={view.id === activeView}
              gray={view.id !== activeView}
            >
              {view.label}
            </Text>
          </Button>
        ))}
      </Block>
      <ViewPager
        orientation="horizontal"
        style={styles.viewpager}
        initialPage={initialViewProp}
        pageMargin={0}
        scrollEnabled={(scroll && scroll) || true}
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
    </View>
  );
};

const styles = StyleSheet.create({
  viewpager: {
    flex: 1
  }
});

export default TabedView;
