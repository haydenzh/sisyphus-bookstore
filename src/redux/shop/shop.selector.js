import { createSelector } from 'reselect';

const selectShop = state => { 
  return state.shop;
}

export const selectShopCategories = createSelector(
  [selectShop],
  shop => shop.categories
);

export const selectShopCategoriesForPreview = createSelector(
  [selectShopCategories],
  categories => Object.values(categories)
)

export const selectTopRatedItems = createSelector(
  [selectShopCategoriesForPreview],
  categories =>  categories.reduce((accumulated,category) => [...accumulated,...category.items] ,[])
    .sort((a,b) => b.rating - a.rating)
    .slice(0,5)
)

export const selectCategoryById = (categoryId) => {
  return createSelector(
    [selectShopCategories],
    categories => categories[categoryId]
  )
}

export const selectIsDataLoading = createSelector(
  [selectShop],
  shop => shop.isLoading
);