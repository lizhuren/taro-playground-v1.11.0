/*
 * @Author: iChengbo
 * @Date: 2021-07-19 16:42:58
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-05 15:14:25
 * @FilePath: /taro-react-native/src/pages/components/pages/switch/switch.js
 */
import React from "react";
import { View, Text, Switch } from "@tarojs/components";
import Header from "@/components/head/head";
import "./switch.scss";

export default class PageSwitch extends React.Component {
  state = {
    isChecked: true
  };

  setIsChecked = e => {
    const { detail } = e;
    this.setState({
      isChecked: detail.value
    });
  };

  render() {
    return (
      <View className="container">
        <Header title="Switch"></Header>
        <View className="page-body">
          <View className="page-section">
            <Text className="page-section-title">静态展示</Text>
            <View className="switch-list">
              <View className="switch-list__item">
                <View className="switch-list__text">关闭</View>
                <Switch></Switch>
              </View>
              <View className="switch-list__item">
                <View className="switch-list__text">开启中</View>
                <Switch checked></Switch>
              </View>
              <View className="switch-list__item">
                <View className="switch-list__text">disabled</View>
                <Switch checked disabled></Switch>
              </View>
              <View className="switch-list__item">
                <View className="switch-list__text">更换颜色</View>
                <Switch checked color="#6190E8"></Switch>
              </View>
              <View className="switch-list__item">
                <View className="switch-list__text">CheckBox形式</View>
                <Switch type="checkbox"></Switch>
              </View>
            </View>
          </View>
          <View className="page-section">
            <Text className="page-section-title">数据绑定</Text>
            <View className="switch-list">
              <View className="switch-list__item">
                <View className="switch-list__text">
                  {this.state.isChecked ? "开启" : "关闭"}
                </View>
                <Switch
                  onChange={this.setIsChecked}
                  checked={this.state.isChecked}
                ></Switch>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
