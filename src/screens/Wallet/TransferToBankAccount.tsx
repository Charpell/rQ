import React, { useState } from "react";
import { ScrollView, Switch } from "react-native";
import {
  Block,
  Text,
  Input,
  Button,
  ForwardButton,
  Beneficiaries,
  Modal
} from "../../components";
import { SIZES, COLORS } from "../../utils/theme";
import FeedBack from "../../components/FeedBack";

const TransferToBankAccount = () => {
  const [amountValue, onAmountChange] = useState("");
  const [accNumberValue, onAccNumberChange] = useState("");
  const [bankNameValue, onBankNameChange] = useState("");
  const [savePayment, setSavePayment] = useState(false);
  const [narrationValue, onNarrationChange] = useState("");
  const [finished, setFinished] = useState(false);

  let modalRef = null;

  const toggle = () => modalRef.toggleModal();
  return (
    <ScrollView>
      <Block width={SIZES.width} paddingVertical={SIZES.base}>
        <Block marginTop={SIZES.padding * 2} center flex={0.4}>
          <Text gray2 sfregular size={SIZES.caption} height={SIZES.body}>
            Amount (N)
          </Text>
          <Input
            autoCorrect={false}
            width={154}
            center
            maxLength={16}
            keyboardType="number-pad"
            size={SIZES.h2}
            value={amountValue}
            placeholder={"0.00"}
            onChangeText={text => {
              onAmountChange(text);
            }}
          />
          <Text gray2 sfregular size={SIZES.caption} height={SIZES.body}>
            *Tansaction fee N15
          </Text>
        </Block>
        <Block flex={0.2} paddingHorizontal={SIZES.base * 2}>
          <Beneficiaries />
        </Block>
        <Block paddingHorizontal={SIZES.base * 2} marginTop={SIZES.padding * 2}>
          <Input
            autoCorrect={false}
            width={154}
            height={SIZES.padding * 2}
            maxLength={16}
            keyboardType="number-pad"
            size={SIZES.caption}
            value={accNumberValue}
            placeholder={"Account Number"}
            onChangeText={text => {
              onAccNumberChange(text);
            }}
          />
          <Input
            width={154}
            maxLength={16}
            size={SIZES.caption}
            value={bankNameValue}
            placeholder={"Bank Name"}
            onChangeText={text => {
              onBankNameChange(text);
            }}
          />
          <Input
            width={154}
            maxLength={16}
            size={SIZES.caption}
            value={narrationValue}
            placeholder={"Narration"}
            onChangeText={text => {
              onNarrationChange(text);
            }}
          />
          <Block
            row
            paddingHorizontal={SIZES.base}
            paddingVertical={SIZES.padding}
            space="between"
          >
            <Text gray2 sfregular size={SIZES.caption}>
              Save this payment
            </Text>
            <Switch
              value={savePayment}
              onValueChange={value => setSavePayment(value)}
              trackColor={{ true: COLORS.secondary, false: COLORS.muted }}
            />
          </Block>
          <Block center>
            <Button
              center
              middle
              width={SIZES.width * 0.7}
              height={SIZES.base * 4.5}
              radius={SIZES.btnRadius}
              onPress={() => setFinished(true)}
            >
              <Text
                white
                center
                sfregular
                height={SIZES.body}
                size={SIZES.caption}
              >
                Confirm
              </Text>
              <ForwardButton />
            </Button>
          </Block>
        </Block>
      </Block>
      <FeedBack
        title="Successful"
        message="Your transaction has been successfully Thanks for using our application"
        btnText="OK"
        icon="add"
        visible={finished}
        closeModal={() => setFinished(false)}
      />
    </ScrollView>
  );
};

export default TransferToBankAccount;
