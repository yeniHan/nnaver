import React from 'react';
import styled from 'styled-components';
import CheckboxForm from './CheckboxForm';
import PreferedCategories from './PreferedCategories';
import BottomLine from './BottomLine';
import { PreferedCategoryFormProvider } from "../Context/PreferedCategoryFormContext";

const Wrapper = styled.div`
    width: 100%;
`;

// eslint-disable-next-line no-unused-vars
const PreferedCategoryCheckboxForm = ({ setShowPreferedCategoryCheckboxForm }: { setShowPreferedCategoryCheckboxForm: (show: boolean) => void }) => {
  return (
    <Wrapper>
      <PreferedCategoryFormProvider>
        <PreferedCategories />
        <CheckboxForm />
        <BottomLine setShowPreferedCategoryCheckboxForm={setShowPreferedCategoryCheckboxForm} />
      </PreferedCategoryFormProvider>
    </Wrapper>

  );
};

export default PreferedCategoryCheckboxForm;
