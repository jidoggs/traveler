import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const PlacesAutocomplete = ({handleInput,handleSelect, ready, value, status, data, moreProps}) => {

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput {...moreProps} value={value} onChange={handleInput} disabled={!ready} />
      <ComboboxPopover style={{zIndex: 3,}}>
        <ComboboxList >
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default PlacesAutocomplete;