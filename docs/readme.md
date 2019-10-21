## search functionality

in the code snippet below, it can be understood that there is
tow reducer for handling the filtering on the costItems.

- `costItems` is used whenever we want to use the filtered costItems
- `originalCosts` the the unmanipulated costItems

```js
const reducer = combineReducers({
  costItems: costItemsReducer,
  sourceCostItems: sourceCostItemsReducer
});
```

# UI library

in this project for styling I have used https://reactstrap.github.io/

- modal from https://reactstrap.github.io/components/modals/
- responsive table from https://reactstrap.github.io/components/tables/
- primary button from https://reactstrap.github.io/components/buttons/

## adding new cost category

for adding new cost categoty add a new entry to object in the following file

```js
/meniga-assessment-project/src/config/costCategories.js
```

```js
export const costCategories = {
  FOOD: 0,
  CLOTHING: 1,
  RENT: 2,
  BILLS: 3
};
```
