import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// style
import PPCss from "../Inventory/Css/ProductPageCss";

// img
import img from "./../../../assets/Cart/pod.png";

const ProductPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={PPCss.headerDiv}>
        <Text style={PPCss.headerText}>Product Details</Text>
      </View>
      <View style={PPCss.AddImgView}>
        <Image source={img} style={PPCss.pimg}></Image>
      </View>

      <View style={PPCss.RowView}>
        <View style={PPCss.RowViewChild}>
          <View>
            <Text style={PPCss.val1}>Product No.</Text>
            <Text style={PPCss.val2}>#6745867</Text>
          </View>
          <View>
            <Text style={PPCss.val1}>Product Name</Text>
            <Text style={PPCss.val2}>Product Name1</Text>
          </View>
        </View>
        <View style={PPCss.RowViewChild}>
          <View>
            <Text style={PPCss.val1}>Product No.</Text>
            <Text style={PPCss.val2}>#6745867</Text>
          </View>
          <View>
            <Text style={PPCss.val1}>Product Name</Text>
            <Text style={PPCss.val2}>Product Name1</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit");
        }}
      >
        <View style={PPCss.EditVIew}>
          <Text style={PPCss.Edit}>Edit</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductPage;
