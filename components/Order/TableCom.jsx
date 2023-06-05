import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Table,
  Col,
  Cols,
  Rows,
  TableWrapper,
  Row,
  Cell,
} from "react-native-table-component";
// theme
import { COLORS, SIZES } from "../../constants/theme";

const TableCom = () => {
  const [tableHead, settableHead] = useState([
    "Date",
    "Order Number",
    "Status",
    "Amount",
  ]);

  const [tableData, settableData] = useState([
    ["04 Aug 2023", "#6745867", "Shipped", "423"],
    ["04 Aug 2023", "#6745867", "Shipped", "674"],
    ["04 Aug 2023", "#6745867", "Shipped", "465"],
    ["04 Aug 2023", "#6745867", "Shipped", "564"],
    ["04 Aug 2023", "#6745867", "Shipped", "465"],
  ]);

  return (
    <ScrollView vertical={true}>
      <View style={TableCss.container}>
        <Table>
          <Row
            data={tableHead}
            style={TableCss.head}
            textStyle={TableCss.text1}
          />
          {tableData.map((rowData, index) => (
            <TableWrapper key={index} style={TableCss.row}>
              {rowData.map((cellData, k) => (
                <Cell
                  key={k}
                  data={cellData}
                  style={TableCss.CellCss}
                  textStyle={
                    k === 2
                      ? { color: COLORS.Shipped, textAlign: "center" }
                      : k === 3
                      ? { color: COLORS.Amt, textAlign: "center" }
                      : k == 1
                      ? { color: COLORS.OrNo, textAlign: "center" }
                      : k === 0
                      ? { color: COLORS.Amt, textAlign: "center" }
                      : ""
                  }
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    </ScrollView>
  );
};

const TableCss = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  head: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  // head: {
  //   borderColor: "black",
  // },
  // head2: {
  //   padding: 20,
  // },
  text1: {
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: 500,
    fontSize: 13,
  },
  // text2: {
  //   textAlign: "center",
  // },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 10,

    // backgroundColor: "#FFF1C1",
  },
});

export default TableCom;