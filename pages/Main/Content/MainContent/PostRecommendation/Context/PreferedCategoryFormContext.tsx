import { useState, useCallback, useEffect } from "react";
import constate from "constate";
import postPreferedCategories from "front-apis/apis/main/postPreferedCategories";
import getRecommendedPosts from "front-apis/apis/main/getRecommendedPosts";
import { usePreferedCategories, useTotalCategories } from "./PostContext";
import useSWR from "swr";
import APIS from "../../../../../@constants/APIS";

const usePreferedCategoryFormData = () => {
  const { data } = useSWR(APIS.RECOMMENDED_POSTS, getRecommendedPosts);
  const total = useTotalCategories()?.map((v) => v?.name);
  const initValues = usePreferedCategories()?.map((v) => v?.name);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onChangeCategoryCheckbox = useCallback((categoryName: string, isSelected: boolean) => {
    let newData;
    if (isSelected) newData = [...selectedCategories, categoryName];
    else newData = selectedCategories?.filter((v) => v !== categoryName);

    setSelectedCategories(newData);
  }, [selectedCategories]);

  const selectAll = useCallback(() => {
    setSelectedCategories(total);
  }, [total]);

  const reset = useCallback(() => {
    setSelectedCategories([]);
  }, []);

  const initForm = useCallback(() => {
    setSelectedCategories(initValues);
  }, [initValues]);

  useEffect(() => {
    initForm();
  }, [data]);

  const submitPreferedCategoryForm = useCallback(async () => {
    await postPreferedCategories({ preferedCategories: selectedCategories });
  },[selectedCategories]);

  return {
    selectedCategories,
    onChangeCategoryCheckbox,
    selectAll,
    reset,
    initForm,
    submitPreferedCategoryForm,
  };
};

export const [PreferedCategoryFormProvider, useSelectedCategories, useOnChangeCategoryCheckbox, useSelectAll, useReset, useInitForm, useSubmitPreferedCategoryForm
] = constate(
  usePreferedCategoryFormData,
  value => value?.selectedCategories,
  value => value?.onChangeCategoryCheckbox,
  value => value?.selectAll,
  value => value?.reset,
  value => value?.initForm,
  value => value?.submitPreferedCategoryForm,
);
