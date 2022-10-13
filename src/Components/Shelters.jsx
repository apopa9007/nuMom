import React from 'react';
import {ScrollView} from 'react-native';
import SelectionButton from './SelectionButton';
import shelterLogo from '../../assets/shelter-logo.png';
import appStyles from './AppStyles';

export default function Shelters(props) {
  const getResourceName = (name) =>
    name.length > 40 ? `${name.substring(0, 40)}...` : name;

  const window = appStyles.win;

  const shelterButtons = props.shelters.map((shelter, key) => (
    <SelectionButton
      style={appStyles.ClinicSelectionButton}
      key={key}
      text={getResourceName(shelter.resource)}
      subtext={`${shelter.address.street}\n${shelter.address.city}\n${shelter.address.state}, ${shelter.address.zipCode}`}
      icon={shelterLogo}
      onPress={() => {
        props.setShelterToView(shelter);
        props.setLowerPanelContent('shelterInfo');
      }}
    />
  ));

  return (
    <>
      <ScrollView
        contentContainerStyle={{alignItems: 'center', maxWidth: '100%'}}
      >
        {shelterButtons}
      </ScrollView>
    </>
  );
}
