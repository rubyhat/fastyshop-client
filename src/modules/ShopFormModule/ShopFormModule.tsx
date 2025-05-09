import React from "react";
import { Alert, Box, Button, Skeleton } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ShopFormData, shopFormValidationsSchema } from "./validations";
import { useBecomeSellerStore } from "../BecomeSellerModule/store";
import { usePostShopMutation } from "./hooks/usePostShopMutation";

import { devLogger } from "../../shared/utils";
import { BasicFormSelectField } from "../../shared/components/BasicFormSelectField";
import { shopTypesSelectOptions } from "../../shared/constants";
import {
  ShopData,
  ShopType,
  ShopTypeDescription,
  ShopTypeDisplayText,
} from "../../shared/interfaces/Shop";
import { BasicTextField } from "../../shared/components/BasicTextField";
import {
  useGetAllShopsCategoriesQuery,
  useGetAllUsersLegalProfilesQuery,
  useGetSellerProfileByUserIdQuery,
} from "../../shared/hooks";
import { useIsSeller, useUserProfile } from "../../shared/permissions/hooks";

interface ShopFormModuleProps {
  onClickReturnButton: () => void;
  onSuccessCallback?: (response: ShopData) => void;
}

export const ShopFormModule = ({
  onClickReturnButton,
  onSuccessCallback,
}: ShopFormModuleProps) => {
  const profile = useUserProfile();
  const isSeller = useIsSeller();
  const setShowLegalProfileFormDrawer = useBecomeSellerStore(
    (state) => state.setShowLegalProfileFormDrawer,
  );
  const sellerProfileId = useBecomeSellerStore(
    (state) => state.sellerProfileId,
  );
  const legalProfileId = useBecomeSellerStore((state) => state.legalProfileId);

  const { data: dataSellerProfileByUserId } = useGetSellerProfileByUserIdQuery(
    profile?.id,
    isSeller,
  );

  const {
    data: dataShopsCategories,
    isLoading: isLoadingShopsCategories,
    isSuccess: isSuccessShopsCategories,
  } = useGetAllShopsCategoriesQuery();

  const {
    data: dataLegalProfiles,
    isLoading: isLoadingLegalProfiles,
    isSuccess: isSuccessLegalProfiles,
  } = useGetAllUsersLegalProfilesQuery(profile?.id, isSeller);

  const methods = useForm<ShopFormData>({
    resolver: zodResolver(shopFormValidationsSchema),
    defaultValues: {
      title: "",
      contact_phone: "",
      contact_email: "",
      physical_address: "",
      shop_type: ShopType.online,
      shop_category_id: "",
      legal_profile_id: "",
      seller_profile_id: "",
    },
  });

  const { handleSubmit, reset, watch, setValue } = methods;
  const shop_type = watch("shop_type") as ShopType;

  React.useEffect(() => {
    if (sellerProfileId) {
      setValue("seller_profile_id", sellerProfileId);
    } else if (dataSellerProfileByUserId) {
      setValue("seller_profile_id", dataSellerProfileByUserId.id);
    }

    if (legalProfileId) {
      setValue("legal_profile_id", legalProfileId);
    }
  }, [dataSellerProfileByUserId, legalProfileId, sellerProfileId, setValue]);

  const shopMutation = usePostShopMutation({
    onSuccessCallback,
  });

  const onSubmit = (data: ShopFormData) => {
    shopMutation.mutate(data);
  };

  const handleResetForm = () => {
    reset();
    onClickReturnButton();
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, (errors) =>
          devLogger.error("Ошибки валидации:", errors),
        )}
        sx={{ pt: 2, display: "flex", flexDirection: "column", height: 1 }}
      >
        <Box flexGrow={1}>
          <Box sx={{ pb: 2 }}>
            <BasicFormSelectField
              name="shop_type"
              label="Тип магазина:"
              placeholder="Онлайн/гибрид/оффлайн"
              data={shopTypesSelectOptions()}
              disabled={false}
            />
            {shop_type && (
              <Box pt={2}>
                <Alert severity="info">
                  <strong>{ShopTypeDisplayText[shop_type]}</strong>
                  <br />
                  {ShopTypeDescription[shop_type]}
                </Alert>
              </Box>
            )}
          </Box>
          <Box pb={2}>
            <BasicTextField<ShopFormData>
              name="title"
              label="Название магазина"
              placeholder="Введите название магазина"
              // disabled={legalProfileMutation.isPending}
            />
          </Box>
          <Box sx={{ pb: 2 }}>
            {isLoadingShopsCategories && (
              <Skeleton variant="rounded" width="100%" height={41} />
            )}
            {dataShopsCategories && isSuccessShopsCategories && (
              <React.Fragment>
                <BasicFormSelectField
                  name="shop_category_id"
                  placeholder="Категория магазина"
                  data={dataShopsCategories.map(({ id, title }) => {
                    return { value: id, label: title };
                  })}
                  disabled={false}
                />
                <Alert severity="info" sx={{ mt: 2 }}>
                  <strong>Категория магазина</strong>
                  <br />
                  Это общая характеристика магазина, которая используется в
                  рекламных компаниях нашего сервиса. Вы сможете изменить ее в
                  любое время
                </Alert>
              </React.Fragment>
            )}
          </Box>
          <Box sx={{ pb: 2 }}>
            {isLoadingLegalProfiles && (
              <Skeleton variant="rounded" width="100%" height={41} />
            )}
            {dataLegalProfiles && isSuccessLegalProfiles && (
              <BasicFormSelectField
                name="legal_profile_id"
                placeholder="Юридический профиль"
                data={dataLegalProfiles.map(({ id, company_name }) => {
                  return { value: id, label: company_name };
                })}
                buttonOptions={{
                  buttonLabel: "+ Создать новый",
                  onButtonClick: () => setShowLegalProfileFormDrawer(true),
                }}
                disabled={false}
              />
            )}
          </Box>
          <Box pb={2}>
            <BasicTextField<ShopFormData>
              name="contact_phone"
              label="Контактный телефон магазина"
              placeholder="+77012345678"
              // disabled={legalProfileMutation.isPending}
            />
          </Box>
          <Box pb={2}>
            <BasicTextField<ShopFormData>
              name="contact_email"
              label="Контактный e-mail магазина"
              placeholder="mail@fastyshop.kz"
              // disabled={legalProfileMutation.isPending}
            />
          </Box>
          {shop_type !== ShopType.online && (
            <Box pb={2}>
              <BasicTextField<ShopFormData>
                name="physical_address"
                label="Физический адрес магазина"
                placeholder="mail@fastyshop.kz"
                // disabled={legalProfileMutation.isPending}
              />
            </Box>
          )}
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetForm}
            // disabled={legalProfileMutation.isPending}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // disabled={legalProfileMutation.isPending}
          >
            Продолжить
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
